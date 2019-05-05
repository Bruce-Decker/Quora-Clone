import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElem: "",
      showHyperlink: false,
      hyperlink: "",
      showImage: false,
      selectedFile: null
    };

    this.answerHandler = this.answerHandler.bind(this);
    this.hyperlinkHandler = this.hyperlinkHandler.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.addHyperlink = this.addHyperlink.bind(this);
    this.editHyperLink = this.editHyperLink.bind(this);
    this.cancelHyperlink = this.cancelHyperlink.bind(this);
    this.handleselectedFile = this.handleselectedFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.cancelImage = this.cancelImage.bind(this);
  }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  handleUpload = () => {
    const fileURL = URL.createObjectURL(this.state.selectedFile);

    const data = new FormData();
    data.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("/answer/upload", data, {}).then(res => {
      console.log(res.data.imageUrl);
      var x = document.createElement("img");
      x.setAttribute("height", "300px");
      x.setAttribute("weight", "300px");
      x.src = res.data.imageUrl;
      document.getElementById("editable").appendChild(x);
    });
  };

  componentWillMount() {
    // axios.get("/answer", { params: { answer_id: "153251" } }).then(res => {
    //   document.getElementById("editable").outerHTML = res.data.answerContent;
    // });
  }

  answerHandler = e => {
    this.setState({
      currentElem: document.getElementById("editable").outerHTML
    });
    axios
      .post("/answer", {
        currentElem: document.getElementById("editable").outerHTML,
        question_id: "1"
      })
      .then(res => {
        console.log("res....", res.data);
      });
  };

  addHyperlink = e => {
    if (this.state.hyperlink) {
      let editable = document.getElementById("editable");
      var aTag = document.createElement("a");
      aTag.setAttribute("href", this.state.hyperlink);
      aTag.innerHTML = this.state.hyperlink;
      editable.appendChild(aTag);
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
    this.setState({
      showImage: true
    });
  };

  cancelImage = e => {
    this.setState({
      showImage: false
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
        {this.state.showImage == true ? (
          <div class="d-flex justify-content-between align-items-center w-100">
            <div>
              <input
                type="file"
                name="studentFile"
                id="studentFile"
                onChange={this.handleselectedFile}
              />
              <button onClick={this.handleUpload}>Upload</button>
              <button onClick={this.cancelImage}>Cancel</button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div class="border-bottom border-gray pb-2 mb-0">
          <div contentEditable="true" id="editable" />
        </div>
        <button onClick={this.answerHandler} class="btn btn-primary">
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Answer);
