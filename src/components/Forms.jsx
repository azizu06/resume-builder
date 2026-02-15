import { Save } from "lucide-react";
import { useState } from "react";

export const PersonalForm = ({ personal, setPersonal }) => {
  const [draft, setDraft] = useState({
    firstName: personal.firstName,
    lastName: personal.lastName,
    phone: personal.phone,
    email: personal.email,
    linkedin: personal.linkedin,
    github: personal.github,
  });
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
  };
  return (
    <div className="flex flex-col gap-6 min-w-[250px]">
      <div className="flex flex-col">
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          required={true}
          value={draft.firstName}
          onChange={(e) => updateDraft("firstName", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          required={true}
          value={draft.lastName}
          onChange={(e) => updateDraft("lastName", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">Phone Number*</label>
        <input
          type="tel"
          required={true}
          value={draft.phone}
          onChange={(e) => updateDraft("phone", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          required={true}
          value={draft.email}
          onChange={(e) => updateDraft("email", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="linked">Linkedin</label>
        <input
          type="url"
          value={draft.linkedin}
          onChange={(e) => updateDraft("linkedin", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="github">Github</label>
        <input
          type="url"
          value={draft.github}
          onChange={(e) => updateDraft("github", e.target.value)}
        />
      </div>
      <button
        className="flex justify-center gap-2"
        onClick={() => setPersonal(draft)}
      >
        <Save className="w-4" /> <span>Save</span>
      </button>
    </div>
  );
};

export const EducationForm = ({ id, setId, edu, setEdu }) => {
  const [draft, setDraft] = useState({
    school: edu.school,
    degree: edu.degree,
    start: edu.start,
    end: edu.end,
    location: edu.location,
    github: edu.github,
  });
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
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
          <label htmlFor="eduName">School Name*</label>
          <input
            type="text"
            required={true}
            value={draft.school}
            onChange={(e) => updateDraft("school", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="degree">Degree*</label>
          <input
            type="text"
            required={true}
            value={draft.degree}
            onChange={(e) => updateDraft("degree", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eduLocation">Location*</label>
          <input
            type="text"
            required={true}
            value={draft.location}
            onChange={(e) => updateDraft("location", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eduStart">Start Date</label>
          <input
            type="text"
            value={draft.start}
            onChange={(e) => updateDraft("start", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="eduEnd">End Date</label>
          <input
            type="text"
            required={true}
            value={draft.end}
            onChange={(e) => updateDraft("end", e.target.value)}
          />
        </div>
        <button
          className="flex justify-center gap-2"
          type="submit"
          onClick={() => setEdu(id, draft)}
        >
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export const WorkForm = ({ id, setId, work, setWork }) => {
  const [draft, setDraft] = useState({
    company: work.company,
    role: work.role,
    start: work.start,
    end: work.end,
    location: work.location,
    description: work.description.join(" "),
  });
  const updateDraft = (field, val) => {
    setDraft((prev) => ({
      ...prev,
      [field]: val,
    }));
  };
  const descToArray = (str) => {
    return str
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const handleSave = () => {
    setWork(id, {
      ...draft,
      description: descToArray(draft.description),
    });
    setId(null);
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
          <label htmlFor="workName">Company Name*</label>
          <input
            type="text"
            required={true}
            value={draft.company}
            onChange={(e) => updateDraft("company", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workRole">Job Title*</label>
          <input
            type="text"
            required={true}
            value={draft.role}
            onChange={(e) => updateDraft("role", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workLo">Location*</label>
          <input
            type="text"
            required={true}
            value={draft.location}
            onChange={(e) => updateDraft("location", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workStart">Start Date</label>
          <input
            type="text"
            value={draft.start}
            onChange={(e) => updateDraft("start", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workEnd">End Date</label>
          <input
            type="url"
            required={true}
            value={draft.end}
            onChange={(e) => updateDraft("end", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="workDesc">Description</label>
          <textarea
            className="w-full min-h-[150px] rounded border"
            value={draft.description}
            onChange={(e) => updateDraft("description", e.target.value)}
          />
        </div>
        <button
          className="flex justify-center gap-2"
          type="submit"
          onClick={handleSave}
        >
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export const ProjectsForm = ({ id, setId, project, setProject }) => {
  const [draft, setDraft] = useState({
    name: project.name,
    description: project.description.join(" "),
    tech: project.tech.join(", "),
    start: project.start,
    end: project.end,
  });
  const skillsToArray = (str) => {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const descToArray = (str) => {
    return str
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const handleSave = () => {
    setProject(id, {
      ...draft,
      description: descToArray(draft.description),
      tech: skillsToArray(draft.tech),
    });
    setId(null);
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
            value={draft.name}
            onChange={(e) => setDraft(id, "name", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="techStack">Tech Stack*</label>
          <textarea
            required={true}
            className="w-full min-h-[150px] rounded border"
            value={draft.tech}
            onChange={(e) => setDraft(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectStart">Start Date</label>
          <input
            type="text"
            value={draft.start}
            onChange={(e) => setDraft(id, "start", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectEnd">End Date</label>
          <input
            type="text"
            required={true}
            value={draft.end}
            onChange={(e) => setDraft(id, "end", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDesc">Description</label>
          <textarea
            className="w-full min-h-[150px] rounded border"
            value={draft.description}
            onChange={(e) => setDraft(id, "description", e.target.value)}
          />
        </div>
        <button
          className="flex justify-center gap-2"
          type="submit"
          onClick={handleSave}
        >
          <Save className="w-4" /> <span>Save</span>
        </button>
      </div>
    </form>
  );
};
export const SkillsForm = ({ skills, setSkills }) => {
  const [draft, setDraft] = useState({
    languages: skills.languages.join(", "),
    frameworks: skills.frameworks.join(", "),
    tools: skills.tools.join(", "),
  });
  const skillsToArray = (str) => {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const newSkills = {
    languages: skillsToArray(draft.languages),
    frameworks: skillsToArray(draft.frameworks),
    tools: skillsToArray(draft.tools),
  };
  const updateDraft = (field, val) => {
    setDraft((prev) => ({ ...prev, [field]: val }));
  };
  return (
    <div className="flex flex-col gap-6 min-w-[250px]">
      <div className="flex flex-col">
        <label htmlFor="languages">Languages*</label>
        <textarea
          className="w-full min-h-[150px] rounded border"
          required={true}
          value={draft.languages}
          onChange={(e) => updateDraft("languages", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="frameworks">Frameworks & Libraries</label>
        <textarea
          className="w-full min-h-[150px] rounded border"
          value={draft.frameworks}
          onChange={(e) => updateDraft("frameworks", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tools">Developer Tools</label>
        <textarea
          className="w-full min-h-[150px] rounded border"
          value={draft.tools}
          onChange={(e) => updateDraft("tools", e.target.value)}
        />
      </div>
      <button
        className="flex justify-center gap-2"
        onClick={() => setSkills(newSkills)}
      >
        <Save className="w-4" /> <span>Save</span>
      </button>
    </div>
  );
};
