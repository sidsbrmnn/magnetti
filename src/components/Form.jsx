import React, { Component } from "react";

import Input from "./Input";

class Form extends Component {
  state = { data: { hash: "", name: "" }, uri: "" };

  generateUri = (hash, name) => {
    return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(name)}`;
  };

  componentDidMount() {
    const data = { hash: "", name: "" };
    const uri = this.generateUri(data.hash, data.name);

    this.setState({ data, uri });
  }

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    const uri = this.generateUri(data.hash, data.name);

    this.setState({ data, uri });
  };

  renderInput = (name, handleChange, label, value) => {
    return (
      <Input
        name={name}
        handleChange={handleChange}
        label={label}
        value={value}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(
          "hash",
          this.handleChange,
          "Info hash:",
          this.state.data.hash
        )}
        {this.renderInput(
          "name",
          this.handleChange,
          "Torrent name:",
          this.state.data.name
        )}
        <a href={this.state.uri} className="btn btn-primary">
          Get <i className="fa fa-magnet" />
        </a>
      </form>
    );
  }
}

export default Form;
