import { ArrowRight, Heart, MapPin, UserCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
              {/* <Image
                src="/womenx-logo.png" 
                alt="WomenX Innovators Logo" 
                width={32} 
                height={32} 
                className="object-contain sm:w-10 sm:h-10"
              /> */}
              <span className="text-lg sm:text-2xl font-bold text-black">
                Womenx Innovators
              </span>
            </Link>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#open-source" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">About</a>
              <a href="#ai" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">AI</a>
              <a href="#open-source" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Community</a>
              <a href="/resources" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Resources</a>
              <a href="#partners" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Partners</a>
              <a href="#footer" className="text-black/70 hover:text-black transition-colors tracking-wide uppercase text-xs xl:text-sm">Engage</a>
            </nav>
            <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-black px-3 py-1.5 sm:px-6 sm:py-2 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center  text-xs sm:text-sm">
              JOIN
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen sm:min-h-screen lg:min-h-screen xl:min-h-screen pt-24 pb-8 sm:pt-28 sm:pb-12 lg:py-32 xl:py-40 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/wxibackground.png)'}}>
        <div className="container mx-auto px-4 relative z-10 mb-30">
          <div className="max-w-6xl text-left">
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight sm:leading-[0.95] text-black">
                  Empowering women
                  <br />
                  driving innovation
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed sm:leading-snug font-bold">
                  <a href="#open-source" className="inline-block align-middle bg-pink-100 text-pink-700 px-2 py-0.5 rounded-md mr-2 hover:bg-pink-200 transition-colors underline-offset-2 hover:underline font-bold">
                    Open Source
                  </a>
                  community for women building the future.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start">
                <a href="https://airtable.com/appXXP4r8lM2iLVNQ/pagC7UyyZvbvPUa9U/form" target="_blank" rel="noopener noreferrer" className="w-fit sm:w-auto bg-pink-400 text-black px-4 py-2 sm:px-8 sm:py-4 rounded-md font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-center text-xs sm:text-base">
                  <span>JOIN</span>
                  <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
                </a>
                <a href="#footer" className="w-fit sm:w-auto bg-black text-white px-4 py-2 sm:px-8 sm:py-4 rounded-md font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-base">
                  <UserCheck className="w-3 h-3 sm:w-5 sm:h-5" />
                  <span>Subscribe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Numbers moved to bottom of hero section */}
        <div className="absolute bottom-8 left-4 right-4 sm:left-4 sm:right-auto sm:bottom-12">
          <div className="max-w-6xl">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 max-w-2xl">
              <div className="text-left">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">700+</div>
                <div className="text-sm sm:text-sm text-gray-800 font-bold">Community Members</div>
              </div>
              <div className="text-left">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">20K</div>
                <div className="text-sm sm:text-sm text-gray-800 font-bold">Raised</div>
              </div>
              <div className="text-left">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">100%</div>
                <div className="text-sm sm:text-sm text-gray-800 font-bold">Free & Volunteer-Run</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="py-8 sm:py-12 lg:py-16 mt-8 sm:mt-12 lg:mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-2 sm:mb-3 lg:mb-4">
              Women support women
            </h2>
            <p className="text-base sm:text-base lg:text-lg text-black/80 max-w-2xl mx-auto font-bold">
              Connection. Mentorship. AI proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black">Our philosophy</h3>
                <p className="text-black/80 leading-snug text-base sm:text-base lg:text-lg font-bold">
                  Collaboration over competition. Real relationships. Shared wins.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="p-3 sm:p-4 lg:p-6 rounded-xl shadow-sm">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black mb-2 sm:mb-3" />
                  <h4 className="font-bold text-black mb-1 text-base sm:text-base lg:text-lg">Collective growth</h4>
                  <p className="text-sm sm:text-sm text-black/80 font-bold">We rise together.</p>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 rounded-xl shadow-sm">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black mb-2 sm:mb-3" />
                  <h4 className="font-bold text-black mb-1 text-base sm:text-base lg:text-lg">Genuine connection</h4>
                  <p className="text-sm sm:text-sm text-black/80 font-bold">Support that compounds.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 order-1 lg:order-2">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <Image 
                    src="/networking.jpg" 
                    alt="Women entrepreneurs in discussion" 
                    width={250} 
                    height={160} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <Image 
                    src="/womenx6.jpeg" 
                    alt="Mentorship and guidance session" 
                    width={250} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 pt-2 sm:pt-3 lg:pt-6">
                <div className="rounded-xl overflow-hidden shadow-sm">
                  <Image 
                    src="/womenx5.JPG" 
                    alt="Collaborative workspace environment" 
                    width={250} 
                    height={120} 
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-sm">
                  <Image 
                    src="/womenx8.jpg"
                    alt="Women in AI community"
                    width={250}
                    height={120}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-1.5 text-xs font-semibold rounded-full text-center">
                    We won the C10 Labs AI Hackathon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/*  
      <section id="open-source" className="py-12 sm:py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
       
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              <div className="col-span-2 lg:col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <Image src="/community.jpeg" alt="In-Person Events - Community networking and panels" width={400} height={400} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-2 text-xs sm:text-sm font-semibold rounded-full text-center">
                    🍽️ Dinner panels
                  </div>
                </div>
              </div>
              
              <div className="col-span-1">
                <a href="https://harvardst.co/" target="_blank" rel="noopener noreferrer" className="block aspect-square rounded-xl overflow-hidden shadow-sm relative group">
                  <Image src="/girls.jpeg" alt="Hacker house intensive session" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-2 text-xs sm:text-sm font-semibold rounded-full text-center">
                    🏠 Hacker house →
                  </div>
                </a>
              </div>
              
              <div className="col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <Image src="/womenx9.JPG" alt="WomenX Innovators networking event" width={400} height={400} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-2 text-xs sm:text-sm font-semibold rounded-full text-center">
                    🤖 AI Hackathon
                  </div>
                </div>
              </div> */}
              
           
              {/* <div className="col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <Image src="/womenx4.JPEG" alt="WomenX community gathering" width={400} height={400} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-2 text-xs sm:text-sm font-semibold rounded-full text-center">
                    👥 Community
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 lg:col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <Image src="/womenx10.jpg" alt="WomenX hacker house session" width={400} height={400} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-2 text-xs sm:text-sm font-semibold rounded-full text-center">
                    💕 Friendship
                  </div>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden shadow-sm relative">
                  <Image src="/womenx.jpeg" alt="Women entrepreneurs collaborating" width={400} height={400} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm text-black p-2 text-xs sm:text-sm font-semibold rounded-full text-center">
                    ☕ Coffee chats
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* What we do - quick chips under carousel */}
          {/* <div className="mt-8 sm:mt-10">
            <h3 className="sr-only">What we do</h3>
            <div className="grid grid-cols-2 gap-8 sm:gap-12 items-center justify-items-center">
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image src="/logos/c10labs.png" alt="Hackathons" width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-black">Hackathons</h4>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image src="/houseicon.png" alt="Hacker houses" width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-black">Hacker houses (C House)</h4>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image src="/logos/hsc.png" alt="Events" width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-black">In-person dinners & events</h4>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                  <Image src="/logos/sundaiclub.svg" alt="Networking" width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-black">Bonding & networking</h4>
              </div>
            </div>
          </div> */}
        {/* </div>
      </section> */}

      {/* AI Section (moved up) */}
      <section id="ai" className="py-12 sm:py-20 lg:py-28 mt-12 sm:mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: AI visual - responsive */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-full max-w-md lg:max-w-none lg:-ml-16 xl:-ml-24">
                <Image
                  src="/ai1.png"
                  alt="AI typography"
                  width={2000}
                  height={2000}
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>
            {/* Right: Heading + text + single image card */}
            <div className="order-2 lg:order-2 space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-tight">Focused on AI</h2>
              <p className="text-lg sm:text-lg lg:text-xl text-black/80 font-bold">Hands-on building. Technical skill. Real demos.</p>
              <ul className="space-y-2 sm:space-y-3 text-black/80 text-base sm:text-base lg:text-lg font-bold">
                <li>• Weekly build sessions with mentors</li>
                <li>• Agentic workflows, RAG, evals, and deployment</li>
                <li>• Ship AI products from idea to prototype</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">

          {/* Substack Posts */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Vibe Coding Post */}
              <a 
                href="https://womenxinnovators.substack.com/p/vibe-coding-notes-to-get-unstuck"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <Image 
                      src="/substack.jpg"
                      alt="Vibe coding notes to get unstuck by Womenx Innovators"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                  <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-black mb-2 group-hover:text-pink-400 transition-colors">
                    Vibe coding notes to get unstuck
                  </h3>
                  <p className="text-sm sm:text-sm lg:text-base text-black/80 mb-3 sm:mb-4 font-bold">
                    Tools, hacks and insights to get you unstuck while vibe coding.
                  </p>
                  <div className="text-pink-400 font-bold text-sm sm:text-sm lg:text-base group-hover:underline">
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
                <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <Image 
                      src="/substack2.jpg"
                      alt="Womenx Innovators Substack Newsletter"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                  <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-black mb-2 group-hover:text-pink-400 transition-colors">
                    WXI Newsletter
                  </h3>
                  <p className="text-sm sm:text-sm lg:text-base text-black/80 mb-3 sm:mb-4 font-bold">
                    Your weekly dose of curated opportunities, expert insights, success stories, and AI tools.
                  </p>
                  <div className="text-pink-400 font-bold text-sm sm:text-sm lg:text-base group-hover:underline">
                    Subscribe on Substack →
            </div>
                </div>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-2 sm:mb-3 lg:mb-4">
              Chapters
            </h2>
            <p className="text-base sm:text-base lg:text-lg text-black/80 max-w-2xl mx-auto font-bold">Local communities, national impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm">
              <div className="mb-4 sm:mb-6">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-black">Boston</h3>
                <p className="text-base sm:text-base text-black/80 font-bold">Hub for biotech and academia</p>
              </div>
              <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 mb-3 sm:mb-4 overflow-hidden">
                <Image 
                  src="/boston-chapter-new.jpg" 
                  alt="Boston chapter meetup" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <p className="text-sm sm:text-sm text-black/80 font-bold">150+ active members</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm">
              <div className="mb-4 sm:mb-6">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-black">New York</h3>
                <p className="text-base sm:text-base text-black/80 font-bold">Fintech and media innovation</p>
              </div>
              <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 mb-3 sm:mb-4 overflow-hidden">
                <Image 
                  src="/new-york-chapter.jpg" 
                  alt="New York chapter event" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <p className="text-sm sm:text-sm text-black/80 font-bold">200+ active members</p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm md:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-black">San Francisco</h3>
                <p className="text-base sm:text-base text-black/80 font-bold">Coming Soon!</p>
              </div>
              <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 mb-3 sm:mb-4 overflow-hidden">
                <Image 
                  src="/san-francisco-chapter.jpg" 
                  alt="San Francisco chapter launch" 
                  width={300} 
                  height={150} 
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <p className="text-sm sm:text-sm text-black/80 font-bold">Tech and AI innovation hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
     

      {/* Partners Section */}
      <section id="partners" className="py-8 sm:py-12 lg:py-16 mb-8 sm:mb-12 lg:mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-2 sm:mb-3 lg:mb-4">
              Partners
            </h2>
            <p className="text-base sm:text-base lg:text-lg text-black/80 max-w-2xl mx-auto font-bold">
              Who we&apos;ve collaborated with.
            </p>
          </div>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <Image 
                  src="/logos/hsc.png"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-8 sm:h-10 md:h-12 lg:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <Image 
                  src="/logos/c10labs.png"
                  alt="C10 Labs"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-8 sm:h-10 md:h-12 lg:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <Image 
                  src="/logos/fidelity.png"
                  alt="Fidelity"
                  width={400}
                  height={200}
                  className="object-contain w-auto h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                />
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <Image 
                  src="/mitmedialab.jpeg"
                  alt="MIT Media Lab"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-8 sm:h-10 md:h-12 lg:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <Image 
                  src="/logos/sundaiclub.svg"
                  alt="Sundai Club"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-8 sm:h-10 md:h-12 lg:h-16"
                />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <Image 
                  src="/logos/hsc.png"
                  alt="Harvard St. Commons"
                  width={200}
                  height={80}
                  className="object-contain w-auto h-8 sm:h-10 md:h-12 lg:h-16"
                />
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <span className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-black/60">Partner Logo 2</span>
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <span className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-black/60">Partner Logo 3</span>
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <span className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-black/60">Partner Logo 4</span>
              </div>
              <div className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                <span className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-black/60">Partner Logo 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="text-black bg-pink-400">
        <div className="container mx-auto px-4">
          {/* Bold banner row */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 lg:py-10 gap-3 sm:gap-4 lg:gap-0">
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs sm:text-sm tracking-wider uppercase">Community · Mentorship · Innovation</span>
            </div>
            <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight uppercase text-center">WomenX Innovators</div>
          </div>

          {/* Engage content moved to footer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start pb-6 sm:pb-8">
            {/* Substack subscribe embed */}
            <div className="w-full">
              <div className="bg-white rounded-xl p-4 shadow-sm ">
                <iframe
                  src="https://womenxinnovators.substack.com/embed"
                  width="100%"
                  height="240"
                  style={{ background: 'white' }}
                  scrolling="no"
                />
                <p className="text-base text-black/70 mt-3 font-bold">Get our weekly dose of opportunities, stories, and AI tools in your inbox.</p>
              </div>
            </div>

            {/* Social + Collaboration */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3">Connect on Social</h3>
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

              <div className="bg-white rounded-xl p-6 shadow-sm ">
                <h3 className="text-xl font-bold text-black mb-2">Collaborate on Substack</h3>
                <p className="text-black/80 text-sm mb-3">
                  We welcome collaborative posts about female founder stories, AI tools, and AI.
                  Request to collaborate with <span className="font-semibold">Womenx Innovators</span> on Substack and we’ll follow up.
                </p>
                <a
                  href="https://womenxinnovators.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-400 text-black px-4 py-2 rounded-md font-semibold  hover:shadow-md transition"
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
            <a href="mailto:womenxinnovators@gmail.com" className="hover:underline">Email Us</a>
          </div>

          

          {/* Bottom legal strip */}
          <div className=" py-4 sm:py-6 text-center text-black/80 text-xs sm:text-sm">
            <p>&copy; 2025 WomenX Innovators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
