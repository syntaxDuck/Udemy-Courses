import "./TabButton.css";

export default function TabButton({ children, isSelected, ...props }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
