import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'

function Skills() {

    const skills = ["C#", "Java", "React", "Spring Boot", "AWS","CI/CD", "JavaScript", "Python", "HTML", "CSS", "Bootstrap", "SDLC", "Git"];

    const [programmingLang, setProgrammingLang] = useState('Loading...')

    useEffect(() => {
        const interval = setInterval(() => {
            setProgrammingLang(skills[Math.floor(Math.random() * skills.length)])
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Fragment>
            
            <h2 id="familiar" className="bg-dark text-center text-white">
              I'm familiar with : <br/> <span style={{color:'lime', fontWeight:'bolder'}}>{programmingLang}</span>
            </h2>
        </Fragment>
    )
}

export default Skills
