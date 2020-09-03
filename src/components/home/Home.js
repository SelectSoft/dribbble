import React from "react";
import Topnav from "../navbar/Topnav";
import Footer from "../footer/Footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Topnav />
        <h2>home </h2>
        <Footer />
      </div>
    );
  }
}
export default Home;
