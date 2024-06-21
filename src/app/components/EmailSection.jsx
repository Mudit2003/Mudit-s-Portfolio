"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedinnew-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
       
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
      <h2 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-4xl mb-10">Contact Me</h2>
        <h5 className="text-xl font-bold text-[#120926] my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#120926] mb-4 max-w-md">
          {" "}
          I'm currently exploring new opportunities and would love to hear from you! Whether you have a question, an exciting opportunity, or just want to say hello, my inbox is always open. I genuinely enjoy connecting with new people and building meaningful relationships, so don't hesitate to reach out. I'll do my very best to respond to you as soon as I can. Looking forward to hearing from you!
        </p>
        <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/Mudit2003">
    <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
  </Link>
  <Link href="https://www.linkedin.com/in/muditrai03/">
    <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30} />
  </Link>
</div>

      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-[#120926] block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#f2ba8c] border border-[#33353F] placeholder-[#18191E] text-[#18191E] text-sm rounded-lg block w-full p-2.5"
                placeholder="youremail@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-[#120926] block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#f2ba8c] border border-[#33353F] placeholder-[#18191E] text-[#18191E] text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-[#120926] block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#f2ba8c] border border-[#33353F] placeholder-[#18191E] text-[#18191E] text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;