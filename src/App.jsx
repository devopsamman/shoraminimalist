import { useState, useEffect } from 'react'
import { 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Plus, 
  Minus, 
  Brain, 
  CheckSquare, 
  Compass, 
  Smile, 
  Heart, 
  Sparkles,
  HelpCircle,
  Menu,
  X
} from 'lucide-react'

function App() {
  // --- States ---
  
  // Hero Testimonial Carousel
  const heroTestimonials = [
    {
      text: "This planner is a game-changer for my ADHD! The small tasks make cleaning feel so much more manageable.",
      author: "Sarah K.",
      rating: 5
    },
    {
      text: "Finally, a layout that works with my brain rather than fighting it. Clean lines, zero clutter.",
      author: "David L.",
      rating: 5
    },
    {
      text: "The room-by-room check-offs are perfect. It prevents my task paralysis every single morning.",
      author: "Jess M.",
      rating: 5
    }
  ]
  const [heroIndex, setHeroIndex] = useState(0)

  // Auto-rotate hero testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroTestimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Interactive Tabs Section (Section 5)
  const [activeTab, setActiveTab] = useState('tasks') // 'tasks' | 'adhd' | 'motivating'

  const tabContents = {
    tasks: {
      title: "Designed for You",
      body1: "Designed with ADHD in mind, our planner uses a clear, visual structure to guide you through cleaning. Small, achievable steps build momentum and prevent task paralysis.",
      body2: "The planner's strength lies in its simplicity and motivational design. Enjoy a judgment-free zone that celebrates progress, making daily cleaning a sustainable and rewarding habit.",
      image: "/Assets/shora images12.jpeg"
    },
    adhd: {
      title: "ADHD-Friendly Layout",
      body1: "Our layout breaks tasks down to their absolute simplest form. No long-winded checklists or overwhelming daily schedules that lead to mental fatigue.",
      body2: "By presenting tasks in structured columns with visual spacing, your brain can easily focus on one single step at a time, resulting in immediate progress.",
      image: "/Assets/shora images16.jpeg"
    },
    motivating: {
      title: "Motivating & Rewarding",
      body1: "Get the immediate hit of satisfaction and dopamine with our clean, visual check-off circles. Checking items off triggers a feeling of achievement.",
      body2: "We keep the focus on building small daily consistency. Over time, these small actions compound into a beautifully kept home and a clear, quiet mind.",
      image: "/Assets/shora images18.jpeg"
    }
  }

  // Product Gallery (Section 8)
  const galleryImages = [
    "/Assets/shora images13.png", // Main Infographic
    "/Assets/shora images02.jpeg", // Cover Mockup
    "/Assets/shora images11.jpeg", // Features Mockup
    "/Assets/shora images12.jpeg", // Dimensions Mockup
    "/Assets/shora images14.jpeg", // Weekly spread
    "/Assets/shora images17.jpeg", // Lifestyle
    "/Assets/shora images18.jpeg", // Deep clean
    "/Assets/shora images15.jpeg"  // Guides List
  ]
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0)

  // Quantity Selector
  const [quantity, setQuantity] = useState(1)

  // Buy Section Info Tabs
  const [activeBuyTab, setActiveBuyTab] = useState('how') // 'how' | 'benefits' | 'why'

  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 21, seconds: 31 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              // Reset to 8:21:31 or stop
              hours = 8
              minutes = 21
              seconds = 31
            }
          }
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (t) => {
    return `${String(t.hours).padStart(2, '0')}:${String(t.minutes).padStart(2, '0')}:${String(t.seconds).padStart(2, '0')}`
  }

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null)
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper component to render stars in green boxes
  const GreenStars = () => (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-5 h-5 flex items-center justify-center bg-[#009966] rounded-sm">
          <svg className="w-3 h-3 fill-white text-white" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      ))}
    </div>
  )

  const scrollToBuy = (e) => {
    e.preventDefault()
    document.getElementById('buy-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col font-sans select-none">
      
      {/* SECTION 1: PROMO & NAVIGATION HEADER */}
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#e9ecef] py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide text-zinc-700">
        Simplify daily cleaning with our planner
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glassmorphism border-b border-zinc-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          <div className="flex-1"></div>
          
          {/* Centered Logo */}
          <div className="flex justify-center flex-1">
            <a href="#" className="flex justify-center">
              <img 
                src="/Assets/shora images01.png" 
                alt="Shoraminimalist Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <a 
              href="#buy-section" 
              onClick={scrollToBuy}
              className="hidden md:inline-flex items-center text-xs tracking-wider uppercase font-semibold text-brand-blue border-b-2 border-brand-blue hover:text-brand-blue-dark hover:border-brand-blue-dark transition-colors py-0.5"
            >
              Get Planner
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 2: HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#a5cbff] to-[#b6d6ff] py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Rating & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Stars Block */}
            <div className="flex items-center gap-2 mb-6">
              <GreenStars />
              <span className="text-xs md:text-sm font-semibold text-brand-dark/80 tracking-wide">
                Loved by users, 5-star rating
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-dark mb-4 leading-[1.1]">
              Daily Cleaning
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-brand-dark/80 font-normal mb-8 leading-relaxed max-w-lg">
              Conquer your cleaning routine effortlessly.
            </p>

            {/* CTA Button */}
            <a
              href="https://whop.com/shoraminimalist/the-complete-bundle/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-8 py-4 rounded-md shadow-premium hover-lift mb-10 transition-colors"
            >
              Buy Now <ChevronRight className="w-5 h-5 ml-1" />
            </a>

            {/* Floating Review Card */}
            <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-premium min-h-[140px] flex flex-col justify-between relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue"></div>
              <p className="text-sm md:text-base text-zinc-700 italic font-medium leading-relaxed">
                "{heroTestimonials[heroIndex].text}"
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-bold text-zinc-500 tracking-wider">
                  ★★★★★ {heroTestimonials[heroIndex].author}
                </span>
                
                {/* Dots pagination */}
                <div className="flex gap-1.5">
                  {heroTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        heroIndex === idx ? 'bg-brand-blue w-4' : 'bg-zinc-400'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6 flex justify-center items-center z-10 relative">
            <div className="relative w-full max-w-lg">
              {/* Outer decorative shadow shape */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-lg opacity-40"></div>
              <img
                src="/Assets/shora images02.jpeg"
                alt="ADHD Cleaning Planner Cover Mockup"
                className="w-full h-auto rounded-2xl shadow-lift relative z-10 hover-lift-lg transform rotate-[-1deg] transition-all duration-300"
              />
            </div>
          </div>

        </div>
        
        {/* Subtle sparkle indicators on background */}
        <Sparkles className="absolute top-12 right-12 text-white/50 w-8 h-8 pointer-events-none hidden md:block" />
        <Sparkles className="absolute bottom-16 left-8 text-white/30 w-6 h-6 pointer-events-none hidden md:block" />
      </section>

      {/* SECTION 3: PRESS LOGO BAR */}
      <section className="w-full bg-white border-y border-zinc-100 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
          <img src="/Assets/shora images03.webp" alt="Elle Logo" className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
          <img src="/Assets/shora images04.webp" alt="Forbes Logo" className="h-7 md:h-9 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
          <img src="/Assets/shora images05.webp" alt="Marie Claire Logo" className="h-6 md:h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
          <img src="/Assets/shora images06.avif" alt="New York Post Logo" className="h-7 md:h-9 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
          <img src="/Assets/shora images07.webp" alt="Oprah Daily Logo" className="h-7 md:h-9 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
        </div>
      </section>

      {/* SECTION 4: PRODUCT FEATURES (STEP-BY-STEP & BENEFITS) */}
      <section className="w-full bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark tracking-tight mb-16">
            Effortless Daily Cleaning, Simplified
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Mockup Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/Assets/shora images11.jpeg"
                alt="Weekly Cleaning Guide Step-by-Step Instruction mockup"
                className="w-full max-w-lg rounded-2xl shadow-premium border border-zinc-100 hover-lift transform rotate-[0.5deg] transition-all"
              />
            </div>

            {/* Right Column: 6 Features List */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1">ADHD Friendly</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Enjoy an ADHD-friendly layout designed for clarity and focus.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1">Manageable Tasks</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Break down cleaning into small, achievable tasks that feel manageable.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1">Motivating Environment</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    A motivating and judgment-free space to build consistent habits.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1">Daily Check-Off</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Easily track your progress with a simple daily check-off system.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1">Stress-Free Cleaning</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Transform your cleaning routine into a stress-free experience.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark mb-1">Consistent Cleanliness</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Achieve a consistently clean home without feeling overwhelmed.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: INTERACTIVE TAB SECTION */}
      <section className="w-full bg-[#f8f9fa] py-16 md:py-24 px-4 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto text-center">
          
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            Effortless Cleaning
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mt-2 mb-4">
            Daily Cleaning Made Simple<br/>Effortless Tidying Awaits
          </h2>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tired of cleaning feeling like a monumental task? Our product simplifies daily tidying with an ADHD-friendly, motivating approach. Achieve a cleaner home with small, manageable steps.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-6 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all border ${
                activeTab === 'tasks'
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
              }`}
            >
              Simple Tasks
            </button>
            <button
              onClick={() => setActiveTab('adhd')}
              className={`px-6 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all border ${
                activeTab === 'adhd'
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
              }`}
            >
              ADHD Friendly
            </button>
            <button
              onClick={() => setActiveTab('motivating')}
              className={`px-6 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all border ${
                activeTab === 'motivating'
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
              }`}
            >
              Motivating
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left bg-white p-6 md:p-10 rounded-2xl border border-zinc-100 shadow-premium">
            
            {/* Left: Tab Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={tabContents[activeTab].image}
                alt={tabContents[activeTab].title}
                className="w-full max-w-md h-auto rounded-xl border border-zinc-100 shadow-md object-cover transition-opacity duration-300"
              />
            </div>

            {/* Right: Tab Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 tracking-tight">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-base text-zinc-600 leading-relaxed mb-6">
                {tabContents[activeTab].body1}
              </p>
              <p className="text-base text-zinc-500 leading-relaxed">
                {tabContents[activeTab].body2}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: LOVE YOUR HOME / SIMPLIFY YOUR LIFE */}
      <section className="w-full bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Decorative Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-dark tracking-tight mb-16">
            Love Your Home <span className="font-serif italic font-normal text-zinc-500">Simplify your life</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Dark Blue Bullet Card */}
            <div className="lg:col-span-5 bg-[#0f2347] text-white rounded-2xl p-8 md:p-10 shadow-lift flex flex-col justify-center h-full text-left">
              
              <ul className="space-y-8">
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Effortless Daily Cleaning</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Transform your home with our ADHD-friendly layout, simplifying daily cleaning tasks into easy, manageable steps.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Motivating Planner</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Stay motivated with a judgment-free approach and celebrate small wins with our easy daily check-off planner.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Manageable Tasks</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Break down chores into small, achievable tasks that fit seamlessly into your routine for consistent results.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">ADHD-Friendly Design</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Enjoy a structured yet flexible planner that promotes a sense of calm and control in your home environment.
                    </p>
                  </div>
                </li>

              </ul>

            </div>

            {/* Right: 2x2 Image Collage */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <img src="/Assets/shora images14.jpeg" alt="Weekly routine layout hands writing" className="w-full h-auto rounded-xl shadow-md hover-lift" />
              <img src="/Assets/shora images17.jpeg" alt="Weekly schedule lifestyle with coffee" className="w-full h-auto rounded-xl shadow-md hover-lift" />
              <img src="/Assets/shora images18.jpeg" alt="Laminated deep clean sheets room list" className="w-full h-auto rounded-xl shadow-md hover-lift" />
              <img src="/Assets/shora images15.jpeg" alt="Step-by-step cleaning guides layout" className="w-full h-auto rounded-xl shadow-md hover-lift" />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: PRODUCT GALLERY & PURCHASE CONFIGURATOR (BUY SECTION) */}
      <section id="buy-section" className="w-full bg-[#f8f9fa] py-16 md:py-24 px-4 border-y border-zinc-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6 flex flex-col items-center">
              
              {/* Main Image Slider Frame */}
              <div className="relative w-full max-w-lg bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-premium p-4 flex items-center justify-center aspect-square">
                
                <img
                  src={galleryImages[activeGalleryIdx]}
                  alt="ADHD Cleaning Planner Product View"
                  className="w-full h-full object-contain rounded-xl transition-all duration-300"
                />

                {/* Gallery Navigation Arrows */}
                <button
                  onClick={() => setActiveGalleryIdx((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
                  className="absolute left-4 w-10 h-10 rounded-full bg-white/90 border border-zinc-200 shadow flex items-center justify-center text-zinc-700 hover:bg-brand-blue hover:text-white transition duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setActiveGalleryIdx((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 w-10 h-10 rounded-full bg-white/90 border border-zinc-200 shadow flex items-center justify-center text-zinc-700 hover:bg-brand-blue hover:text-white transition duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Thumbnails Row */}
              <div className="flex flex-wrap gap-2 justify-center mt-4 max-w-lg">
                {galleryImages.map((thumbUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIdx(idx)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 bg-white flex items-center justify-center p-1 transition-all ${
                      activeGalleryIdx === idx ? 'border-brand-blue shadow-smScale scale-105' : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <img src={thumbUrl} alt="" className="w-full h-full object-contain rounded" />
                  </button>
                ))}
              </div>

            </div>

            {/* Right Column: Checkout Detail form */}
            <div className="lg:col-span-6 text-left flex flex-col">
              
              {/* Limited Time Countdown Offer Bar */}
              <div className="w-full bg-brand-peach border border-[#e8c0cc] text-brand-peach-text rounded-md py-2 px-4 text-xs md:text-sm font-semibold tracking-wide flex items-center gap-1.5 mb-6">
                <span>Limited time offer, act fast:</span>
                <span className="font-mono text-sm tracking-widest">{formatTime(timeLeft)}</span>
              </div>

              {/* Category Label */}
              <span className="text-xs font-black tracking-widest text-zinc-400 mb-1 uppercase">
                ADHD PLANNER
              </span>

              {/* Product Title */}
              <h2 className="text-2xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight leading-tight">
                ADHD-Friendly Daily Cleaning Planner
              </h2>

              {/* Rating stars block */}
              <div className="flex items-center gap-2 mb-6">
                <GreenStars />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Verified Purchase
                </span>
              </div>

              {/* Option Selector */}
              <div className="mb-6">
                <span className="block text-xs font-bold text-zinc-500 tracking-wider mb-2 uppercase">
                  ADHD PLANNER
                </span>
                <button className="inline-flex items-center px-4 py-2 border-2 border-brand-blue bg-brand-blue/5 text-brand-blue font-bold rounded-lg text-sm tracking-wide transition-all shadow-sm">
                  <Check className="w-4 h-4 mr-1.5" /> ADHD PLANNER
                </button>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <span className="block text-xs font-bold text-zinc-500 tracking-wider mb-2 uppercase">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-zinc-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center border-r border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center border-l border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                  ${(29.99 * quantity).toFixed(2)}
                </span>
                <span className="text-base text-zinc-400 line-through">
                  ${(49.99 * quantity).toFixed(2)}
                </span>
                <span className="px-2 py-0.5 text-xs font-black bg-brand-blue/15 text-brand-blue rounded-md uppercase tracking-wider">
                  40% OFF
                </span>
              </div>

              {/* CTA Purchase Button */}
              <a
                href="https://whop.com/shoraminimalist/the-complete-bundle/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-lg px-8 py-4 rounded-md shadow-premium hover-lift mb-8 flex items-center justify-center transition-colors text-center"
              >
                Buy Now <ChevronRight className="w-5 h-5 ml-1" />
              </a>

              {/* Buy Section Info Accordion-style Tabs */}
              <div className="w-full bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
                
                {/* Tabs Headers */}
                <div className="flex border-b border-zinc-100 bg-zinc-50/50">
                  <button
                    onClick={() => setActiveBuyTab('how')}
                    className={`flex-1 text-center py-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 ${
                      activeBuyTab === 'how'
                        ? 'border-brand-blue text-brand-blue bg-white'
                        : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/50'
                    }`}
                  >
                    How It Works
                  </button>
                  <button
                    onClick={() => setActiveBuyTab('benefits')}
                    className={`flex-1 text-center py-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 ${
                      activeBuyTab === 'benefits'
                        ? 'border-brand-blue text-brand-blue bg-white'
                        : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/50'
                    }`}
                  >
                    Core Benefits
                  </button>
                  <button
                    onClick={() => setActiveBuyTab('why')}
                    className={`flex-1 text-center py-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 ${
                      activeBuyTab === 'why'
                        ? 'border-brand-blue text-brand-blue bg-white'
                        : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/50'
                    }`}
                  >
                    Why You'll Love
                  </button>
                </div>

                {/* Tabs Body Content */}
                <div className="p-6 text-sm text-zinc-600 space-y-4">
                  {activeBuyTab === 'how' && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">How It Works</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          Our planner guides you through small, achievable cleaning steps, making daily tidying a breeze for everyone.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">What's Inside</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          Designed with ADHD-friendly principles, featuring clear layouts and manageable tasks.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">Design</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          A clean, minimalist design that's easy on the eyes and simple to navigate.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {activeBuyTab === 'benefits' && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">ADHD Focused</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          Reduces mental friction, prevents task paralysis, and offers dopamine-friendly checklist boxes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">Durable & Reusable</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          High-quality twin-wire binding, waterproof glossy laminated room pages, and thick 100gsm paper.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">Visual Cues</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          Organized by room-by-room deep clean lists that simplify chores into easy visual blocks.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeBuyTab === 'why' && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">Zero Judgment</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          Designed as a flexible, undated format. If you skip a day, you pick up without wasting pages or feeling guilty.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">Clear Mind</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          A tidy environment leads to a calmer mental state. This planner organizes the physical clutter to settle the brain noise.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark mb-1">Aesthetic Appeal</h4>
                        <p className="text-zinc-500 leading-relaxed">
                          Eco-Minimalist premium cover layouts that look beautiful sitting out on your desk or countertops.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: STATS / NUMBERS SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#74a4f8] to-[#b6d6ff] py-16 md:py-24 px-4 overflow-hidden border-b border-zinc-100">
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          
          {/* Subheading */}
          <span className="text-xs uppercase tracking-widest font-black text-white/95">
            Effortless Cleaning
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-10 max-w-5xl mx-auto">
            
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift tilted-card transform hover:scale-105 duration-300">
              <span className="block text-4xl md:text-5xl font-black text-brand-blue mb-4">
                100%
              </span>
              <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                Said that it makes daily cleaning simple with an ADHD-friendly layout.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift transform hover:scale-105 duration-300">
              <span className="block text-4xl md:text-5xl font-black text-brand-blue mb-4">
                97%
              </span>
              <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                Said that it breaks down cleaning into small, manageable tasks for ease.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift tilted-card transform hover:scale-105 duration-300">
              <span className="block text-4xl md:text-5xl font-black text-brand-blue mb-4">
                97%
              </span>
              <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                Said that it offers a motivating and judgment-free planner experience.
              </p>
            </div>

          </div>

          {/* Bottom citation */}
          <span className="text-xs md:text-sm text-white/80 font-medium tracking-wide">
            Results driven from user feedback on daily cleaning simplicity.
          </span>

        </div>

        {/* Decorative background stars */}
        <Sparkles className="absolute top-12 left-12 text-white/40 w-7 h-7 pointer-events-none hidden md:block" />
        <Sparkles className="absolute bottom-8 right-16 text-white/40 w-8 h-8 pointer-events-none hidden md:block" />
      </section>

      {/* SECTION 9: TESTIMONIALS GRID SECTION */}
      <section className="w-full bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 text-xs font-black tracking-widest rounded-md uppercase mb-4">
            VERIFIED REVIEWS
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">
            Real stories from happy customers
          </h2>
          
          <p className="text-base text-brand-blue font-bold tracking-wide hover:underline cursor-pointer mb-6 transition-colors">
            See how our community finds daily cleaning success
          </p>

          {/* Rating block */}
          <div className="flex flex-col items-center gap-1.5 mb-16">
            <span className="text-sm font-black tracking-wide text-zinc-700">
              Five star ratings
            </span>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#009966] text-[#009966]" />
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
            
            {/* Card 1 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">LIFE CHANGER</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "This planner finally quieted the noise in my brain. Cleaning is no longer overwhelming, it feels manageable, peaceful, and truly life-changing now."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">IH</div>
                <span className="text-[11px] font-bold text-zinc-600">IH. Verified purchaser</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">BRAIN CLARITY</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "Finally, a system that works with my ADHD brain. I feel so much lighter and calmer now that my home stays tidy."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">VC</div>
                <span className="text-[11px] font-bold text-zinc-600">VC. Verified purchaser</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">ABSOLUTE PEACE</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "I used to be paralyzed by chores, but this planner helps me focus. My living space is finally the sanctuary I needed."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white text-[10px] font-bold">BR</div>
                <span className="text-[11px] font-bold text-zinc-600">BR. Verified purchaser</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">EMPOWERED DAILY</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "The judgment-free approach helped me build consistent habits. I finally feel in control of my home and my own daily routine."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-[#009966] flex items-center justify-center text-white text-[10px] font-bold">VC</div>
                <span className="text-[11px] font-bold text-zinc-600">VC. Verified purchaser</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">TOTAL RELIEF</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "I struggled with cleaning for years until I found this. It breaks tasks into tiny steps that actually keep my home organized."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-[#009966] flex items-center justify-center text-white text-[10px] font-bold">VC</div>
                <span className="text-[11px] font-bold text-zinc-600">VC. Verified purchaser</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">FINALLY ORGANIZED</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "This has been a complete game changer for my mental health. Cleaning feels simple, achievable, and I no longer feel any shame."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">GR</div>
                <span className="text-[11px] font-bold text-zinc-600">GR. Verified purchaser</span>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">SIMPLY WONDERFUL</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "Such a thoughtful tool for anyone with ADHD. It makes daily tasks feel small and rewarding instead of a huge, scary mountain."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-white text-[10px] font-bold">LM</div>
                <span className="text-[11px] font-bold text-zinc-600">LM. Verified purchaser</span>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009966] text-[#009966]" />)}
                </div>
                <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">DEEPLY GRATEFUL</h4>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                  "I am so grateful for this planner. It turned my chaotic home into a peaceful space where I can finally relax today."
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                <div className="w-6 h-6 rounded-full bg-[#009966] flex items-center justify-center text-white text-[10px] font-bold">MJ</div>
                <span className="text-[11px] font-bold text-zinc-600">MJ. Verified purchaser</span>
              </div>
            </div>

          </div>

          {/* CTA Action button */}
          <a
            href="#buy-section"
            onClick={scrollToBuy}
            className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-8 py-4 rounded-md shadow-premium hover-lift transition-colors"
          >
            Start your journey today <ChevronRight className="w-5 h-5 ml-1" />
          </a>

        </div>
      </section>

      {/* SECTION 10: FAQ ACCORDION SECTION */}
      <section className="w-full bg-[#f8f9fa] py-16 md:py-24 px-4 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-brand-dark mb-12 tracking-tight leading-tight">
            Frequently Asked Questions About Our ADHD-Friendly Cleaning Planner
          </h2>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:bg-zinc-50 transition"
              >
                <span>Is this cleaning planner truly suitable for ADHD brains?</span>
                <span className="text-brand-blue ml-4 flex-shrink-0 text-xl font-bold font-mono">
                  {openFaq === 0 ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === 0 ? 'max-h-[300px] border-t border-zinc-100 p-5' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  Yes, absolutely! The planner was designed from the ground up with input from ADHD coaches and neurodivergent individuals. It focuses on reducing cognitive load by breaking down chores into micro-tasks, avoiding huge blocks of text, and using visual cues to maintain focus without leading to task paralysis.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:bg-zinc-50 transition"
              >
                <span>How often should I use this daily cleaning planner?</span>
                <span className="text-brand-blue ml-4 flex-shrink-0 text-xl font-bold font-mono">
                  {openFaq === 1 ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === 1 ? 'max-h-[300px] border-t border-zinc-100 p-5' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  It's designed for daily use, but with zero guilt! If you miss a day or even a week, you can pick up exactly where you left off. The undated format ensures that you never waste pages or feel bad about taking breaks.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:bg-zinc-50 transition"
              >
                <span>Will this planner work for my specific living situation?</span>
                <span className="text-brand-blue ml-4 flex-shrink-0 text-xl font-bold font-mono">
                  {openFaq === 2 ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === 2 ? 'max-h-[300px] border-t border-zinc-100 p-5' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  Yes! Whether you live in a compact studio apartment, a shared dorm room, or a large multi-family home, the room-by-room checklist and customizable sections allow you to adapt the planner to any layout.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:bg-zinc-50 transition"
              >
                <span>What happens if I miss a day of cleaning?</span>
                <span className="text-brand-blue ml-4 flex-shrink-0 text-xl font-bold font-mono">
                  {openFaq === 3 ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === 3 ? 'max-h-[300px] border-t border-zinc-100 p-5' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  Nothing! That's the beauty of our judgment-free system. The planner is designed to celebrate progress, not perfection. Simply skip that check-off or carry it over to the next day when you have the energy.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:bg-zinc-50 transition"
              >
                <span>How quickly can I access the digital cleaning planner?</span>
                <span className="text-brand-blue ml-4 flex-shrink-0 text-xl font-bold font-mono">
                  {openFaq === 4 ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === 4 ? 'max-h-[300px] border-t border-zinc-100 p-5' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  If you purchase the digital or hybrid package, you will receive an email with immediate access downloads within 2 minutes of checkout. You can print it at home or load it onto your tablet right away.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11: SATISFACTION GUARANTEE & FOOTER SECTION */}
      <section className="w-full bg-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Circular SVG Satisfaction Stamp */}
          <div className="mb-8">
            <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-40 md:h-40 text-brand-dark fill-current">
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
              <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
              <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text className="text-[11.5px] font-semibold tracking-[0.2em]" fill="currentColor">
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                  TOTAL SATISFACTION GUARANTEED
                </textPath>
              </text>
              <line x1="55" y1="85" x2="145" y2="85" stroke="currentColor" strokeWidth="2" />
              <text x="100" y="108" textAnchor="middle" className="text-[17px] font-black tracking-widest">GUARANTEE</text>
              <line x1="55" y1="117" x2="145" y2="117" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4 tracking-tight leading-tight">
            Total Satisfaction Guaranteed
          </h2>

          <p className="text-base text-zinc-500 mb-6 leading-relaxed max-w-xl">
            Enjoy peace of mind with our ADHD Cleaning Planner; your satisfaction is our absolute top priority.
          </p>

          {/* Promise Box */}
          <div className="w-full max-w-xl bg-white border border-zinc-200 rounded-lg py-4 px-6 mb-8 text-sm md:text-base font-medium text-zinc-600">
            Your purchase is backed by our promise to make your daily cleaning routine simpler and more manageable.
          </div>

          {/* CTA Purchase Button */}
          <a
            href="#buy-section"
            onClick={scrollToBuy}
            className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-8 py-4 rounded-md shadow-premium hover-lift mb-6 transition-colors"
          >
            Start Organizing Today <ChevronRight className="w-5 h-5 ml-1" />
          </a>

          {/* Links Row */}
          <div className="flex gap-8 justify-center text-xs font-bold text-zinc-500 uppercase tracking-widest mb-16">
            <span>Satisfaction Guaranteed</span>
            <span>Free Shipping</span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#f8f9fa] border-t border-zinc-200 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Footer Logo */}
          <div className="mb-6">
            <img 
              src="/Assets/shora images01.png" 
              alt="Shoraminimalist" 
              className="h-10 md:h-12 w-auto object-contain mx-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 text-xs md:text-sm font-semibold text-zinc-500">
            <a href="#" className="hover:text-brand-blue transition">Contact Us</a>
            <a href="#" className="hover:text-brand-blue transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition">Return and Refund</a>
            <a href="#" className="hover:text-brand-blue transition">Shipping Policy</a>
            <a href="#" className="hover:text-brand-blue transition">Terms of Service</a>
          </div>

          {/* Powered by Page */}
          <div className="text-[11px] font-bold text-zinc-400 tracking-wider flex items-center justify-center gap-1">
            <span>Powered by</span>
            <span className="flex items-center font-black text-zinc-500 text-xs bg-zinc-200 px-1.5 py-0.5 rounded ml-0.5 uppercase tracking-normal">
              📄 Page
            </span>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
