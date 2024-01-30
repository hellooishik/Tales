import React from "react";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Navbar from "./Navbar"; // Adjust the path and file name
import PostDetail from "./postDetail"; // Adjust the path and file name

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={PostDetail} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
