import react from "react";

function Navbar({ logo, title, rightItems }) {
  const items = [];

  rightItems?.forEach((element, index) => {
    items.push(<li key={index} onClick={() => scrollIntoView(element.toLowerCase())}>{element}</li>);
  });

  function scrollIntoView(id) {
    document
      .querySelector(`#${id}`)
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  return (
    <header className="navbar">
      <div className="navbar--left">
        <ul>
          <li>{logo}</li>
          <li>{title}</li>
        </ul>
      </div>
      <div className="navbar--right">
        <ul>{items}</ul>
      </div>
    </header>
  );
}

export default Navbar;
