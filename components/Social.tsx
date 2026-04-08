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
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-base hover:bg-secondary hover:text-white transition-colors shadow-md"
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
