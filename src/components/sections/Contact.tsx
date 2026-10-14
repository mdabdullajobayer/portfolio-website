"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Clock,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Discuss Your Project or Role"
          description="I am actively open to software developer positions, contract engineering opportunities, and technical consulting."
          align="center"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Communication Channels */}
          <div className="md:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Start a Conversation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you have an open software developer role, need a reliable backend for a SaaS application, or want to resolve slow database queries, feel free to reach out directly.
              </p>

              {/* Direct Email Display & Copy */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-base font-mono font-medium text-cyan-300 break-all select-all">
                    {profileData.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`mailto:${profileData.email}?subject=Project%20or%20Opportunity%20Inquiry%20-%20Abdullah%20Jobayer`}
                  external
                  variant="primary"
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Email
                </Button>
                <Button
                  href={profileData.linkedin}
                  external
                  variant="secondary"
                  icon={<LinkedinIcon className="w-4 h-4" />}
                >
                  Message on LinkedIn
                </Button>
              </div>
            </div>

            {/* Availability notice */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Prompt reply guarantee for verified inquiries</span>
            </div>
          </div>

          {/* Right Column: Profile Summary & Working Hours */}
          <div className="md:col-span-5 rounded-2xl bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Location &amp; Channels
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Location</span>
                    <span className="font-medium text-white">{profileData.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-indigo-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Time Zone</span>
                    <span className="font-medium text-white">UTC+6 (Bangladesh Standard Time)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 mt-0.5">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Professional Network</span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>linkedin.com/in/mdabdullahjobayer</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 mt-0.5">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Code &amp; Repositories</span>
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-300 hover:underline inline-flex items-center gap-1"
                    >
                      <span>github.com/mdabdullajobayer</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span>Ready for remote, hybrid, or on-site roles in Dhaka.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
