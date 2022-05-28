import React from "react";
import { Home } from "./HomePage/Home";
import { Loading } from "./LoadingPage/Loading";

interface HandleState {
  loading: boolean;
}

class Content extends React.Component<{}, HandleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, Math.floor(Math.random() * 9000) + 1000);
  }

  render() {
    return <>{this.state.loading ? <Loading /> : <Home />}</>;
  }
}

export default Content;
