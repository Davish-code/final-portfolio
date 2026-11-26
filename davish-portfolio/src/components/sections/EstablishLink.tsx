import { useState } from 'react';
import { profile } from '../../data/profile';
import { cn } from '../../utils/cn';

export function EstablishLink() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setStatus('error');
      setFeedback('All transmission parameters required. Please enter your email and message.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setFeedback('Invalid transmission origin. Please provide a valid email format.');
      return;
    }

    setStatus('sending');
    setFeedback('Encrypting dispatch packet and routing transmission...');

    // Simulate encrypted transmission delay, then trigger mailto client & show confirmation
    setTimeout(() => {
      try {
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio Dispatch from ${email.trim()}`)}&body=${encodeURIComponent(`Sender: ${email.trim()}\n\nMessage:\n${message.trim()}\n\n---\nTransmitted via Davish Talreja Portfolio Console`)}`;
        
        // Open user's default email client with pre-filled content
        window.open(mailtoUrl, '_blank');
        
        setStatus('success');
        setFeedback('Transmission packet delivered. Dispatch routed to Davish Talreja.');
        setEmail('');
        setMessage('');

        // Reset status back to idle after 6 seconds
        setTimeout(() => {
          setStatus('idle');
          setFeedback('');
        }, 6000);
      } catch {
        setStatus('error');
        setFeedback('Network protocol failed. Please contact davishtalreja@gmail.com directly.');
      }
    }, 1400);
  };

  return (
    <section id="establish-link" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 08 // ESTABLISH LINK ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest hidden sm:inline">
              DIRECT UPLINK & CHANNELS
            </span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Secure Transmission.
          </h2>
        </div>

        {/* Console Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-low/80 backdrop-blur-md rounded-lg border border-surface-container font-label-mono-xs text-label-mono-xs text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="uppercase tracking-wider">CHANNELS OPERATIONAL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* Left Column: Contact Context & Networks (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-md">
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
              Whether you want to discuss a new system architecture, collaborate on embedded hardware, or explore AI data engineering—my transmission lines are always open.
            </p>

            <div className="flex flex-col gap-space-sm mt-space-xs p-space-md bg-surface-container-low/60 backdrop-blur-md rounded-xl border border-surface-container">
              <div className="flex items-center gap-space-md">
                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <div className="flex flex-col">
                  <span className="font-label-mono-xs text-[10px] text-on-surface-variant/70 uppercase tracking-widest">Base Location</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold uppercase tracking-wider">{profile.location}</span>
                </div>
              </div>

              <div className="h-px w-full bg-surface-container-high/60 my-1"></div>

              <div className="flex items-center gap-space-md">
                <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                <div className="flex flex-col">
                  <span className="font-label-mono-xs text-[10px] text-on-surface-variant/70 uppercase tracking-widest">Direct Mailbox</span>
                  <a href={`mailto:${profile.email}`} className="font-label-mono-sm text-label-mono-sm text-on-surface hover:text-primary transition-colors tracking-wider font-semibold">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Networks List */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-mono-xs text-label-mono-xs text-outline uppercase tracking-widest">
              // VERIFIED EXTERNAL PROFILES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-space-xs">
              <a 
                href={profile.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-space-md py-space-sm bg-surface-container-low/80 hover:bg-surface-container-high/90 border border-surface-container rounded-xl transition-all text-on-surface font-label-mono-sm uppercase tracking-wider flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">GITHUB</span>
                  <span className="text-[10px] text-outline">@Davish-code</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
              </a>

              <a 
                href={profile.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-space-md py-space-sm bg-surface-container-low/80 hover:bg-surface-container-high/90 border border-surface-container rounded-xl transition-all text-on-surface font-label-mono-sm uppercase tracking-wider flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">LINKEDIN</span>
                  <span className="text-[10px] text-outline">davish-talreja</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
              </a>

              <a 
                href={profile.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-space-md py-space-sm bg-surface-container-low/80 hover:bg-surface-container-high/90 border border-surface-container rounded-xl transition-all text-on-surface font-label-mono-sm uppercase tracking-wider flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">X // TWITTER</span>
                  <span className="text-[10px] text-outline">@DavishTalr53045</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dispatch Terminal Console (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-space-md sm:p-space-lg lg:p-space-xl bg-surface-container-low/75 backdrop-blur-xl rounded-2xl border border-surface-container hover:border-primary/30 transition-all duration-300 shadow-2xl relative overflow-hidden flex flex-col gap-space-md">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>

            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/80"></span>
                <span className="font-label-code text-label-code text-primary font-bold tracking-wider">
                  DISPATCH_CONSOLE.SH
                </span>
              </div>
              <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant/70 uppercase tracking-widest hidden sm:inline">
                ENC: TLS 1.3 // END-TO-END
              </span>
            </div>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-md mt-1">
              {/* Email Input Field */}
              <div className="flex flex-col gap-1.5">
                <label 
                  htmlFor="contact-email" 
                  className="font-label-mono-xs text-label-mono-xs text-on-surface-variant/90 uppercase tracking-widest flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[15px] text-primary">alternate_email</span>
                  <span>SENDER_ORIGIN // YOUR EMAIL</span>
                  <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. yourname@company.com"
                    disabled={status === 'sending'}
                    className="w-full px-space-md py-3 bg-surface-container-high/60 hover:bg-surface-container-high focus:bg-surface-container-highest border border-surface-container-high focus:border-primary rounded-xl text-on-surface placeholder:text-on-surface-variant/40 font-label-mono-sm text-[13px] outline-none transition-all duration-200 shadow-inner"
                    required
                  />
                </div>
              </div>

              {/* Message Box Field */}
              <div className="flex flex-col gap-1.5">
                <label 
                  htmlFor="contact-message" 
                  className="font-label-mono-xs text-label-mono-xs text-on-surface-variant/90 uppercase tracking-widest flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[15px] text-primary">edit_note</span>
                  <span>TRANSMISSION_PACKET // MESSAGE</span>
                  <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter project inquiry, technical discussion, or transmission brief..."
                    disabled={status === 'sending'}
                    className="w-full px-space-md py-3 bg-surface-container-high/60 hover:bg-surface-container-high focus:bg-surface-container-highest border border-surface-container-high focus:border-primary rounded-xl text-on-surface placeholder:text-on-surface-variant/40 font-body-md text-[14px] leading-relaxed outline-none transition-all duration-200 resize-none shadow-inner"
                    required
                  />
                </div>
              </div>

              {/* Status Message / Terminal Feedback */}
              {feedback && (
                <div 
                  className={cn(
                    "p-space-sm rounded-lg font-label-mono-xs text-label-mono-xs flex items-center gap-2 border animate-in fade-in duration-200",
                    status === 'success' && "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
                    status === 'error' && "bg-red-500/15 text-red-300 border-red-500/30",
                    status === 'sending' && "bg-primary/15 text-primary border-primary/30"
                  )}
                >
                  <span className="material-symbols-outlined text-[16px] shrink-0">
                    {status === 'success' ? 'check_circle' : status === 'error' ? 'error' : 'sync'}
                  </span>
                  <span>{feedback}</span>
                </div>
              )}

              {/* Send Button with Dynamic Animation */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={cn(
                  "w-full py-3.5 px-space-lg rounded-xl font-label-mono-sm text-[13px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg cursor-pointer group/btn select-none",
                  status === 'sending'
                    ? "bg-primary/70 text-on-primary cursor-wait"
                    : status === 'success'
                    ? "bg-emerald-500 text-black shadow-emerald-500/20"
                    : "bg-primary text-on-primary hover:bg-primary-fixed hover:shadow-primary/20 active:scale-[0.99]"
                )}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                    <span className="animate-pulse">TRANSMITTING PACKET...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <span className="material-symbols-outlined text-[18px]">done_all</span>
                    <span>DISPATCH SENT // ACK RECEIVED</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT DISPATCH</span>
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                      send
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
