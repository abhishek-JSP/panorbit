import React from "react";
import { useParams } from "react-router-dom";
import "./userDetailsPage.css";
import { Link } from "react-router-dom";
import ComingSoon from "./comingSoon";
import UserOnlineChat from "../ChatBox/userOnlineChatStatus";

const ShowUserDetailsOnPageWhenClicked = () => {
  const [getSelecteduser, getSetSelectedUser] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState();
  const { selecteduserid } = useParams();
  const [dropdownShow, setDropdownShow] = React.useState(false);
  const [headerLink, setheaderLink] = React.useState("Profile");
  const [profile, setProfile] = React.useState(false);

  const fetchSelectedUser = () => {
    fetch(`https://panorbit.in/api/users.json`)
      .then((response) => response.json())
      .then((userData) => {
        getSetSelectedUser(userData.users);
      });
  };

  React.useEffect(() => {
    const res = getSelecteduser.find((user) => user.id == selecteduserid);
    setSelectedUser(res);
  }, [getSelecteduser.length]);

  React.useEffect(() => {
    fetchSelectedUser();
  }, []);

  const cardDropdownUser = (user) => {
    console.log(user);
    setSelectedUser(user);
  };

  // this method use to show the dropdown user profile in header
  const dropdownUserProfile = () => {
    setDropdownShow((prev) => !prev);
  };
  return (
    <>
      <section className="user_details_bg">
        <div className="user-details-main">
          <div className="left-section">
            <p>
              <Link
                onClick={() => {
                  setheaderLink("Profile");
                  setProfile(false);
                }}
                to=""
              >
                Profile
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setheaderLink("Post");
                  setProfile(true);
                }}
                to=""
              >
                Posts
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setheaderLink("Gallery");
                  setProfile(true);
                }}
                to=""
              >
                Gallery
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setheaderLink("To-Do");
                  setProfile(true);
                }}
                to=""
              >
                To-Do
              </Link>
            </p>
          </div>
          <div className="right-section">
            <div className="right-section-header">
              <div className="right-section-header-left-part">
                <p>{headerLink}</p>
              </div>
              <div
                className="right-section-header-right-part"
                onClick={dropdownUserProfile}
              >
                <img
                  className="pro_pic"
                  id="dropbtn"
                  src={selectedUser && selectedUser.profilepicture}
                />
                <p id="dropbtn">{selectedUser && selectedUser.name}</p>
                {dropdownShow && (
                  <div className="dropdown_content" id="myDropdown">
                    <div className="content_dropdown_map">
                      {dropdownShow &&
                        getSelecteduser.map((selectedUser) => {
                          return (
                            <div
                              onClick={cardDropdownUser.bind(
                                this,
                                selectedUser
                              )}
                              key={selectedUser.id}
                              className="selected_user"
                            >
                              <img
                                className="pro_pic"
                                id="dropbtn"
                                src={selectedUser.profilepicture}
                              />
                              <p id="dropbtn">{selectedUser.name}</p>
                            </div>
                          );
                        })}
                    </div>
                    <Link to="/">
                      <button className="button button1">Sign-out</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {profile ? (
              <ComingSoon />
            ) : (
              <div className="right-section-user-profile">
                <div className="right-section-user-profile-left-part">
                  <img
                    className="main_logo"
                    src={selectedUser && selectedUser.profilepicture}
                  />
                  <p className="user_name">
                    {selectedUser && selectedUser.name}
                  </p>
                  <div className="right-section-user-profile-left-part-up">
                    <div className="left_details">
                      <p>Username :</p>
                      <p>E-Mail :</p>
                      <p>Phone :</p>
                      <p>Website :</p>
                    </div>
                    <div className="right_details">
                      <p className="text">
                        {" "}
                        {selectedUser && selectedUser.name}{" "}
                      </p>
                      <p className="text">
                        {" "}
                        {selectedUser && selectedUser.email}
                      </p>
                      <p className="text">
                        {" "}
                        {selectedUser && selectedUser.phone.substr(0, 13)}
                      </p>
                      <p className="text">
                        {" "}
                        {selectedUser && selectedUser.website}
                      </p>
                    </div>
                  </div>
                  <div className="horizontal-line"></div>
                  <p className="company_name">Company</p>
                  <div className="right-section-user-profile-left-part-down">
                    <div className="left_details">
                      <p>Name : </p>
                      <p>Catchphrase :</p>
                      <p>bs :</p>
                    </div>
                    <div className="right_details">
                      <p className="text2">
                        {" "}
                        {selectedUser && selectedUser.company.name}{" "}
                      </p>
                      <p className="text2">
                        {" "}
                        {selectedUser && selectedUser.company.catchPhrase}
                      </p>
                      <p className="text2">
                        {selectedUser && selectedUser.company.bs}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-section-user-profile-centre-part-vertical-line"></div>
                <div className="right-section-user-profile-right-part">
                  <p className="address">Address :</p>
                  <div className="user_address">
                    <div className="left_details">
                      <p className="p">Street :</p>
                      <p className="p">Suite :</p>
                      <p className="p">City :</p>
                      <p className="p">Zipcode :</p>
                    </div>
                    <div className="right_details">
                      <p className="text2">
                        {" "}
                        {selectedUser && selectedUser.address.street}{" "}
                      </p>
                      <p className="text2">
                        {" "}
                        {selectedUser && selectedUser.address.suite}
                      </p>
                      <p className="text2">
                        {selectedUser && selectedUser.address.city}
                      </p>
                      <p className="text2">
                        {selectedUser && selectedUser.address.zipcode}
                      </p>
                    </div>
                  </div>
                  <div>
                  <img src="https://wallpapercave.com/wp/wp4989551.jpg" id="map_image"/>
                  </div>
                </div>
              </div>
            )}
              <div className="chat_box">
              <UserOnlineChat />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowUserDetailsOnPageWhenClicked;
