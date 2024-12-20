import React, { useState } from 'react';
// import logo from '../assets/logo.jpg';/
import community from '../assets/community.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


function Contact() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I contact support?',
      answer: 'You can reach us via the email addresses provided or through the contact form above.',
    },
    {
      question: 'What are the working hours?',
      answer: 'Our support team is available from 9 AM to 6 PM from Monday to Friday.',
    },
    {
      question: 'How soon will I get a response?',
      answer: 'We aim to respond within 24-48 hours on business days.',
    },
    {
      question: 'Can I subscribe to newsletters?',
      answer: 'Yes, you can subscribe to our newsletter by providing your email in the newsletter section above.',
    },
  ];
  

  return (
    <div>

    <Navbar />

    <div className="w-full mx-auto">
    {/* Contact Form Image */}
    <div className="w-full mb-8 flex">
      <img
        src={community}
        alt="Contact Us Banner"
        className="w-full h-[500px] object-cover rounded-lg"
      />
    </div>

    {/* Title */}
    <div className="text-center mb-8">
      <h2 className="text-lg font-medium">Contact with us</h2>
      <p className="text-xl text-[#910b0b] font-bold">Get in touch with us & stay updated</p>
    </div>

    {/* Contact Info & Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contact Info Section */}
      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg min-h-[130px] text-center">
          <div className="text-[#910b0b]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 9a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-medium">Address:</h3>
            <p className="text-sm"> Yuna Street, 12 London
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg min-h-[130px] text-center">
          <div className="text-[#910b0b]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4m0 0l-4 4m4-4v12" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-medium">Email:</h3>
            <p className="text-sm">support@domain.com</p>
            <p className="text-sm">yuna@domain.com</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center space-x-3 p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg min-h-[130px] text-center">
          <div className="text-[#910b0b]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3-7m10 4l-3 7H9m-6 2h10l3-7m-10 2v10" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-medium">Phone Number:</h3>
            <p className="text-sm">+123 986 8764</p>
            <p className="text-sm">+111 222-3333</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 text-[#910b0b]">Leave us a message</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 mb-3">
            <input
              type="text"
              placeholder="Your full name"
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-100 text-sm"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-100 text-sm"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-2 w-full bg-gray-100 text-sm"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-md p-2 w-full h-24 bg-gray-100 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-[#910b0b] hover:bg-[#7c2121] text-white rounded-md py-2 px-4 transition duration-200 text-sm"
          >
            Send message
          </button>
        </form>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-10 mb-10 p-8">
      <h2 className="text-xl font-bold text-center mb-6 text-[#910b0b]">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className="border-b border-gray-300 py-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-md font-semibold text-gray-800">
              {faq.question}
            </h3>
            <span className="text-lg font-semibold text-gray-500">
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div className="mt-2 text-sm text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>

    
    </div>

    <Footer />

    </div>

       

    
  )
}

export default Contact
