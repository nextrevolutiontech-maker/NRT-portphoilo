import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, Upload, Loader2, Save, X } from "lucide-react";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    image_url: string;
    features: string[];
}

export function ServiceManager() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        icon: "",
        features: "", // comma separated
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/services");
            const data = await res.json();
            setServices(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch services", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this service?")) return;

        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/api/services/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                setServices(services.filter((s) => s.id !== id));
            } else {
                alert("Failed to delete service");
            }
        } catch (error) {
            alert("Error deleting service");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const token = localStorage.getItem("token");
        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("icon", formData.icon);
        // Convert comma separated string to array, then JSON stringify
        const featuresArray = formData.features.split(',').map(s => s.trim()).filter(s => s);
        data.append("features", JSON.stringify(featuresArray));

        if (imageFile) {
            data.append("image", imageFile);
        }

        try {
            const res = await fetch("http://localhost:5000/api/services", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: data,
            });

            if (res.ok) {
                await fetchServices();
                setIsAdding(false);
                setFormData({ title: "", description: "", icon: "", features: "" });
                setImageFile(null);
            } else {
                const err = await res.json();
                alert(`Error: ${err.message}`);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to create service");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Services</h2>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                    {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    {isAdding ? "Cancel" : "Add New Service"}
                </button>
            </div>

            {isAdding && (
                <div className="overflow-hidden">
                    <form onSubmit={handleSubmit} className="bg-zinc-900 border border-white/10 p-6 rounded-xl space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Service Title"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Icon Name (e.g. Code, Cloud, Cpu)"
                                required
                                value={formData.icon}
                                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
                            />
                        </div>

                        <textarea
                            placeholder="Description"
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-24"
                        />

                        <textarea
                            placeholder="Features (comma separated)"
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
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
                                {imageFile ? "Image Selected" : "Upload Image"}
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
                                Save Service
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* List Services */}
            <div className="grid gap-4">
                {loading ? (
                    <div className="text-zinc-500 text-center py-8">Loading services...</div>
                ) : services.length === 0 ? (
                    <div className="text-zinc-500 text-center py-8">No services found. Add your first one!</div>
                ) : (
                    services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                {service.image_url && (
                                    <img
                                        src={service.image_url}
                                        alt={service.title}
                                        className="w-16 h-12 object-cover rounded-md bg-zinc-800"
                                    />
                                )}
                                <div>
                                    <h3 className="text-white font-medium">{service.title}</h3>
                                    <p className="text-sm text-zinc-500">{service.description.substring(0, 60)}...</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(service.id)}
                                className="text-zinc-500 hover:text-red-400 p-2 transition-colors"
                                title="Delete Service"
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
