import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Modal({ isModalOpen, closeModal }) {
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>About Us</h3>
        <p>
          "Welcome to Sol Real Estate, your go-to destination for all your real
          estate needs. With a passion for matching people with their ideal
          properties, we bring years of industry expertise to the table. Our
          dedicated team of professionals is committed to providing exceptional
          service, transparency, and personalized support throughout your buying
          or selling journey. Whether you're a first-time buyer or a seasoned
          investor, we are here to guide you every step of the way. Discover
          your dream property with us and experience the joy of homeownership
          today."
        </p>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
}

export default Modal;
