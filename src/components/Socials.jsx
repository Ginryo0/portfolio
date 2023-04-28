import { Github, Mail, LinkedIn } from './icons';
const Socials = ({ className }) => {
  return (
    <ul className={`flex gap-3 items-center sm:ml-0 ml-2 ${className}`}>
      <li>
        <a
          href="https://www.linkedin.com/in/ahmed-zeid-106841257/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Ginryo0"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Github />
        </a>
      </li>
      <li>
        <a href="mailto:ginryoix@gmail.com">
          <Mail />
        </a>
      </li>
    </ul>
  );
};
export default Socials;
