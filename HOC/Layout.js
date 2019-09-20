/**************************************/
/*Our highest ordered component.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import Head from "next/head";

class Layout extends Component {
  render() {
    return (
      <div className="">
        <Head>
          <title>Babylonjs Effects</title>
        </Head>

        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
