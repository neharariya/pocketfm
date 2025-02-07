"use client";
import React, { useState } from "react";

const Modal = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Tracks the open/close state of the modal

  const openModal = () => setIsOpen(true); // Open modal
  const closeModal = () => setIsOpen(false); // Close modal

  return (
    <>
      {/* Trigger for Modal */}
      <div onClick={openModal} className="cursor-pointer">
        {trigger} {/* Button, text, or any trigger passed from parent */}
      </div>

      {/* Modal Overlay and Content */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
