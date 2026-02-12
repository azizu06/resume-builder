import { useState } from "react";
import {
  User,
  Briefcase,
  FolderGit,
  GraduationCap,
  Wrench,
} from "lucide-react";

export function Sidebar() {
  const [active, setActive] = useState("personal");
  const panels = {
    personal: <Personal />,
    education: <Education />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
  };
  return (
    <>
      <div className="flex flex-col">
        <User onClick={() => setActive("personal")} />
        <GraduationCap onClick={() => setActive("education")} />
        <Briefcase onClick={() => setActive("experience")} />
        <FolderGit onClick={() => setActive("projects")} />
        <Wrench onClick={() => setActive("skills")} />
      </div>
      <div className="flex flex-col">{panels[active]}</div>
    </>
  );
}
