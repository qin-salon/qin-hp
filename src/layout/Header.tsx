import type { VFC } from "react";
import { NavLink } from "src/component/Button";
import { styled } from "src/style";

const items = [
  { href: "/", label: "Root" },
  { href: "/about", label: "About" },
  { href: "/theme", label: "Theme" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="text-red-500">
              <Anchor>{label}</Anchor>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

const Anchor = styled("a", {
  display: "inline-block",
  padding: "0.5rem",
  cursor: "pointer",
  backgroundColor: "$green4",
  color: "$green11",
  borderColor: "$green7",
  "&:hover": {
    backgroundColor: "$green5",
    borderColor: "$green8",
  },
});
