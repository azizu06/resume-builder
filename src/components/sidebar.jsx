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
  const itemBase =
    "group flex w-full items-center justify-center rounded-xl border border-transparent p-3 text-slate-400 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/70 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const inactive = "";
  const active =
    "border-slate-700 bg-indigo-500/20 text-indigo-300 shadow-[0_0_0_1px_rgba(129,140,248,0.25)]";
  const Panel = panels[activePanel];
  return (
    <div className="flex h-screen">
      <div className="flex h-screen w-16 flex-col gap-2 border-r border-slate-800/80 bg-slate-950 px-2 py-4">
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
      <div
        className={`min-h-0 overflow-hidden transition-all duration-200 ${Panel ? "flex w-[360px] flex-col bg-slate-900/70 p-5" : "w-0 bg-transparent p-0"}`}
      >
        {Panel && <Panel resume={resume} setResume={setResume} />}
      </div>
    </div>
  );
};
