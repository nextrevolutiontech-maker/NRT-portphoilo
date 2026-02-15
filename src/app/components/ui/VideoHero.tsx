
import { DigitalStream } from "./DigitalStream";

export function VideoHero() {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-background border-y border-border group">
            {/* Dynamic Digital Stream instead of heavy video */}
            <div className="absolute inset-0 bg-[#020410]">
                <DigitalStream />
            </div>

            {/* Cinematic Overlays - Reduced opacity for visibility */}
            <div className="absolute inset-0 bg-background/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

            {/* Tech Grid Overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4 drop-shadow-lg">
                        Future Ready
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Powering the next generation of digital experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
