import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { defaultResume } from "./const";
import { Resume } from "./components/Resume";

export const App = () => {
  const [resume, setResume] = useState(defaultResume);
  const [activePanel, setActivePanel] = useState("");

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-100">
      <aside className="sticky top-0 h-screen shrink-0 border-r border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <Sidebar
          activePanel={activePanel}
          setPanel={setActivePanel}
          resume={resume}
          setResume={setResume}
        />
      </aside>
      <main className="grid flex-1 place-items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 md:p-8">
        <Resume resume={resume} />
      </main>
    </div>
  );
};
