import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'opened' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Trigger user's mail client with prefilled details
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hi Priyanka,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Priyanka Kedare Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    // Launch mail client
    window.location.href = mailtoUrl;

    // Provide transparent notification per prompt instructions
    setSubmissionStatus('opened');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#512358]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let's Build Something Intelligent
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal leading-relaxed">
            Have an AI idea, project opportunity, or collaboration in mind? I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#160d1e] border border-[#2d193a] shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-gray-100">
                Direct Channels
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Reach out directly via email, connect professionally on LinkedIn, or explore repositories on GitHub.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#1d1127] border border-[#341d44] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#281537] flex items-center justify-center text-[#e093bb] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Email Address</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-gray-200 hover:text-pink-300 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#271536] hover:bg-[#341b48] text-pink-300 border border-[#402052] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#1d1127] border border-[#341d44] hover:border-[#d87fae]/50 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#281537] flex items-center justify-center text-[#e093bb] group-hover:bg-[#d87fae] group-hover:text-gray-950 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">LinkedIn Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-pink-200 transition-colors">
                      priyanka-kedare-74274b224
                    </p>
                  </div>
                </div>
                <ExternalLink size={15} className="text-gray-500 group-hover:text-pink-300 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#1d1127] border border-[#341d44] hover:border-[#d87fae]/50 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#281537] flex items-center justify-center text-[#e093bb] group-hover:bg-[#d87fae] group-hover:text-gray-950 transition-colors">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">GitHub Profile</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-pink-200 transition-colors">
                      github.com/priyankakedare
                    </p>
                  </div>
                </div>
                <ExternalLink size={15} className="text-gray-500 group-hover:text-pink-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#160d1e] border border-[#2d193a] shadow-xl relative">
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the details below to launch a pre-composed message in your email client.
              </p>

              {submissionStatus === 'opened' && (
                <div className="mb-6 p-4 rounded-2xl bg-[#241331] border border-[#d87fae]/50 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#f5dded]">
                    <CheckCircle2 size={16} className="text-[#e093bb]" />
                    <span>Email client triggered successfully</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    A pre-composed message to <strong className="text-white">{personal.email}</strong> was prepared in your default mail application.
                  </p>
                  <p className="text-[11px] text-[#df9bc7] pt-1">
                    Note: To enable background submission without opening an email client, configure an email service API (e.g. EmailJS or Resend) in this component.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Your Name <span className="text-[#e093bb]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Maya Sharma"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#1d1127] border text-gray-100 placeholder-gray-500 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                        : 'border-[#361e47] focus:border-[#d87fae] focus:ring-1 focus:ring-[#d87fae]/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Your Email <span className="text-[#e093bb]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="e.g. maya@example.com"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#1d1127] border text-gray-100 placeholder-gray-500 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                        : 'border-[#361e47] focus:border-[#d87fae] focus:ring-1 focus:ring-[#d87fae]/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Message <span className="text-[#e093bb]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Tell me about your AI project, ML use case, or role opportunity..."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#1d1127] border text-gray-100 placeholder-gray-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                        : 'border-[#361e47] focus:border-[#d87fae] focus:ring-1 focus:ring-[#d87fae]/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 hover:brightness-110 shadow-[0_0_20px_rgba(216,127,174,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
