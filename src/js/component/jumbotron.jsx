import React from "react";

const Jumbotron = () => {
  //<></> se conocen como React Fragment
  return (
    <>
      <div className="pb-5 px-4 mb-4 bg-light rounded-3">
        <div className="container-fluid">
          <h1 className="display-2 mx-0">A Warm Welcome</h1>
          <p className="fs-5">
            Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action!
          </button>
        </div>
      </div>
    </>
  );
};
export default Jumbotron;