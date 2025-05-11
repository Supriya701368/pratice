import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BackButtonHandler() {
  const [showPopup, setShowPopup] = useState(false);
  const [preventNavigation, setPreventNavigation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event) => {
      if (!preventNavigation) {
        setShowPopup(true);
        setPreventNavigation(true);
        // Push current location again to cancel the back navigation
        window.history.pushState(null, null, window.location.pathname);
      }
    };

    // Push a dummy state to detect back button
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [preventNavigation]);

  const handleConfirm = () => {
    setShowPopup(false);
    setPreventNavigation(false);
    navigate("/login"); // Navigate to login or another route after confirmation
  };

  const handleCancel = () => {
    setShowPopup(false);
    setPreventNavigation(false);
  };

  return (
    <>
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <p>Are you sure you want to logout?</p>
            <div style={buttonContainerStyle}>
              <button onClick={handleConfirm} style={yesButtonStyle}>Yes</button>
              <button onClick={handleCancel} style={noButtonStyle}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  minWidth: "300px",
};

const buttonContainerStyle = {
  marginTop: "20px",
};

const yesButtonStyle = {
  backgroundColor: "green",
  color: "#fff",
  padding: "10px 20px",
  marginRight: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const noButtonStyle = {
  backgroundColor: "red",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
