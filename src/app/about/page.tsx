import Link from 'next/link';
import SwiftQALogo from '../components/SwiftQALogo';

export default function About() {
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
        <h1 className="text-5xl font-bold text-white mb-8">About SwiftQA</h1>
        <p className="text-lg text-slate-300 mb-6 max-w-3xl">
          SwiftQA is a specialized quality assurance firm dedicated to delivering enterprise-grade testing solutions. We partner with organizations to build robust, scalable automation frameworks that reduce testing time, improve defect detection, and accelerate time-to-market.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-slate-700/50 border border-slate-600 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 mb-4">
              Empower organizations with cutting-edge QA automation solutions that enhance software quality, reduce testing costs by 40%, and enable faster, more confident releases to production.
            </p>
          </div>
          <div className="p-8 bg-slate-700/50 border border-slate-600 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
            <p className="text-slate-300 mb-4">
              We combine 13+ years of hands-on QA expertise with modern automation frameworks, CI/CD integration, and agile methodologies. Our team leverages Playwright, Selenium, API testing, and enterprise platform expertise to deliver measurable results.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why SwiftQA</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Proven Track Record', desc: '40% regression time reduction, 30% defect detection improvement across enterprise clients' },
              { title: 'Full-Stack Expertise', desc: 'Playwright, Selenium, API testing, SharePoint, Power Automate, Azure DevOps, GitHub Actions' },
              { title: 'Enterprise Focus', desc: 'Specialized in complex enterprise systems, migrations, and integration testing' },
              { title: 'Agile & Collaborative', desc: 'Certified Scrum Masters on staff ensuring seamless integration with your team' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-700/50 border border-slate-600 rounded-lg">
                <h4 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h4>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Services Cover</h2>
          <div className="p-8 bg-slate-700/50 border border-slate-600 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-blue-400 font-bold mb-3">Automation Testing</h4>
                <ul className="text-slate-300 space-y-2">
                  <li> Playwright (TypeScript)</li>
                  <li> Selenium (Java)</li>
                  <li> Framework Architecture</li>
                  <li> Regression Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-3">Enterprise Testing</h4>
                <ul className="text-slate-300 space-y-2">
                  <li> SharePoint Testing</li>
                  <li> Power Automate</li>
                  <li> Migration Testing</li>
                  <li> Security & Penetration</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-bold mb-3">DevOps Integration</h4>
                <ul className="text-slate-300 space-y-2">
                  <li> Azure DevOps Pipelines</li>
                  <li> GitHub Actions</li>
                  <li> CI/CD Integration</li>
                  <li> Release Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Let's Transform Your QA</h2>
          <p className="text-white/90 mb-6">Contact us for a free consultation on how we can improve your testing processes</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-semibold transition">
            Schedule Consultation
          </Link>
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
