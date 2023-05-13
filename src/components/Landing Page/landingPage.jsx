import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./landingPage.css";

const LandingPage = () => {
  const [userList, setUserList] = useState([]);

  const displayOnlyUserListOnPage = () => {
    fetch("https://panorbit.in/api/users.json")
      .then(response => response.json())
      .then(userData => {
        // console.log(detailsArray);
        setUserList(userData.users);
      });
  };

  useEffect(() => {
    displayOnlyUserListOnPage();
  }, []);
  


  return (
    <section className="landing_page_bg">
        <div className="card-box">
            <div className="card-header">
                <h2>Select an account</h2>
            </div>
            <div className="card-body">
                {
                    userList.map((users) => {
                        return(
                            <Link to={`/userDetailsPage/${users.id}`} className="card-details">
                                <img className="img" src={users.profilepicture} alt="user-lists"/>
                                <p>{users.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
  );
};

export default LandingPage;