import WaitlistForm from '@/components/WaitlistForm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, UserCheck, Users, TrendingUp } from 'lucide-react';

export default function MentorMatchingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50/70 via-purple-50/70 to-lavender-50/70">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-200/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/womenx-logo.png" 
              alt="WomenX Innovators Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              WomenX Innovators
            </span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Mentor <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Matching Program</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with experienced mentors and find your perfect co-founder through our curated matching program. 
              Get personalized guidance to accelerate your entrepreneurial journey.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Expert Mentors</h3>
                <p className="text-sm text-gray-600">Connect with successful entrepreneurs and industry leaders</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Co-founder Matching</h3>
                <p className="text-sm text-gray-600">Find the perfect co-founder to build your dream company</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Accelerated Growth</h3>
                <p className="text-sm text-gray-600">Get personalized guidance to fast-track your success</p>
              </div>
            </div>
          </div>

          <WaitlistForm type="mentor-matching" />
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Questions about our mentor matching program? <Link href="/contact" className="text-purple-600 hover:text-purple-800 font-medium">Contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
