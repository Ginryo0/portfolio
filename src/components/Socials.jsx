import { Github, Telegram, LinkedIn } from './icons';
const Socials = ({ className }) => {
  return (
    <ul className={`flex gap-3 items-center sm:ml-0 ml-2 ${className}`}>
      <li>
        <a
          href="https://www.linkedin.com/in/ahmed-samy-zeid/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className="sr-only">Linkedin</span>
          <LinkedIn />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Ginryo0"
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className="sr-only">Github</span>
          <Github />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/aszgryo"
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className="sr-only">Mail</span>
          <Telegram className={className} />
        </a>
      </li>
    </ul>
  );
};
export default Socials;
