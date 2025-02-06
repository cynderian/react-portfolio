import React from "react";

import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard.jsx";
import projects from "../../data/projects.json";

export const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project}/>
                    })
                }
            </div>
        </section>
    )
};