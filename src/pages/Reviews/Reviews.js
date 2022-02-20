import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import StarRating from "./StarRating.js";
import "./Reviews.css";
import firebase from "firebase/compat/app";

import { db } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";

function Reviews() {
  const [review, setReview] = useState("");
  const [info, setInfo] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
        
    var userRef = db.collection("users").doc(currentUser.uid);
    userRef.get().then((doc) => {
        if (doc.exists) {
            setInfo(doc.data());
        } 
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  
  db.collection('reviews').orderBy('createdAt', 'desc').onSnapshot(snapshot => (
    setReviews(
        snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        }))
    )
)) 

  }, [id, currentUser.uid])





  const submitReview = (e) => {
    e.preventDefault()
    if(review) {
        db.collection('reviews').add({
            review: review,
            username: info.username,
            profilePic: info.profilePhoto,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    } else {
        alert('Enter Review :)')
    }

    setReview('')
}


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
          <form className='reviews_form' onSubmit={submitReview}>
            <input value={review} onChange={(e) => setReview(e.target.value)} type="text" className='review_input' />
            <div className="submit_button">
              <button type="submit">Submit</button>
            </div>
          </form>

      </div>
      <div className='reviews_container'>
            { reviews.map((review) => (
                <div className="reviewCard" key={review.id}>
                  <img src={review.data.profilePic ? review.data.profilePic : 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='} alt="" />
                  <div className="reviewCard__info">
                    <h1>{review.data.username}</h1>
                    <p>{review.data.review}</p>
                  </div>
                </div>
            ))}
          </div>
    </div>
  );
}

export default Reviews;
