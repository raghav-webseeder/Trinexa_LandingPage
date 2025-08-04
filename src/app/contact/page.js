"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    role: "",
    companySize: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    for (let key in formData) {
      if (!formData[key]) {
        toast.error("Please fill out all required fields.", {
          position: "top-right",
        });
        return;
      }
    }

    console.log("Form Data Submitted:", formData);
    toast.success(
      "Thank you for contacting us! We will get back to you soon.",
      {
        position: "top-right",
      }
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      role: "",
      companySize: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white text-[#1A3B5D] px-4 py-16">
      <ToastContainer /> 
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact our team</h2>
          <p>
            Our team is here for anything you need. Send us your request, and
            we’ll get back to you as soon as possible.
          </p>

          <div>
            <h4 className="font-semibold text-lg">Sales Hours</h4>
            <ul className="text-sm leading-relaxed mt-2">
              <li>
                <strong>India:</strong>
                <br />
                Monday–Friday, 9 AM to 6 PM IST
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Our office</h4>
            <p className="text-sm text-[#1A3B5D]/80 mt-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F7941D]" /> India
            </p>
            <p className="text-sm flex items-center gap-2 mt-1">
              <FaPhoneAlt className="text-[#F7941D]" /> +91 98765 43210
            </p>
            <p className="text-sm flex items-center gap-2 mt-1">
              <FaEnvelope className="text-[#F7941D]" /> contact@tghrms.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Find us on social media</h4>
            <div className="flex gap-4 mt-2 text-[#F7941D] text-xl">
              <FaFacebook className="hover:text-[#1A3B5D] cursor-pointer" />
              <FaLinkedin className="hover:text-[#1A3B5D] cursor-pointer" />
              <FaTwitter className="hover:text-[#1A3B5D] cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="bg-[#F4F8FB] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Email us</h3>
          <p className="text-sm mb-6 text-[#1A3B5D]/70">
            Just complete the form below
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={inputStyle}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputStyle} w-full`}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className={`${inputStyle} w-full`}
              required
            />
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={inputStyle}
                required
              >
                <option value="">Select Role</option>
                <option>HR</option>
                <option>CEO</option>
              </select>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className={inputStyle}
                required
              >
                <option value="">Company Size</option>
                <option>1-50</option>
                <option>51-200</option>
                <option>201-500</option>
              </select>
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${inputStyle} w-full`}
              required
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputStyle} w-full`}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#F7941D] hover:bg-[#e07e13] text-white font-semibold px-6 py-2 rounded-full mt-2"
            >
              Submit
            </button>
            <p className="text-xs text-[#1A3B5D]/60 mt-2">
              By submitting this form, you agree to Trinexa’s terms and
              policies.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

// Styles for inputs
const inputStyle =
  "input-style border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#1A6EBF] text-sm text-[#1A3B5D]";
