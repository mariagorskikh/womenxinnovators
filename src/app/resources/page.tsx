import { ArrowRight, Heart, MapPin, UserCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Resources() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/womenx-logo.png" 
                alt="WomenX Innovators Logo" 
                width={32} 
                height={32} 
                className="object-contain sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-2xl font-bold text-black">
                Womenx Innovators
              </span>
            </Link>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link href="/#about" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">About</Link>
              <Link href="/#ai" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">AI</Link>
              <Link href="/#community" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Community</Link>
              <Link href="/resources" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Resources</Link>
              <Link href="/#partners" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Partners</Link>
              <Link href="/#engage" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Engage</Link>
            </nav>
            <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center border border-black text-xs sm:text-sm">
              JOIN
            </a>
          </div>
        </div>
      </header>

      {/* Resources Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">

          {/* Substack Posts */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Vibe Coding Post */}
              <a 
                href="https://womenxinnovators.substack.com/p/vibe-coding-notes-to-get-unstuck"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-black/10 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/substack.jpg"
                      alt="Vibe coding notes to get unstuck by Womenx Innovators"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-pink-400 transition-colors">
                    Vibe coding notes to get unstuck
                  </h3>
                  <p className="text-sm sm:text-base text-black/80 mb-4">
                    Tools, hacks and insights to get you unstuck while vibe coding.
                  </p>
                  <div className="text-pink-400 font-semibold text-sm sm:text-base group-hover:underline">
                    Read on Substack →
                  </div>
                </div>
              </a>

              {/* Main Substack */}
              <a 
                href="https://womenxinnovators.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-black/10 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/substack2.jpg"
                      alt="Womenx Innovators Substack Newsletter"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-pink-400 transition-colors">
                    WXI Newsletter
                  </h3>
                  <p className="text-sm sm:text-base text-black/80 mb-4">
                    Your weekly dose of curated opportunities, expert insights, success stories, and AI tools.
                  </p>
                  <div className="text-pink-400 font-semibold text-sm sm:text-base group-hover:underline">
                    Subscribe on Substack →
                  </div>
                </div>
              </a>
            </div>
          </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-400 text-black border-t border-black/10">
        <div className="container mx-auto px-4">
          {/* Bold banner row */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-8 sm:py-10 gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs sm:text-sm tracking-wider uppercase">Community · Mentorship · Innovation</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase text-center">WomenX Innovators</div>
          </div>

          {/* Engage content moved to footer */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-8">
            {/* Substack subscribe embed */}
            <div className="w-full">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-black/10">
                <iframe
                  src="https://womenxinnovators.substack.com/embed"
                  width="100%"
                  height="240"
                  style={{ border: '1px solid rgba(0,0,0,0.1)', background: 'white' }}
                  scrolling="no"
                />
                <p className="text-sm text-black/70 mt-3">Get our weekly dose of opportunities, stories, and AI tools in your inbox.</p>
              </div>
            </div>

            {/* Social + Collaboration */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Connect on Social</h3>
                <div className="flex items-center gap-5">
                  <a
                    href="https://womenxinnovators.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Substack"
                    title="Subscribe on Substack"
                    className="p-2.5 rounded-md hover:bg-black/5 transition"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#FF6719"/>
                      <rect x="6" y="7" width="12" height="2" fill="white"/>
                      <rect x="6" y="11" width="12" height="2" fill="white"/>
                      <path d="M12 15L6 12V17.5C6 18.3284 6.67157 19 7.5 19H16.5C17.3284 19 18 18.3284 18 17.5V12L12 15Z" fill="white"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/womenx-innovators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="Follow on LinkedIn"
                    className="p-2.5 rounded-md hover:bg-black/5 transition"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#0A66C2"/>
                      <rect x="7" y="10" width="3" height="7" fill="white"/>
                      <rect x="7" y="7" width="3" height="2.5" fill="white"/>
                      <path d="M14 10.25C15.3807 10.25 16.5 11.3693 16.5 12.75V17H13.5V13.25C13.5 12.6977 13.0523 12.25 12.5 12.25C11.9477 12.25 11.5 12.6977 11.5 13.25V17H9V10H11.5V10.9C11.9572 10.4747 12.6009 10.25 13.25 10.25H14Z" fill="white"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:womenxinnovators@gmail.com"
                    aria-label="Email"
                    title="Email us"
                    className="p-2.5 rounded-md hover:bg-black/5 transition"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#111111"/>
                      <path d="M6.75 8.5H17.25C17.9404 8.5 18.5 9.05964 18.5 9.75V14.25C18.5 14.9404 17.25 15.5 17.25 15.5H6.75C6.05964 15.5 5.5 14.9404 5.5 14.25V9.75C5.5 9.05964 6.05964 8.5 6.75 8.5Z" fill="white"/>
                      <path d="M6 9L12 12.5L18 9" stroke="#111111" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-black/10">
                <h3 className="text-xl font-bold text-black mb-2">Collaborate on Substack</h3>
                <p className="text-black/80 text-sm mb-3">
                  We welcome collaborative posts about female founder stories, AI tools, and AI.
                  Request to collaborate with <span className="font-semibold">Womenx Innovators</span> on Substack and we’ll follow up.
                </p>
                <a
                  href="https://womenxinnovators.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-400 text-black px-4 py-2 rounded-md font-semibold border border-black hover:shadow-md transition"
                >
                  Request to collaborate
                </a>
              </div>
            </div>
          </div>
          {/* Quick links row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pb-6 sm:pb-8 text-xs sm:text-sm font-semibold uppercase tracking-wide">
            <a href="#about" className="hover:underline">About</a>
            <a href="#ai" className="hover:underline">AI</a>
            <a href="#community" className="hover:underline">Community</a>
            <a href="/resources" className="hover:underline">Resources</a>
            <a href="#partners" className="hover:underline">Partners</a>
            <a href="#engage" className="hover:underline">Socials</a>
            <a href="mailto:womenxinnovators@gmail.com" className="hover:underline">Email Us</a>
          </div>

          

          {/* Bottom legal strip */}
          <div className="border-t border-black/10 py-4 sm:py-6 text-center text-black/80 text-xs sm:text-sm">
            <p>&copy; 2025 WomenX Innovators. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </main>
      );
    }
