import React from 'react';
import { Check, Zap } from 'lucide-react';

const features = [
  'Unlimited projects',
  'Advanced analytics',
  'Priority support',
  'Custom domain',
  'Team collaboration',
  'Advanced security',
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Simple Pricing for Everyone
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need at one affordable price
          </p>
        </div>

        <div className="mt-16">
          <div className="relative bg-white rounded-2xl shadow-xl p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                Best Value
              </div>
            </div>

            <div className="text-center">
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">$12</span>
                <span className="text-xl text-gray-500">/year</span>
              </div>
              <p className="mt-2 text-gray-600">Billed annually</p>
            </div>

            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors duration-200">
              Get Started Now
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="sr-only">Money-back guarantee</span>
              <p>14-day free trial • No credit card required</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-600">
            Join thousands of satisfied customers who trust our platform
          </p>
          <p className="text-sm text-gray-500">
            Questions? Contact our support team 24/7
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;