import WaitlistForm from '@/components/WaitlistForm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, UserCheck, Users, TrendingUp } from 'lucide-react';

export default function MentorMatchingPage() {
  return (
    <main className="min-h-screen bg-white">
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
            <Link href="/" className="flex items-center space-x-2 text-black/70 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
              Mentor <span className="text-pink-400">Matching Program</span>
            </h1>
            <p className="text-base sm:text-lg text-black/80 max-w-3xl mx-auto mb-8">
              Connect with experienced mentors and find your perfect co-founder through our curated matching program. 
              Get personalized guidance to accelerate your entrepreneurial journey.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-black/10">
                <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">Expert Mentors</h3>
                <p className="text-sm text-black/80">Connect with successful entrepreneurs and industry leaders</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-black/10">
                <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">Co-founder Matching</h3>
                <p className="text-sm text-black/80">Find the perfect co-founder to build your dream company</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-black/10">
                <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">Accelerated Growth</h3>
                <p className="text-sm text-black/80">Get personalized guidance to fast-track your success</p>
              </div>
            </div>
          </div>

          <WaitlistForm type="mentor-matching" />
          
          <div className="text-center mt-12">
            <p className="text-black/80">
              Questions about our mentor matching program? <Link href="/contact" className="text-pink-400 hover:text-pink-500 font-medium">Contact us</Link>
            </p>
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
