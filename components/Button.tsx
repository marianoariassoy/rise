import Link from "next/link";
import { Forward } from "../lib/icons";

const Button = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-4 pr-2 pl-6 py-2 rounded-full border border-secondary hover:gap-x-6 transition-all"
    >
      <span className="font-bold text-lg">{title}</span>
      <span className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
        <Forward />
      </span>
    </Link>
  );
};

export default Button;
