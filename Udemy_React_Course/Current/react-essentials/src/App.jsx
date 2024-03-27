import { useState } from "react";
import Examples from "./componenets/Examples/Examples";
import CoreConcepts from "./componenets/CoreConcepts/CoreConcepts";
import CoreConcept from "./componenets/CoreConcept/CoreConcept";
import Header from "./componenets/Header/Header";
import TabButton from "./componenets/TabButton/TabButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
