import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Tittle from "../components/Tittle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "1-0000-000-0000",
      description: "Mon to Fri 9am to 6pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: "greenfoodadore@gmail.com",
      description: "Send us your query anytime!",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Business District",
      description: "New York, NY 10001",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="py-12 px-4 text-center">
        <div className="text-3xl md:text-4xl font-bold mb-3">
          <Tittle tex1={"GET IN"} text2={"TOUCH"} />
        </div>

        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-200 rounded-lg">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-700">{item.details}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5" />
              <h3 className="text-sm font-semibold">Quick Response</h3>
            </div>
            <p className="text-xs text-gray-600">
              We typically respond to all inquiries within 24 hours. For urgent
              matters, please call us directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Send className="w-5 h-5" />
            <h2 className="text-lg font-bold">Send us a Message</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-black border border-black transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
