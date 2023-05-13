import React, { useState, useEffect } from "react";
import "./userOnlineChatStatus.css";

const UserOnlineChat = () => {
  const [userChatStatus, setUserChatStatus] = useState([]);
  const [dropdownShow, setDropdownShow] = React.useState(false);

  const fetchUserForChatStatus = () => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData.users);
        setUserChatStatus(userData.users);
      });
  };

  useEffect(() => {
    fetchUserForChatStatus();
  }, []);

  const dropDownChatBox = () => {
    setDropdownShow((prev) => !prev);
  };

  return (
    <section className="user_chat_status">
      <div>
        <div className="chat-box">
          <div className="chatbox-header" onClick={dropDownChatBox}>
            <i className="fa fa-message"></i>
            <h2>Chats</h2>
          </div>
          {dropdownShow &&
          <div className="chatbox-body">
            {dropdownShow && userChatStatus.map((users) => {
              return (
                <div
                  className="card-details" key={users.id}
                >
                  <img
                    className="img"
                    src={users.profilepicture}
                    alt="user-lists"
                  />
                  <p>{users.name}</p>
                </div>
              );
            })}
          </div>
          }
        </div>
      </div>
    </section>
  );
};

export default UserOnlineChat;
