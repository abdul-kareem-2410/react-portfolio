import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Expense Tracker",
        description: "A smart, responsive expense tracker built with Next.js and React. "
            + "Features AI-powered automatic category suggestions, "
            + "confidence scoring and financial insights. ",
        image: "/projects/project1.png",
        tags: ["Next.js", "React.js", "Tailwind CSS", "Zod", "JavaScript ES6+"],
        demoUrl: "https://ai-expense-tracker-nl6yd5w67-abdul-kareems-projects-d5ae4488.vercel.app/",
        githubUrl: "https://github.com/abdul-kareem-2410/ai-expense-tracker/",
    },
    
    {
        id: 2,
        title: "Task Manager",
        description: "A comprehensive task management system built with Next.js and React. "
            + "Features advanced task organization with priorities, tags, due dates and statuses. ",
        image: "/projects/project2.png",
        tags: ["Next.js", "React.js", "Tailwind CSS", "Zod", "JavaScript ES6+"],
        demoUrl: "https://task-manager-6utxe5w95-abdul-kareems-projects-d5ae4488.vercel.app/",
        githubUrl: "https://github.com/abdul-kareem-2410/task-manager/",
    },

    
    {
        id: 3,
        title: "Tic Tac Toe",
        description: "A classic 3x3 tic-tac-toe board game built with React.js and Tailwind CSS. "
        + "showcasing the component-based architecture, "
        + "state management and dynamic UI updates.",
        image: "/projects/project3.png",
        tags: ["React.js", "JavaScript ES6+", "Tailwind CSS"],
        demoUrl: "https://tic-tac-toe-rho-two-18.vercel.app/",
        githubUrl: "https://github.com/abdul-kareem-2410/tic-tac-toe/",
    },
    
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={key} className="px-2 py-1 text-xs  font-medium border rounded-full bg-primary/20 text-secondary-foregground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
    
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a  href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                                </div>
                            </div>
                           
                        </div>
                    ))} 
                </div>

                <div className="mt-12 text-center">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/abdul-kareem-2410"
                    target="_blank">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};