import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./Utils/ProductData";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faheartpulse } from "@fortawesome/fontawesome-free-solid";

import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./productDetails/ProductDetails";
import Topbar from "./Topbar/Topbar";

class App extends Component {
  state = {
    ProductData: ProductData,
    // currentPreviewImage: "https://imgur.com/xSIK4M8.png",
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  };

  onColorOptionClick = (pos) => {
    // const updatedPreviewImage =
    //   this.state.ProductData.colorOptions[pos].imageUrl;
    // console.log(updatedPreviewImage);
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    // let updatedState = false;
    // if (pos === 1) {
    //   updatedState = true;
    // }
    this.setState({ currentSelectedFeature: pos });
  };

  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.ProductData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.ProductData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
