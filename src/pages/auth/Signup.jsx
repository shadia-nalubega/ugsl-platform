import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    reason: "",
    level: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateStepOne = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Please create a password.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStepOne()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoogleSignup = () => {
    /*
     * Google authentication will be connected later.
     *
     * For now, this is only the frontend button.
     */
    console.log("Google signup will be connected later.");
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();

    if (!formData.reason || !formData.level) {
      setErrors({
        reason: !formData.reason
          ? "Please choose your main reason for learning."
          : "",
        level: !formData.level
          ? "Please select your current level."
          : "",
      });

      return;
    }

    /*
     * Backend authentication will be connected here later.
     *
     * For now, we move the learner to the dashboard.
     */
    navigate("/learner/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#faf9ff]">

      {/* ================= TOP BAR ================= */}
      <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-5 sm:px-8">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
            U
          </div>

          <div className="leading-tight">
            <p className="font-bold text-gray-900">
              UgSL
            </p>

            <p className="text-[10px] text-gray-400">
              Ugandan Sign Language
            </p>
          </div>
        </Link>

        <Link
          to="/enjoying-ugsl"
          className="text-sm text-gray-500 hover:text-indigo-600 transition"
        >
          ← Back
        </Link>

      </header>

      {/* ================= PAGE ================= */}
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-8 lg:py-12">

        {/* Progress */}
        {/* <div className="max-w-xl mx-auto mb-8">

          <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-2">
            <span>Step {step} of 2</span>

            <span>
              {step === 1
                ? "Account details"
                : "Learning preferences"}
            </span>
          </div>

          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{
                width: step === 1 ? "50%" : "100%",
              }}
            />
          </div>

        </div> */}

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <section className="hidden lg:block">

            <div className="relative bg-indigo-50 rounded-[2rem] min-h-[560px] flex flex-col items-center justify-center p-10 overflow-hidden">

              {/* Decorative circles */}
              <div className="absolute -top-20 -left-20 w-52 h-52 bg-indigo-100 rounded-full" />

              <div className="absolute -bottom-24 -right-20 w-64 h-64 bg-purple-100 rounded-full" />

              {/* Character placeholder */}
              <div className="relative z-10 w-52 h-52 rounded-full bg-white shadow-sm flex items-center justify-center">

               <img
  src="https://i.ebayimg.com/images/g/s8MAAOSwsAZjoW9u/s-l1600.webp"
  alt="Enjoying UgSL"
  className="w-64 h-64 object-contain"
/>

              </div>

              <div className="relative z-10 text-center mt-8 max-w-sm">

                <p className="text-2xl font-bold text-gray-900">
                  Keep learning,
                  <br />
                  one sign at a time.
                </p>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Create an account to save your progress,
                  continue your lessons and build your UgSL
                  learning journey.
                </p>

              </div>

              {/* Security card */}
              <div className="relative z-10 mt-8 bg-white rounded-2xl p-4 w-full max-w-sm shadow-sm flex gap-3">

                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Your learning journey
                  </p>

                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Your account helps you keep track
                    of what you've learned.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* ================= FORM SIDE ================= */}
          <section>

            {step === 1 ? (
              <AccountStep
                formData={formData}
                errors={errors}
                showPassword={showPassword}
                showConfirmPassword={showConfirmPassword}
                setShowPassword={setShowPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                handleChange={handleChange}
                handleContinue={handleContinue}
                handleGoogleSignup={handleGoogleSignup}
              />
            ) : (
              <PreferencesStep
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleBack={handleBack}
                handleCreateAccount={handleCreateAccount}
              />
            )}

          </section>

        </div>

      </main>
    </div>
  );
}


/* =========================================================
   STEP 1 — ACCOUNT
========================================================= */

function AccountStep({
  formData,
  errors,
  showPassword,
  showConfirmPassword,
  setShowPassword,
  setShowConfirmPassword,
  handleChange,
  handleContinue,
  handleGoogleSignup,
}) {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">

      <div className="mb-7">

      

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Create Your Account
        </h1>

  <p className="text-indigo-600 text-xs mt-5 font-semibold uppercase tracking-wide">
          Let's get started
        </p>
        {/* <p className="text-gray-500 mt-2 text-sm">
          Save your progress and continue your UgSL journey.
        </p> */}

      </div>

      {/* Google */}
      <button
        type="button"
        onClick={handleGoogleSignup}
        className="w-full h-12 border border-gray-200 rounded-xl flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        <span className="font-bold text-lg">
          G
        </span>

        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">

        <div className="h-px bg-gray-200 flex-1" />

        <span className="text-xs text-gray-400">
          or continue with email
        </span>

        <div className="h-px bg-gray-200 flex-1" />

      </div>

      <div className="space-y-4">

        {/* Full Name */}
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        {/* Email */}
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Password */}
        <PasswordField
          label="Password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          error={errors.password}
        />

        {/* Confirm Password */}
        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
          error={errors.confirmPassword}
        />

      </div>

      <button
        type="button"
        onClick={handleContinue}
        className="w-full mt-7 h-12 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
      >
        Continue

        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Log in
        </Link>
      </p>

    </div>
  );
}


/* =========================================================
   STEP 2 — PREFERENCES
========================================================= */

function PreferencesStep({
  formData,
  errors,
  handleChange,
  handleBack,
  handleCreateAccount,
}) {
  const reasons = [
    "Communication",
    "School / Education",
    "Work",
    "Family & friends",
    "Personal interest",
  ];

  const levels = [
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">

      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <p className="text-indigo-600 text-xs font-semibold uppercase tracking-wide">
        Almost there
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
        Tell us a little about you
      </h1>

      <p className="text-gray-500 mt-2 text-sm leading-relaxed">
        This helps us make your UgSL learning experience
        more relevant to you.
      </p>

      {/* Reason */}
      <div className="mt-8">

        <label className="text-sm font-semibold text-gray-800">
          Why are you learning UgSL?
        </label>

        <div className="grid sm:grid-cols-2 gap-3 mt-3">

          {reasons.map((reason) => {
            const selected = formData.reason === reason;

            return (
              <button
                key={reason}
                type="button"
                onClick={() =>
                  handleChange({
                    target: {
                      name: "reason",
                      value: reason,
                    },
                  })
                }
                className={`text-left px-4 py-3 rounded-xl border text-sm transition ${
                  selected
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 text-gray-600 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2">

                  <span>
                    {reason}
                  </span>

                  {selected && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  )}

                </div>
              </button>
            );
          })}

        </div>

        {errors.reason && (
          <p className="text-xs text-red-500 mt-2">
            {errors.reason}
          </p>
        )}

      </div>

      {/* Level */}
      <div className="mt-8">

        <label className="text-sm font-semibold text-gray-800">
          How would you describe your current level?
        </label>

        <div className="flex flex-wrap gap-3 mt-3">

          {levels.map((level) => {
            const selected = formData.level === level;

            return (
              <button
                key={level}
                type="button"
                onClick={() =>
                  handleChange({
                    target: {
                      name: "level",
                      value: level,
                    },
                  })
                }
                className={`px-5 py-3 rounded-xl border text-sm font-medium transition ${
                  selected
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 text-gray-600 hover:border-indigo-300"
                }`}
              >
                {level}
              </button>
            );
          })}

        </div>

        {errors.level && (
          <p className="text-xs text-red-500 mt-2">
            {errors.level}
          </p>
        )}

      </div>

      <button
        type="button"
        onClick={handleCreateAccount}
        className="w-full mt-9 h-12 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
      >
        Create My Account

        <ArrowRight className="w-4 h-4" />
      </button>

    </div>
  );
}


/* =========================================================
   INPUT
========================================================= */

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-700 mb-1.5"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-11 px-4 rounded-xl border text-sm outline-none transition ${
          error
            ? "border-red-400 focus:ring-2 focus:ring-red-100"
            : "border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-50"
        }`}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1.5">
          {error}
        </p>
      )}

    </div>
  );
}


/* =========================================================
   PASSWORD
========================================================= */

function PasswordField({
  label,
  name,
  placeholder,
  value,
  onChange,
  showPassword,
  setShowPassword,
  error,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-700 mb-1.5"
      >
        {label}
      </label>

      <div className="relative">

        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-11 px-4 pr-11 rounded-xl border text-sm outline-none transition ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-50"
          }`}
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword((previous) => !previous)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>

      </div>

      {error && (
        <p className="text-xs text-red-500 mt-1.5">
          {error}
        </p>
      )}

    </div>
  );
}