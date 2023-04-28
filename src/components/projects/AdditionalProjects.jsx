import { additionalProjects } from '../../constants';
import AdditionalProject from './AdditionalProject';
const AdditionalProjects = () => {
  return (
    <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
      {additionalProjects.map((proj, idx) => (
        <AdditionalProject {...proj} idx={idx} key={idx} />
      ))}
    </div>
  );
};
export default AdditionalProjects;
