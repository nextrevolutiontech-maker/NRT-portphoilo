import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.resolve(__dirname, '../content');
const OUTPUT_DIR = path.resolve(__dirname, '../.cache');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const knowledgeDebt = {
  outdatedArticles: 0,
  lowTrustAssets: 0,
  brokenReferences: 0,
  details: []
};

const slugs = new Set();

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.mdx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const allMdxFiles = getAllFiles(CONTENT_DIR, []);
const nodes = [];
const edges = [];
const searchIndex = [];

// 1. First pass: Create Nodes
allMdxFiles.forEach(filePath => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  
  // HARD BLOCKERS (Build Fails)
  if (!data.id) {
    console.error(`❌ HARD BLOCKER: Missing 'id' in ${filePath}`);
    process.exit(1);
  }
  if (!data.slug) {
    console.error(`❌ HARD BLOCKER: Missing 'slug' in ${filePath}`);
    process.exit(1);
  }
  if (slugs.has(data.slug)) {
    console.error(`❌ HARD BLOCKER: Duplicate slug '${data.slug}' found in ${filePath}`);
    process.exit(1);
  }
  slugs.add(data.slug);

  if (data.status !== 'Published') return;

  const type = filePath.includes('/industries/') ? 'industry' : 
               filePath.includes('/articles/') ? 'article' : 
               filePath.includes('/business-problems/') ? 'problem' : 
               filePath.includes('/case-studies/') ? 'casestudy' :
               filePath.includes('/reports/') ? 'report' :
               filePath.includes('/frameworks/') ? 'framework' :
               filePath.includes('/templates/') ? 'template' : 'unknown';

  let trustScore = 0;
  if (data.evidence && data.evidence.length > 0) trustScore += 30; // 30 points for citing sources
  
  const node = {
    id: data.id,
    type,
    slug: data.slug,
    title: data.title,
    description: data.description,
    cluster: data.cluster,
    intent: data.intent,
    industry: data.industry || [],
    related: data.related || [],
    evidence: data.evidence || [],
    trustScore: trustScore
  };

  nodes.push(node);
  
  // Search Index entry
  searchIndex.push({
    id: data.id,
    title: data.title,
    slug: data.slug,
    description: data.description,
    type,
    intent: data.intent
  });
});

// 2. Second pass: Create Edges (Relationships)
// Edge types: RELATES_TO, REQUIRES, SOLVES, BELONGS_TO, USES, DEPENDS_ON, IMPLEMENTS, COMPARES_WITH
nodes.forEach(nodeA => {
  
  // Explicit relations from frontmatter (RELATES_TO)
  nodeA.related.forEach(relatedId => {
    const nodeB = nodes.find(n => n.id === relatedId);
    if (nodeB) {
      edges.push({ source: nodeA.id, target: nodeB.id, type: 'RELATES_TO', weight: 100 });
    } else {
      // SOFT WARNING: Broken Reference
      knowledgeDebt.brokenReferences++;
      knowledgeDebt.details.push({
        id: nodeA.id,
        issue: 'Broken Reference',
        message: `Node ${nodeA.id} references missing node ${relatedId}`
      });
    }
  });

  // Implicit semantic relations
  nodes.forEach(nodeB => {
    if (nodeA.id === nodeB.id) return;
    
    // Check if edge already exists
    if (edges.some(e => (e.source === nodeA.id && e.target === nodeB.id) || (e.source === nodeB.id && e.target === nodeA.id))) return;

    let weight = 0;
    
    // Industry match
    const commonIndustries = nodeA.industry.filter(i => nodeB.industry.includes(i));
    if (commonIndustries.length > 0) weight += (commonIndustries.length * 20);

    // Cluster match
    if (nodeA.cluster && nodeB.cluster && nodeA.cluster === nodeB.cluster) {
      weight += 30;
      edges.push({ source: nodeA.id, target: nodeB.id, type: 'BELONGS_TO', weight });
    } else if (weight > 30) {
       edges.push({ source: nodeA.id, target: nodeB.id, type: 'RELATES_TO', weight });
    }

    // Trust Engine Scoring (Dynamic)
    // If an article links to a case study or framework, boost its trust score
    if (edges.some(e => e.source === nodeA.id && e.target === nodeB.id)) {
      if (nodeB.type === 'casestudy') nodeA.trustScore = Math.min(100, (nodeA.trustScore || 0) + 20);
      if (nodeB.type === 'framework') nodeA.trustScore = Math.min(100, (nodeA.trustScore || 0) + 15);
      if (nodeB.type === 'report') nodeA.trustScore = Math.min(100, (nodeA.trustScore || 0) + 15);
      if (nodeB.type === 'template') nodeA.trustScore = Math.min(100, (nodeA.trustScore || 0) + 10);
    }
  });
});

// 3. Recommendation Engine Pre-calculation
const recommendations = {};
nodes.forEach(node => {
  // Find all edges connected to this node
  const connectedEdges = edges.filter(e => e.source === node.id || e.target === node.id);
  
  const scoredNodes = connectedEdges.map(edge => {
    const targetId = edge.source === node.id ? edge.target : edge.source;
    return { id: targetId, weight: edge.weight, type: edge.type };
  }).sort((a, b) => b.weight - a.weight);

  // Group by type for the Smart Explore Component
  const recs = {
    continueLearning: [],
    businessResources: [],
    implementationGuides: [],
    caseStudies: []
  };

  scoredNodes.forEach(scored => {
    const targetNode = nodes.find(n => n.id === scored.id);
    if (!targetNode) return;
    
    const item = {
      id: targetNode.id,
      title: targetNode.title,
      slug: targetNode.slug,
      type: targetNode.type,
      intent: targetNode.intent
    };

    if (targetNode.type === 'article') {
      recs.continueLearning.push(item);
    } else if (targetNode.type === 'problem') {
      recs.businessResources.push(item);
    } else if (targetNode.type === 'industry') {
      recs.caseStudies.push(item); // Mock mapping for industry to case studies for now
    }
  });

  recommendations[node.id] = recs;
});

// Final Knowledge Debt Calculation
nodes.forEach(node => {
  if (node.trustScore < 85) {
    knowledgeDebt.lowTrustAssets++;
    knowledgeDebt.details.push({
      id: node.id,
      issue: 'Low Trust Score',
      message: `Score: ${node.trustScore}/100. Add evidence or case studies.`
    });
  }
  // Simplified Freshness check: if nextReviewDate exists and is in the past
  if (node.nextReviewDate) {
    const nextReview = new Date(node.nextReviewDate);
    if (nextReview < new Date()) {
      knowledgeDebt.outdatedArticles++;
      knowledgeDebt.details.push({
        id: node.id,
        issue: 'Outdated Article',
        message: `Passed review date: ${node.nextReviewDate}`
      });
    }
  }
});

// Write Files
fs.writeFileSync(path.join(OUTPUT_DIR, 'knowledge-graph.json'), JSON.stringify({ nodes, edges }, null, 2));
fs.writeFileSync(path.join(OUTPUT_DIR, 'search-index.json'), JSON.stringify(searchIndex, null, 2));
fs.writeFileSync(path.join(OUTPUT_DIR, 'recommendation-index.json'), JSON.stringify(recommendations, null, 2));
fs.writeFileSync(path.join(OUTPUT_DIR, 'knowledge-debt.json'), JSON.stringify(knowledgeDebt, null, 2));

console.log(`✅ Knowledge Graph Built: ${nodes.length} Nodes, ${edges.length} Edges.`);
console.log(`⚠️ Knowledge Debt: ${knowledgeDebt.details.length} issues found.`);
