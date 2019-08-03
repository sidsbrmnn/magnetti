import React from "react";

import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Section>
        <Form />
      </Section>
    </React.Fragment>
  );
};

export default App;
