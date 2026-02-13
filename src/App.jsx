import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { defaultResume } from "./const";
import { Resume } from "./components/Resume";

export const App = () => {
  const [resume, setResume] = useState(defaultResume);
  const [acitvePanel, setActivePanel] = useState("");
  return (
    <div className="flex min-h-screen w-screen border border-red-400">
      <aside className="h-screen border-r border-blue-700 shrink-0">
        <Sidebar activePanel={acitvePanel} setPanel={setActivePanel} />
      </aside>
      <main className="flex-1 grid place-items-end border border-orange-700 p-10">
        <Resume resume={resume} setResume={setResume} />
      </main>
    </div>
  );
};
