"use client";

import Image from "next/image";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using the
            Trinexa Global HRMS platform.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            1. Introduction
          </h2>
          <p>
            These Terms & Conditions (“Terms”) govern your use of Trinexa
            Global’s Human Resource Management System (HRMS) software and
            related services. By accessing or using the HRMS platform, you agree
            to comply with these Terms. If you do not agree, you must not use
            the platform.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            2. Eligibility
          </h2>
          <p>
            You must be an authorized employee or administrator of a registered
            client organization to access our HRMS services. Unauthorized use is
            strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            3. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep your account credentials confidential and secure.</li>
            <li>
              Use the HRMS platform in compliance with applicable laws and
              regulations.
            </li>
            <li>Ensure that all data entered is accurate and up-to-date.</li>
            <li>
              Report any unauthorized access or suspicious activity immediately.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            4. Data Usage & Privacy
          </h2>
          <p>
            We collect and process employee and organizational data in
            accordance with our
            <a href="/privacy" className="text-[#0072BC] hover:underline">
              {" "}
              Privacy Policy
            </a>
            . By using the HRMS, you consent to our data handling practices.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content, features, and functionality of the HRMS platform —
            including software code, design, trademarks, and branding — are the
            exclusive property of Trinexa Global. Unauthorized reproduction or
            distribution is prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            Trinexa Global is not liable for any direct, indirect, or
            consequential damages arising from your use of the HRMS platform,
            except where required by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            7. Termination of Access
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to the HRMS
            without notice if you violate these Terms or engage in unauthorized
            activities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            8. Changes to Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            HRMS after changes implies your acceptance of the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F7941D] mb-3">
            9. Contact Us
          </h2>
          <p>
            For any questions about these Terms & Conditions, please contact:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@tghrms.com <br />
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
