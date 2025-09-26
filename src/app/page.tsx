import { ArrowRight, Heart, MapPin, UserCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
              <a href="#about" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">About</a>
              <a href="#ai" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">AI</a>
              <a href="#programs" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Programs</a>
              <a href="/resources" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Resources</a>
              <a href="#chapters" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Chapters</a>
              <a href="#engage" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Engage</a>
            </nav>
            <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center border border-black text-xs sm:text-sm">
              JOIN
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-6 sm:py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] sm:leading-[0.95] text-black">
                  Empowering women
                  <br />
                  driving innovation
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-black leading-snug">
                  <a href="#open-source" className="inline-block align-middle bg-pink-100 text-pink-700 px-2 py-0.5 rounded-md mr-2 border border-pink-200 hover:bg-pink-200 transition-colors underline-offset-2 hover:underline">
                    Open Source
                  </a>
                  community for women building the future.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-center border border-black text-sm sm:text-base">
                  <span>JOIN</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#engage" className="border-2 border-black text-black px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Subscribe</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">700+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-pink-400">15K</div>
                  <div className="text-xs sm:text-sm text-gray-500">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">100%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Free & Volunteer-Run</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm aspect-square">
                    <Image 
                      src="/womenx9.JPG" 
                      alt="WomenX Innovators networking event" 
                      width={300} 
                      height={300} 
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm aspect-square">
                    <Image 
                      src="/womenx4.JPEG" 
                      alt="WomenX community gathering" 
                      width={300} 
                      height={300} 
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                  <div className="rounded-2xl p-0 overflow-hidden shadow-sm">
                    <Image 
                      src="/womenx10.jpg" 
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

      {/* Open Source Definition Section */}
      <section id="open-source" className="py-12 sm:py-16 lg:py-24 bg-white text-center py-32 lg:py-48 px-4 lg:px-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-black/80 font-bold">
              &quot;This open-source platform is yours to use—our brand, our community, and our resources are open for anyone to launch ideas, build projects together, and share openly in public. No gatekeeping.&quot;
            </p>
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
                    src="/womenx6.jpeg" 
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
                    src="/womenx5.JPG" 
                    alt="Collaborative workspace environment" 
                    width={250} 
                    height={120} 
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
              <div className="space-y-4 max-w-xl">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-black/10 max-w-sm">
                  <Image
                    src="/womenx8.jpg"
                    alt="Women in AI community"
                    width={250}
                    height={120}
                    className="object-cover w-full h-auto"
                  />
                  <div className="px-3 py-2 text-xs text-black/80 text-center">
                    We won the largest Women in AI hackathon in the Northeast
                  </div>
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
              {/* Sundai info card (moved to right for balance) */}
              <a
                href="https://www.sundai.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-black/10 rounded-2xl p-4 shadow-sm flex items-center gap-4 max-w-md hover:bg-black/5 transition"
                aria-label="Visit Sundai Club"
                title="Visit Sundai Club"
              >
                <Image
                  src="/sundai.png"
                  alt="Sundai Club"
                  width={200}
                  height={200}
                  className="object-contain w-14 h-14 sm:w-16 sm:h-16"
                />
                <div className="text-black/80">
                  <div className="text-sm sm:text-base font-bold">Womenx × Sundai Club</div>
                  <div className="text-xs sm:text-sm">Building AI prototypes every week—together.</div>
                </div>
              </a>
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-black/10 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                {/* <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div> */}
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Community Events</h3>
                <p className="text-black/80 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">In person dinners and panels.</p>
                <div className="rounded-lg p-0 overflow-hidden aspect-square">
                  <Image 
                    src="/community.jpeg" 
                    alt="Community networking event" 
                    width={300} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-black/10 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                {/* <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div> */}
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Hacker Houses</h3>
                <p className="text-black/80 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Living and building together.</p>
                <div className="rounded-lg p-0 overflow-hidden aspect-square mb-4">
                  <Image 
                    src="/girls.jpeg" 
                    alt="Hacker house intensive session" 
                    width={300} 
                    height={150} 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <a 
                  href="https://harvardst.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-pink-400 text-black px-4 py-2.5 sm:py-3 rounded-md font-semibold hover:shadow-lg transition-all inline-block text-center border border-black text-sm sm:text-base"
                >
                  Visit C House
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-black/10 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">Mentor & Co-founder Matching</h3>
                <p className="text-black/80 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Match with mentors and co-founders.</p>
                <a href="/mentor-matching" className="bg-pink-400 text-black px-4 py-2.5 sm:py-3 rounded-md font-semibold hover:shadow-lg transition-all inline-block text-center border border-black text-sm sm:text-base">
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
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
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
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
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

      {/* Partners Section */}
      <section id="partners" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
              Partners
            </h2>
            <p className="text-base sm:text-lg text-black/80 max-w-2xl mx-auto">
              Who we&apos;ve collaborated with.
            </p>    
          </div>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <Image 
                  src="/logos/hsc.png"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-12 sm:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <Image 
                  src="/logos/c10labs.png"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-12 sm:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                  <Image 
                    src="/logos/fidelity.png"
                    alt="Harvard St. Commons"
                    width={400}
                    height={200}
                    className="object-contain w-auto h-28 sm:h-32"
                  />
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <Image 
                  src="/logos/foundess.png"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-12 sm:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <Image 
                  src="/logos/sundaiclub.svg"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-12 sm:h-16"
                />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <Image 
                  src="/logos/hsc.png"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-12 sm:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <span className="text-lg sm:text-xl font-bold text-black/60">Partner Logo 2</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <span className="text-lg sm:text-xl font-bold text-black/60">Partner Logo 3</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <span className="text-lg sm:text-xl font-bold text-black/60">Partner Logo 4</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
                <span className="text-lg sm:text-xl font-bold text-black/60">Partner Logo 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage Section */}
      <section id="engage" className="py-20 bg-white mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">How to Engage with Us</h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">Subscribe, connect, and collaborate with Womenx Innovators.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                      <path d="M6.75 8.5H17.25C17.9404 8.5 18.5 9.05964 18.5 9.75V14.25C18.5 14.9404 17.9404 15.5 17.25 15.5H6.75C6.05964 15.5 5.5 14.9404 5.5 14.25V9.75C5.5 9.05964 6.05964 8.5 6.75 8.5Z" fill="white"/>
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
            <a href="/resources" className="hover:underline">Resources</a>
            <a href="#chapters" className="hover:underline">Chapters</a>
            <a href="#partners" className="hover:underline">Partners</a>
            <a href="#ai" className="hover:underline">AI</a>
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
