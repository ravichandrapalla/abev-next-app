import React from "react";

export default function Component() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px",
          position: "inherit",
          backgroundColor: "transparent",
        }}
      >
        <a
          className="navbar-brand"
          href="https://abev-react.envytheme.com/"
          style={{
            boxSizing: "border-box",
            transition: "0.5s",
            textDecoration: "none",
            whiteSpace: "nowrap",
            marginRight: "1rem",
            color: "rgba(0,0,0,1)",
            padding: "0px",
            fontSize: "inherit",
            lineHeight: 1,
            paddingTop: "0px",
            paddingBottom: "0px",
            outline: "0px",
          }}
        >
          <img
            height={50}
            width={135}
            alt="site logo"
            src="https://abev-react.envytheme.com/images/logo.png"
            style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              maxWidth: "100%",
              height: "auto",
              color: "transparent",
            }}
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            fontFamily: "inherit",
            textTransform: "none",
            appearance: "button",
            transition: "box-shadow 0.15s ease-in-out",
            fontSize: "1.25rem",
            lineHeight: 1,
            color: "rgba(0,0,0,0.65)",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "0px",
            padding: "0px",
            cursor: "pointer",
          }}
        >
          <span
            className="icon-bar top-bar"
            style={{
              boxSizing: "border-box",
              transition: "0.3s",
              background: "rgb(51, 51, 51)",
              borderRadius: "3px",
              width: "35px",
              height: "4px",
              display: "block",
              transformOrigin: "10% 10%",
              position: "relative",
              transform: "rotate(0deg)",
              left: "0px",
            }}
          />
          <span
            className="icon-bar middle-bar"
            style={{
              boxSizing: "border-box",
              transition: "0.3s",
              background: "rgb(51, 51, 51)",
              borderRadius: "3px",
              width: "35px",
              height: "4px",
              display: "block",
              margin: "5px 0px",
              opacity: 1,
            }}
          />
          <span
            className="icon-bar bottom-bar"
            style={{
              boxSizing: "border-box",
              transition: "0.3s",
              background: "rgb(51, 51, 51)",
              borderRadius: "3px",
              width: "35px",
              height: "4px",
              display: "block",
              transformOrigin: "10% 90%",
              position: "relative",
              transform: "rotate(0deg)",
              left: "0px",
              marginTop: "6px",
            }}
          />
        </button>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse mean-menu"
          style={{
            boxSizing: "border-box",
            flexBasis: "100%",
            flexGrow: 1,
            alignItems: "center",
            display: "none",
          }}
        >
          <ul
            className="navbar-nav"
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "0px",
              marginBottom: "0px",
              listStyleType: "none",
              marginLeft: "auto",
              borderTop: "1px solid rgb(238, 238, 238)",
              marginTop: "15px",
              paddingTop: "5px",
              overflowY: "auto",
              maxHeight: "70vh",
              paddingRight: "15px",
            }}
          >
            <li
              className="nav-item"
              style={{
                boxSizing: "border-box",
                position: "relative",
                margin: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <a
                className="dropdown-toggle nav-link"
                href="https://abev-react.envytheme.com/app/#"
                style={{
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  paddingRight: "18px",
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Home
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  listStyle: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "#212529",
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "10px 0px",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: "0.2s ease-in-out",
                  left: "0px",
                  zIndex: 99,
                  display: "block",
                  paddingLeft: "0px",
                  backgroundClip: "",
                  backgroundColor: "",
                  border: "1px solid rgb(238, 238, 238)",
                  position: "static",
                  visibility: "visible",
                  opacity: 1,
                  top: "0px",
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "0px",
                  boxShadow: "none",
                }}
              >
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    IT Startup
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/business/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Business
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link active"
                    href="https://abev-react.envytheme.com/app/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      color: "#ff004d",
                      outline: "0px",
                    }}
                  >
                    App
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/insurance/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Insurance
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/property/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Property
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/big-data/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Big Data
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/distance-learning/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Distance Learning
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/chatbot/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Chatbot
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/software/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Software
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/medical/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Medical
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                boxSizing: "border-box",
                position: "relative",
                margin: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <a
                className="dropdown-toggle nav-link"
                href="https://abev-react.envytheme.com/app/#"
                style={{
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  paddingRight: "18px",
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Pages
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  listStyle: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "#212529",
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "10px 0px",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: "0.2s ease-in-out",
                  left: "0px",
                  zIndex: 99,
                  display: "block",
                  paddingLeft: "0px",
                  backgroundClip: "",
                  backgroundColor: "",
                  border: "1px solid rgb(238, 238, 238)",
                  position: "static",
                  visibility: "visible",
                  opacity: 1,
                  top: "0px",
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "0px",
                  boxShadow: "none",
                }}
              >
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/about-us/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    About Us (IT Startup)
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/about-us-2/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    About Us (Insurance)
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/team/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Team
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/testimonials/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Testimonials
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/courses/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Courses
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/pricing/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/features/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Features
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/authentication/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Login/Register
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/lost-password/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Forgot Password
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/faq/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Faq
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/terms-conditions/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/privacy-policy/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/coming-soon/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Coming Soon
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/srf/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    404 Error Page
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/thank-you/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Thank You
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                boxSizing: "border-box",
                position: "relative",
                margin: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <a
                className="dropdown-toggle nav-link"
                href="https://abev-react.envytheme.com/app/#"
                style={{
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  paddingRight: "18px",
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Portfolio
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  listStyle: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "#212529",
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "10px 0px",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: "0.2s ease-in-out",
                  left: "0px",
                  zIndex: 99,
                  display: "block",
                  paddingLeft: "0px",
                  backgroundClip: "",
                  backgroundColor: "",
                  border: "1px solid rgb(238, 238, 238)",
                  position: "static",
                  visibility: "visible",
                  opacity: 1,
                  top: "0px",
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "0px",
                  boxShadow: "none",
                }}
              >
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/portfolio/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Classic Two Column
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/portfolio/2/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Modern Two Column
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/portfolio/details/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Portfolio Details
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                boxSizing: "border-box",
                position: "relative",
                margin: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <a
                className="dropdown-toggle nav-link"
                href="https://abev-react.envytheme.com/app/#"
                style={{
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  paddingRight: "18px",
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  listStyle: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "#212529",
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "10px 0px",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: "0.2s ease-in-out",
                  left: "0px",
                  zIndex: 99,
                  display: "block",
                  paddingLeft: "0px",
                  backgroundClip: "",
                  backgroundColor: "",
                  border: "1px solid rgb(238, 238, 238)",
                  position: "static",
                  visibility: "visible",
                  opacity: 1,
                  top: "0px",
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "0px",
                  boxShadow: "none",
                }}
              >
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/services/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Services Style 01
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/services/2/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Services Style 02
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/services/3/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Services Style 03
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/services/4/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Services Style 04
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/services/details/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Service Details
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                boxSizing: "border-box",
                position: "relative",
                margin: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <a
                className="dropdown-toggle nav-link"
                href="https://abev-react.envytheme.com/app/#"
                style={{
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  paddingRight: "18px",
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Blog
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  listStyle: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "#212529",
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "10px 0px",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: "0.2s ease-in-out",
                  left: "0px",
                  zIndex: 99,
                  display: "block",
                  paddingLeft: "0px",
                  backgroundClip: "",
                  backgroundColor: "",
                  border: "1px solid rgb(238, 238, 238)",
                  position: "static",
                  visibility: "visible",
                  opacity: 1,
                  top: "0px",
                  width: "100%",
                  marginBottom: "10px",
                  marginTop: "0px",
                  boxShadow: "none",
                }}
              >
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Grid
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/left-sidebar/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Left Sidebar
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/right-sidebar/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Right Sidebar
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/special/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Special
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/details/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Details Style 01
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/details/2/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Details Style 02
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/details/3/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Blog Details Style 03
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/author/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Author
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/categories/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Categories
                  </a>
                </li>
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <a
                    className="nav-link"
                    href="https://abev-react.envytheme.com/blog/tags/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: "0px 0px",
                      border: "0px",
                      transition: "0.5s",
                      display: "block",
                      position: "relative",
                      color: "#1d2b53",
                      fontWeight: 500,
                      padding: "7px 15px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      fontSize: "14px",
                      outline: "0px",
                    }}
                  >
                    Tags
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                boxSizing: "border-box",
                position: "relative",
                margin: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <a
                className="nav-link"
                href="https://abev-react.envytheme.com/contact/"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Contact
              </a>
            </li>
            <li
              className="nav-item megamenu"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                position: "inherit",
              }}
            >
              <a
                className="dropdown-toggle nav-link"
                href="https://abev-react.envytheme.com/app/#"
                style={{
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  background: "0px 0px",
                  border: "0px",
                  display: "block",
                  transition: "0.5s",
                  padding: "30px 0px",
                  position: "relative",
                  color: "#1d2b53",
                  fontWeight: 600,
                  paddingRight: "18px",
                  fontSize: "14px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  outline: "0px",
                }}
              >
                Features
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  listStyle: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "#212529",
                  textAlign: "left",
                  listStyleType: "none",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: "0.2s ease-in-out",
                  zIndex: 99,
                  display: "block",
                  backgroundClip: "",
                  backgroundColor: "",
                  border: "1px solid rgb(238, 238, 238)",
                  visibility: "visible",
                  opacity: 1,
                  marginBottom: "10px",
                  boxShadow: "none",
                  left: "0px",
                  top: "auto",
                  width: "100%",
                  marginTop: "0px",
                  padding: "10px 0px",
                  position: "static",
                  paddingLeft: "0px",
                  transform: "unset",
                }}
              >
                <li
                  className="nav-item"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "0px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <div
                    className="container"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      paddingRight: "calc(1.5rem * .5)",
                      paddingLeft: "calc(1.5rem * .5)",
                      marginRight: "auto",
                      marginLeft: "auto",
                      position: "relative",
                      display: "block",
                      flexWrap: "unset",
                      alignItems: "unset",
                      justifyContent: "unset",
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "calc(-1 * 0)",
                        marginRight: "calc(-.5 * 1.5rem)",
                        marginLeft: "calc(-.5 * 1.5rem)",
                      }}
                    >
                      <div
                        className="col-12 col-sm-6 col-md-3 mtb-5"
                        style={{
                          boxSizing: "border-box",
                          maxWidth: "100%",
                          paddingRight: "calc(1.5rem * .5)",
                          paddingLeft: "calc(1.5rem * .5)",
                          flex: "0 0 auto",
                          flexShrink: 0,
                          width: "100%",
                          margin: "8px 0px",
                          marginTop: "8px",
                        }}
                      >
                        <ul
                          className="megamenu-submenu"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            paddingLeft: "0px",
                            marginBottom: "0px",
                            listStyleType: "none",
                          }}
                        >
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/services/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                marginTop: "0px",
                                outline: "0px",
                              }}
                            >
                              Services Style 01
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/services/2/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Services Style 02
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/services/3/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Services Style 03
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/services/4/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Services Style 04
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/services/details/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Services Details
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-3 mtb-5"
                        style={{
                          boxSizing: "border-box",
                          maxWidth: "100%",
                          paddingRight: "calc(1.5rem * .5)",
                          paddingLeft: "calc(1.5rem * .5)",
                          flex: "0 0 auto",
                          flexShrink: 0,
                          width: "100%",
                          margin: "8px 0px",
                          marginTop: "8px",
                        }}
                      >
                        <ul
                          className="megamenu-submenu"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            paddingLeft: "0px",
                            marginBottom: "0px",
                            listStyleType: "none",
                          }}
                        >
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/features/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                marginTop: "0px",
                                outline: "0px",
                              }}
                            >
                              Features
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/team/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Team
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/pricing/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Pricing
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/courses/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Courses
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/courses/details/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Courses Details
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-3 mtb-5"
                        style={{
                          boxSizing: "border-box",
                          maxWidth: "100%",
                          paddingRight: "calc(1.5rem * .5)",
                          paddingLeft: "calc(1.5rem * .5)",
                          flex: "0 0 auto",
                          flexShrink: 0,
                          width: "100%",
                          margin: "8px 0px",
                          marginTop: "8px",
                        }}
                      >
                        <ul
                          className="megamenu-submenu"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            paddingLeft: "0px",
                            marginBottom: "0px",
                            listStyleType: "none",
                          }}
                        >
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/blog/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                marginTop: "0px",
                                outline: "0px",
                              }}
                            >
                              Blog Grid
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/blog/left-sidebar/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Blog Left Sidebar
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/blog/right-sidebar/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Blog Right Sidebar
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/blog/special/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Blog Special
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{
                              boxSizing: "border-box",
                              position: "relative",
                              margin: "0px",
                              marginRight: "0px",
                              marginLeft: "0px",
                            }}
                          >
                            <a
                              className="nav-link false"
                              href="https://abev-react.envytheme.com/blog/details/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                background: "0px 0px",
                                border: "0px",
                                transition: "0.5s",
                                position: "relative",
                                padding: "0px",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                marginTop: "17px",
                                display: "inline-block",
                                color: "#1d2b53",
                                fontWeight: 500,
                                fontSize: "14px",
                                outline: "0px",
                              }}
                            >
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="col-12 col-sm-6 col-md-3 mtb-5"
                        style={{
                          boxSizing: "border-box",
                          maxWidth: "100%",
                          paddingRight: "calc(1.5rem * .5)",
                          paddingLeft: "calc(1.5rem * .5)",
                          flex: "0 0 auto",
                          flexShrink: 0,
                          width: "100%",
                          margin: "8px 0px",
                          marginTop: "8px",
                        }}
                      >
                        <a
                          className="d-block p-0"
                          href="https://abev-react.envytheme.com/courses/"
                          style={{
                            boxSizing: "border-box",
                            transition: "0.5s",
                            color: "#616b7e",
                            textDecoration: "none",
                            outline: "0px",
                            display: "block",
                            padding: "0px",
                          }}
                        >
                          <img
                            height={520}
                            width={860}
                            alt="image"
                            src="https://abev-react.envytheme.com/images/navbar.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              maxWidth: "100%",
                              height: "auto",
                              color: "transparent",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="others-option"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            position: "absolute",
            marginLeft: "0px",
            top: "12px",
            right: "45px",
          }}
        >
          <a
            className="btn-style-one red-light-color"
            href="https://abev-react.envytheme.com/pricing/"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              borderRadius: "5px",
              transition: "0.5s",
              border: "1px solid #1d2b53",
              position: "relative",
              display: "inline-block",
              fontWeight: 500,
              borderColor: "#ff004d",
              backgroundColor: "#ff004d",
              color: "#fff",
              padding: "6px 10px",
              fontSize: "10px",
              outline: "0px",
            }}
          >
            Download Now{" "}
            <i
              className="bx bx-chevron-right"
              style={{
                boxSizing: "border-box",
                fontVariant: "normal",
                fontWeight: 400,
                fontStyle: "normal",
                fontFeatureSettings: "normal",
                lineHeight: 1,
                textRendering: "auto",
                textTransform: "none",
                speak: "none",
                WebkitFontSmoothing: "antialiased",
                transform: "translateY(-50%)",
                position: "absolute",
                top: "50%",
                fontSize: "23px",
                right: "20px",
                display: "none",
                fontFamily: "boxicons",
              }}
            />
          </a>
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.5;
  text-align: var(--bs-body-text-align);
  background-color: #fff;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  margin: 0px;
  padding: 0px;
  color: #1d2b53;
  font-family: "__Be_Vietnam_Pro_31ed93","__Be_Vietnam_Pro_Fallback_31ed93";
  font-size: 14px;
}
`,
        }}
      />
    </>
  );
}
