export const Resume = ({ resume }) => {
  const user = resume.personal;
  const edu = resume.education;
  const work = resume.experience;
  const projects = resume.projects;
  const skills = resume.skills;
  return (
    <div className="flex flex-col gap-4 bg-white p-8 text-black mx-auto w-full max-w-[850px] max-h-[1250px] overflow-hidden">
      <div className="flex flex-col gap-2">
        <h1 className="flex justify-center text-4xl">
          {user.firstName} {user.lastName}
        </h1>
        <div className="flex gap-2 justify-center">
          <p>{user.phone}</p>
          <p>|</p>
          <p>{user.email}</p>
          <p>|</p>
          <p>{user.linkedin}</p>
          <p>|</p>
          <p>{user.github}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b-2 border-black">EDUCATION</h2>
        <div className="flex flex-col gap-3">
          {edu.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-between">
                  <h3>{item.school}</h3>
                  <p>{item.location}</p>
                </div>
                <div className="flex justify-between">
                  <p>{item.degree}</p>
                  <p>
                    {item.start} - {item.end}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b-2 border-black">EXPERIENCE</h2>
        <div className="flex flex-col gap-3">
          {work.map((item) => {
            return (
              <div key={item.id} className="flex flex-col">
                <div className="flex justify-between">
                  <h3>{item.role}</h3>
                  <p>
                    {item.start} - {item.end}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>{item.company}</p>
                  <p>{item.location}</p>
                </div>
                <ul className="list-disc pl-5">
                  {item.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b-2 border-black">PROJECTS</h2>
        <div className="flex flex-col gap-3">
          {projects.map((item) => {
            return (
              <div key={item.id} className=" flex flex-col gap-1">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <h4>{item.name}</h4>
                    <p>|</p>
                    <p>{item.tech.join(", ")}</p>
                  </div>
                  <div>
                    <p>
                      {item.start} - {item.end}
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5">
                  {item.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="border-b-2 border-black">TECHNICAL SKILLS</h2>
        <div className="flex flex-col gap-1">
          <p>Languages: {skills.languages.join(", ")}</p>
          <p>Frameworks & Libraries: {skills.frameworks.join(", ")}</p>
          <p>Developer Tools: {skills.tools.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
