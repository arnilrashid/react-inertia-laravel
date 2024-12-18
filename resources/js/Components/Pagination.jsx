import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-pink-200 text-xs " +
            (link.active
              ? "bg-gradient-to-r from-indigo-600 to-indigo-400 "
              : " ") +
            (!link.url
              ? "!text-purple-300 cursor-not-allowed "
              : "hover:bg-gradient-to-r from-indigo-600 to-indigo-400")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}
