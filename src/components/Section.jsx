import React from "react";

const Section = ({ children }) => (
  <section className="container py-5">
    <div className="row">
      <div className="col-lg-6 col-md-8 col-sm-10 col-12">{children}</div>
    </div>
  </section>
);

export default Section;
