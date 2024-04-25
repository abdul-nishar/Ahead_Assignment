import DefaultButton from "./DefaultButton";

const LinkStyleClass =
  "gray-800 hover:underline spread-out font-custom text-xl";

const DefaultLinkButton = ({ children, link = "#" }) => {
  return (
    <a href={link} className={LinkStyleClass}>
      {children}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="gray-800 text-xl font-bold">
          <img src="src/assets/logo.png" className="h-16 w-auto " />
        </div>
        <ul className="flex space-x-16">
          <li>
            <DefaultLinkButton>Emotions</DefaultLinkButton>
          </li>
          <li>
            <DefaultLinkButton>Manifesto</DefaultLinkButton>
          </li>
          <li>
            <DefaultLinkButton>Self-awareness test</DefaultLinkButton>
          </li>
          <li>
            <DefaultLinkButton>Work with Us</DefaultLinkButton>
          </li>
        </ul>
        <div>
          <DefaultButton>Download App</DefaultButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
