import { social } from "../lib/data";

const Social = () => {
  return (
    <nav>
      <ul className="flex gap-x-3">
        {social.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors text-lg shadow-md"
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Social;
