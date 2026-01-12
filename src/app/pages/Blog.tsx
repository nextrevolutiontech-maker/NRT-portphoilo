
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Blog() {
    const posts = [
        {
            id: 1,
            title: "Why Custom Software is the Future for Growing Enterprises",
            excerpt: "Off-the-shelf solutions often limit growth. Discover how custom software tailored to your specific workflows can drive efficiency and competitive advantage in 2026.",
            date: "May 15, 2026",
            author: "Adnan Khan",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1080",
            content: "Complete content would go here for SEO relevance..."
        },
        {
            id: 2,
            title: "The Impact of AI on Business Operations",
            excerpt: "Artificial Intelligence is no longer just a buzzword. Learn how integrating AI into your daily operations can automate up to 40% of routine tasks.",
            date: "May 10, 2026",
            author: "Sarah Ahmed",
            category: "Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1080",
            content: "Complete content would go here..."
        },
        {
            id: 3,
            title: "Scaling SaaS: Lessons from 50+ Deployments",
            excerpt: "Building a SaaS product is easy; scaling it is hard. We share key insights from deploying scalable architectures for global startups.",
            date: "May 02, 2026",
            author: "Tech Team",
            category: "SaaS Development",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
            content: "Complete content..."
        }
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>Tech Insights & Blog - Next Revolution Tech</title>
                <meta name="description" content="Read expert articles on Custom Software, AI, SaaS scaling, and Digital Transformation. Stay updated with Next Revolution Tech." />
            </Helmet>

            {/* Hero */}
            <section className="bg-background text-foreground py-20 border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="hero-text mb-6 text-4xl md:text-5xl font-bold text-primary">Tech Insights</h1>
                        <p className="hero-text text-xl text-muted-foreground leading-relaxed">
                            Expert perspectives on <strong>technology, innovation</strong>, and <strong>business growth</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Article Grid */}
            <section className="bg-background py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.id} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 flex flex-col h-full">
                                <div className="h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1 bg-secondary px-2 py-1 rounded text-primary">
                                            <Tag className="h-3 w-3" />
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm text-foreground">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <User className="h-4 w-4" />
                                            </div>
                                            <span className="font-medium">{post.author}</span>
                                        </div>
                                        <Link to="#" className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1">
                                            Read More <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA in Blog */}
            <section className="bg-secondary/10 py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Never Miss an Update</h2>
                    <p className="text-muted-foreground mb-8">Join 2,000+ tech leaders getting our latest insights weekly.</p>
                    <div className="flex max-w-md mx-auto gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                        />
                        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
