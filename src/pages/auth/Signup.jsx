import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  Users,
  GraduationCap,
  Store,
  HeartHandshake,
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStepOne = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Please create a password.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
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

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!formData.reason || !formData.level) {
      setErrors({
        reason: !formData.reason ? "Please choose your main goal." : "",
        level: !formData.level ? "Please select your current level." : "",
      });
      return;
    }
    navigate("/learner/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#faf9ff] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* ================= LEFT SIDE BANNER ================= */}
          <section className="hidden lg:flex flex-col h-full">
            <div className="relative bg-indigo-50 rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col items-center justify-between flex-1 border border-indigo-100/50 shadow-sm">
              <div className="absolute -top-16 -left-16 w-40 h-40 bg-indigo-100 rounded-full" />
              <div className="absolute -bottom-20 -right-16 w-48 h-48 bg-purple-100 rounded-full" />

              <div className="relative z-10 w-40 h-40 rounded-full bg-white shadow-sm flex items-center justify-center my-auto">
                <img
                  src="https://i.ebayimg.com/images/g/s8MAAOSwsAZjoW9u/s-l1600.webp"
                  alt="UgSL Learning"
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="relative z-10 text-center my-auto max-w-xs">
                <p className="text-2xl font-bold text-gray-900 leading-tight">
                  Start communicating
                  <br />
                  in UgSL today.
                </p>

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Create an account to unlock your capability checklist, track real-world scenarios, and practice interactive conversations.
                </p>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-3.5 w-full max-w-xs shadow-sm flex gap-3 mt-auto">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Real-world Capabilities
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    Track your growth through practical scenario milestones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= FORM SIDE ================= */}
          <section className="w-full h-full flex flex-col">
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
                onPageBack={() => navigate(-1)}
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

function AccountStep({
  formData,
  errors,
  showPassword,
  showConfirmPassword,
  setShowPassword,
  setShowConfirmPassword,
  handleChange,
  handleContinue,
  onPageBack,
}) {
  return (
    <div className="w-full h-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="mb-5">
          <p className="text-indigo-600 text-xs font-semibold uppercase tracking-wide">
            Let's get started
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Create Your Account
          </h1>
        </div>

        <button
          type="button"
          className="w-full h-11 border border-gray-200 rounded-xl flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <span className="font-bold text-base">G</span>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 my-5">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400">or continue with email</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="space-y-3.5">
          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
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
      </div>

      <div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            type="button"
            onClick={onPageBack}
            className="h-11 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 shadow-md shadow-gray-200/60 hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="h-11 bg-indigo-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

function PreferencesStep({
  formData,
  errors,
  handleChange,
  handleBack,
  handleCreateAccount,
}) {
  const reasons = [
    { title: "Meet Deaf Friends & Community", icon: Users },
    { title: "School / Education", icon: GraduationCap },
    { title: "Business / Service", icon: Store },
    { title: "Family & Friends", icon: HeartHandshake },
  ];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="w-full h-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <p className="text-indigo-600 text-xs font-semibold uppercase tracking-wide">
          Almost there
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
          Tell us a little about you
        </h1>
        <p className="text-gray-500 mt-1.5 text-xs leading-relaxed">
          This helps us track your real-world conversation scenarios.
        </p>

        <div className="mt-6">
          <label className="text-xs font-semibold text-gray-800">
            Primary Communication Context
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2.5">
            {reasons.map((item) => {
              const selected = formData.reason === item.title;
              const IconComp = item.icon;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    handleChange({ target: { name: "reason", value: item.title } })
                  }
                  className={`text-left px-3.5 py-2.5 rounded-xl border text-xs transition ${
                    selected
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-medium"
                      : "border-gray-200 text-gray-600 hover:border-indigo-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <IconComp className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      {item.title}
                    </span>
                    {selected && <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
          {errors.reason && <p className="text-xs text-red-500 mt-1.5">{errors.reason}</p>}
        </div>

        <div className="mt-6">
          <label className="text-xs font-semibold text-gray-800">
            Current UgSL Level
          </label>
          <div className="grid grid-cols-3 gap-2.5 mt-2.5">
            {levels.map((level) => {
              const selected = formData.level === level;
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() =>
                    handleChange({ target: { name: "level", value: level } })
                  }
                  className={`px-3 py-2.5 rounded-xl border text-xs font-medium text-center transition ${
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
          {errors.level && <p className="text-xs text-red-500 mt-1.5">{errors.level}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        <button
          type="button"
          onClick={handleBack}
          className="h-11 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 shadow-md shadow-gray-200/60 hover:shadow-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          type="button"
          onClick={handleCreateAccount}
          className="h-11 bg-indigo-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
        >
          Create Account
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function InputField({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-10 px-3.5 rounded-xl border text-xs outline-none transition ${
          error
            ? "border-red-400 focus:ring-2 focus:ring-red-100"
            : "border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-50"
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

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
      <label htmlFor={name} className="block text-xs font-semibold text-gray-700 mb-1">
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
          className={`w-full h-10 px-3.5 pr-10 rounded-xl border text-xs outline-none transition ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-50"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}