// import type { Route } from "./+types/howitwork";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "How It Works | SkillBridge AI" },
    {
      name: "description",
      content: "Learn how SkillBridge AI analyzes your resume and matches it with job descriptions.",
    },
  ];
}

export default function Howitwork() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16 text-center">
          <h1>How SkillBridge AI Works</h1>
          <h2>
            Optimize your resume in three simple steps using AI-powered analysis.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6 pb-20">

          {/* Step 1 */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">1️⃣ Upload Your Resume</h3>
            <p className="text-gray-600 leading-relaxed">
              Upload or paste your resume content into the system. 
              SkillBridge AI securely processes your resume for intelligent analysis.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">2️⃣ AI Analyzes & Compares</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI compares your resume against job requirements, 
              evaluates keyword alignment, identifies missing skills, 
              and calculates a compatibility score.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">3️⃣ Get Actionable Feedback</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive detailed insights including:
              <br />
              ✔ Match score  
              <br />
              ✔ Missing skills  
              <br />
              ✔ Bullet point improvements  
              <br />
              ✔ ATS optimization tips  
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center pb-20">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to improve your resume?
          </h3>
          <p className="text-gray-600 mb-6">
            Upload your resume and start optimizing for your dream job today.
          </p>

          <a
            href="/upload"
            className="primary-button text-lg font-semibold"
          >
            Analyze My Resume
          </a>
        </div>
      </section>
    </main>
  );
}

// export default howitwork;