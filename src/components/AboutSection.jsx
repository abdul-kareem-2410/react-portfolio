import { BrainCircuit, Database, CodeXml } from "lucide-react";

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

                                <a href="https://drive.google.com/file/d/16go3YTXmguPpd2oCbIJBljNwv6gL2ouY/view?usp=drive_link" target="_blank" 
                                rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                                </a>
                        </div>
                    </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <CodeXml className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Web Developer</h4>
                                <p className="text-muted-foreground">I'm a full stack web developer skilled in creating beautiful,
                                    responsive and functional websites with modern frameworks and technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Database className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Backend Engineer</h4>
                                <p className="text-muted-foreground">I design and implement scalable backend systems and RESTful APIs that enable seamless integration and high availability. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <BrainCircuit className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Machine Learning Practitioner</h4>
                                <p className="text-muted-foreground">I'm actively building skills in machine learning, focusing on algorithms, model building, and applying AI concepts to practical problems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
};