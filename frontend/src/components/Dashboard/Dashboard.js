import React, { Component } from "react";
import { connect } from "react-redux";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerElements: [{ type: "text", value: "", index: 0 }],
      currentElem: "",
      current: "",
      showHyperlink: false,
      hyperlink: "",
      textValue: false
    };

    this.answerHandler = this.answerHandler.bind(this);
    this.hyperlinkHandler = this.hyperlinkHandler.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.addHyperlink = this.addHyperlink.bind(this);
    this.editHyperLink = this.editHyperLink.bind(this);
    this.cancelHyperlink = this.cancelHyperlink.bind(this);
  }

  answerHandler = e => {
    console.log("in answer.....", e.target.textContent);
    // let answerElements = this.state.answerElements;
    // if (type == "text") {
    //   answerElements[index] = { type: "text", value: e.target.textContent };
    //   this.setState({
    //     answerElements: answerElements
    //   });
    // }
    //console.log("answer", this.state.answerElements, e.target.textContent);
  };

  addHyperlink = (e, index) => {
    let answerElements = this.state.answerElements;
    if (this.state.hyperlink) {
      // if (this.state.text !== false) {
      //   answerElements.push({ type: "text", value: this.state.textValue });
      // }
      // this.setState(
      //   {
      //     textValue: false
      //   },
      //   function() {
      //     console.log("array elements 22244.....", this.state.textValue);
      //   }
      // );
      let editable = document.getElementById("editable");
      var x = document.createElement("div");
      var newContent = document.createTextNode(this.state.hyperlink);
      x.append(newContent);
      editable.append(x);
      //     answerElements.push({ type: "hyperlink", value: this.state.hyperlink });
      //   this.setState({
      //   answerElements: answerElements
      //});
      this.setState({
        showHyperlink: false
      });
    }
  };

  editHyperLink = e => {
    this.setState({
      hyperlink: e.target.value
    });
  };

  cancelHyperlink = e => {
    this.setState({
      showHyperlink: false
    });
  };

  hyperlinkHandler = e => {
    this.setState({
      showHyperlink: true
    });
  };

  imageHandler = e => {
    console.log("answer", e.target.textContent);
    this.setState({
      currentElem: e.target.textContent
    });
  };

  render() {
    return (
      <div class="container">
        <div>
          <button onClick={this.hyperlinkHandler} class="btn btn-primary">
            Hyperlink
          </button>
          <button onClick={this.imageHandler} class="btn btn-primary">
            Image
          </button>
        </div>
        {this.state.showHyperlink == true ? (
          <div class="d-flex justify-content-between align-items-center w-100">
            <input
              onChange={this.editHyperLink}
              type="text"
              name="hyperlink"
              placeholder="Add Hyperlink"
            />
            <button onClick={this.addHyperlink} class="btn btn-primary">
              Add
            </button>
            <button onClick={this.cancelHyperlink} class="btn btn-primary">
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
        <div class="border-bottom border-gray pb-2 mb-0">
          <div
            contentEditable="true"
            onInput={this.answerHandler}
            id="editable"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Dashboard);
