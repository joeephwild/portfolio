import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onsubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      contactData.fullName.trim() !== "" &&
      contactData.email.trim() !== "" &&
      contactData.message.trim() !== ""
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_qahpg74",
          "template_uo2cypj",
          e.target as HTMLFormElement,
          "PpYizBK7kzYxa_r4X"
        )
        .then(
          (result) => {
            alert(
              "Message Sent, We will get back to you shortly" + result.text
            );
          },
          (error) => {
            alert("An error occurred, Please try again" + error.text);
          }
        )
        .finally(() => setLoading(false));
    } else {
      alert("some fields must not be empty!");
    }
  };
  return (
    <div className="flex-col">
      <div className="flex flex-col my-12 mx-9 rounded-lg items-center bg-[#b1dd40]">
        <span className="md:text-4xl text-3xl font-Panchang-Semibold uppercase text-black  w-[80%] py-8 text-center">
          A creative mind knows how to do the right thing at the right place and
          at the right time.
        </span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-8 items-center space-x-12">
        <span className="font-Panchang-Semibold text-3xl flex items-center justify-center w-full h-full">
          Let collaborate and <br /> create stuff together
        </span>
        <div>
          <form
            onSubmit={onsubmit}
            action=""
            className="flex flex-col w-full h-full my-3 mx-6"
          >
            <div className="flex flex-col mx-7 my-5">
              <label htmlFor="">Name</label>
              <input
                type="text"
                onChange={onChange}
                name="fullName"
                value={contactData.fullName}
                placeholder='FullName'
                className="border-non bg-transparent border-2 px-4 py-2 rounded-lg placeholder:text-[#b1dd40] border-[#b1dd40] outline-none"
              />
            </div>
            <div className="flex flex-col mx-7 my-5">
              <label htmlFor="">Email</label>
              <input
                onChange={onChange}
                name="email"
                value={contactData.email}
                type="text"
                placeholder="Enter a valid email"
                className="border-non bg-transparent border-2 px-4 py-2 rounded-lg placeholder:text-[#b1dd40] border-[#b1dd40] outline-none"
              />
            </div>
            <div className="flex flex-col mx-7 my-5">
              <label htmlFor="">Subject</label>
              <input
                onChange={onChange}
                name="subject"
                value={contactData.subject}
                type="text"
                placeholder="Subject"
                className="border-non bg-transparent border-2 px-4 py-2 rounded-lg placeholder:text-[#b1dd40] border-[#b1dd40] outline-none"
              />
            </div>
            <div className="flex flex-col mx-7 my-5">
              <label htmlFor="">Message</label>
              <textarea
                onChange={onChange}
                name="message"
                value={contactData.message}
                className="border-non bg-transparent border-2 px-4 py-2 rounded-lg placeholder:text-[#b1dd40] border-[#b1dd40] outline-none"
                placeholder="Enter message"
              />
            </div>
            <button className="bg-[#b1dd40] w-[50%] text-[#111606] flex items-center justify-center px-4 py-2 my-9 rounded-lg">
              {loading ? "loading ..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
