import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const list = ["Fundamental", "Core", "Crucial"];
  const description = list[genRandomInt(list.length - 1)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
