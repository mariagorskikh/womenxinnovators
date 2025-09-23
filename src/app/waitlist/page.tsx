import WaitlistForm from '@/components/WaitlistForm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WaitlistPage() {
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
              Join Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Waitlist</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be the first to know about exclusive events, mentor matching opportunities, 
              and new chapter launches. Join a community of amazing women entrepreneurs!
            </p>
          </div>

          <WaitlistForm type="general" />
        </div>
      </section>
    </main>
  );
}

