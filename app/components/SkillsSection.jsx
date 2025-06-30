import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react"

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React.js", level: 90, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Material UI", level: 80, category: "frontend" },
    { name: "Bootstrap", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Supabase", level: 80, category: "backend" },
    { name: "Appwrite", level: 75, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
            id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg '>Technical skills   
            </motion.h4>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center  text-5xl  '>My Skills
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Welcome to my web development portfolio! Here are a list of tools I often use in my development work.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap justify-center gap-2 md:gap-6 mb-6 ">
                {categories.map((category, key) => (
                    <motion.button transition={{ duration: 0.3 }}
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-3 py-1 md:px-5 md:py-2 rounded-md   capitalize cursor-pointer border border-white",
                            activeCategory === category
                                ? "bg-[#7969c9] border-none "
                                : "bg-transparent  hover:bg-[#7969c9] hover:border-none transition duration-300 ease-in "
                        )}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {filteredSkills.map((skill, key) => (
                    <motion.div
                        key={key}
                        className="border-[0.5px] border-gray-500  p-2 rounded-md shadow-xs cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg "
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-[#f0d9f8] h-2 rounded-md overflow-hidden">
                            <div
                                className="bg-[#7969c9] h-2 rounded-md origin-left animate-[grow_1.5s_ease-out] "
                                style={{ width: skill.level + "%" }}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-md ">
                                {skill.level}%
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
export default SkillsSection