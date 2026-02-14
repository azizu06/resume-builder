import { SquareX, Save } from "lucide-react";

export const PersonalForm = ({ personal, setPersonal }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          required={true}
          value={personal.firstName}
          onChange={(e) => setPersonal("firstName", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          required={true}
          value={personal.lastName}
          onChange={(e) => setPersonal("lastName", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">Phone Number*</label>
        <input
          type="tel"
          required={true}
          value={personal.phone}
          onChange={(e) => setPersonal("phone", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          required={true}
          value={personal.email}
          onChange={(e) => setPersonal("email", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="linked">Linkedin</label>
        <input
          type="url"
          required={true}
          value={personal.linkedin}
          onChange={(e) => setPersonal("linkedin", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="github">Github</label>
        <input
          type="url"
          required={true}
          value={personal.github}
          onChange={(e) => setPersonal("github", e.target.value)}
        />
      </div>
    </div>
  );
};

export const EducationForm = ({ id, setId, edu, setEdu }) => {};

export const WorkForm = ({ id, setId, work, setWork }) => {};

export const ProjectsForm = ({ id, setId, project, setProject }) => {};

export const SkillsForm = ({ skills, setSkills }) => {};
