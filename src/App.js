import "./App.css";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import error from "./assests/error.gif";
import Cookies from "js-cookie";

function RedirectComponent() {
  const width = window.innerWidth;
  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");

  useEffect(() => {
    if (width >= 800) {
      const email = Cookies.get("user_email");
      if (!email) {
        // console.log(email);
        window.location.href = "https://upskillmafia.com/dashboard";
      } else {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.upskillmafia.com/api/v1/user/update-streak?email=${email}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();

            // Check if fetch was successful (you might need to adjust this condition based on your API response structure)
            if (data.success) {
              if (room) {
                window.location.href = `https://cosmos.video/v/6qqo-919q-tsug/office/r/${room}`;
              } else {
                window.location.href =
                  "https://cosmos.video/v/6qqo-919q-tsug/office";
              }
            }
          } catch (error) {
            alert("something went wrong....Please try again!!!");
          }
        };

        fetchData();
      }
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function RedirectComponentE2() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/h8tj-5ba4-9p8c/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/h8tj-5ba4-9p8c/office`;
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function RedirectComponentE3() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/hjfk-gmod-pgxg/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/hjfk-gmod-pgxg/office`;
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}

function RedirectComponentE4() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/wgay-85i4-1kiv/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/wgay-85i4-1kiv/office`;
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function RedirectComponentL2() {
  const width = window.innerWidth;

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("room");
  useEffect(() => {
    if (width >= 800) {
      if (room)
        window.location.href = `https://cosmos.video/v/qxt1-i1v1-syyp/office/r/${room}`;
      else
        window.location.href = `https://cosmos.video/v/qxt1-i1v1-syyp/office`;
    }
  }, [width, room]);

  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}

function RedirectComponent2() {
  const width = window.innerWidth;
  useEffect(() => {
    if (width >= 800) {
      const email = Cookies.get("user_email");
      if (!email) {
        window.location.href = "https://upskillmafia.com/dashboard/stage";
      } else {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.upskillmafia.com/api/v1/user/update-streak?email=${email}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();

            if (data.success) {
              window.location.href =
                "https://cosmos.video/v/6qqo-919q-tsug/office/r/stage";
            }
          } catch (error) {
            alert("something went wrong....Please try again!!!");
          }
        };

        fetchData();
      }
    }
  }, [width]);
  if (width < 800) {
    return (
      <>
        <div className="mobile-error-cont">
          <img src={error} alt="error" />
          <h1 className="mobile-error">
            Please Open The Link From Your{" "}
            <span style={{ color: "yellow" }}>Laptop or PC</span>
          </h1>
          <h2 className="mobile-error">( It Won't Open on Mobile Phones )</h2>
        </div>
      </>
    );
  }
  return null;
}
function Whatsapp() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/DK3fm2aMg5sBV5uOKXLKY6";
  }, []);
  return null;
}
function Communityy() {
  useEffect(() => {
    window.location.href = "https://chat.whatsapp.com/HwuJjlNENcZ5tTbxMpv1Ov";
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/campus" element={<RedirectComponent />} />
        <Route path="/campus/stage" element={<RedirectComponent2 />} />
        <Route
          path="/campus/eventhall2"
          element={<RedirectComponentE2 />}
        />
        <Route
          path="/campus/eventhall3"
          element={<RedirectComponentE3 />}
        />
        <Route
          path="/campus/eventhall4"
          element={<RedirectComponentE4 />}
        />
        <Route
          path="/campus/learninghall2"
          element={<RedirectComponentL2 />}
        />

        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/community" element={<Communityy />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
