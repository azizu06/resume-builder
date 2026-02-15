import {
  User,
  Briefcase,
  FolderGit,
  GraduationCap,
  Wrench,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { Personal, Education, Work, Projects, Skills } from "./Panels";

export const Sidebar = ({ activePanel, setPanel, resume, setResume }) => {
  const panels = {
    personal: Personal,
    education: Education,
    work: Work,
    projects: Projects,
    skills: Skills,
  };
  const itemBase = "flex item-center w-full border p-3";
  const inactive = "hover:bg-slate-900";
  const active = "bg-blue-600";
  const Panel = panels[activePanel];
  return (
    <div className="flex border">
      <div className="flex flex-col h-screen border-r border-green-700 pt-5">
        <button className={`${itemBase}`} onClick={() => setPanel("")}>
          {Panel ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
        <button
          className={`${itemBase} ${activePanel === "personal" ? active : inactive}`}
          onClick={() => setPanel("personal")}
        >
          <User />
        </button>
        <button
          className={`${itemBase} ${activePanel === "education" ? active : inactive}`}
          onClick={() => setPanel("education")}
        >
          <GraduationCap />
        </button>
        <button
          className={`${itemBase} ${activePanel === "work" ? active : inactive}`}
          onClick={() => setPanel("work")}
        >
          <Briefcase />
        </button>
        <button
          className={`${itemBase} ${activePanel === "projects" ? active : inactive}`}
          onClick={() => setPanel("projects")}
        >
          <FolderGit />
        </button>
        <button
          className={`${itemBase} ${activePanel === "skills" ? active : inactive}`}
          onClick={() => setPanel("skills")}
        >
          <Wrench />
        </button>
      </div>
      <div className="flex flex-col border min-w-[250px] items-center p-5 bg-blue">
        {Panel && <Panel resume={resume} setResume={setResume} />}
      </div>
    </div>
  );
};
