import React from "react"
import {
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"

function Footer() {
  return (
    <div className="footer">
      <div className="start-footer">
        <div className="footer-brand">
          <div className="nav-texts">
            <h2>Food</h2>
            <h3>Mood</h3>
          </div>
          <p>
            Food Mood is an application
            <br /> used to find a variety of famous
            <br /> food and drinks recipes
          </p>
        </div>
        <div className="footer-content">
          <h3>Footer</h3>
          <span>About Us</span>
          <span>Recipe</span>
          <span>Download</span>
          <span>Contact</span>
        </div>
        <div className="footer-content">
          <h3>Comapny</h3>
          <span>Our recipe</span>
          <span>Subscribe Us</span>
          <span>FAQs</span>
        </div>
        <div className="footer-content">
          <h3>Support</h3>
          <span>Account</span>
          <span>Support Center</span>
          <span>Feedback</span>
          <span>Accessibility</span>
        </div>
        <div className="footer-content">
          <h3>Get in Touch</h3>
          <span>
            Question or feedback?
            <br /> We'd love to hear from you
          </span>
        </div>
      </div>
      <div className="end-footer">
        <div className="copyright">
          Copyright &#169; Built & Designed by Hani Abdelkareem
        </div>
        <div className="socials">
          <AiFillInstagram />
          <FaFacebookF />
          <AiOutlineTwitter />
          <BsYoutube />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  )
}

export default Footer
