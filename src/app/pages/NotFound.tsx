import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 mb-4 animate-pulse">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lost in Cyberspace?</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
                The page you are looking for seems to have vanished into the digital void.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Link to="/" className="flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Return Home
                    </Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <Link to="/contact" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Contact Support
                    </Link>
                </Button>
            </div>
        </div>
    );
}
