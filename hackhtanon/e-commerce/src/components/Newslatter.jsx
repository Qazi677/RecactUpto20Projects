import React, { useState } from "react";
import { Shield, RotateCcw, HeadphonesIcon, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="bg-white border-t border-b border-gray-200 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Easy Exchange Policy
                </h3>
                <p className="text-gray-600 text-sm">
                  We offer hassle free exchange policy
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <RotateCcw className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  7 Days Return Policy
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide 7 days free return policy
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <HeadphonesIcon className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Best customer support
                </h3>
                <p className="text-gray-600 text-sm">
                  we provide 24/7 customer support
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Newsletter */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Mail className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              <h2 className="text-xl font-bold text-gray-800">
                Subscribe now & get{" "}
                <span className="text-pink-600">20% off</span>
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full text-black border border-black py-2 rounded-lg font-medium hover:bg-black hover:text-white transition duration-300 text-sm"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
