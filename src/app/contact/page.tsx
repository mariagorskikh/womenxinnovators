import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Users, Heart } from 'lucide-react';

export default function ContactPage() {
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
              Get in <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Have questions, want to partner with us, or interested in volunteering? 
              We&apos;d love to hear from you!
            </p>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <Link href="/contact?type=general" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">General Inquiry</h3>
                <p className="text-sm text-gray-600">Questions about our community, events, or programs</p>
              </Link>
              
              <Link href="/contact?type=partnership" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Partnership</h3>
                <p className="text-sm text-gray-600">Interested in collaborating or sponsoring our events</p>
              </Link>
              
              <Link href="/contact?type=volunteer" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Volunteer</h3>
                <p className="text-sm text-gray-600">Help us organize events and grow our community</p>
              </Link>
            </div>
          </div>

          <ContactForm type="general" />
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Ways to Connect</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> womenxinnovators@gmail.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Community:</span>{' '}
                  <a 
                    href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Join our community form
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

