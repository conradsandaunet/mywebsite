import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/reading-list", label: "Reading List" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-800 text-white p-4 min-h-screen">
      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded px-3 py-2 transition-colors ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
