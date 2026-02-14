import { SquarePen, CirclePlus, Trash } from "lucide-react";
import {
  PersonalForm,
  EducationForm,
  WorkForm,
  ProjectsForm,
  SkillsForm,
} from "./Forms";
import { useState } from "react";

export const Personal = ({ resume, setResume }) => {
  const personal = resume.personal;
  const setPersonal = (field, val) => {
    setResume((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: val,
      },
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Personal Information</h2>
      </div>
      <PersonalForm personal={personal} setPersonal={setPersonal} />
    </div>
  );
};

export const Education = ({ resume, setResume }) => {
  const [selected, setSelected] = useState(0);
  const edu = resume.education;
  const setEdu = (id, field, val) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: val } : item,
      ),
    }));
  };
  const delEdu = (id) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex border w-full justify-between">
        <h2>Education</h2>
        <CirclePlus className="w-5" />
      </div>
      {selected !== 0 ? (
        EducationForm(selected)
      ) : (
        <div className="flex flex-col gap-5">
          {edu.map((item) => {
            return (
              <div key={item.id} className="flex border justify-between p-3">
                <p className="flex flex-wrap max-w-[70%] ">{item.school}</p>
                <div className="flex gap-4 items-center">
                  <SquarePen
                    className="w-4"
                    onClick={() => setSelected(item.id)}
                  />
                  <Trash className="w-4" onClick={() => delEdu(item.id)} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Work = ({ resume, setResume }) => {
  const work = resume.work;
  const setWork = (id, field, val) => {
    setResume((prev) => ({
      ...prev,
      work: prev.work.map((item) =>
        item.id === id ? { ...item, [field]: val } : item,
      ),
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Experience</h2>
      </div>
      <WorkForm work={work} setWork={setWork} />
    </div>
  );
};

export const Projects = ({ resume, setResume }) => {
  const projects = resume.projects;
  const setProjects = (id, field, val) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === id ? { ...item, [field]: val } : item,
      ),
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Projects</h2>
      </div>
      <ProjectsForm projects={projects} setProjects={setProjects} />
    </div>
  );
};

export const Skills = ({ resume, setResume }) => {
  const skills = resume.skills;
  const setSkills = (field, val) => {
    setResume((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [field]: val,
      },
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Technical Skills</h2>
      </div>
      <SkillsForm skills={skills} setSkills={setSkills} />
    </div>
  );
};
