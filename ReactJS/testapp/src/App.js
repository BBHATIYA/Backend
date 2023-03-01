import React, { Component } from "react";
import logo from "./logo.svg";
import BlogItem from "./BlogCard";
import { isArrayEmpty } from "./Utils";
import "./App.css";

class App extends Component {
  state = {
    showBlog: true,
    blogArr: [
      {
        id: 1,
        title: "Blog Title 1",
        Description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        likeCount: 0,
      },
      {
        id: 2,
        title: "Blog Title 2",
        Description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        likeCount: 0,
      },
      {
        id: 3,
        title: "Blog Title 2",
        Description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        likeCount: 0,
      },
    ],
  };

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];
    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({ blogArr: updatedBlogList });
  };

  onHideBtnClick = () => {
    let updatedState = !this.state.showBlog;
    this.setState((prevState, prevProps) => {
      return { showBlog: !prevState.showBlog };
    });
    console.log(this.showBlog);
  };

  render() {
    console.log("Render Called");
    console.log(this.state);

    const blogCards = isArrayEmpty(this.state.blogArr)
      ? []
      : this.state.blogArr.map((item, pos) => {
          console.log(item);
          return (
            <BlogItem
              key={pos}
              className={"Blog"}
              title={item.title}
              likeCount={item.likeCount}
              description={item.Description}
              onLikeBtnClick={() => this.onLikeBtnClick(pos)}
            />
            // <div className="BlogCard" key={item.id}>
            //   <h3>{item.title}</h3>
            //   <p>{item.Description}</p>
            // </div>
          );
        });

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>
          {this.state.showBlog ? "Hide List" : "Show List"}
        </button>
        <br></br>
        {this.state.showBlog ? blogCards : null}
      </div>
    );
  }
}

export default App;
