// import React from "react";

import { dumpLogs } from "./Utils";
import "./Blogcard.css";
import classes from "./BlogCard.module.css";

const BlogCard = (props) => {
  dumpLogs(props);
  return (
    <div className={classes.BlogCard}>
      <h3>Blog Title</h3>
      <p>Blog Description</p>
    </div>
  );
};

export default BlogCard;
