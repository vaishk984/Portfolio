import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiTailwindcss, SiNextdotjs, SiPytorch } from "react-icons/si";

const skills = [
  // Languages
  { name: "C++", level: 95, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "Python", level: 85, category: "languages", icon: <FaPython /> },
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "TypeScript", level: 80, category: "languages", icon: <SiTypescript /> },

  // Frontend
  { name: "React.js", level: 90, category: "frontend", icon: <FaReact /> },
  { name: "Next.js", level: 85, category: "frontend", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss /> },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: <FaNodeJs /> },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend", icon: <SiMongodb /> },
  { name: "PostgreSQL/MySQL", level: 80, category: "backend", icon: <SiPostgresql /> },
  { name: "REST APIs", level: 80, category: "backend" },

  // AI/ML
  { name: "Machine Learning", level: 85, category: "ai-ml" },
  { name: "PyTorch", level: 80, category: "ai-ml", icon: <SiPytorch /> },
  { name: "Data Analysis", level: 85, category: "ai-ml" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt /> },
  { name: "Docker", level: 70, category: "tools", icon: <FaDocker /> },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
];

const categories = ["all", "languages", "frontend", "backend", "ai-ml", "tools"];

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {skill.icon && <span className="text-primary">{skill.icon}</span>}
                  {skill.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SkillSection;
