/*******************************************/
/*Main page*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="text-center w-screen h-screen bg-black">
          {/* <ul className="menu">
            <li><a href="./rain">Rain</a></li>
            <li><a href="./snow">Snow</a></li>
            <li><a href="./smoke">Smoke</a></li>
            <li><a href="./lava">Lava</a></li>
          </ul> */}
          <canvas className="w-full h-full" id="renderCanvas"></canvas>
        </div>
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
