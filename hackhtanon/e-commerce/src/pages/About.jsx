import React from "react";
import { Users, Globe, Award, Heart } from "lucide-react";
import Tittle from "../components/Tittle";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Our Team",
      description: "A passionate team dedicated to providing the best service.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We operate worldwide, connecting people everywhere.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "Award-winning service and customer satisfaction guaranteed.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, transparency, and care for our clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      

      {/* Features / Info Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4">
              <feature.icon className="w-8 h-8 text-black hover:text-white transition-all duration-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700 hover:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* About Section Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center space-y-4">
        <h2 className="text-2xl font-bold">Who We Are</h2>
        <p className="text-gray-600 text-sm">
          We are a team of passionate professionals committed to delivering the
          highest quality of service. Our mission is to make our customers happy
          and provide solutions that truly make a difference.
        </p>
        <p className="text-gray-600 text-sm">
          From our humble beginnings to our global presence today, we focus on
          innovation, transparency, and dedication in everything we do.
        </p>
        <button className="mt-4 bg-black text-white py-2 px-6 rounded-lg font-semibold text-sm hover:bg-white hover:text-black border border-black transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}
