import React from "react";
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
    }, 4420);
  }

  render() {
    return <>{this.state.loading ? <Loading /> : <div>Hello World</div>}</>;
  }
}

export default Content;
