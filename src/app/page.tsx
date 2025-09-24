import { ArrowRight, Users, Calendar, BookOpen, Heart, MapPin, UserCheck, GraduationCap, TrendingUp, Lightbulb, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
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
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#about" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">About</a>
              <a href="#programs" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Programs</a>
              <a href="#chapters" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Chapters</a>
              <a href="#research" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Research</a>
              <a href="#community" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Community</a>
            </nav>
            <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center border border-black text-xs sm:text-sm">
              JOIN
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] sm:leading-[0.95] text-black">
                  Empowering women
                  <br />
                  driving innovation
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-black leading-snug">
                  AI-forward community for women building the future.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-center border border-black text-sm sm:text-base">
                  <span>JOIN</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="/mentor-matching" className="border-2 border-black text-black px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Join waitlist</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-purple-400">500+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-pink-400">3</div>
                  <div className="text-xs sm:text-sm text-gray-500">Active Chapters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-purple-400">100%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Free & Volunteer-Run</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm">
                    <Image 
                      src="/hero-main.jpg" 
                      alt="WomenX Innovators networking event" 
                      width={300} 
                      height={200} 
                      className="rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm">
                    <Image 
                      src="/community-event.jpg" 
                      alt="WomenX community gathering" 
                      width={300} 
                      height={120} 
                      className="rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm">
                    <Image 
                      src="/hacker-house.jpg" 
                      alt="WomenX hacker house session" 
                      width={300} 
                      height={120} 
                      className="rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm">
                    <Image 
                      src="/womenx.jpeg" 
                      alt="Women entrepreneurs collaborating" 
                      width={300} 
                      height={200} 
                      className="rounded-xl object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
              Women support women
            </h2>
            <p className="text-base sm:text-lg text-black/80 max-w-2xl mx-auto">
              Connection. Mentorship. AI proficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-black">Our philosophy</h3>
                <p className="text-black/80 leading-snug text-sm sm:text-base">
                  Collaboration over competition. Real relationships. Shared wins.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-xl shadow-sm border border-black/10">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-black mb-3" />
                  <h4 className="font-semibold text-black mb-1 text-base sm:text-lg">Collective growth</h4>
                  <p className="text-xs sm:text-sm text-black/80">We rise together.</p>
                </div>
                <div className="p-4 sm:p-6 rounded-xl shadow-sm border border-black/10">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-black mb-3" />
                  <h4 className="font-semibold text-black mb-1 text-base sm:text-lg">Genuine connection</h4>
                  <p className="text-xs sm:text-sm text-black/80">Support that compounds.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl p-0 overflow-hidden shadow-sm">
                  <Image 
                    src="/networking.jpg" 
                    alt="Women entrepreneurs in discussion" 
                    width={250} 
                    height={160} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="rounded-xl p-0 overflow-hidden shadow-sm">
                  <Image 
                    src="/sundai.png" 
                    alt="Mentorship and guidance session" 
                    width={250} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                <div className="rounded-xl p-0 overflow-hidden shadow-sm">
                  <Image 
                    src="/womenx.jpeg" 
                    alt="Collaborative workspace environment" 
                    width={250} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="rounded-xl p-0 overflow-hidden shadow-sm">
                  <Image 
                    src="/meetup2.jpg" 
                    alt="Innovation workshop session" 
                    width={250} 
                    height={160} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section (moved up) */}
      <section id="ai" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Huge AI sign + Sundai mark */}
            <div className="space-y-6 sm:space-y-8">
              <div className="leading-none select-none">
                <div className="text-black font-extrabold tracking-tight" style={{fontSize: 'clamp(12rem, 20vw, 22vw)', lineHeight: 0.8}}>AI</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <Image
                  src="/sundai.png"
                  alt="Sundai Club"
                  width={240}
                  height={240}
                  className="object-contain w-32 sm:w-40 md:w-56 lg:w-72 h-auto"
                />
                <div className="text-black/80 text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-bold">Womenx × Sundai Club</div>
                  <div className="text-xs sm:text-sm">Building AI prototypes every week—together.</div>
                </div>
              </div>
            </div>

            {/* Right: Copy + CTA */}
            <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black">Women in AI</h2>
              <p className="text-base sm:text-lg text-black/80">Hands-on building. Technical skill. Real demos.</p>
              <ul className="space-y-2 sm:space-y-3 text-black/80 text-sm sm:text-base lg:text-lg">
                <li>• Weekly build sessions with mentors</li>
                <li>• Agentic workflows, RAG, evals, and deployment</li>
                <li>• Ship AI products from idea to prototype</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#programs" className="bg-pink-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold border border-black inline-flex items-center justify-center text-sm sm:text-base">Explore AI Events</a>
                <a href="https://www.sundai.club/" target="_blank" rel="noopener noreferrer" className="border-2 border-black text-black px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:bg-black hover:text-white transition-all text-sm sm:text-base">About Sundai Club</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Events Section */}
      <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-white mt-12 sm:mt-16 lg:mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
              Programs & events
            </h2>
            <p className="text-base sm:text-lg text-black/80 max-w-2xl mx-auto">
              Meet. Build. Launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-black/10">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Community Events</h3>
                <p className="text-black/80 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Network and learn together.</p>
                <div className="rounded-lg p-0 overflow-hidden">
                  <Image 
                    src="/community-event.jpg" 
                    alt="Community networking event" 
                    width={300} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-black/10">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Hacker Houses</h3>
                <p className="text-black/80 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">From idea to AI prototype—fast.</p>
                <div className="rounded-lg p-0 overflow-hidden">
                  <Image 
                    src="/hacker-house.jpg" 
                    alt="Hacker house intensive session" 
                    width={300} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-black/10 md:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Mentor & Co-founder Matching</h3>
                <p className="text-black/80 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Match with mentors and co-founders.</p>
                <a href="/mentor-matching" className="w-full bg-pink-400 text-black py-2.5 sm:py-3 rounded-md font-semibold hover:shadow-lg transition-all inline-block text-center border border-black text-sm sm:text-base">
                  Join waitlist
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
            <h2 className="text-5xl font-extrabold text-black mb-4">
              Chapters
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">Local communities, national impact.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-black/10">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black">Boston</h3>
                <p className="text-black/80">Hub for biotech and academia</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 overflow-hidden">
                <Image 
                  src="/boston-chapter-new.jpg" 
                  alt="Boston chapter meetup" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/80">150+ active members</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-black/10">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black">New York</h3>
                <p className="text-black/80">Fintech and media innovation</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 overflow-hidden">
                <Image 
                  src="/new-york-chapter.jpg" 
                  alt="New York chapter event" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/80">200+ active members</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-black/10">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black">San Francisco</h3>
                <p className="text-black/80">Coming Soon!</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 overflow-hidden">
                <Image 
                  src="/san-francisco-chapter.jpg" 
                  alt="San Francisco chapter launch" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/80">Tech and AI innovation hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Initiative Section */}
      <section id="research" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-5xl font-extrabold text-black">Research & impact</h2>
                </div>
                <p className="text-lg text-black/80 leading-snug">Insights that drive change.</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-black/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-black" />
                    <h4 className="font-semibold text-black text-lg">Educational empowerment</h4>
                  </div>
                  <p className="text-black/80">Resources that unlock opportunity.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-black/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-6 h-6 text-black" />
                    <h4 className="font-semibold text-black text-lg">Systemic change</h4>
                  </div>
                  <p className="text-black/80">Recommendations for inclusive ecosystems.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-black/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <Cpu className="w-6 h-6 text-black" />
                    <h4 className="font-semibold text-black text-lg">AI enablement</h4>
                  </div>
                  <p className="text-black/80">Hands-on workshops to build AI proficiency.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/research.jpg" 
                    alt="Research presentation and discussion" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/meetup1.jpg" 
                    alt="Data analysis and insights session" 
                    width={250} 
                    height={100} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/collaboration.jpg" 
                    alt="Policy discussion and development" 
                    width={250} 
                    height={100} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/sundai.png" 
                    alt="Impact measurement and community growth" 
                    width={250} 
                    height={180} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section id="community" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-black">Join us</h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">Build with women who build.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-8 py-4 rounded-md font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-black">
                <span>JOIN</span>
              </a>
              <a href="/waitlist" className="border-2 border-black text-black px-8 py-4 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Join Event Waitlist</span>
              </a>
            </div>

            <div className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/community-cta.jpg" 
                    alt="Community celebration and collaboration" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/hero-main.jpg" 
                    alt="Success stories and achievements" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
                  <Image 
                    src="/hacker-house.jpg" 
                    alt="Collaborative innovation and ideas" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
          <Image
                    src="/meetup2.jpg" 
                    alt="Future leaders and entrepreneurs" 
                    width={250} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
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
            <a href="#programs" className="hover:underline">Programs</a>
            <a href="#chapters" className="hover:underline">Chapters</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#community" className="hover:underline">Community</a>
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
