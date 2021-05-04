import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    loadPost();
    setIsLoading(false);
  }, []);

  const loadPost = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(resp.data);
    console.log(resp.data);
  };

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const PagePost = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mt-5">
      <h1 className="text-success text-center mb-5">My Blog</h1>
      {isLoading ? <h1>Loading ...</h1> : ""}
      {PagePost &&
        PagePost.map((post) => {
          return (
            <div key={post.id} className="alert alert-success" role="alert">
              <h1>{post.title}</h1>
              {post.body}
            </div>
          );
        })}
      <Pagination
        postperpage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
