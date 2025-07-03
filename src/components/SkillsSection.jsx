import { useState } from "react";
import { cn } from "../lib/util";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiAngular, SiNextdotjs,
  SiTailwindcss, SiPython, SiFastapi, SiNodedotjs, SiExpress,
  SiGit, SiGithub, SiPostman, SiNetlify, SiVercel, SiGooglecolab, SiFigma,
  SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiMysql, SiZod,
} from "react-icons/si";

const skillIcons = {
  "HTML/CSS": <SiHtml5 size={28} />,
  "JavaScript ES6+": <SiJavascript size={28} />,
  "React.js": <SiReact size={28} />,
  "Angular.js": <SiAngular size={28} />,
  "TypeScript": <SiTypescript size={28} />,
  "Zod": <SiZod size={28} />,
  "Next.js": <SiNextdotjs size={28} />,
  "Tailwind CSS": <SiTailwindcss size={28} />,
  "Python": <SiPython size={28} />,
  "FastAPI": <SiFastapi size={28} />,
  "Node.js": <SiNodedotjs size={28} />,
  "Express.js": <SiExpress size={28} />,
  "Git": <SiGit size={28} />,
  "GitHub": <SiGithub size={28} />,
  "Postman": <SiPostman size={28} />,
  "Netlify": <SiNetlify size={28} />,
  "Vercel": <SiVercel size={28} />,
  "Google Colab": <SiGooglecolab size={28} />,
  "Figma": <SiFigma size={28} />,
  "SQL Basics": <SiMysql size={28} />,
  "PostgreSQL": <SiPostgresql size={28} />,
  "MongoDB": <SiMongodb size={28} />,
  "Pandas": <SiPandas size={28} />,
  "NumPy": <SiNumpy size={28} />,
  "scikit-learn": <SiScikitlearn size={28} />,
};

const skills = [
  { name: "JavaScript ES6+", level: 90, category: "Frontend" },
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Angular.js", level: 70, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Zod", level: 80, category: "Frontend" },
  { name: "Next.js", level: 60, category: "Frontend" },
  { name: "Tailwind CSS", level: 60, category: "Frontend" },

  { name: "Python", level: 90, category: "Backend" },
  { name: "Next.js", level: 60, category: "Backend" },
  { name: "FastAPI", level: 90, category: "Backend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },

  { name: "Git", level: 90, category: "Tools" },
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "Postman", level: 80, category: "Tools" },
  { name: "Netlify", level: 70, category: "Tools" },
  { name: "Vercel", level: 80, category: "Tools" },
  { name: "Google Colab", level: 80, category: "Tools" },
  { name: "Figma", level: 90, category: "Tools" },

  { name: "SQL Basics", level: 70, category: "Database" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 60, category: "Database" },

  { name: "Pandas", level: 70, category: "Machine Learning / AI" },
  { name: "NumPy", level: 70, category: "Machine Learning / AI" },
  { name: "scikit-learn", level: 80, category: "Machine Learning / AI" },
  { name: "Google Colab", level: 80, category: "Machine Learning / AI" }
];

const categories = ["all", "Frontend", "Backend", "Tools", "Database", "Machine Learning / AI"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => {
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference * (1 - skill.level / 100);

            return (
              <div key={key} className="relative bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center">
                <div  className="absolute top-4 left-4 text-xs text-muted-foreground">{skill.level}%</div>
                <div className="relative w-24 h-24">

                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center text-secondary">
                    {skillIcons[skill.name] || <span className="text-xs">?</span>}
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium">{skill.name}</h3>
                  {/* <p className="text-xs text-muted-foreground">{skill.level}%</p> */}
                </div>
                {/* HOVER STATE  // *future implementation (maybe)*
                {skill.details && (
                  <div className="hidden group-hover:flex flex-col justify-center items-center text-sm text-muted-foreground bg-secondary/50 rounded p-3 text-center min-h-[100px]">
                    <p>{skill.details}</p>
                  </div>
                )} 
                */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
