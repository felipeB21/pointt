import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import SessionToggle from "./auth/session";

const NAV_LINKS = [
  { name: "Cursors", slug: "cursors" },
  { name: "Create", slug: "create" },
  { name: "Pricing", slug: "pricing" },
] as const;

export default function Header() {
  return (
    <header className="py-3">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-3xl font-semibold">
            pointt
          </Link>
          <nav>
            <ul className="flex items-center gap-5 mt-1">
              {NAV_LINKS.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="font-medium hover:text-blue-500 duration-150"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <SessionToggle />
        </div>
      </div>
    </header>
  );
}
