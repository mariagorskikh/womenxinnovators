  import { ArrowRight, Heart, MapPin, UserCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Resources() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
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
              <Link href="/#programs" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Programs</Link>
              <Link href="/resources" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Resources</Link>
              <Link href="/#chapters" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Chapters</Link>
              <Link href="/#engage" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Engage</Link>
            </nav>
            <Link href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center border border-black text-xs sm:text-sm">
              JOIN
            </Link>
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

          {/* More Posts Coming Soon */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-2">More Resources Coming Soon</h3>
              <p className="text-black/80">We&apos;re working on bringing you more valuable content, tools, and insights.</p>
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

          {/* Quick links row */} 
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pb-6 sm:pb-8 text-xs sm:text-sm font-semibold uppercase tracking-wide">
              <Link href="/#programs" className="hover:underline">Programs</Link>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <Link href="/#chapters" className="hover:underline">Chapters</Link>
            <Link href="/#ai" className="hover:underline">AI</Link>
            <Link href="/#engage" className="hover:underline">Socials</Link>
            <Link href="mailto:womenxinnovators@gmail.com" className="hover:underline">Email Us</Link>
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
