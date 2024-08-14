import React from "react";
import "./Contact.css";
import { IoIosMail, IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationOutline, IoRemoveOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
// import ContactImg from '../../assets/contact.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d05c52bc-03d7-41c3-84c2-9951ce51f2df");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id="contact">
      <div className="contact px-3">
        <div className="title flex items-center space-x-2">
          <IoRemoveOutline className="title-icon " />
          <span className="title-color">&lt;</span>
          <h1 className="px-3">GET IN TOUCH</h1>{" "}
          <span className="title-color">/&gt;</span>
          <IoRemoveOutline className="title-icon" />
        </div>
        <div className="contact-section md:flex justify-between flex-wrap">

          {/* contact left */}
          <div className="contact-left pt-3 w-full md:w-5/12 pb-5">
            <h1 className=" text-4xl pb-3 font-semibold text-[#8a2387]">
              Let's talk
            </h1>
            <p className="text-[22px] text-[#d8d8d8]">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="contact-details text-[#d8d8d8] pt-6">
              <div className="contact-detail">
                <IoIosMail className="text-[28px] text-[#f27121]" /> <p>nivepatle@gmail.com</p>
              </div>
              <div className="contact-detail">
                <IoLocationOutline className="text-[28px] text-[#f27121]"/> <p>Madhya Pradesh, India</p>
              </div>
              <div className="contact-detail">
                <IoLogoGithub className="text-[28px] mr-4 text-[#f27121]"/>
                <FaLinkedin className="text-[28px] text-[#f27121]"/>
              </div>
            </div>
          </div>

          {/* contact right side */}
          <form onSubmit={onSubmit} className="contact-right w-full md:w-6/12">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="contact-submit flex bg-custom-gradient items-center"
            >
              SEND MESSAGE
              <SiMinutemailer className="text-[19px] ml-2" />
            </button>
          </form>
        </div>
      </div>
      <hr className="text-[#d8d8d8] border-[1px]" />
      <div className="flex justify-between text-[15px] py-4">
        <p>© 2024 Nivedita Patle. All rights reserved.</p>
        <div className="flex ">
          <p className="pr-6">Term Of Services</p>
          <p className="pr-6">Privacy Policy</p>
          <p className="pr-2">Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
