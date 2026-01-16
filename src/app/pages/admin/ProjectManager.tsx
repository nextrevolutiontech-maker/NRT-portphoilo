import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, Upload, Loader2, Save, X } from "lucide-react";
import { API_BASE_URL } from "../../../config";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";

interface Project {
    id: number;
    title: string;
    industry: string;
    image_url: string;
    challenge: string;
    results: string[];
}

export function ProjectManager() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        industry: "",
        challenge: "",
        solution: "",
        results: "", // comma separated
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/projects`);
            const data = await res.json();
            setProjects(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch projects", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        setItemToDelete(id);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = async () => {
        if (!itemToDelete) return;
        
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_BASE_URL}/api/projects/${itemToDelete}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                setProjects(projects.filter((p) => p.id !== itemToDelete));
                toast.success("Project deleted successfully");
            } else {
                toast.error("Failed to delete project");
            }
        } catch (error) {
            toast.error("Error deleting project");
        } finally {
            setDeleteDialogOpen(false);
            setItemToDelete(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const token = localStorage.getItem("token");
        const data = new FormData();
        data.append("title", formData.title);
        data.append("industry", formData.industry);
        data.append("challenge", formData.challenge);
        data.append("solution", formData.solution);
        // Convert comma separated string to array, then JSON stringify for backend parsing logic
        const resultsArray = formData.results.split(',').map(s => s.trim()).filter(s => s);
        data.append("results", JSON.stringify(resultsArray));

        if (imageFile) {
            data.append("image", imageFile);
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/projects`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` }, // Content-Type is auto-set for FormData
                body: data,
            });

            if (res.ok) {
                await fetchProjects();
                setIsAdding(false);
                setFormData({ title: "", industry: "", challenge: "", solution: "", results: "" });
                setImageFile(null);
            } else {
                const err = await res.json();
                toast.error("Error", {
                    description: err.message || "Failed to create project"
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create project");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Case Studies</h2>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    {isAdding ? "Cancel" : "Add New Project"}
                </button>
            </div>

            {isAdding && (
                <div
                    className="overflow-hidden"
                >
                    <form onSubmit={handleSubmit} className="bg-zinc-900 border border-white/10 p-6 rounded-xl space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Project Title"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Industry (e.g. FinTech)"
                                required
                                value={formData.industry}
                                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <textarea
                                placeholder="Challenge"
                                value={formData.challenge}
                                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-24"
                            />
                            <textarea
                                placeholder="Solution"
                                value={formData.solution}
                                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-24"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Key Results (comma separated, e.g. '50% faster, 2M+ users')"
                            value={formData.results}
                            onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                        />

                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                                className="hidden"
                                accept="image/*"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg border border-white/10 transition-colors"
                            >
                                <Upload className="w-4 h-4" />
                                {imageFile ? "Image Selected" : "Upload Cover Image"}
                            </button>
                            {imageFile && <span className="text-sm text-zinc-400">{imageFile.name}</span>}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                            >
                                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save Project
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List Projects */}
            <div className="grid gap-4">
                {loading ? (
                    <div className="text-zinc-500 text-center py-8">Loading projects...</div>
                ) : projects.length === 0 ? (
                    <div className="text-zinc-500 text-center py-8">No projects found. Add your first one!</div>
                ) : (
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                {project.image_url && (
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="w-16 h-12 object-cover rounded-md bg-zinc-800"
                                    />
                                )}
                                <div>
                                    <h3 className="text-white font-medium">{project.title}</h3>
                                    <p className="text-sm text-zinc-500">{project.industry}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="text-zinc-500 hover:text-red-400 p-2 transition-colors"
                                title="Delete Project"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                )}
            </div>
            
            <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the project.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
