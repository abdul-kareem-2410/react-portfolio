import { Code, User, Briefcase } from "lucide-react";

export const AboutSection= () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About <span className="text-primary">Me</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Full Stack Developer and Machine Learning Practitioner</h3>

                        <p className="text-muted-foreground">
                        I work across backend, frontend, and automation to build practical, reliable applications.
                        From designing APIs to creating user interfaces, I focus on delivering clean, functional solutions.
                        I'm adaptable to any backend or frontend technology, quick to learn, and committed to writing maintainable code that brings ideas to life end-to-end.
                        </p>

                        <p className="text-muted-foreground">
                        I'm actively expanding my skills in machine learning, exploring how data can power smarter systems.
                        My focus is on building a solid foundation in algorithms, model development, and applied AI.
                        I aim to translate this learning into meaningful applications that solve real-world problems.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    Get in touch
                                </a>

                                <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                        Download CV
                                </a>
                        </div>
                    </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Web Developer</h4>
                                <p className="text-muted-foreground">I'm a web developer with a passion for creating beautiful,
                                    responsive and functional websites with modern frameworks and technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">UI/UX Designer</h4>
                                <p className="text-muted-foreground">I'm a UI/UX designer with a passion for designing intuitive
                                    and seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Project Managment</h4>
                                <p className="text-muted-foreground">I'm a project manager with a passion for leading projects to completion.</p>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
};