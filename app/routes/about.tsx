import type { Route } from "./+types/about";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | SkillBridge AI" },
    {
      name: "description",
      content: "Learn more about SkillBridge AI and the mission behind the platform.",
    },
  ];
}

export default function About() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16 text-center">
          <h1>About SkillBridge AI</h1>
          <h2>
            Empowering job seekers with intelligent, AI-driven resume feedback.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-10">

          {/* Mission */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4">🎯 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              SkillBridge AI was built to help job seekers bridge the gap between
              their skills and their dream roles. Many candidates are qualified,
              but their resumes fail to properly communicate their strengths.
              Our mission is to provide intelligent, actionable feedback that
              increases interview success rates.
            </p>
          </div>

          {/* What It Does */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4">🤖 What SkillBridge AI Does</h3>
            <p className="text-gray-600 leading-relaxed">
              Using AI-powered analysis, SkillBridge AI compares resumes against
              job descriptions to generate:
            </p>
            <ul className="mt-4 text-gray-600 space-y-2 list-disc list-inside">
              <li>Resume-to-job match scoring</li>
              <li>Missing skills identification</li>
              <li>Improved achievement-based bullet suggestions</li>
              <li>ATS optimization insights</li>
            </ul>
          </div>

          

          {/* Closing */}
          <div className="text-center pt-6">
            <h3 className="text-2xl font-semibold mb-4">
              Built for Real-World Impact
            </h3>
            <p className="text-gray-600 mb-6">
              SkillBridge AI focuses on execution, usability, and practical
              value — helping users confidently apply for roles with
              optimized resumes.
            </p>

            <a
              href="/upload"
              className="primary-button text-lg font-semibold"
            >
              Start Optimizing Now
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}