import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, Upload, Loader2, Save, X } from "lucide-react";
import { API_BASE_URL } from "../../../config";

interface Testimonial {
    id: number;
    author: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
    image_url: string;
}

export function TestimonialManager() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        author: "",
        role: "",
        company: "",
        quote: "",
        rating: 5,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/testimonials`);
            const data = await res.json();
            setTestimonials(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch testimonials", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this testimonial?")) return;

        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_BASE_URL}/api/testimonials/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                setTestimonials(testimonials.filter((t) => t.id !== id));
            } else {
                alert("Failed to delete testimonial");
            }
        } catch (error) {
            alert("Error deleting testimonial");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const token = localStorage.getItem("token");
        const data = new FormData();
        data.append("author", formData.author);
        data.append("role", formData.role);
        data.append("company", formData.company);
        data.append("quote", formData.quote);
        data.append("rating", formData.rating.toString());

        if (imageFile) {
            data.append("image", imageFile);
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/testimonials`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: data,
            });

            if (res.ok) {
                await fetchTestimonials();
                setIsAdding(false);
                setFormData({ author: "", role: "", company: "", quote: "", rating: 5 });
                setImageFile(null);
            } else {
                const err = await res.json();
                alert(`Error: ${err.message}`);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to create testimonial");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Testimonials</h2>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    {isAdding ? "Cancel" : "Add New Testimonial"}
                </button>
            </div>

            {isAdding && (
                <div className="overflow-hidden">
                    <form onSubmit={handleSubmit} className="bg-zinc-900 border border-white/10 p-6 rounded-xl space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Author Name"
                                required
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Role (e.g. CTO)"
                                required
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Company"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                            <input
                                type="number"
                                placeholder="Rating (1-5)"
                                min="1"
                                max="5"
                                required
                                value={formData.rating}
                                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                        </div>

                        <textarea
                            placeholder="Quote"
                            required
                            value={formData.quote}
                            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-24"
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
                                {imageFile ? "Image Selected" : "Upload Author Image"}
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
                                Save Testimonial
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List Testimonials */}
            <div className="grid gap-4">
                {loading ? (
                    <div className="text-zinc-500 text-center py-8">Loading testimonials...</div>
                ) : testimonials.length === 0 ? (
                    <div className="text-zinc-500 text-center py-8">No testimonials found. Add your first one!</div>
                ) : (
                    testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                {testimonial.image_url && (
                                    <img
                                        src={testimonial.image_url}
                                        alt={testimonial.author}
                                        className="w-12 h-12 object-cover rounded-full bg-zinc-800"
                                    />
                                )}
                                <div>
                                    <h3 className="text-white font-medium">{testimonial.author}</h3>
                                    <p className="text-sm text-zinc-500">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(testimonial.id)}
                                className="text-zinc-500 hover:text-red-400 p-2 transition-colors"
                                title="Delete Testimonial"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
