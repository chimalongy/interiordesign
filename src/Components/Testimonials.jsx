import React, { useRef } from "react";
import "../Styles/Testimonials.css";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; 

  function slideForward() {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  function slideBackward() {
    if (tx < 0) {
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={ slideForward }
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={() => {
          slideBackward();
        }}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Wiliam Jackson</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus excepturi, ab cum nisi laudantium dicta similique, ea
                corporis beatae labore explicabo quaerat nobis repellat nulla!
                Incidunt quae error ex molestias.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Wiliam Jackson</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus excepturi, ab cum nisi laudantium dicta similique, ea
                corporis beatae labore explicabo quaerat nobis repellat nulla!
                Incidunt quae error ex molestias.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Wiliam Jackson</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus excepturi, ab cum nisi laudantium dicta similique, ea
                corporis beatae labore explicabo quaerat nobis repellat nulla!
                Incidunt quae error ex molestias.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Wiliam Jackson</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus excepturi, ab cum nisi laudantium dicta similique, ea
                corporis beatae labore explicabo quaerat nobis repellat nulla!
                Incidunt quae error ex molestias.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
