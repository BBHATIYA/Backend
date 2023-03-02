import React from "react";

import classes from "./ProductPreview.module.css";
import Heart from "../Images/Heart.png";

const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();

  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="Product Preview" />

      {props.currentSelectedFeature === 1 ? (
        <div className={classes.HearBeatSection}>
          <img
            src={Heart}
            style={{ width: "50px", borderRadius: "10px", color: "red" }}
          />
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${currentHour}:${currentMinute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
