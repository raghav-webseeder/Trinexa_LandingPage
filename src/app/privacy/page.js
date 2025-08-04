"use client";

import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="bg-[#F4F8FB] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/Logo.png"
              alt="Trinexa Global Logo"
              width={240}
              height={90}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0072BC]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            At Trinexa Global, we value your privacy and are committed to
            safeguarding your personal and professional data within our HRMS
            platform.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            1. Introduction
          </h2>
          <p>
            Trinexa Global (“we”, “our”, or “us”) operates an advanced Human
            Resource Management System (HRMS) designed to help organizations
            manage their workforce efficiently. This Privacy Policy outlines how
            we collect, use, store, and protect your information when you use
            our HRMS software.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, contact details, date
              of birth, employee ID, and identification documents.
            </li>
            <li>
              <strong>Employment Data:</strong> Job title, department, salary
              details, work history, and performance records.
            </li>
            <li>
              <strong>System Usage Data:</strong> Login history, device
              information, IP addresses, and activity logs.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide HRMS services and manage employee data.</li>
            <li>To improve platform features and user experience.</li>
            <li>
              To ensure compliance with legal and contractual obligations.
            </li>
            <li>To generate reports and analytics for HR operations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            4. Data Protection & Security
          </h2>
          <p>
            We implement robust security measures including encryption, access
            controls, and secure data centers to protect your information from
            unauthorized access or disclosure. Only authorized personnel have
            access to sensitive data.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            5. Data Sharing
          </h2>
          <p>
            We do not sell or rent your personal data. Information may be shared
            only with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Authorized HR administrators within your organization.</li>
            <li>Government or legal authorities when required by law.</li>
            <li>
              Trusted third-party service providers bound by confidentiality
              agreements.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or request deletion of your
            personal data stored in our HRMS. For assistance, please contact our
            Data Protection Officer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            7. Contact Us
          </h2>
          <p>
            For any questions or concerns regarding this Privacy Policy or data
            handling practices, please contact:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@tghrms.com <br />
            <strong>Address:</strong> Trinexa Global, Corporate Office, India
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </section>
    </main>
  );
}
