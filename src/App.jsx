import { useState, useEffect } from 'react'
import PolicyView from './components/PolicyView'

function getPolicyFromPath(pathname, search, hash) {
  const cleanPath = (pathname || '').toLowerCase().replace(/^\/+|\/+$/g, '')
  const params = new URLSearchParams(search || '')
  const policyParam = params.get('policy') || params.get('page')
  const hashVal = (hash || '').replace(/^#\/?/, '').toLowerCase()

  const check = policyParam || cleanPath || hashVal
  if (!check) return null

  if (['refund-policy', 'return-and-refund', 'refunds', 'returns'].includes(check)) {
    return 'refund-policy'
  }
  if (['terms-of-service', 'terms-and-conditions', 'terms', 'tos'].includes(check)) {
    return 'terms-of-service'
  }
  if (['privacy-policy', 'privacy', 'gdpr'].includes(check)) {
    return 'privacy-policy'
  }
  if (['shipping-policy', 'digital-delivery', 'delivery-policy', 'delivery', 'shipping'].includes(check)) {
    return 'shipping-policy'
  }
  if (['cookie-policy', 'cookies'].includes(check)) {
    return 'cookie-policy'
  }
  if (['contact', 'contact-us', 'support'].includes(check)) {
    return 'contact'
  }
  return null
}
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
  Menu,
  X,
  Wallet,
  ChartColumn,
  PiggyBank,
  Monitor,
  BadgeCheck,
  LifeBuoy
} from 'lucide-react'

const ICON_MAP = {
  'brain': Brain,
  'check-square': CheckSquare,
  'compass': Compass,
  'smile': Smile,
  'heart': Heart,
  'sparkles': Sparkles,
  'check': Check,
  'wallet': Wallet,
  'chart': ChartColumn,
  'piggy-bank': PiggyBank,
  'monitor': Monitor,
  'badge-check': BadgeCheck,
  'life-buoy': LifeBuoy
}

const PRODUCTS = {
  'excel-template': {
    id: 'excel-template',
    name: 'Excel Templates Bundle – 1000+ Finance, Business, Budget & Analytics Dashboards',
    shortName: 'Shora Excel Template',
    menuLabel: 'Shora Excel Template',
    tagline: 'Track your finances effortlessly, visualize budgets with clarity, and make informed business decisions. 1000+ ready-to-use finance and business dashboards for Windows and Mac, with master resell rights and full support.',
    price: 9.99,
    originalPrice: 39.99,
    currency: 'USD',
    announcement: 'Unlock Success with 1000+ Excel Templates',
    checkoutUrl: 'https://buy.stripe.com/fZu28t6Wa8rmd7n67udUY01',
    category: 'EXCEL TEMPLATE',
    theme: {
      accent: '#2E7D32', // brand-excel
      accentHover: '#1B5E20', // brand-excel-dark
      bgGradient: 'from-[#C8E6C9] to-[#A5D6A7]',
      heroGlow: 'from-green-100 to-lime-100',
      lightBg: 'bg-green-50',
      badgeBg: 'bg-brand-excel/15 text-brand-excel',
      btnBg: 'bg-brand-excel hover:bg-brand-excel-dark',
      accentText: 'text-brand-excel',
      borderAccent: 'border-brand-excel',
      textAccentHover: 'hover:text-brand-excel-dark hover:border-brand-excel-dark',
      statsBgGradient: 'from-[#4CAF50] to-[#C8E6C9]'
    },
    heroImage: '/Assets/excel-template/01-1000-excel-templates.jpg',
    galleryImages: [
      '/Assets/excel-template/01-1000-excel-templates.jpg',
      '/Assets/excel-template/02-whats-included.jpg',
      '/Assets/excel-template/03-why-youll-love-it.jpg',
      '/Assets/excel-template/04-perfect-for.jpg',
      '/Assets/excel-template/05-how-it-works.jpg',
      '/Assets/excel-template/06-budget-planning.jpg',
      '/Assets/excel-template/07-top-categories.jpg',
      '/Assets/excel-template/08-work-smarter.jpg'
    ],
    features: [
      { title: "Financial Tracking", desc: "Easily track your finances with intuitive dashboards that simplify budgeting and expense management.", icon: 'wallet' },
      { title: "Smart Analytics", desc: "Gain insights with powerful analytics that help you make smarter business decisions quickly and confidently.", icon: 'chart' },
      { title: "Budget Management", desc: "Manage budgets effortlessly with tools designed to optimize spending and maximize savings every month.", icon: 'piggy-bank' },
      { title: "Cross-Platform", desc: "Compatible with both Windows and Mac, ensuring seamless integration into your existing workflow.", icon: 'monitor' },
      { title: "Master Resell Rights", desc: "All templates come with Master Resell Rights, allowing you to resell them legally.", icon: 'badge-check' },
      { title: "Full Support", desc: "Support and detailed documentation are included to help you set up and use the templates effectively.", icon: 'life-buoy' },
    ],
    tabContents: {
      templates: {
        tabLabel: "1000+ Templates",
        title: "1000+ Ready-to-Use Templates",
        body1: "Our finance and business dashboard templates transform complex data into clear, actionable insights, empowering you to make confident decisions effortlessly.",
        body2: "Business, finance, budget and analytics dashboards in one bundle, provided in .xlsx format and compatible with most spreadsheet software.",
        image: '/Assets/excel-template/02-whats-included.jpg'
      },
      platform: {
        tabLabel: "Windows & Mac",
        title: "Built for Windows and Mac",
        body1: "Designed for both Windows and Mac, these templates streamline your budgeting and analytics, saving time and reducing errors in your financial planning.",
        body2: "Open the Excel file, input your business data into the designated fields, and start generating insightful analytics immediately.",
        image: '/Assets/excel-template/03-why-youll-love-it.jpg'
      },
      support: {
        tabLabel: "Resell Rights & Support",
        title: "Master Resell Rights & Full Support",
        body1: "With master resell rights and comprehensive support, you gain not just tools but a trusted partner in achieving your business goals smoothly.",
        body2: "Support and detailed documentation are provided to help you set up and use the templates effectively.",
        image: '/Assets/excel-template/05-how-it-works.jpg'
      }
    },
    collageImages: [
      '/Assets/excel-template/04-perfect-for.jpg',
      '/Assets/excel-template/06-budget-planning.jpg',
      '/Assets/excel-template/07-top-categories.jpg',
      '/Assets/excel-template/08-work-smarter.jpg'
    ],
    testimonials: [
      { title: "TIME-SAVING AND EFFICIENT", text: "These finance templates saved me hours by automating budgeting and expense tracking seamlessly.", rating: 5, author: "Jessica", sub: "Verified buyer" },
      { title: "CLEAR AND INSIGHTFUL VISUALS", text: "Business dashboards helped me visualize key metrics clearly, improving decision-making instantly.", rating: 5, author: "Marcus", sub: "Verified buyer" },
      { title: "EASY TO CUSTOMIZE AND USE", text: "Budget templates are user-friendly and customizable, perfect for managing my personal finances easily.", rating: 5, author: "Sofia", sub: "Verified buyer" },
      { title: "POWERFUL BUSINESS INSIGHTS", text: "Analytics dashboards provide deep insights that boosted my business performance significantly.", rating: 5, author: "Kenji", sub: "Verified buyer" }
    ],
    buyTabs: {
      how: {
        title: "How To Use",
        paragraphs: [
          { bold: "Step 1", text: "Open the Excel file and familiarize yourself with the layout and available financial metrics." },
          { bold: "Step 2", text: "Input your business data into the designated fields to start generating insightful analytics immediately." },
          { bold: "Dashboard Optimization Tip", text: "Maximize efficiency by customizing your dashboard filters to focus on key financial metrics that matter most to your business goals." }
        ]
      },
      benefits: {
        title: "What's Included",
        paragraphs: [
          { bold: "Finance Dashboards", text: "Comprehensive finance dashboard for insights." },
          { bold: "Budget & Analytics", text: "User-friendly budget tracking and analytics." },
          { bold: "Windows & Mac", text: "Compatible with Windows and Mac systems." },
          { bold: "Support", text: "Includes full support and documentation." }
        ]
      },
      why: {
        title: "Why You'll Love",
        paragraphs: [
          { bold: "Clear Insights", text: "Transform complex data into clear, actionable insights and make confident decisions effortlessly." },
          { bold: "Fewer Errors", text: "Streamline your budgeting and analytics, saving time and reducing errors in your financial planning." },
          { bold: "Resell Rights", text: "Master resell rights and comprehensive support included with every template." }
        ]
      }
    },
    faqs: [
      { q: "How do I customize the finance templates?", a: "Our finance templates are easy to use and fully customizable to fit your business needs. Get started quickly with included support and documentation." },
      { q: "Are these templates compatible with Windows and Mac?", a: "You can use these templates on both Windows and Mac platforms without any compatibility issues." },
      { q: "Do these templates include resell rights?", a: "Yes, all templates come with Master Resell Rights, allowing you to resell them legally." },
      { q: "Is support and documentation included?", a: "Support and detailed documentation are provided to help you set up and use the templates effectively." },
      { q: "Can I track expenses with these templates?", a: "Our budget and analytics dashboards help you track expenses and analyze data efficiently." },
      { q: "What file formats are the templates available in?", a: "Templates are provided in .xlsx format, compatible with most spreadsheet software." },
      { q: "Who are these templates designed for?", a: "These templates are designed for business and finance professionals seeking efficient data management." },
      { q: "Can I generate reports using these templates?", a: "You can quickly generate reports and insights to make informed financial decisions." }
    ],
    stats: [
      { value: "1000+", text: "Ready-to-use finance, business, budget and analytics templates in one bundle." },
      { value: "MRR", text: "Master Resell Rights included, so you can legally resell every template." },
      { value: "3,742", text: "Reviews from users who rate these templates as highly effective." }
    ],
    statsCaption: "Everything you need to manage budgets, track finances and analyze business data.",
    guaranteeText: "Risk-free purchase with support and documentation included. Premium quality guaranteed.",
    guaranteeBox: "Your purchase includes full support and detailed documentation to help you set up and use every template with confidence."
  },
  'food-swaps': {
    id: 'food-swaps',
    name: 'Done For You Guide on 30 Healthy Food Swaps – Editable Canva eBook Template',
    shortName: 'Healthy Food Swaps',
    menuLabel: 'Healthy Food Swaps Guide',
    tagline: 'Save Time, Deliver Value, and Stand Out as the Go-To Health Coach. This editable Canva eBook template gives you everything you need to provide your audience with practical, real-world solutions to eat cleaner, lose weight, and stay on track.',
    price: 19.99,
    originalPrice: 39.99,
    currency: 'USD',
    announcement: 'Done-for-you PLR digital product - Editable Canva template',
    checkoutUrl: 'https://buy.stripe.com/8x214nghw6w8cktgEk63K01',
    category: 'CANVA TEMPLATE',
    theme: {
      accent: '#009966', // brand-green
      accentHover: '#047857', // green-700
      bgGradient: 'from-[#a7f3d0] to-[#6ee7b7]',
      heroGlow: 'from-emerald-100 to-teal-100',
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
    stats: [
      { value: "100%", text: "Agreed that editable Canva designs saved them hours of content creation." },
      { value: "97%", text: "Reported high client engagement when using this eBook as a coaching lead magnet." },
      { value: "97%", text: "Found it simple to fully customize all colors, fonts, and layouts to match their brand." }
    ],
    statsCaption: "Results driven from wellness coaches using our done-for-you PLR template.",
    guaranteeText: "Your satisfaction is our top priority. Enjoy peace of mind with our Done For You Canva template eBook.",
    guaranteeBox: "We guarantee that our templates will save you hours of content creation time and deliver immediate high value to your audience."
  }
}

// Order of the products in the header menu. The first one is shown by default.
const PRODUCT_ORDER = ['excel-template', 'food-swaps']
const DEFAULT_PRODUCT_ID = PRODUCT_ORDER[0]

function getProductFromSearch(search) {
  const prod = new URLSearchParams(search || '').get('product')
  return prod && PRODUCTS[prod] ? prod : DEFAULT_PRODUCT_ID
}

function formatPrice(amount, currency) {
  const locale = currency === 'INR' ? 'en-IN' : 'en-US'
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)
}

const HERO_TESTIMONIALS = {
  'excel-template': [
    {
      text: "This dashboard transformed how I manage my finances, making budgeting and analytics simple and effective every day.",
      author: "James Carter",
      rating: 5
    },
    {
      text: "Business dashboards helped me visualize key metrics clearly, improving decision-making instantly.",
      author: "Marcus",
      rating: 5
    },
    {
      text: "Budget templates are user-friendly and customizable, perfect for managing my personal finances easily.",
      author: "Sofia",
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
  // --- Policy & View Routing States ---
  const [currentView, setCurrentView] = useState(() => {
    const matched = getPolicyFromPath(window.location.pathname, window.location.search, window.location.hash)
    return matched ? 'policy' : 'store'
  })
  const [activePolicyId, setActivePolicyId] = useState(() => {
    const matched = getPolicyFromPath(window.location.pathname, window.location.search, window.location.hash)
    return matched || 'refund-policy'
  })

  // Listen for browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const matched = getPolicyFromPath(window.location.pathname, window.location.search, window.location.hash)
      if (matched) {
        setCurrentView('policy')
        setActivePolicyId(matched)
      } else {
        setCurrentView('store')
        setActiveProductId(getProductFromSearch(window.location.search))
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openPolicy = (policyId, e) => {
    if (e && e.preventDefault) e.preventDefault()
    setActivePolicyId(policyId)
    setCurrentView('policy')
    const urlMap = {
      'refund-policy': '/return-and-refund',
      'terms-of-service': '/terms-of-service',
      'privacy-policy': '/privacy-policy',
      'shipping-policy': '/shipping-policy',
      'cookie-policy': '/cookie-policy',
      'contact': '/contact'
    }
    const path = urlMap[policyId] || `/${policyId}`
    window.history.pushState({ path }, '', path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backToStore = () => {
    setCurrentView('store')
    window.history.pushState({}, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // --- States ---
  const [activeProductId, setActiveProductId] = useState(() => getProductFromSearch(window.location.search))
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
  const [activeTab, setActiveTab] = useState(() => Object.keys(activeProduct.tabContents)[0])

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

  const handleProductChange = (prodId) => {
    if (PRODUCTS[prodId]) {
      setActiveProductId(prodId)
      const newUrl = `${window.location.pathname}?product=${prodId}`
      window.history.pushState({ path: newUrl }, '', newUrl)
    }
  }

  // Dynamic Browser Title and Meta description
  useEffect(() => {
    if (currentView === 'store') {
      document.title = `${activeProduct.name} | Shoraminimalist`
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', activeProduct.tagline)
      }
    }
  }, [activeProduct, currentView])

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

  // If user navigated to a legal policy, render the comprehensive PolicyView
  if (currentView === 'policy') {
    return (
      <PolicyView
        activePolicyId={activePolicyId}
        onSelectPolicy={(id) => {
          setActivePolicyId(id)
          const urlMap = {
            'refund-policy': '/return-and-refund',
            'terms-of-service': '/terms-of-service',
            'privacy-policy': '/privacy-policy',
            'shipping-policy': '/shipping-policy',
            'cookie-policy': '/cookie-policy',
            'contact': '/contact'
          }
          const path = urlMap[id] || `/${id}`
          window.history.pushState({ path }, '', path)
        }}
        onBackToStore={backToStore}
      />
    )
  }

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
            {PRODUCT_ORDER.map((prodId) => (
              <button
                key={prodId}
                onClick={() => handleProductChange(prodId)}
                className={`text-xs tracking-wider uppercase font-bold transition-all py-0.5 border-b-2 ${
                  activeProductId === prodId
                    ? `${PRODUCTS[prodId].theme.accentText} ${PRODUCTS[prodId].theme.borderAccent}`
                    : 'text-zinc-400 border-transparent hover:text-zinc-600'
                }`}
              >
                {PRODUCTS[prodId].shortName}
              </button>
            ))}
            <button
              onClick={(e) => openPolicy('refund-policy', e)}
              className="text-xs tracking-wider uppercase font-bold text-zinc-400 hover:text-zinc-600 transition-colors py-0.5 border-b-2 border-transparent"
              title="UK Legal Policies & Consumer Rights"
            >
              UK Policies
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
                {PRODUCT_ORDER.map((prodId) => (
                  <button
                    key={prodId}
                    onClick={() => { handleProductChange(prodId); setMobileMenuOpen(false); }}
                    className={`text-left py-2 border-b ${activeProductId === prodId ? `${PRODUCTS[prodId].theme.accentText} ${PRODUCTS[prodId].theme.borderAccent}` : 'border-transparent'}`}
                  >
                    {PRODUCTS[prodId].menuLabel}
                  </button>
                ))}
                <a
                  href="#buy-section"
                  onClick={(e) => { setMobileMenuOpen(false); scrollToBuy(e); }}
                  className="mt-4 inline-flex items-center justify-center bg-zinc-800 text-white font-bold py-3 px-6 rounded-md hover:bg-zinc-900 transition"
                >
                  Get Template
                </a>

                <div className="pt-6 mt-4 border-t border-zinc-100 flex flex-col gap-3 text-xs font-semibold text-zinc-500">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">UK Legal & Policies</span>
                  <button onClick={(e) => { setMobileMenuOpen(false); openPolicy('refund-policy', e); }} className="text-left hover:text-brand-dark">Refund & Return Policy</button>
                  <button onClick={(e) => { setMobileMenuOpen(false); openPolicy('terms-of-service', e); }} className="text-left hover:text-brand-dark">Terms of Service</button>
                  <button onClick={(e) => { setMobileMenuOpen(false); openPolicy('privacy-policy', e); }} className="text-left hover:text-brand-dark">Privacy Policy (UK GDPR)</button>
                  <button onClick={(e) => { setMobileMenuOpen(false); openPolicy('shipping-policy', e); }} className="text-left hover:text-brand-dark">Digital Delivery Policy</button>
                  <button onClick={(e) => { setMobileMenuOpen(false); openPolicy('cookie-policy', e); }} className="text-left hover:text-brand-dark">Cookie Policy</button>
                  <button onClick={(e) => { setMobileMenuOpen(false); openPolicy('contact', e); }} className="text-left hover:text-brand-dark">Contact Us</button>
                </div>
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
              <div className={`absolute -inset-1 bg-gradient-to-r ${activeProduct.theme.heroGlow} rounded-2xl blur-lg opacity-40`}></div>
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
            Explore the features and layout choices designed specifically to save you time and get results faster.
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
                  {formatPrice(activeProduct.price * quantity, activeProduct.currency)}
                </span>
                <span className="text-base text-zinc-400 line-through">
                  {formatPrice(activeProduct.originalPrice * quantity, activeProduct.currency)}
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
                href={activeProduct.checkoutUrl}
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
            {activeProduct.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 border border-zinc-100 shadow-lift ${idx % 2 === 0 ? 'tilted-card ' : ''}transform hover:scale-105 duration-300`}
              >
                <span className="block text-4xl md:text-5xl font-black mb-4" style={{ color: activeProduct.theme.accent }}>
                  {stat.value}
                </span>
                <p className="text-sm font-semibold text-zinc-600 leading-relaxed">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom citation */}
          <span className="text-xs md:text-sm text-white/80 font-medium tracking-wide">
            {activeProduct.statsCaption}
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
            <button onClick={(e) => openPolicy('refund-policy', e)} className="hover:text-brand-dark hover:underline transition cursor-pointer">Satisfaction Guaranteed</button>
            <button onClick={(e) => openPolicy('shipping-policy', e)} className="hover:text-brand-dark hover:underline transition cursor-pointer">Instant Download</button>
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 text-xs md:text-sm font-semibold text-zinc-500">
            <button onClick={(e) => openPolicy('contact', e)} className="hover:text-brand-dark transition cursor-pointer">Contact Us</button>
            <button onClick={(e) => openPolicy('privacy-policy', e)} className="hover:text-brand-dark transition cursor-pointer">Privacy Policy</button>
            <button onClick={(e) => openPolicy('refund-policy', e)} className="hover:text-brand-dark transition cursor-pointer">Return and Refund</button>
            <button onClick={(e) => openPolicy('shipping-policy', e)} className="hover:text-brand-dark transition cursor-pointer">Shipping Policy</button>
            <button onClick={(e) => openPolicy('terms-of-service', e)} className="hover:text-brand-dark transition cursor-pointer">Terms of Service</button>
            <button onClick={(e) => openPolicy('cookie-policy', e)} className="hover:text-brand-dark transition cursor-pointer">Cookie Policy</button>
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
