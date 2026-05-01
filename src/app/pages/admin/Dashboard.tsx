import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogOut, LayoutDashboard, Home, FolderKanban, Users, Box } from "lucide-react";
import { ProjectManager } from "./ProjectManager";
import { ServiceManager } from "./ServiceManager";
import { TestimonialManager } from "./TestimonialManager";

export function Dashboard() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const [activeTab, setActiveTab] = useState<"projects" | "services" | "testimonials">("projects");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/admin/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Top Bar */}
            <div className="border-b border-white/10 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LayoutDashboard className="w-6 h-6 text-blue-500" />
                        <h1 className="text-xl font-bold">Admin Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                            <Home className="w-4 h-4" />
                            Website
                        </Link>
                        <div className="text-sm text-zinc-400 hidden sm:block">
                            Logged in as <span className="text-white font-medium">{user.name}</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tabs */}
                <div className="flex overflow-x-auto gap-2 mb-8 border-b border-white/10 pb-1">
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-colors whitespace-nowrap ${activeTab === "projects"
                                ? "bg-white/10 text-white border-b-2 border-blue-500"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <FolderKanban className="w-4 h-4" />
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("services")}
                        className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-colors whitespace-nowrap ${activeTab === "services"
                                ? "bg-white/10 text-white border-b-2 border-blue-500"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <Box className="w-4 h-4" />
                        Services
                    </button>
                    <button
                        onClick={() => setActiveTab("testimonials")}
                        className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-colors whitespace-nowrap ${activeTab === "testimonials"
                                ? "bg-white/10 text-white border-b-2 border-blue-500"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <Users className="w-4 h-4" />
                        Testimonials
                    </button>
                </div>

                {/* Content */}
                <div className="min-h-[500px]">
                    {activeTab === "projects" && <ProjectManager />}
                    {activeTab === "services" && <ServiceManager />}
                    {activeTab === "testimonials" && <TestimonialManager />}
                </div>
            </div>
        </div>
    );
}
