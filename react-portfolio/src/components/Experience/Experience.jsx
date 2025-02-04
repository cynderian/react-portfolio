import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section id="experience">
        <h2>Experience</h2>
        <div>
            <div>
                {skills.map((skill, id) => {
                    return (
                        <div key={id}>
                            <div>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul>
                {
                    history.map((historyItem, id) => {
                        return (<li key={id}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`}/>
                            <div>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.description.map((description, id) => {
                                        return <li key={id}>{description}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
        </section>
    )
}