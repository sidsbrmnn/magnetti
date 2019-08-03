import React, { Component } from "react";

class Form extends Component {
  state = { data: { hash: "", name: "" }, uri: "" };

  generateUri(hash, name) {
    return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(name)}`;
  }

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

  render() {
    const { hash, name } = this.state.data;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="hash">Info Hash:</label>
          <input
            className="form-control form-control-lg"
            id="hash"
            name="hash"
            onChange={this.handleChange}
            type="text"
            value={hash}
          />
        </div>
        <div className="form-group">
          <label for="name">Torrent Name:</label>
          <input
            className="form-control form-control-lg"
            id="name"
            name="name"
            onChange={this.handleChange}
            type="text"
            value={name}
          />
        </div>
        <a href={this.state.uri} className="btn btn-primary">
          Get <i className="fa fa-magnet" />
        </a>
      </form>
    );
  }
}

export default Form;
