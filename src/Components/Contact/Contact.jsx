import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            We believe a good <br /> place to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* firstRow */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">9593189913</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Call Now
                </div>
              </div>

              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">9593189913</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Chat Now
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
                {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Chat</span>
                    <span className="secondaryText">9593189913</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Vidoe Chat Now
                </div>
              </div>

              {/* Fourth Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">9593189913</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Message Now
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
