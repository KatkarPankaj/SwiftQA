import Link from 'next/link';
import SwiftQALogo from '../components/SwiftQALogo';

export default function Services() {
  const services = [
    { 
      title: 'Test Automation Frameworks',
      description: 'Build scalable, maintainable automation frameworks using Playwright (TypeScript) and Selenium (Java)',
      features: ['40% regression time reduction', 'Framework architecture', 'Best practices']
    },
    { 
      title: 'API Testing & Validation',
      description: 'Comprehensive REST API testing, validation, and performance optimization',
      features: ['30% defect detection improvement', 'Postman expertise', 'CI/CD integration']
    },
    { 
      title: 'Enterprise Platform Testing',
      description: 'Specialized testing for SharePoint Online/On-Premise and Power Automate',
      features: ['Migration testing', 'Workflow validation', '13+ years experience']
    },
    { 
      title: 'Penetration & Security Testing',
      description: 'Orchestrate and coordinate security testing efforts with stakeholder management',
      features: ['Risk assessment', 'Remediation planning', 'Compliance validation']
    },
    { 
      title: 'CI/CD Pipeline Integration',
      description: 'Integrate automated test suites into Azure DevOps and GitHub Actions',
      features: ['Release stability', 'Automated reporting', 'Deployment consistency']
    },
    { 
      title: 'QA Consulting & Strategy',
      description: 'Strategic QA consulting to optimize your testing processes and team collaboration',
      features: ['Agile methodologies', 'Process improvement', 'Team mentoring']
    }
  ];

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
        <h1 className="text-5xl font-bold text-white mb-8 text-center">QA Services</h1>
        <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Comprehensive quality assurance solutions tailored to your organization's testing needs and business objectives
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-blue-400 transition group h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">{service.title}</h3>
              <p className="text-slate-300 mb-4 flex-grow">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, j) => (
                  <p key={j} className="text-blue-400 text-sm font-semibold"> {feature}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-700/50 border border-slate-600 rounded-lg">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Automation Tools</h3>
              <ul className="text-slate-300 space-y-2">
                <li> Playwright (TypeScript)</li>
                <li> Selenium (Java)</li>
                <li> Postman</li>
                <li> JMeter</li>
                <li> Custom Frameworks</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-700/50 border border-slate-600 rounded-lg">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Platforms & Technologies</h3>
              <ul className="text-slate-300 space-y-2">
                <li> SharePoint Online/On-Premise</li>
                <li> Power Automate</li>
                <li> Office 365</li>
                <li> SPFx Solutions</li>
                <li> Azure Services</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-700/50 border border-slate-600 rounded-lg">
              <h3 className="text-lg font-bold text-blue-400 mb-4">DevOps & CI/CD</h3>
              <ul className="text-slate-300 space-y-2">
                <li> Azure DevOps</li>
                <li> GitHub Actions</li>
                <li> Continuous Integration</li>
                <li> Automated Pipelines</li>
                <li> Release Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-700/50 border border-slate-600 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Improve Your Testing?</h2>
          <p className="text-slate-300 mb-6">Let's discuss how SwiftQA can optimize your QA processes</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
            Schedule a Demo
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
