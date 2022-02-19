import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import StarRating from "./StarRating.js";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <Link to="/">
        <IoArrowBackOutline className="review_goback" />
      </Link>
      <div className="review_header">
        <h1>Reviews</h1>
      </div>
      <div className="review_border">
        <h2 className="text1">Add your review!</h2>
        <StarRating />
        <div className="review_text">
          <input className="review_input" type="text"></input>
        </div>
        <div className="submit_button">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
