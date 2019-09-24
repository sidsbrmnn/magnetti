import React from "react";

import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

const App = () => (
  <>
    <Navbar />
    <Section>
      <Form />
    </Section>
  </>
);

export default App;
