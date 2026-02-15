import { SquarePen, CirclePlus, Trash, SquareX } from "lucide-react";
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
  const [id, setId] = useState(null);
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
  const addEdu = () => {
    const newEdu = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      start: "",
      end: "",
      location: "",
    };
    setResume((prev) => ({
      ...prev,
      education: [...prev.education, newEdu],
    }));
    setId(newEdu.id);
  };
  const eduItem = edu.find((e) => e.id === id);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex border w-full justify-between">
        <h2>Education</h2>
        {id ? (
          <SquareX className="w-5" onClick={() => setId(null)} />
        ) : (
          <CirclePlus className="w-5" onClick={addEdu} />
        )}
      </div>
      {id ? (
        <EducationForm edu={eduItem} setEdu={setEdu} setId={setId} id={id} />
      ) : (
        <div className="flex flex-col gap-5">
          {edu.map((item) => {
            return (
              <div key={item.id} className="flex border justify-between p-3">
                <p className="flex flex-wrap max-w-[70%] ">{item.school}</p>
                <div className="flex gap-4 items-center">
                  <SquarePen className="w-4" onClick={() => setId(item.id)} />
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
  const [id, setId] = useState(null);
  const work = resume.experience;
  const setWork = (id, field, val) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, [field]: val } : item,
      ),
    }));
  };
  const delWork = (id) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };
  const addWork = () => {
    const newWork = {
      id: crypto.randomUUID(),
      company: "",
      role: "",
      start: "",
      end: "",
      location: "",
      description: "",
    };
    setResume((prev) => ({
      ...prev,
      experience: [...prev.experience, newWork],
    }));
    setId(newWork.id);
  };
  const curWork = work.find((e) => e.id === id);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex border w-full justify-between">
        <h2>Experience</h2>
        {id ? (
          <SquareX className="w-5" onClick={() => setId(null)} />
        ) : (
          <CirclePlus className="w-5" onClick={addWork} />
        )}
      </div>
      {id ? (
        <WorkForm work={curWork} setWork={setWork} setId={setId} id={id} />
      ) : (
        <div className="flex flex-col gap-5">
          {work.map((item) => {
            return (
              <div key={item.id} className="flex border justify-between p-3">
                <p className="flex flex-wrap max-w-[70%] ">{item.company}</p>
                <div className="flex gap-4 items-center">
                  <SquarePen className="w-4" onClick={() => setId(item.id)} />
                  <Trash className="w-4" onClick={() => delWork(item.id)} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Projects = ({ resume, setResume }) => {
  const [id, setId] = useState(null);
  const projects = resume.projects;
  const setProject = (id, field, val) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === id ? { ...item, [field]: val } : item,
      ),
    }));
  };
  const delProject = (id) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };
  const addProject = () => {
    const newProject = {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      tech: [],
      start: "",
      end: "",
    };
    setResume((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
    setId(newProject.id);
  };
  const curProject = projects.find((e) => e.id === id);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex border w-full justify-between">
        <h2>Projects</h2>
        {id ? (
          <SquareX className="w-5" onClick={() => setId(null)} />
        ) : (
          <CirclePlus className="w-5" onClick={addProject} />
        )}
      </div>
      {id ? (
        <ProjectsForm
          project={curProject}
          setProject={setProject}
          setId={setId}
          id={id}
        />
      ) : (
        <div className="flex flex-col gap-5">
          {projects.map((item) => {
            return (
              <div key={item.id} className="flex border justify-between p-3">
                <p className="flex flex-wrap max-w-[70%] ">{item.name}</p>
                <div className="flex gap-4 items-center">
                  <SquarePen className="w-4" onClick={() => setId(item.id)} />
                  <Trash className="w-4" onClick={() => delProject(item.id)} />
                </div>
              </div>
            );
          })}
        </div>
      )}
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
