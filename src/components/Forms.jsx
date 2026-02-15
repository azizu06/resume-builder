import { Save } from "lucide-react";

export const PersonalForm = ({ personal, setPersonal }) => {
  return (
    <div className="flex flex-col gap-6 min-w-[250px]">
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
          value={personal.linkedin}
          onChange={(e) => setPersonal("linkedin", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="github">Github</label>
        <input
          type="url"
          value={personal.github}
          onChange={(e) => setPersonal("github", e.target.value)}
        />
      </div>
    </div>
  );
};

export const EducationForm = ({ id, setId, edu, setEdu }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setId(null);
      }}
    >
      <div className="flex flex-col gap-6 min-w-[250px]">
        <div className="flex flex-col">
          <label htmlFor="eduName">School Name*</label>
          <input
            type="text"
            required={true}
            value={edu.school}
            onChange={(e) => setEdu(id, "school", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="degree">Degree*</label>
          <input
            type="text"
            required={true}
            value={edu.degree}
            onChange={(e) => setEdu(id, "degree", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eduLocation">Location*</label>
          <input
            type="text"
            required={true}
            value={edu.location}
            onChange={(e) => setEdu(id, "location", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eduStart">Start Date</label>
          <input
            type="text"
            value={edu.start}
            onChange={(e) => setEdu(id, "start", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eduEnd">End Date</label>
          <input
            type="text"
            required={true}
            value={edu.end}
            onChange={(e) => setEdu(id, "end", e.target.value)}
          />
        </div>
        <button className="flex justify-center gap-2" type="submit">
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export const WorkForm = ({ id, setId, work, setWork }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setId(null);
      }}
    >
      <div className="flex flex-col gap-6 min-w-[250px]">
        <div className="flex flex-col">
          <label htmlFor="workName">Company Name*</label>
          <input
            type="text"
            required={true}
            value={work.company}
            onChange={(e) => setWork(id, "company", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workRole">Job Title*</label>
          <input
            type="text"
            required={true}
            value={work.role}
            onChange={(e) => setWork(id, "role", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workLo">Location*</label>
          <input
            type="text"
            required={true}
            value={work.location}
            onChange={(e) => setWork(id, "location", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workStart">Start Date</label>
          <input
            type="text"
            value={work.start}
            onChange={(e) => setWork(id, "start", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workEnd">End Date</label>
          <input
            type="url"
            required={true}
            value={work.end}
            onChange={(e) => setWork(id, "end", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workDesc">Description</label>
          <textarea
            className="w-full min-h-[150px] rounded border"
            value={work.description}
            onChange={(e) => setWork(id, "description", e.target.value)}
          />
        </div>
        <button className="flex justify-center gap-2" type="submit">
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export const ProjectsForm = ({ id, setId, project, setProject }) => {
  const strToArray = (str) => {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setId(null);
      }}
    >
      <div className="flex flex-col gap-6 min-w-[250px]">
        <div className="flex flex-col">
          <label htmlFor="projectName">Project Name*</label>
          <input
            type="text"
            required={true}
            value={project.name}
            onChange={(e) => setProject(id, "name", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="techStack">Tech Stack*</label>
          <textarea
            required={true}
            className="w-full min-h-[150px] rounded border"
            value={project.tech.join(", ")}
            onChange={(e) => setProject(id, "tecg", strToArray(e.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectStart">Start Date</label>
          <input
            type="text"
            value={project.start}
            onChange={(e) => setProject(id, "start", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectEnd">End Date</label>
          <input
            type="text"
            required={true}
            value={project.end}
            onChange={(e) => setProject(id, "end", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDesc">Description</label>
          <textarea
            className="w-full min-h-[150px] rounded border"
            value={project.description}
            onChange={(e) => setProject(id, "description", e.target.value)}
          />
        </div>
        <button className="flex justify-center gap-2" type="submit">
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};
export const SkillsForm = ({ skills, setSkills }) => {
  const strToArray = (str) => {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  return (
    <div className="flex flex-col gap-6 min-w-[250px]">
      <div className="flex flex-col">
        <label htmlFor="languages">Languages*</label>
        <textarea
          className="w-full min-h-[150px] rounded border"
          required={true}
          value={skills.languages.join(", ")}
          onChange={(e) => setSkills("firstName", strToArray(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="frameworks">Frameworks & Libraries</label>
        <textarea
          className="w-full min-h-[150px] rounded border"
          value={skills.frameworks.join(", ")}
          onChange={(e) => setSkills("frameworks", strToArray(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tools">Developer Tools</label>
        <textarea
          className="w-full min-h-[150px] rounded border"
          value={skills.tools.join(", ")}
          onChange={(e) => setSkills("tools", strToArray(e.target.value))}
        />
      </div>
    </div>
  );
};
