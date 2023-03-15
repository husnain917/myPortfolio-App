import ContactUsCard from '../../components/contactUsCard/ContactUsCard';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_35ihirp', 'template_28xptpn', form.current, 'IXXfVLkcI3WVcOBG-')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    e.target.reset();
    toast.success("Contact Me Successfully. Please wait for response !");
  };


  return (
    <>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <ToastContainer />
        <div className="container">
          <div className="row">
            {/* card */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 my-4 contact-options">

              <ContactUsCard icon={<MdOutlineEmail className='contact-icon' />} title="Email" autName="honeyansari917@gmail.com" description="mailto:honeyansari917@gmail.com" />

              <ContactUsCard icon={<RiMessageLine className='contact-icon' />} title="Messanger" autName="Muhammad Husnain" description="https://m.me/honey.ansari.5621" />

              <ContactUsCard icon={<BsWhatsapp className='contact-icon' />} title="Whatsapp" autName="+923124543440" description="https://api.whatsapp.com/send?phone=+923124543440" />

            </div>
            {/* form */}
            <div className="col-lg-7 offset-lg-1 col-md-12 col-sm-12 col-xs-12 my-4">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your full Name' name="name" required />

                <input type="email" placeholder='Your Email' name="email" required />

                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

                <button className='btn btn-primary w-50 my-3' type='submit' value={"Send"}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
