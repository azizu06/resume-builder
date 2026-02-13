export const Resume = ({ resume }) => {
  const user = resume.personal;
  const edu = resume.education;
  const work = resume.experience;
  const projects = resume.projects;
  const skills = resume.skills;
  return (
    <div>
      <div>
        <h1>
          {user.firstName} {user.lastNmae}
        </h1>
        <div>
          <p>{user.phone}</p>
          <p>|</p>
          <p>{user.email}</p>
          <p>|</p>
          <p>{user.linkedin}</p>
          <p>|</p>
          <p>{user.github}</p>
        </div>
        <div>
          <h2>EDUCATION</h2>
          <hr />
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
        <div>
          <h2>EXPERIENCE</h2>
          <hr />
          {work.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <h3>{item.role}</h3>
                  <p>
                    {item.start} - {item.end}
                  </p>
                </div>
                <div>
                  <p>{item.company}</p>
                  <p>{item.location}</p>
                </div>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h2>PROJECTS</h2>
          <hr />
          {projects.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex">
                  <div>
                    <h4>{item.name}</h4>
                    <p>|</p>
                    <p>{item.tech(", ")}</p>
                  </div>
                  <div>
                    <p>
                      {item.start} - {item.end}
                    </p>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h2>TECHNICAL SKILLS</h2>
          <hr />
          <p>Languages: {skills.languages.join(", ")}</p>
          <p>Frameworks: {skills.frameworks.join(", ")}</p>
          <p>Developer Tools: {skills.tools.join(", ")}</p>
          <p>Libraries: {skills.libraries.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
