import { ArrowRight, Users, Calendar, BookOpen, Heart, MapPin, UserCheck, GraduationCap, TrendingUp, Lightbulb, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-200/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
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
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-purple-400 transition-colors">About</a>
            <a href="#programs" className="text-gray-600 hover:text-purple-400 transition-colors">Programs</a>
            <a href="#chapters" className="text-gray-600 hover:text-purple-400 transition-colors">Chapters</a>
            <a href="#research" className="text-gray-600 hover:text-purple-400 transition-colors">Research</a>
            <a href="#community" className="text-gray-600 hover:text-purple-400 transition-colors">Community</a>
          </nav>
          <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-300 to-purple-300 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-pink-400 hover:to-purple-400 inline-block text-center">
            Join Community
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50/70 via-purple-50/70 to-lavender-50/70 py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-3"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                    Empowering Women.
                  </span>
                  <br />
                  <span className="text-gray-700">Driving Innovation.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join a vibrant community of women-led innovators, change-makers, and entrepreneurs 
                  shaping the future of business across Boston, New York, and San Francisco.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-300 to-purple-300 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-center hover:from-pink-400 hover:to-purple-400">
                  <span>🚀 Join Our Community</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/mentor-matching" className="border-2 border-purple-200 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-300 hover:text-purple-500 transition-all duration-300 flex items-center justify-center space-x-2">
                  <UserCheck className="w-5 h-5" />
                  <span>Mentor Matching Waitlist</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-gray-500">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">3</div>
                  <div className="text-gray-500">Active Chapters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <div className="text-gray-500">Free & Volunteer-Run</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 h-48 overflow-hidden shadow-sm">
                    <Image 
                      src="/hero-main.jpg" 
                      alt="WomenX Innovators networking event" 
                      width={300} 
                      height={200} 
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 h-32 overflow-hidden shadow-sm">
                    <Image 
                      src="/community-event.jpg" 
                      alt="WomenX community gathering" 
                      width={300} 
                      height={120} 
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 h-32 overflow-hidden shadow-sm">
                    <Image 
                      src="/hacker-house.jpg" 
                      alt="WomenX hacker house session" 
                      width={300} 
                      height={120} 
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 h-48 overflow-hidden shadow-sm">
                    <Image 
                      src="/collaboration.jpg" 
                      alt="Women entrepreneurs collaborating" 
                      width={300} 
                      height={200} 
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Why Supporting Women Entrepreneurs 
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Despite making up 50% of the population, women receive less than 3% of venture capital funding. 
              We&apos;re here to change that narrative by building the strongest network of women innovators.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Our Philosophy: Women Supporting Women</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in changing the narrative from competition to collaboration. When women lift each other up, 
                  celebrate each other&apos;s wins, and create genuine connections, we all rise together. We are unique because 
                  we focus on authentic community building where every woman&apos;s success becomes fuel for the next.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50/80 to-purple-50/80 p-6 rounded-xl shadow-sm border border-purple-100/50">
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-gray-700 mb-2">Collective Growth</h4>
                  <p className="text-sm text-gray-500">Your success inspires and elevates others</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 p-6 rounded-xl shadow-sm border border-pink-100/50">
                  <Heart className="w-8 h-8 text-pink-400 mb-3" />
                  <h4 className="font-semibold text-gray-700 mb-2">Genuine Connection</h4>
                  <p className="text-sm text-gray-500">Real relationships built on mutual empowerment</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-pink-50/70 to-purple-50/70 rounded-xl p-4 h-40 overflow-hidden shadow-sm">
                  <Image 
                    src="/networking.jpg" 
                    alt="Women entrepreneurs in discussion" 
                    width={250} 
                    height={160} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/70 rounded-xl p-4 h-32 overflow-hidden shadow-sm">
                  <Image 
                    src="/member-profile.jpg" 
                    alt="Mentorship and guidance session" 
                    width={250} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="bg-gradient-to-br from-pink-50/70 to-purple-50/70 rounded-xl p-4 h-32 overflow-hidden shadow-sm">
                  <Image 
                    src="/meetup1.jpg" 
                    alt="Collaborative workspace environment" 
                    width={250} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/70 rounded-xl p-4 h-40 overflow-hidden shadow-sm">
                  <Image 
                    src="/meetup2.jpg" 
                    alt="Innovation workshop session" 
                    width={250} 
                    height={160} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Events Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Programs & Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate networking sessions to intensive hacker houses, we offer diverse opportunities 
              for learning, growing, and building together. All events are free and run by volunteers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">Community Events</h3>
                <p className="text-gray-600 mb-4">
                  Regular in-person and virtual gatherings for networking, learning, and collaboration across all chapters.
                </p>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 h-32 overflow-hidden">
                  <Image 
                    src="/community-event.jpg" 
                    alt="Community networking event" 
                    width={300} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">Hacker Houses</h3>
                <p className="text-gray-600 mb-4">
                  Intensive collaborative sessions where ideas turn into prototypes and connections become partnerships.
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 h-32 overflow-hidden">
                  <Image 
                    src="/hacker-house.jpg" 
                    alt="Hacker house intensive session" 
                    width={300} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">Mentor & Co-founder Matching</h3>
                <p className="text-gray-600 mb-4">
                  Connect with experienced mentors and find your perfect co-founder through our curated matching program.
                </p>
                <a href="/mentor-matching" className="w-full bg-gradient-to-r from-pink-300 to-purple-300 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:from-pink-400 hover:to-purple-400 inline-block text-center">
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Chapters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building strong local communities in major innovation hubs across the country.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50/70 to-purple-50/70 rounded-2xl p-8 text-center shadow-sm border border-purple-100/30">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Boston</h3>
                <p className="text-gray-600">Hub for biotech and academia</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 h-32 overflow-hidden">
                <Image 
                  src="/boston-chapter-new.jpg" 
                  alt="Boston chapter meetup" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-600">150+ active members</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/70 rounded-2xl p-8 text-center shadow-sm border border-pink-100/30">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">New York</h3>
                <p className="text-gray-600">Fintech and media innovation</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 h-32 overflow-hidden">
                <Image 
                  src="/new-york-chapter.jpg" 
                  alt="New York chapter event" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-600">200+ active members</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50/70 to-purple-50/70 rounded-2xl p-8 text-center shadow-sm border border-purple-100/30">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">San Francisco</h3>
                <p className="text-gray-600">Coming Soon!</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 h-32 overflow-hidden">
                <Image 
                  src="/san-francisco-chapter.jpg" 
                  alt="San Francisco chapter launch" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-600">Tech and AI innovation hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Initiative Section */}
      <section id="research" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800">
                    Research & <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Impact</span>
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our research initiative focuses on understanding and improving gender equality in entrepreneurship 
                  through education, empowerment, and evidence-based solutions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                    <h4 className="font-semibold text-gray-800">Educational Empowerment</h4>
                  </div>
                  <p className="text-gray-600">
                    Developing resources and programs that address the unique challenges women face in entrepreneurship.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-6 h-6 text-pink-600" />
                    <h4 className="font-semibold text-gray-800">Systemic Change</h4>
                  </div>
                  <p className="text-gray-600">
                    Publishing insights and recommendations to create more inclusive entrepreneurial ecosystems.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 h-48 overflow-hidden">
                  <Image 
                    src="/research.jpg" 
                    alt="Research presentation and discussion" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 h-32 overflow-hidden">
                  <Image 
                    src="/meetup1.jpg" 
                    alt="Data analysis and insights session" 
                    width={250} 
                    height={100} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-xl p-4 h-32 overflow-hidden">
                  <Image 
                    src="/collaboration.jpg" 
                    alt="Policy discussion and development" 
                    width={250} 
                    height={100} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 h-48 overflow-hidden">
                  <Image 
                    src="/networking.jpg" 
                    alt="Impact measurement and community growth" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Amazing Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our members come from the world&apos;s most prestigious institutions and companies, 
              bringing diverse perspectives and exceptional expertise to our community.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-800">Harvard</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-pink-600" />
                </div>
                <div className="font-semibold text-gray-800">MIT</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-800">Stanford</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-8 h-8 text-pink-600" />
                </div>
                <div className="font-semibold text-gray-800">Y Combinator</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-800">Wharton</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-pink-600" />
                </div>
                <div className="font-semibold text-gray-800">Columbia</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <div className="mb-4 h-32 overflow-hidden">
                  <Image 
                    src="/founders-showcase.jpg" 
                    alt="Women founders and entrepreneurs at member event" 
                    width={350} 
                    height={200} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">70% Founders</h4>
                <p className="text-gray-600 text-sm">Active entrepreneurs building the next generation of companies</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <div className="mb-4 h-32 overflow-hidden">
                  <Image 
                    src="/mentors-investors.jpg" 
                    alt="Investor panel discussion and mentorship" 
                    width={350} 
                    height={200} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">15% Mentors & 10% Investors</h4>
                <p className="text-gray-600 text-sm">Experienced leaders providing guidance and funding opportunities</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <div className="mb-4 h-32 overflow-hidden">
                  <Image 
                    src="/students-showcase.jpg" 
                    alt="Student engagement and learning session" 
                    width={350} 
                    height={200} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">5% Students</h4>
                <p className="text-gray-600 text-sm">Ambitious students preparing to launch their entrepreneurial journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="community" className="py-20 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-300">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl text-white/95 max-w-3xl mx-auto">
              Be part of a community that believes in lifting each other up, sharing knowledge freely, 
              and creating opportunities for all women entrepreneurs to thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-500 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 hover:text-purple-600">
                <span>🚀 Join Our Community</span>
              </a>
              <a href="/waitlist" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-500 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Join Event Waitlist</span>
              </a>
            </div>

            <div className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-32 overflow-hidden">
                  <Image 
                    src="/community-cta.jpg" 
                    alt="Community celebration and collaboration" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-32 overflow-hidden">
                  <Image 
                    src="/hero-main.jpg" 
                    alt="Success stories and achievements" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-32 overflow-hidden">
                  <Image 
                    src="/hacker-house.jpg" 
                    alt="Collaborative innovation and ideas" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-32 overflow-hidden">
          <Image
                    src="/meetup2.jpg" 
                    alt="Future leaders and entrepreneurs" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
          <Image
                  src="/womenx-logo.png" 
                  alt="WomenX Innovators Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
                <span className="text-xl font-bold">WomenX Innovators</span>
              </div>
              <p className="text-gray-400">
                Empowering women entrepreneurs to build the future through community, 
                mentorship, and innovative collaboration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Community Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hacker Houses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentor Matching</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research Initiative</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Chapters</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Boston</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New York</a></li>
                <li><a href="#" className="hover:text-white transition-colors">San Francisco (Coming Soon)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <p className="text-gray-400 mb-4">womenxinnovators@gmail.com</p>
              <div className="flex space-x-4">
                <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl">💬</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WomenX Innovators. All rights reserved. Built with 💜 by our community.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
