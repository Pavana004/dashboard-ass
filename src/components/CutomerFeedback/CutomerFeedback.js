import React from "react";
import "../CutomerFeedback/cutomerFeedback.css";
import feedBack from "../../container/feedBack.json";
import ReactStars from "react-rating-stars-component";

const CutomerFeedback = () => {
  return (
    <div className="feedBackContainer">
      <div className="tltleContainer">
        <h6>Customer Feedback</h6>
      </div>
      <div className="commentSection">
        {feedBack.map((res) => {
          return (
            <div key={res.id} className="commentBox">
              <div className="commentHeader">
                <div className="commentUser">
                  <img src={res.profilepicture} alt="user" />
                  <h6>{res.name}</h6>
                </div>
              </div>
              <div className="ratingContainer">
                <ReactStars value={res.rating} size={20} edit={false} />
              </div>
              <div className="commentBody">
                <p>{res.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CutomerFeedback;
