import logo from "./logo.svg";
import BlogItem from "./BlogCard";
import { isArrayEmpty } from "./Utils";
import "./App.css";

function App() {
  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      Description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Blog Title 2",
      Description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      title: "Blog Title 2",
      Description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
  ];

  const blogCards = isArrayEmpty(blogArr)
    ? []
    : blogArr.map((item, pos) => {
        console.log(item);
        return (
          <BlogItem
            key={pos}
            className={"Blog"}
            title={item.title}
            description={item.Description}
          />
          // <div className="BlogCard" key={item.id}>
          //   <h3>{item.title}</h3>
          //   <p>{item.Description}</p>
          // </div>
        );
      });

  return <div className="App">{blogCards}</div>;
}

export default App;
