import Project from './Project';
import { projects } from '../../constants';

const Projects = () => {
  return (
    <>
      <ul className="w-full">
        {projects.map((proj, idx) => (
          <Project key={proj.name} {...proj} idx={idx} />
        ))}
      </ul>
    </>
  );
};
export default Projects;
