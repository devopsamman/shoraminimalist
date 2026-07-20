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

const ICON_MAP = {
  'brain': Brain,
  'check-square': CheckSquare,
  'compass': Compass,
  'smile': Smile,
  'heart': Heart,
  'sparkles': Sparkles,
  'check': Check
}

const PRODUCTS = {
  'cleaning-planner': {
    id: 'cleaning-planner',
    name: 'ADHD-Friendly Daily Cleaning Planner',
    shortName: 'ADHD Planner',
    tagline: 'Conquer your cleaning routine effortlessly. The ultimate ADHD-friendly daily cleaning planner featuring visual guides, manageable check-offs, and room-by-room deep clean pages.',
    price: 29.99,
    originalPrice: 49.99,
    announcement: 'Simplify daily cleaning with our planner',
    stripeUrl: 'https://buy.stripe.com/4gMeVd0iy6w8esB73K63K00',
    category: 'ADHD PLANNER',
    theme: {
      accent: '#007bff', // brand-blue
      accentHover: '#0056b3', // brand-blue-dark
      bgGradient: 'from-[#a5cbff] to-[#b6d6ff]',
      lightBg: 'bg-blue-50',
      badgeBg: 'bg-brand-blue/15 text-brand-blue',
      btnBg: 'bg-brand-blue hover:bg-brand-blue-dark',
      accentText: 'text-brand-blue',
      borderAccent: 'border-brand-blue',
      textAccentHover: 'hover:text-brand-blue-dark hover:border-brand-blue-dark',
      statsBgGradient: 'from-[#74a4f8] to-[#b6d6ff]'
    },
    heroImage: '/Assets/shora images02.jpeg',
    galleryImages: [
      "/Assets/shora images13.png", // Main Infographic
      "/Assets/shora images02.jpeg", // Cover Mockup
      "/Assets/shora images11.jpeg", // Features Mockup
      "/Assets/shora images12.jpeg", // Dimensions Mockup
      "/Assets/shora images14.jpeg", // Weekly spread
      "/Assets/shora images17.jpeg", // Lifestyle
      "/Assets/shora images18.jpeg", // Deep clean
      "/Assets/shora images15.jpeg"  // Guides List
    ],
    features: [
      { title: "ADHD Friendly", desc: "Enjoy an ADHD-friendly layout designed for clarity and focus.", icon: 'brain' },
      { title: "Manageable Tasks", desc: "Break down cleaning into small, achievable tasks that feel manageable.", icon: 'check-square' },
      { title: "Motivating Environment", desc: "A motivating and judgment-free space to build consistent habits.", icon: 'compass' },
      { title: "Daily Check-Off", desc: "Easily track your progress with a simple daily check-off system.", icon: 'smile' },
      { title: "Stress-Free Cleaning", desc: "Transform your cleaning routine into a stress-free experience.", icon: 'heart' },
      { title: "Consistent Cleanliness", desc: "Achieve a consistently clean home without feeling overwhelmed.", icon: 'sparkles' },
    ],
    tabContents: {
      tasks: {
        tabLabel: "Simple Tasks",
        title: "Designed for You",
        body1: "Designed with ADHD in mind, our planner uses a clear, visual structure to guide you through cleaning. Small, achievable steps build momentum and prevent task paralysis.",
        body2: "The planner's strength lies in its simplicity and motivational design. Enjoy a judgment-free zone that celebrates progress, making daily cleaning a sustainable and rewarding habit.",
        image: "/Assets/shora images12.jpeg"
      },
      adhd: {
        tabLabel: "ADHD Friendly",
        title: "ADHD-Friendly Layout",
        body1: "Our layout breaks tasks down to their absolute simplest form. No long-winded checklists or overwhelming daily schedules that lead to mental fatigue.",
        body2: "By presenting tasks in structured columns with visual spacing, your brain can easily focus on one single step at a time, resulting in immediate progress.",
        image: "/Assets/shora images16.jpeg"
      },
      motivating: {
        tabLabel: "Motivating",
        title: "Motivating & Rewarding",
        body1: "Get the immediate hit of satisfaction and dopamine with our clean, visual check-off circles. Checking items off triggers a feeling of achievement.",
        body2: "We keep the focus on building small daily consistency. Over time, these small actions compound into a beautifully kept home and a clear, quiet mind.",
        image: "/Assets/shora images18.jpeg"
      }
    },
    collageImages: [
      "/Assets/shora images14.jpeg",
      "/Assets/shora images17.jpeg",
      "/Assets/shora images18.jpeg",
      "/Assets/shora images15.jpeg"
    ],
    testimonials: [
      { title: "LIFE CHANGER", text: "This planner finally quieted the noise in my brain. Cleaning is no longer overwhelming, it feels manageable, peaceful, and truly life-changing now.", rating: 5, author: "IH", sub: "Verified purchaser" },
      { title: "BRAIN CLARITY", text: "Finally, a system that works with my ADHD brain. I feel so much lighter and calmer now that my home stays tidy.", rating: 5, author: "VC", sub: "Verified purchaser" },
      { title: "ABSOLUTE PEACE", text: "I used to be paralyzed by chores, but this planner helps me focus. My living space is finally the sanctuary I needed.", rating: 5, author: "BR", sub: "Verified purchaser" },
      { title: "EMPOWERED DAILY", text: "The judgment-free approach helped me build consistent habits. I finally feel in control of my home and my own daily routine.", rating: 5, author: "VC", sub: "Verified purchaser" },
      { title: "TOTAL RELIEF", text: "I struggled with cleaning for years until I found this. It breaks tasks into tiny steps that actually keep my home organized.", rating: 5, author: "VC", sub: "Verified purchaser" },
      { title: "FINALLY ORGANIZED", text: "This has been a complete game changer for my mental health. Cleaning feels simple, achievable, and I no longer feel any shame.", rating: 5, author: "GR", sub: "Verified purchaser" },
      { title: "SIMPLY WONDERFUL", text: "Such a thoughtful tool for anyone with ADHD. It makes daily tasks feel small and rewarding instead of a huge, scary mountain.", rating: 5, author: "LM", sub: "Verified purchaser" },
      { title: "DEEPLY GRATEFUL", text: "I am so grateful for this planner. It turned my chaotic home into a peaceful space where I can finally relax today.", rating: 5, author: "MJ", sub: "Verified purchaser" }
    ],
    buyTabs: {
      how: {
        title: "How It Works",
        paragraphs: [
          { bold: "How It Works", text: "Our planner guides you through small, achievable cleaning steps, making daily tidying a breeze for everyone." },
          { bold: "What's Inside", text: "Designed with ADHD-friendly principles, featuring clear layouts and manageable tasks." },
          { bold: "Design", text: "A clean, minimalist design that's easy on the eyes and simple to navigate." }
        ]
      },
      benefits: {
        title: "Core Benefits",
        paragraphs: [
          { bold: "ADHD Focused", text: "Reduces mental friction, prevents task paralysis, and offers dopamine-friendly checklist boxes." },
          { bold: "Durable & Reusable", text: "High-quality twin-wire binding, waterproof glossy laminated room pages, and thick 100gsm paper." },
          { bold: "Visual Cues", text: "Organized by room-by-room deep clean lists that simplify chores into easy visual blocks." }
        ]
      },
      why: {
        title: "Why You'll Love",
        paragraphs: [
          { bold: "Zero Judgment", text: "Designed as a flexible, undated format. If you skip a day, you pick up without wasting pages or feeling guilty." },
          { bold: "Clear Mind", text: "A tidy environment leads to a calmer mental state. This planner organizes the physical clutter to settle the brain noise." },
          { bold: "Aesthetic Appeal", text: "Eco-Minimalist premium cover layouts that look beautiful sitting out on your desk or countertops." }
        ]
      }
    },
    faqs: [
      { q: "Is this cleaning planner truly suitable for ADHD brains?", a: "Yes, absolutely! The planner was designed from the ground up with input from ADHD coaches and neurodivergent individuals. It focuses on reducing cognitive load by breaking down chores into micro-tasks, avoiding huge blocks of text, and using visual cues to maintain focus without leading to task paralysis." },
      { q: "How often should I use this daily cleaning planner?", a: "It's designed for daily use, but with zero guilt! If you miss a day or even a week, you can pick up exactly where you left off. The undated format ensures that you never waste pages or feel bad about taking breaks." },
      { q: "Will this planner work for my specific living situation?", a: "Yes! Whether you live in a compact studio apartment, a shared dorm room, or a large multi-family home, the room-by-room checklist and customizable sections allow you to adapt the planner to any layout." },
      { q: "What happens if I miss a day of cleaning?", a: "Nothing! That's the beauty of our judgment-free system. The planner is designed to celebrate progress, not perfection. Simply skip that check-off or carry it over to the next day when you have the energy." },
      { q: "How quickly can I access the digital cleaning planner?", a: "If you purchase the digital or hybrid package, you will receive an email with immediate access downloads within 2 minutes of checkout. You can print it at home or load it onto your tablet right away." }
    ],
    guaranteeText: "Enjoy peace of mind with our ADHD Cleaning Planner; your satisfaction is our absolute top priority.",
    guaranteeBox: "Your purchase is backed by our promise to make your daily cleaning routine simpler and more manageable."
  },
  'food-swaps': {
    id: 'food-swaps',
    name: 'Done For You Guide on 30 Healthy Food Swaps – Editable Canva eBook Template',
    shortName: 'Healthy Food Swaps',
    tagline: 'Save Time, Deliver Value, and Stand Out as the Go-To Health Coach. This editable Canva eBook template gives you everything you need to provide your audience with practical, real-world solutions to eat cleaner, lose weight, and stay on track.',
    price: 19.99,
    originalPrice: 39.99,
    announcement: 'Done-for-you PLR digital product - Editable Canva template',
    stripeUrl: 'https://buy.stripe.com/your-stripe-food-swaps-link', // Placeholder for user customization
    category: 'CANVA TEMPLATE',
    theme: {
      accent: '#009966', // brand-green
      accentHover: '#047857', // green-700
      bgGradient: 'from-[#a7f3d0] to-[#6ee7b7]',
      lightBg: 'bg-emerald-50',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      btnBg: 'bg-brand-green hover:bg-emerald-700',
      accentText: 'text-brand-green',
      borderAccent: 'border-brand-green',
      textAccentHover: 'hover:text-emerald-700 hover:border-emerald-700',
      statsBgGradient: 'from-[#34d399] to-[#a7f3d0]'
    },
    heroImage: '/Assets/ChatGPT Image Jul 20, 2026, 11_23_24 PM.png',
    galleryImages: [
      "/Assets/ChatGPT Image Jul 20, 2026, 11_23_24 PM.png",
      "/Assets/ChatGPT Image Jul 20, 2026, 11_27_58 PM.png"
    ],
    features: [
      { title: "Canva Template", desc: "💚 Fully customizable Canva eBook Template – just drag, drop, and brand.", icon: 'sparkles' },
      { title: "Expert-Written Content", desc: "💚 Expert-written for real-world nutrition results by a qualified professional.", icon: 'heart' },
      { title: "Plug-and-Play Solution", desc: "💚 Ready-made to grow your email list or add to your digital product shop.", icon: 'compass' },
      { title: "16 Designed Pages", desc: "💚 Includes 3 covers, disclaimer, welcome pages, thank-you pages, and 30 swaps.", icon: 'check-square' },
      { title: "Bonus PLR Products", desc: "💚 150+ Instagram Post templates + Canva Mini Course guide included.", icon: 'smile' },
      { title: "No Canva Pro Required", desc: "💚 100% compatible with Canva FREE. Edit easily in your desktop browser.", icon: 'check' }
    ],
    tabContents: {
      customizable: {
        tabLabel: "Fully Customizable",
        title: "Drag, Drop & Brand in Canva",
        body1: "Quick and easy to edit in Canva using a FREE account. No paid Canva Pro subscription is required. All fonts, colors, and layouts are editable, allowing you to match your brand style instantly.",
        body2: "Optimized for the Canva web application. Drag, drop, edit copy, change images, and you're ready to share with clients in minutes.",
        image: "/Assets/ChatGPT Image Jul 20, 2026, 11_23_24 PM.png"
      },
      content: {
        tabLabel: "Expert Content",
        title: "Pre-written by a Qualified Expert",
        body1: "Created by a qualified nutritionist and personal trainer, the 30 Healthy Food Swaps are designed for real-world weight loss results without restrictive dieting.",
        body2: "It includes 16 fully written pages including 3 cover designs, welcome messages, and thank-you templates. Ready to rebrand, resell, or distribute.",
        image: "/Assets/ChatGPT Image Jul 20, 2026, 11_27_58 PM.png"
      },
      bonus: {
        tabLabel: "Bonus Resources",
        title: "Included Promo & Course Guide",
        body1: "Maximize your reach with 150+ Instagram Post Templates designed specifically to promote your food swaps eBook and grow your audience.",
        body2: "Also includes the Canva Mini Course Guide to help complete beginners edit their templates faster and easier.",
        image: "/Assets/ChatGPT Image Jul 20, 2026, 11_23_24 PM.png"
      }
    },
    collageImages: [
      "/Assets/ChatGPT Image Jul 20, 2026, 11_23_24 PM.png",
      "/Assets/ChatGPT Image Jul 20, 2026, 11_27_58 PM.png"
    ],
    testimonials: [
      { title: "PERFECT LEAD MAGNET", text: "I used this as a freebie to grow my email list, and I got 300+ signups in the first week! The design is stunning and the content is solid.", rating: 5, author: "Sarah T.", sub: "Health Coach" },
      { title: "SAVED ME HOURS", text: "Creating an eBook from scratch takes forever. This template was ready to share in 15 minutes after adding my logo. Absolute time-saver.", rating: 5, author: "Jason M.", sub: "Personal Trainer" },
      { title: "HIGH QUALITY CONTENT", text: "As a nutritionist, I'm picky about food advice. The 30 swaps are highly practical and scientifically sound. Clients love it.", rating: 5, author: "Elena R.", sub: "Registered Dietitian" },
      { title: "LOVE THE BONUS POSTS", text: "The Instagram templates made marketing a breeze. It's an entire content package in one purchase. Highly recommend!", rating: 5, author: "Chloe B.", sub: "Wellness Creator" }
    ],
    buyTabs: {
      how: {
        title: "What's Inside",
        paragraphs: [
          { bold: "16 Designed Pages", text: "3 covers, 1 disclaimer, 2 welcome pages, 10 pages containing 30 Healthy Food Swaps, and 2 thank-you pages." },
          { bold: "High-Quality Assets", text: "Includes pre-written expert copy, layout visuals, and stock images (all editable)." },
          { bold: "Format Options", text: "Optimized template layouts in both A4 and US Letter sizes." }
        ]
      },
      benefits: {
        title: "Why Coaches Love It",
        paragraphs: [
          { bold: "Time-Saver", text: "Skip hours of design work. Ready to launch and brand in just a few clicks." },
          { bold: "List Builder", text: "Perfect high-value lead magnet or premium paid digital product for weight loss client programs." },
          { bold: "Qualified Authority", text: "Expertly written by a nutritionist and personal trainer to build trust and authority with your community." }
        ]
      },
      why: {
        title: "Easy to Customize",
        paragraphs: [
          { bold: "Canva Free & Pro", text: "100% compatible. No Pro account needed. Edit fully in your web browser." },
          { bold: "Complete Control", text: "Easily adjust all fonts, colors, and layout configurations to fit your personal branding." },
          { bold: "Endless Reuse", text: "Create multiple different products and handouts using the exact same base layouts." }
        ]
      }
    },
    faqs: [
      { q: "Do I need a Canva Pro subscription to edit these templates?", a: "No, you don't! These templates are 100% compatible with both Canva FREE and Canva Pro. You only need a free account at Canva.com, and we recommend editing via browser on a computer for best results." },
      { q: "What can I do with a PLR/DFY license?", a: "You can rebrand the eBook, change the fonts and colors, insert your own logo, and resell it to your clients or use it as a lead magnet to grow your email newsletter. (Note: resale of the editable Canva link itself is not permitted)." },
      { q: "What files and sizes are included?", a: "You will receive instant access links for both A4 and US Letter sizes, pre-designed inside Canva with a clean, professional green-themed palette." },
      { q: "Is the nutrition copy already written?", a: "Yes, the template comes fully pre-written by a qualified nutritionist and personal trainer. It includes 30 practical, real-world healthy food swaps tailored for clean eating and weight loss." },
      { q: "Are the Instagram post templates included?", a: "Yes, you get a bonus bundle of 150+ Instagram Post templates matching the theme to help you promote the eBook, plus a Canva Mini Course Guide to help beginners." }
    ],
    guaranteeText: "Your satisfaction is our top priority. Enjoy peace of mind with our Done For You Canva template eBook.",
    guaranteeBox: "We guarantee that our templates will save you hours of content creation time and deliver immediate high value to your audience."
  }
}

const HERO_TESTIMONIALS = {
  'cleaning-planner': [
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
  ],
  'food-swaps': [
    {
      text: "This Canva template is a life-saver! I custom branded it in 10 minutes and sent it to my weight loss clients.",
      author: "Coach Sarah",
      rating: 5
    },
    {
      text: "My email list grew by 250 subscribers in one weekend using this eBook as a lead magnet. Highly recommend!",
      author: "Trainer Mark",
      rating: 5
    },
    {
      text: "The nutrition info is completely expert-level, and the Instagram posts saved me so much design time.",
      author: "Coach Elena",
      rating: 5
    }
  ]
}

function App() {
  // --- States ---
  const [activeProductId, setActiveProductId] = useState('cleaning-planner')
  const activeProduct = PRODUCTS[activeProductId]
  
  // Hero Testimonial Carousel
  const [heroIndex, setHeroIndex] = useState(0)

  // Auto-rotate hero testimonials
  useEffect(() => {
    setHeroIndex(0)
    const currentTestimonials = HERO_TESTIMONIALS[activeProductId]
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % currentTestimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeProductId])

  // Interactive Tabs Section
  const [activeTab, setActiveTab] = useState('tasks')

  // Quantity Selector
  const [quantity, setQuantity] = useState(1)

  // Buy Section Info Tabs
  const [activeBuyTab, setActiveBuyTab] = useState('how')

  // Keep activeTab and activeBuyTab in sync when changing products
  useEffect(() => {
    const tabKeys = Object.keys(activeProduct.tabContents)
    setActiveTab(tabKeys[0])
    
    const buyTabKeys = Object.keys(activeProduct.buyTabs)
    setActiveBuyTab(buyTabKeys[0])
    
    setQuantity(1)
  }, [activeProductId])

  // Sync with URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const prod = params.get('product')
    if (prod && PRODUCTS[prod]) {
      setActiveProductId(prod)
    }
  }, [])

  const handleProductChange = (prodId) => {
    if (PRODUCTS[prodId]) {
      setActiveProductId(prodId)
      const newUrl = `${window.location.pathname}?product=${prodId}`
      window.history.pushState({ path: newUrl }, '', newUrl)
    }
  }

  // Dynamic Browser Title and Meta description
  useEffect(() => {
    document.title = `${activeProduct.name} | Shoraminimalist`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', activeProduct.tagline)
    }
  }, [activeProduct])

  // Product Gallery
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0)

  useEffect(() => {
    setActiveGalleryIdx(0)
  }, [activeProductId])

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

  // Helper component to render stars themed to accent color
  const StarBadge = () => (
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="w-5 h-5 flex items-center justify-center rounded-sm"
          style={{ backgroundColor: activeProduct.theme.accent }}
        >
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

  const currentTestimonials = HERO_TESTIMONIALS[activeProductId]

  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col font-sans select-none">
      
      {/* SECTION 1: PROMO & NAVIGATION HEADER */}
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#e9ecef] py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide text-zinc-700">
        {activeProduct.announcement}
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glassmorphism border-b border-zinc-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          
          {/* Product Selector Links */}
          <div className="flex-1 hidden md:flex items-center gap-6">
            <button
              onClick={() => handleProductChange('cleaning-planner')}
              className={`text-xs tracking-wider uppercase font-bold transition-all py-0.5 border-b-2 ${
                activeProductId === 'cleaning-planner'
                  ? 'text-brand-blue border-brand-blue'
                  : 'text-zinc-400 border-transparent hover:text-zinc-600'
              }`}
            >
              ADHD Planner
            </button>
            <button
              onClick={() => handleProductChange('food-swaps')}
              className={`text-xs tracking-wider uppercase font-bold transition-all py-0.5 border-b-2 ${
                activeProductId === 'food-swaps'
                  ? 'text-brand-green border-brand-green'
                  : 'text-zinc-400 border-transparent hover:text-zinc-600'
              }`}
            >
              Healthy Food Swaps
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex-1 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-zinc-600 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          {/* Centered Logo */}
          <div className="flex justify-center flex-1">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex justify-center"
            >
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
              className={`hidden md:inline-flex items-center text-xs tracking-wider uppercase font-semibold border-b-2 ${activeProduct.theme.borderAccent} ${activeProduct.theme.accentText} ${activeProduct.theme.textAccentHover} transition-colors py-0.5`}
            >
              Get Template
            </a>
          </div>
        </div>

        {/* Mobile Slide-over Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Backdrop overlay */}
            <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
            
            {/* Menu content */}
            <div className="relative flex flex-col w-full max-w-xs p-6 bg-white shadow-xl h-full z-10">
              <div className="flex items-center justify-between mb-8">
                <img src="/Assets/shora images01.png" alt="Shoraminimalist Logo" className="h-8 w-auto object-contain" />
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6 text-zinc-500" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 text-sm font-bold text-zinc-600">
                <button
                  onClick={() => { handleProductChange('cleaning-planner'); setMobileMenuOpen(false); }}
                  className={`text-left py-2 border-b ${activeProductId === 'cleaning-planner' ? 'text-brand-blue border-brand-blue' : 'border-transparent'}`}
                >
                  ADHD Cleaning Planner
                </button>
                <button
                  onClick={() => { handleProductChange('food-swaps'); setMobileMenuOpen(false); }}
                  className={`text-left py-2 border-b ${activeProductId === 'food-swaps' ? 'text-brand-green border-brand-green' : 'border-transparent'}`}
                >
                  Healthy Food Swaps Guide
                </button>
                <a
                  href="#buy-section"
                  onClick={(e) => { setMobileMenuOpen(false); scrollToBuy(e); }}
                  className="mt-4 inline-flex items-center justify-center bg-zinc-800 text-white font-bold py-3 px-6 rounded-md hover:bg-zinc-900 transition"
                >
                  Get Template
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 2: HERO SECTION */}
      <section className={`relative w-full bg-gradient-to-b ${activeProduct.theme.bgGradient} py-12 md:py-20 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Rating & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Stars Block */}
            <div className="flex items-center gap-2 mb-6">
              <StarBadge />
              <span className="text-xs md:text-sm font-semibold text-brand-dark/80 tracking-wide">
                Loved by creators, 5-star rating
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-dark mb-4 leading-[1.1]">
              {activeProduct.shortName}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-brand-dark/80 font-normal mb-8 leading-relaxed max-w-lg">
              {activeProduct.tagline}
            </p>

            {/* CTA Button */}
            <a
              href="#buy-section"
              onClick={scrollToBuy}
              className={`inline-flex items-center justify-center ${activeProduct.theme.btnBg} text-white font-bold text-base px-8 py-4 rounded-md shadow-premium hover-lift mb-10 transition-colors`}
            >
              Buy Now <ChevronRight className="w-5 h-5 ml-1" />
            </a>

            {/* Floating Review Card */}
            {currentTestimonials[heroIndex] && (
              <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-premium min-h-[140px] flex flex-col justify-between relative overflow-hidden transition-all duration-300">
                <div 
                  className="absolute top-0 left-0 w-1.5 h-full"
                  style={{ backgroundColor: activeProduct.theme.accent }}
                ></div>
                <p className="text-sm md:text-base text-zinc-700 italic font-medium leading-relaxed">
                  "{currentTestimonials[heroIndex].text}"
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs font-bold text-zinc-500 tracking-wider">
                    ★★★★★ {currentTestimonials[heroIndex].author}
                  </span>
                  
                  {/* Dots pagination */}
                  <div className="flex gap-1.5">
                    {currentTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHeroIndex(idx)}
                        className={`h-2 rounded-full transition-all ${heroIndex === idx ? 'w-4' : 'w-2'}`}
                        style={{ backgroundColor: heroIndex === idx ? activeProduct.theme.accent : '#a1a1aa' }}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6 flex justify-center items-center z-10 relative">
            <div className="relative w-full max-w-lg">
              {/* Outer decorative shadow shape */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${activeProductId === 'cleaning-planner' ? 'from-blue-100 to-indigo-100' : 'from-emerald-100 to-teal-100'} rounded-2xl blur-lg opacity-40`}></div>
              <img
                src={activeProduct.heroImage}
                alt={activeProduct.name}
                className="w-full h-auto rounded-2xl shadow-lift relative z-10 hover-lift-lg transform rotate-[-1deg] transition-all duration-300 max-h-[500px] object-contain bg-white"
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
            Everything You Need, All in One Place
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Mockup Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={activeProduct.heroImage}
                alt={activeProduct.name}
                className="w-full max-w-lg rounded-2xl shadow-premium border border-zinc-100 hover-lift transform rotate-[0.5deg] transition-all max-h-[450px] object-contain bg-white"
              />
            </div>

            {/* Right Column: 6 Features List */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {activeProduct.features.map((feat, idx) => {
                const IconComponent = ICON_MAP[feat.icon] || Sparkles;
                return (
                  <div key={idx} className="flex gap-4">
                    <div 
                      className={`flex-shrink-0 w-12 h-12 ${activeProduct.theme.lightBg} rounded-lg flex items-center justify-center`}
                      style={{ color: activeProduct.theme.accent }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-brand-dark mb-1">{feat.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: INTERACTIVE TAB SECTION */}
      <section className="w-full bg-[#f8f9fa] py-16 md:py-24 px-4 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto text-center">
          
          <span 
            className="text-xs uppercase tracking-widest font-extrabold"
            style={{ color: activeProduct.theme.accent }}
          >
            Deep Dive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mt-2 mb-4">
            How It Delivers High Value
          </h2>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Explore the features and layout choices designed specifically to save you time and maximize clean results.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {Object.keys(activeProduct.tabContents).map((tabId) => (
              <button
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className={`px-6 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide transition-all border ${
                  activeTab === tabId
                    ? 'text-white border-transparent shadow-md'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
                }`}
                style={activeTab === tabId ? { backgroundColor: activeProduct.theme.accent } : {}}
              >
                {activeProduct.tabContents[tabId].tabLabel}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          {activeProduct.tabContents[activeTab] && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left bg-white p-6 md:p-10 rounded-2xl border border-zinc-100 shadow-premium">
              
              {/* Left: Tab Image */}
              <div className="lg:col-span-6 flex justify-center">
                <img
                  src={activeProduct.tabContents[activeTab].image}
                  alt={activeProduct.tabContents[activeTab].title}
                  className="w-full max-w-md h-auto rounded-xl border border-zinc-100 shadow-md object-cover max-h-[350px] transition-opacity duration-300"
                />
              </div>

              {/* Right: Tab Text */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 tracking-tight">
                  {activeProduct.tabContents[activeTab].title}
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed mb-6 font-medium">
                  {activeProduct.tabContents[activeTab].body1}
                </p>
                <p className="text-base text-zinc-500 leading-relaxed">
                  {activeProduct.tabContents[activeTab].body2}
                </p>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* SECTION 6: LOVE YOUR HOME / SIMPLIFY YOUR LIFE */}
      <section className="w-full bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-dark tracking-tight mb-16">
            Simplify Your Content <span className="font-serif italic font-normal text-zinc-500">Love your process</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Dark Blue Bullet Card */}
            <div className="lg:col-span-5 bg-[#0f2347] text-white rounded-2xl p-8 md:p-10 shadow-lift flex flex-col justify-center h-full text-left">
              
              <ul className="space-y-8">
                {activeProduct.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white mt-1"
                      style={{ backgroundColor: activeProduct.theme.accent }}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* Right: Image Collage */}
            <div className={`lg:col-span-7 grid ${activeProduct.collageImages.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2'} gap-4`}>
              {activeProduct.collageImages.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${activeProduct.name} preview ${idx + 1}`} 
                  className="w-full h-auto rounded-xl shadow-md hover-lift object-cover aspect-square bg-white" 
                />
              ))}
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
                  src={activeProduct.galleryImages[activeGalleryIdx]}
                  alt={`${activeProduct.name} Product View`}
                  className="w-full h-full object-contain rounded-xl transition-all duration-300 bg-white"
                />

                {/* Gallery Navigation Arrows */}
                <button
                  onClick={() => setActiveGalleryIdx((prev) => (prev > 0 ? prev - 1 : activeProduct.galleryImages.length - 1))}
                  className="absolute left-4 w-10 h-10 rounded-full bg-white/90 border border-zinc-200 shadow flex items-center justify-center text-zinc-700 hover:bg-zinc-800 hover:text-white transition duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setActiveGalleryIdx((prev) => (prev < activeProduct.galleryImages.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 w-10 h-10 rounded-full bg-white/90 border border-zinc-200 shadow flex items-center justify-center text-zinc-700 hover:bg-zinc-800 hover:text-white transition duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Thumbnails Row */}
              <div className="flex flex-wrap gap-2 justify-center mt-4 max-w-lg">
                {activeProduct.galleryImages.map((thumbUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIdx(idx)}
                    style={activeGalleryIdx === idx ? { borderColor: activeProduct.theme.accent } : {}}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 bg-white flex items-center justify-center p-1 transition-all ${
                      activeGalleryIdx === idx ? 'shadow-sm scale-105' : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <img src={thumbUrl} alt="" className="w-full h-full object-contain rounded bg-white" />
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
                {activeProduct.category}
              </span>

              {/* Product Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4 tracking-tight leading-tight">
                {activeProduct.name}
              </h2>

              {/* Rating stars block */}
              <div className="flex items-center gap-2 mb-6">
                <StarBadge />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Verified Creator Product
                </span>
              </div>

              {/* Option Selector */}
              <div className="mb-6">
                <span className="block text-xs font-bold text-zinc-500 tracking-wider mb-2 uppercase">
                  Format
                </span>
                <button 
                  className="inline-flex items-center px-4 py-2 border-2 bg-transparent font-bold rounded-lg text-sm tracking-wide transition-all shadow-sm"
                  style={{ borderColor: activeProduct.theme.accent, color: activeProduct.theme.accent }}
                >
                  <Check className="w-4 h-4 mr-1.5" /> {activeProduct.category}
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
                <span 
                  className="text-3xl md:text-4xl font-extrabold"
                  style={{ color: activeProduct.theme.accent }}
                >
                  ${(activeProduct.price * quantity).toFixed(2)}
                </span>
                <span className="text-base text-zinc-400 line-through">
                  ${(activeProduct.originalPrice * quantity).toFixed(2)}
                </span>
                <span 
                  className="px-2 py-0.5 text-xs font-black rounded-md uppercase tracking-wider"
                  style={{ backgroundColor: `${activeProduct.theme.accent}26`, color: activeProduct.theme.accent }}
                >
                  {Math.round((1 - activeProduct.price / activeProduct.originalPrice) * 100)}% OFF
                </span>
              </div>

              {/* CTA Purchase Button */}
              <a
                href={activeProduct.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full ${activeProduct.theme.btnBg} text-white font-bold text-lg px-8 py-4 rounded-md shadow-premium hover-lift mb-8 flex items-center justify-center transition-colors text-center`}
              >
                Buy Now <ChevronRight className="w-5 h-5 ml-1" />
              </a>

              {/* Buy Section Info Accordion-style Tabs */}
              <div className="w-full bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
                
                {/* Tabs Headers */}
                <div className="flex border-b border-zinc-100 bg-zinc-50/50">
                  {Object.keys(activeProduct.buyTabs).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveBuyTab(key)}
                      style={activeBuyTab === key ? { borderBottomColor: activeProduct.theme.accent, color: activeProduct.theme.accent } : {}}
                      className={`flex-1 text-center py-3 text-xs md:text-sm font-bold tracking-wide transition-all border-b-2 ${
                        activeBuyTab === key
                          ? 'bg-white'
                          : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/50'
                      }`}
                    >
                      {activeProduct.buyTabs[key].title}
                    </button>
                  ))}
                </div>

                {/* Tabs Body Content */}
                {activeProduct.buyTabs[activeBuyTab] && (
                  <div className="p-6 text-sm text-zinc-600 space-y-4">
                    {activeProduct.buyTabs[activeBuyTab].paragraphs.map((p, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-brand-dark mb-1">{p.bold}</h4>
                        <p className="text-zinc-500 leading-relaxed font-medium">
                          {p.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: STATS / NUMBERS SECTION */}
      <section className={`relative w-full bg-gradient-to-b ${activeProduct.theme.statsBgGradient} py-16 md:py-24 px-4 overflow-hidden border-b border-zinc-100`}>
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          
          {/* Subheading */}
          <span className="text-xs uppercase tracking-widest font-black text-white/95">
            {activeProduct.category}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-10 max-w-5xl mx-auto">
            
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift tilted-card transform hover:scale-105 duration-300">
              <span className="block text-4xl md:text-5xl font-black mb-4" style={{ color: activeProduct.theme.accent }}>
                100%
              </span>
              <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                {activeProductId === 'cleaning-planner' 
                  ? "Said that it makes daily cleaning simple with an ADHD-friendly layout."
                  : "Agreed that editable Canva designs saved them hours of content creation."}
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift transform hover:scale-105 duration-300">
              <span className="block text-4xl md:text-5xl font-black mb-4" style={{ color: activeProduct.theme.accent }}>
                97%
              </span>
              <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                {activeProductId === 'cleaning-planner'
                  ? "Said that it breaks down cleaning into small, manageable tasks for ease."
                  : "Reported high client engagement when using this eBook as a coaching lead magnet."}
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift tilted-card transform hover:scale-105 duration-300">
              <span className="block text-4xl md:text-5xl font-black mb-4" style={{ color: activeProduct.theme.accent }}>
                97%
              </span>
              <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                {activeProductId === 'cleaning-planner'
                  ? "Said that it offers a motivating and judgment-free planner experience."
                  : "Found it simple to fully customize all colors, fonts, and layouts to match their brand."}
              </p>
            </div>

          </div>

          {/* Bottom citation */}
          <span className="text-xs md:text-sm text-white/80 font-medium tracking-wide">
            {activeProductId === 'cleaning-planner'
              ? "Results driven from user feedback on daily cleaning simplicity."
              : "Results driven from wellness coaches using our done-for-you PLR template."}
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
          
          <p 
            className="text-base font-bold tracking-wide hover:underline cursor-pointer mb-6 transition-colors"
            style={{ color: activeProduct.theme.accent }}
          >
            See how our community finds success
          </p>

          {/* Rating block */}
          <div className="flex flex-col items-center gap-1.5 mb-16">
            <span className="text-sm font-black tracking-wide text-zinc-700">
              Five star ratings
            </span>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5" 
                  style={{ fill: activeProduct.theme.accent, color: activeProduct.theme.accent }} 
                />
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
            {activeProduct.testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-zinc-100 rounded-xl p-6 shadow-sm hover-lift flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" style={{ fill: activeProduct.theme.accent, color: activeProduct.theme.accent }} />
                    ))}
                  </div>
                  <h4 className="text-sm font-extrabold text-brand-dark mb-2 tracking-wide uppercase">{t.title}</h4>
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-200/50">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold" 
                    style={{ backgroundColor: activeProduct.theme.accent }}
                  >
                    {t.author.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-600">{t.author}. {t.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Action button */}
          <a
            href="#buy-section"
            onClick={scrollToBuy}
            className={`inline-flex items-center justify-center ${activeProduct.theme.btnBg} text-white font-bold text-base px-8 py-4 rounded-md shadow-premium hover-lift transition-colors`}
          >
            Start your journey today <ChevronRight className="w-5 h-5 ml-1" />
          </a>

        </div>
      </section>

      {/* SECTION 10: FAQ ACCORDION SECTION */}
      <section className="w-full bg-[#f8f9fa] py-16 md:py-24 px-4 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-brand-dark mb-12 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {activeProduct.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-brand-dark hover:bg-zinc-50 transition"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-xl font-bold font-mono" style={{ color: activeProduct.theme.accent }}>
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-[300px] border-t border-zinc-100 p-5' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
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

          <p className="text-base text-zinc-500 mb-6 leading-relaxed max-w-xl font-medium">
            {activeProduct.guaranteeText}
          </p>

          {/* Promise Box */}
          <div className="w-full max-w-xl bg-white border border-zinc-200 rounded-lg py-4 px-6 mb-8 text-sm md:text-base font-semibold text-zinc-600">
            {activeProduct.guaranteeBox}
          </div>

          {/* CTA Purchase Button */}
          <a
            href="#buy-section"
            onClick={scrollToBuy}
            className={`inline-flex items-center justify-center ${activeProduct.theme.btnBg} text-white font-bold text-base px-8 py-4 rounded-md shadow-premium hover-lift mb-6 transition-colors`}
          >
            Start Organizing Today <ChevronRight className="w-5 h-5 ml-1" />
          </a>

          {/* Links Row */}
          <div className="flex gap-8 justify-center text-xs font-bold text-zinc-500 uppercase tracking-widest mb-16">
            <span>Satisfaction Guaranteed</span>
            <span>Instant Download</span>
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
            <a href="#" className="hover:opacity-80 transition">Contact Us</a>
            <a href="#" className="hover:opacity-80 transition">Privacy Policy</a>
            <a href="#" className="hover:opacity-80 transition">Return and Refund</a>
            <a href="#" className="hover:opacity-80 transition">Shipping Policy</a>
            <a href="#" className="hover:opacity-80 transition">Terms of Service</a>
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
