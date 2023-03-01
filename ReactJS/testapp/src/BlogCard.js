import React from "react";

import { dumpLogs } from "./Utils";
import "./Blogcard.css";
import classes from "./BlogCard.module.css";

const BlogCard = (props) => {
  // onLikeBtnClick = () => {
  //   setState((prevState, prevProps) => {
  //     return { likeCount: prevState.likeCount + 1 };
  //   });
  // };

  dumpLogs(props);
  return (
    <div className={classes.BlogCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
        Like Count: <span className={classes.LikeCount}>{props.likeCount}</span>
      </p>
      <button onClick={props.onLikeBtnClick}>Like</button>
    </div>
  );
};

export default BlogCard;
