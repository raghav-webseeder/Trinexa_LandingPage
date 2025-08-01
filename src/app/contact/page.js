"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#1A3B5D] px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
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
                <strong>US, Canada, and Latin America:</strong>
                <br />
                Monday–Friday, 6 AM to 5 PM PT
              </li>
              <li className="mt-2">
                <strong>Europe, Middle East, Africa:</strong>
                <br />
                Monday–Friday, 8 AM to 6 PM CET
              </li>
              <li className="mt-2">
                <strong>Asia Pacific:</strong>
                <br />
                Monday–Friday, 9 AM to 5 PM JST
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Our office</h4>
            <p className="text-sm text-[#1A3B5D]/80 mt-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F7941D]" /> 47 Pine Street, NYC,
              USA
            </p>
            <p className="text-sm flex items-center gap-2 mt-1">
              <FaPhone className="text-[#F7941D]" /> +1 (800) 123-4567
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

        {/* Right - Contact Form */}
        <div className="bg-[#F4F8FB] p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Email us</h3>
          <p className="text-sm mb-6 text-[#1A3B5D]/70">
            Just complete the form below
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input-style"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-style"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="input-style w-full"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <select className="input-style">
                <option value="">Select Role</option>
                <option>HR</option>
                <option>CEO</option>
              </select>
              <select className="input-style">
                <option value="">Company Size</option>
                <option>1-50</option>
                <option>51-200</option>
                <option>201-500</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input-style w-full"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="input-style w-full"
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
