import Project from "./Project";

const ProjectList = (props) => {
  return (
    <div className="flex flex-col gap-2">
      {props.projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
};

export default ProjectList;