"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.user_name);
    emailjs
      .sendForm("service_portfolio", "template_portfolio", form.current, {
        publicKey: "Utc_5KN_0wKaC85T0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert("Message envoyé :)");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <motion.div
      className="h-full w-full flex flex-col md:flex-row gap-3 justify-center items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[95%]   md:h-[95%] w-[95%] md:bg-jaunePale md:rounded-md md:bg-opacity-90 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col md:flex-row gap-24 md:gap-20 lg:gap-32  lg:pr-0 overflow-y-auto ">
        {/* Texte : Visible sur tous les écrans */}
        <div className="w-full h-auto flex flex-col gap-6 justify-center items-center px-4 md:px-0 md:w-[50%] md:border-r-2  md:border-gray-500">
          <h2 className="text-2xl md:text-4xl  font-title text-center text-gray-800">
            Discutons ensemble !!
          </h2>
          <div className="h-auto flex justify-center">
            <p className="w-full text-justify text-sm md:text-2xl font-sans md:w-[80%]  text-black">
              Merci de visiter mon portfolio. Je suis actuellement à la
              recherche de nouvelles opportunités professionnelles dans le
              domaine du développement, de la recherche ou de la technologie. Si
              vous êtes intéressé(e) par mon profil ou si vous avez des
              propositions de collaboration, je serais ravi de discuter de
              nouvelles perspectives. Contactez-moi pour plus
              d&#39;informations.
              <br />
              <br />
              Mon Numero : 0628611315
              <br />
              Mon email : ilyes.reguig23000@gmail.com
              <br />
            </p>
          </div>
        </div>

        {/* Formulaire : Visible en mobile et centré en écran large */}
        <div className="w-full h-auto flex justify-center items-center px-4 md:px-0 md:w-[50%]">
          <form
            ref={form}
            className="w-full max-w-lg px-6 py-8 shadow-md border-black rounded-md border-solid border-2"
            onSubmit={sendEmail}
            style={{ backgroundColor: "rgba(224, 219, 204, 0.8)" }}
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="from_name"
                id="floating_first_name"
                className="block py-3 px-0 w-full font-sans  text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium font-sans absolute text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="user_email"
                id="floating_email"
                className="block py-3 px-0 w-full text-lg font-sans text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-lg font-sans text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Email address
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium font-sans text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full p-3 text-lg text-gray-900 font-sans bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-primary font-raleway hover:bg-primary focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-auto px-6 py-3 text-center"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
