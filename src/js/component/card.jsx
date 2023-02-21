import React from "react";

const Card = () => {
  //<></> se conocen como React Fragment
  return (
    <>
      <div className="card m-2 mb-3 p-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          className="img-fluid"
          alt="Card-Image"
        />
        <div className="card-body p-0 m-0 text-center">
          <h5 className="card-title m-2">Card title</h5>
          <p className="card-text m-2">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="card-footer border-top border-secondary px-2 py-3">
            <a href="#" className="btn btn-primary px-3 py-2">
            Find Out More!
          </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;