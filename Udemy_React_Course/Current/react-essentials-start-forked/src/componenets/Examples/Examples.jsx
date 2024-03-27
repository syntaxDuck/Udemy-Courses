import { EXAMPLES } from "../../data";
import { useState } from "react";

import Tabs from "../Tabs/Tabs";
import Section from "../Section/Section";
import TabButton from "../TabButton/TabButton";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }

  let tabContent = (
    <div id="tab-content">
      <p>Choose an example from the menu above.</p>
    </div>
  );

  if (selectedButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  let exampleButtons = (
    <>
      <TabButton
        onClick={() => handleSelect("components")}
        isSelected={selectedButton === "components"}
      >
        Components
      </TabButton>
      <TabButton
        onClick={() => handleSelect("props")}
        isSelected={selectedButton === "props"}
      >
        Props
      </TabButton>
      <TabButton
        onClick={() => handleSelect("jsx")}
        isSelected={selectedButton === "jsx"}
      >
        JSX
      </TabButton>
      <TabButton
        onClick={() => handleSelect("state")}
        isSelected={selectedButton === "state"}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs Container="menu" buttons={exampleButtons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}
