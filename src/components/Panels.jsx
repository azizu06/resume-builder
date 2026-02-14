import {
  PersonalForm,
  EducationForm,
  WorkForm,
  ProjectsForm,
  SkillsForm,
} from "./Forms";

export const Personal = ({ resume, setResume }) => {
  const personal = resume.personal;
  const setPersonal = ({ field, val }) => {
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
  const edu = resume.education;
  const setEdu = (id, field, val) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: val } : item,
      ),
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Education</h2>
      </div>
      <EducationForm edu={edu} setEdu={setEdu} />
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
