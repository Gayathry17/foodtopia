import React from 'react'
import profile_temp from "./profile_temp.jpeg"
function Profile() {
  return (
    <div className="profileContainer">
      <h1 className="profile_header">User Profile</h1>
        <div className="profile_header">
          <img src={profile_temp} alt="profile_pic" />
            <div className="profile-name">
              <h4>Name:</h4>
              <h3>John Doe</h3>
            </div>
            <div className="profile-email">
              <h4>Email:</h4>
              <h3>johndoe@gmail.com</h3>
            </div>
            <div className="profile_username">
              <h4>Username:</h4>
              <h3>John__Doe</h3>
            </div>
            <div className="profile_phone">
              <h4>Phone no:</h4>
              <h3>+91 97461 46820</h3>
            </div>
        </div>
    </div>
  )
}

export default Profile