import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto px-4 text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Abdul </span>
                        <span className="opacity-0 animate-fade-in-delay-2 bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">Kareem
</span>

                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                    I’m a developer who enjoys solving real-world problems through thoughtful, practical solutions.
                    I work across backend, frontend, automation, and intelligent systems to build reliable applications.
                    Always learning, always improving — focused on delivering work that makes a difference.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 ">
                        <a href="#projects" className="cosmic-button">
                            View my work 
                        </a>
                    </div> 
                </div>
            </div>


            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />

            </div>
        </section>
    );
};
