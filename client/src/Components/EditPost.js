import React, { Component } from "react";
import axios from "axios";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      Name: "",
      Address: "",
      city: "",
      zip: "",
      country: "",
      topicError: "",
      NameError: "",
      AddressError: "",
      cityError: "",
      zipError: "",
      countryError: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  validate = () => {
    let topicError = "";
    let NameError = "";
    let AddressError = "";
    let cityError = "";
    let zipError = "";
    let countryError = "";

    if (!this.state.topic) {
      topicError = "Please Enter Validate Type!";
    }
    if (!this.state.Name) {
      NameError = "Please Enter Proper Name!";
    }
    if (!this.state.Address) {
      AddressError = "Please Enter Valid Address!";
    }
    if (!this.state.city) {
      cityError = "Please Enter Valid City!";
    }
    if (!this.state.zip) {
      zipError = "Please Enter Valid ZIP code!";
    }
    if (!this.state.country) {
      countryError = "Please Enter Valid Country code!";
    }

    if (
      topicError ||
      NameError ||
      AddressError ||
      cityError ||
      zipError ||
      countryError
    ) {
      this.setState({ topicError });
      this.setState({ NameError });
      this.setState({ AddressError });
      this.setState({ cityError });
      this.setState({ zipError });
      this.setState({ countryError });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValidate = this.validate();
    if (isValidate) {
      const id = this.props.match.params.id;
      const { topic, Name, Address, city, zip, country } = this.state;
      const data = {
        topic: topic,
        Name: Name,
        Address: Address,
        city: city,
        zip: zip,
        country: country,
      };
      console.log(data);

      axios.put(`/post/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert("Update Successfuly..");
          this.setState({
            topic: "",
            Name: "",
            Address: "",
            city: "",
            zip: "",
            country: "",
          });
        }
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          topic: res.data.post.topic,
          Name: res.data.post.Name,
          Address: res.data.post.Address,
          city: res.data.post.city,
          zip: res.data.post.zip,
          country: res.data.post.country,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-nomal">Edit Billing Infomation</h1>
        <from className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <select
              class="form-select"
              aria-label="Default select example"
              type="text"
              name="topic"
              placeholder="Enter Topic"
              onChange={this.handleInputChange}
            >
              <option Value="Visa">Visa</option>
              <option Value="Debit">Debit</option>
            </select>
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.topicError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              placeholder="Enter Name"
              Value={this.state.Name}
              onChange={this.handleInputChange}
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.NameError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              placeholder="Enter Address"
              Value={this.state.Address}
              onChange={this.handleInputChange}
              required
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.AddressError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="Enter City"
              Value={this.state.city}
              onChange={this.handleInputChange}
              required
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.cityError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Zip Code</label>
            <input
              type="number"
              className="form-control"
              name="zip"
              placeholder="Zip Code"
              Value={this.state.zip}
              onChange={this.handleInputChange}
              required
            />

            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.zipError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Enter Country"
              Value={this.state.country}
              onChange={this.handleInputChange}
              required
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.zipError}
            </div>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginBottom: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>&nbsp;SAVE
          </button>
          &nbsp;
          <button className="btn btn-warning" style={{ marginBottom: "15px" }}>
            <a href="/add" style={{ textDecoration: "none", color: "white" }}>
              Back
            </a>
          </button>
        </from>
      </div>
    );
  }
}

export default EditPost;
