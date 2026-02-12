'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import SwiftQALogo from '../components/SwiftQALogo';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <SwiftQALogo />
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                SwiftQA
              </div>
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-white hover:text-blue-400 transition">Home</Link>
              <Link href="/about" className="text-white hover:text-blue-400 transition">About</Link>
              <Link href="/services" className="text-white hover:text-blue-400 transition">Services</Link>
              <Link href="/contact" className="text-white hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Contact SwiftQA</h1>
        <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Let's discuss how SwiftQA can transform your QA processes. Get in touch with our team for a free consultation.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                <p className="text-slate-400 text-sm">Primary Contact</p>
                <p className="text-white font-semibold">Pankaj Katkar</p>
                <p className="text-slate-400 text-sm">QA Solutions Lead</p>
              </div>
              <div className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                <p className="text-slate-400 text-sm">Email</p>
                <a href="mailto:reachpankajkatkar@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold">
                  reachpankajkatkar@gmail.com
                </a>
              </div>
              <div className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white font-semibold">+31 627338224</p>
              </div>
              <div className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-semibold">Lelystad, Netherlands</p>
              </div>
              <div className="p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                <p className="text-slate-400 text-sm">LinkedIn</p>
                <a href="https://www.linkedin.com/in/katkarpankaj/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">
                  linkedin.com/in/katkarpankaj
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <select 
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-blue-400"
                required
              >
                <option value="">Select a Service</option>
                <option value="automation">Test Automation Frameworks</option>
                <option value="api">API Testing & Validation</option>
                <option value="enterprise">Enterprise Platform Testing</option>
                <option value="security">Penetration & Security Testing</option>
                <option value="cicd">CI/CD Pipeline Integration</option>
                <option value="consulting">QA Consulting & Strategy</option>
              </select>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-blue-400 resize-none"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
            {submitted && (
              <div className="mt-4 p-4 bg-green-600 text-white rounded-lg text-center">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-700/50 border border-slate-600 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1.</div>
              <p className="text-white font-semibold mb-2">Quick Response</p>
              <p className="text-slate-300 text-sm">We'll reach out within 24 business hours</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2.</div>
              <p className="text-white font-semibold mb-2">Discovery Call</p>
              <p className="text-slate-300 text-sm">Discuss your QA needs and challenges</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3.</div>
              <p className="text-white font-semibold mb-2">Custom Proposal</p>
              <p className="text-slate-300 text-sm">Tailored solution for your organization</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-700 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-400">
          <p>&copy; 2026 SwiftQA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
