import { Link } from "react-router-dom";

import {
  Sparkles,
  Zap,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function NCM() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <header className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4">
        <nav className="flex items-center bg-white border border-blue-100 rounded-full px-2 py-1 shadow-lg">
          <Link to="/" className="flex items-center gap-2 px-4">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="font-inter font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              aiflow
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {["Features", "Pricing", "Testimonials"].map((item) => (
              <Link
                key={item}
                to={`#${item.toLowerCase()}`}
                className="font-inter text-sm text-gray-600 hover:text-blue-600 px-3 py-2 rounded-full transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center ml-4">
            <Link
              to="/login"
              className="font-inter text-sm text-gray-600 hover:text-blue-600 px-3 py-2 rounded-full transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="font-inter text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors ml-2"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-4 inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-inter text-sm">
              AI-Powered Workflow
            </div>
            <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-6">
              Transform Your Workflow with AI
            </h1>
            <p className="font-inter text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to automate tasks,
              generate content, and make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="font-inter text-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="font-inter text-lg bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-full transition-colors border border-blue-200"
              >
                Watch Demo
              </a>
            </div>
            <div className="mt-20">
              <img
                src="/bg.jpg"
                width={1200}
                height={600}
                alt="AI Platform Interface"
                className="rounded-2xl shadow-2xl border border-blue-100"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section
          className="py-20 bg-gradient-to-b from-white to-blue-50"
          id="features"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-inter text-4xl font-bold mb-4">
                Powerful Features for Modern Teams
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to supercharge your workflow with artificial
                intelligence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-8 w-8 text-blue-600" />,
                  title: "Lightning Fast Processing",
                  description:
                    "Process large amounts of data in seconds with our optimized AI engine",
                },
                {
                  icon: <Brain className="h-8 w-8 text-blue-600" />,
                  title: "Smart Automation",
                  description:
                    "Automate repetitive tasks with intelligent workflows and custom rules",
                },
                {
                  icon: <Shield className="h-8 w-8 text-blue-600" />,
                  title: "Enterprise Security",
                  description:
                    "Bank-grade encryption and security protocols to protect your data",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-blue-200 rounded-xl p-6 transition-all"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-inter text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-inter text-4xl font-bold text-center mb-16">
                How It Works
              </h2>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Connect Your Data",
                    description:
                      "Easily integrate with your existing tools and data sources",
                  },
                  {
                    step: "02",
                    title: "Train AI Models",
                    description:
                      "Customize AI models to match your specific needs and requirements",
                  },
                  {
                    step: "03",
                    title: "Automate & Scale",
                    description:
                      "Deploy automated workflows that scale with your business",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="font-inter text-4xl font-bold text-blue-600/20">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-inter text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="font-inter text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          className="py-20 bg-gradient-to-b from-blue-50 to-white"
          id="pricing"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-inter text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="font-inter text-xl text-gray-600">
                Start free and scale as you grow
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  features: [
                    "5,000 API calls/month",
                    "Basic automation",
                    "Community support",
                  ],
                },
                {
                  name: "Pro",
                  price: "$49",
                  features: [
                    "50,000 API calls/month",
                    "Advanced automation",
                    "Priority support",
                    "Custom integrations",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited API calls",
                    "Custom AI models",
                    "24/7 support",
                    "Dedicated account manager",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 ${
                    index === 1
                      ? "border-2 border-blue-400 shadow-xl"
                      : "border border-blue-100"
                  }`}
                >
                  <h3 className="font-inter text-xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <div className="font-inter text-4xl font-bold mb-4">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 font-inter text-gray-600"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`block text-center font-inter py-2 px-4 rounded-full ${
                      index === 1
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white hover:bg-gray-50 text-blue-600 border border-blue-200"
                    } transition-colors`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-inter text-4xl font-bold text-white mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="font-inter text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our AI platform to work
              smarter
            </p>
            <a
              href="#"
              className="inline-flex items-center font-inter bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-colors text-lg"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-blue-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="font-inter text-xl font-bold">aiflow</span>
              </div>
              <p className="font-inter text-gray-600">
                Making AI accessible for everyone
              </p>
            </div>
            {["Product", "Company", "Resources"].map((category) => (
              <div key={category}>
                <h3 className="font-inter font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="font-inter text-gray-600 hover:text-blue-600"
                      >
                        Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-blue-100">
            <p className="font-inter text-sm text-gray-600">
              © {new Date().getFullYear()} aiflow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
