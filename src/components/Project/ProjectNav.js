import ProjectButton from "./ProjectButton";

function ProjectNav() {
  return (
    <div className="project-nav">
        <ProjectButton action="prev" />
        <ProjectButton action="next" />
    </div>
  );
}

export default ProjectNav;
