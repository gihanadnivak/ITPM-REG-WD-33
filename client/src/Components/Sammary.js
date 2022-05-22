import React, { Component } from "react";
import axios from "axios";

class Sammary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/adminRoute/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return <div>PostDetails component</div>;
  }
}

export default Sammary;
