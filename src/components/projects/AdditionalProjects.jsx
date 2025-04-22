import { additionalProjects } from '../../constants';
import AdditionalProject from './AdditionalProject';
const AdditionalProjects = () => {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {additionalProjects.map((proj, idx) => (
        <AdditionalProject {...proj} idx={idx} key={idx} />
      ))}
    </ul>
  );
};
export default AdditionalProjects;
