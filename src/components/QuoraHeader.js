import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { ExpandMore, Search } from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./css/QuoraHeader.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const Close = <CloseIcon />;

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsNoneOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search Questions"></input>
        </div>
        <div className="qHeader__Rem">
          <Avatar />
        </div>
        <div>
          <Button onClick={() => setIsModalOpen(true)}>Ask Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            style={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar className="avatar" />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                type="text"
                placeholder="Start your question with 'What', 'How','Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inlcude a link that gives context"
                />
                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="display"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
