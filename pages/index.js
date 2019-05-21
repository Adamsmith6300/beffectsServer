/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

import Layout from "../HOC/Layout";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout {...this.props}>
        <h2 className="bg-blue-light text-white text-center h-16 pt-4 w-full font-thin uppercase">
          Base Project Next 8.x
        </h2>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
