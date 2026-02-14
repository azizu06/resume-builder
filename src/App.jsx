import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { defaultResume } from "./const";
import { Resume } from "./components/Resume";

export const App = () => {
  const [resume, setResume] = useState(defaultResume);
  const [activePanel, setActivePanel] = useState("");

  return (
    <div className="flex min-h-screen w-screen border bg-black-700">
      <aside className="border-r border-blue-700 shrink-0">
        <Sidebar
          activePanel={activePanel}
          setPanel={setActivePanel}
          resume={resume}
          setResume={setResume}
        />
      </aside>
      <main className="flex-1 grid place-items-start border border-orange-700 p-10">
        <Resume resume={resume} />
      </main>
    </div>
  );
};
