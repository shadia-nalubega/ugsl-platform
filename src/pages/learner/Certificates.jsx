import { Award, Lock, ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";

export default function Certificates() {
  const navigate = useNavigate();

  // Placeholder certificate data.
  // This will later come from the learner's actual progress.
  const certificates = [
    {
      id: 1,
      title: "UgSL Beginner",
      description: "Complete the UgSL Beginner learning path.",
      earned: true,
      date: "August 23, 2026",
    },
    {
      id: 2,
      title: "UgSL Intermediate",
      description: "Complete the UgSL Intermediate learning path.",
      earned: false,
      date: null,
    },
    {
      id: 3,
      title: "UgSL Advanced",
      description: "Complete the UgSL Advanced learning path.",
      earned: false,
      date: null,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </button>

        {/* Header */}
        <section className="mb-8">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Award
                size={26}
                className="text-purple-600"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                My Certificates
              </h1>

              <p className="text-gray-500 mt-1">
                Certificates you earn as you complete your UgSL learning paths.
              </p>
            </div>

          </div>

        </section>

        {/* Certificates */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((certificate) => (

            <div
              key={certificate.id}
              className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${
                certificate.earned
                  ? "border-purple-200"
                  : "border-gray-100"
              }`}
            >

              {/* Certificate Preview */}
              <div
                className={`h-48 flex items-center justify-center ${
                  certificate.earned
                    ? "bg-purple-50"
                    : "bg-gray-50"
                }`}
              >

                {certificate.earned ? (
                  <div className="text-center">

                    <Award
                      size={64}
                      className="mx-auto text-purple-600"
                    />

                    <p className="text-xs uppercase tracking-widest text-purple-500 font-semibold mt-3">
                      Certificate
                    </p>

                  </div>
                ) : (
                  <div className="text-center">

                    <Lock
                      size={50}
                      className="mx-auto text-gray-300"
                    />

                    <p className="text-sm text-gray-400 mt-3">
                      Locked
                    </p>

                  </div>
                )}

              </div>

              {/* Information */}
              <div className="p-6">

                <div className="flex items-center justify-between gap-3">

                  <h2 className="text-lg font-bold text-gray-900">
                    {certificate.title}
                  </h2>

                  {certificate.earned && (
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                      Earned
                    </span>
                  )}

                </div>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {certificate.description}
                </p>

                {certificate.earned ? (
                  <>
                    <p className="text-xs text-gray-400 mt-4">
                      Completed: {certificate.date}
                    </p>

                    <button
                      onClick={() =>
                        alert(
                          "Certificate download will be available when certificates are connected to the backend."
                        )
                      }
                      className="w-full mt-5 inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-purple-700 transition"
                    >
                      <Download size={17} />
                      Download Certificate
                    </button>
                  </>
                ) : (
                  <button
                    disabled
                    className="w-full mt-5 bg-gray-100 text-gray-400 px-4 py-3 rounded-xl text-sm font-medium cursor-not-allowed"
                  >
                    Complete Learning Path
                  </button>
                )}

              </div>

            </div>

          ))}

        </section>

        {/* Notice */}
        <section className="mt-8 bg-purple-50 border border-purple-100 rounded-2xl p-5">

          <div className="flex gap-3">

            <Award
              size={20}
              className="text-purple-600 flex-shrink-0 mt-0.5"
            />

            <div>

              <h2 className="font-semibold text-purple-900">
                Keep learning!
              </h2>

              <p className="text-sm text-purple-700 mt-1">
                Certificates will become available when you complete
                the required learning path and assessments.
              </p>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}