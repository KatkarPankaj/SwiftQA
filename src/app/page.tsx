import Link from 'next/link';
import SwiftQALogo from './components/SwiftQALogo';

export default function Home() {
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Enterprise QA Solutions
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Deliver software with confidence. We provide comprehensive quality assurance services powered by 13+ years of automation expertise and proven methodologies.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
            Explore Services
          </Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg font-semibold transition">
            Schedule Demo
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose SwiftQA</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Proven Results', desc: '40% reduction in regression time through automated testing frameworks' },
            { title: 'Expert Team', desc: '13+ years of QA automation & testing expertise across enterprise systems' },
            { title: 'Full Stack QA', desc: 'Comprehensive testing: APIs, UI, SharePoint, Power Automate, CI/CD' }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-blue-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Elevate Your QA?</h2>
          <p className="text-lg text-white/90 mb-6">Let's build scalable, reliable testing solutions for your organization</p>
          <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-semibold transition inline-block">
            Get Started Today
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-700 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-slate-400">
            <p>&copy; 2026 SwiftQA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
