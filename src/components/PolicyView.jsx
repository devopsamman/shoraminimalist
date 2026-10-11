import { useState, useEffect, useMemo } from 'react'
import { 
  ArrowLeft, 
  RotateCcw, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Cookie, 
  Mail, 
  Check, 
  Printer, 
  Share2, 
  Search, 
  ChevronRight, 
  AlertTriangle, 
  Info, 
  Clock, 
  CheckCircle2
} from 'lucide-react'
import { POLICIES_DATA, POLICIES_LIST } from '../data/policiesData'
import PolicyContactForm from './PolicyContactForm'

const POLICY_ICONS = {
  'refund-policy': RotateCcw,
  'terms-of-service': FileText,
  'privacy-policy': ShieldCheck,
  'shipping-policy': Truck,
  'cookie-policy': Cookie,
  'contact': Mail
}

export default function PolicyView({ activePolicyId = 'refund-policy', onSelectPolicy, onBackToStore }) {
  const [activeId, setActiveId] = useState(activePolicyId)
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState('')

  // Sync state if prop changes
  useEffect(() => {
    if (activePolicyId && POLICIES_DATA[activePolicyId]) {
      setActiveId(activePolicyId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activePolicyId])

  const policy = POLICIES_DATA[activeId] || POLICIES_DATA['refund-policy']

  // Update browser document title
  useEffect(() => {
    document.title = `${policy.title} | Shoraminimalist UK`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', policy.description)
    }
  }, [policy])

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return policy.sections
    const q = searchQuery.toLowerCase()
    return policy.sections.filter(sec => 
      sec.heading.toLowerCase().includes(q) ||
      sec.content.toLowerCase().includes(q)
    )
  }, [policy, searchQuery])

  const handleTabChange = (newId) => {
    setActiveId(newId)
    setSearchQuery('')
    if (onSelectPolicy) {
      onSelectPolicy(newId)
    } else {
      window.history.pushState({}, '', `/${newId}`)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  const scrollToSection = (sectionId) => {
    setActiveSectionId(sectionId)
    const el = document.getElementById(sectionId)
    if (el) {
      const yOffset = -100
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const IconComp = POLICY_ICONS[policy.id] || FileText

  return (
    <div className="min-h-screen bg-[#fafbfc] text-brand-dark flex flex-col font-sans">
      
      {/* Top Banner & Notice */}
      <div className="w-full bg-[#1e2329] text-zinc-300 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              Official UK Policies
            </span>
            <span>Digital Goods & Canva Templates Consumer Protection</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <span>UK Consumer Rights Act 2015</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Consumer Contracts Regs 2013</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">UK GDPR Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Legal Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Back to store button */}
          <button
            onClick={onBackToStore}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-600 hover:text-brand-dark transition-colors group px-2 py-1 rounded-md hover:bg-zinc-100"
            title="Return to Shop"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-brand-blue" />
            <span>Return to Shop</span>
          </button>

          {/* Centered Brand Logo */}
          <div className="flex items-center justify-center cursor-pointer" onClick={onBackToStore}>
            <img 
              src="/Assets/shora images01.png" 
              alt="Shoraminimalist Logo" 
              className="h-9 md:h-11 w-auto object-contain"
            />
          </div>

          {/* Quick Actions (Print / Copy / Email) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition"
              title="Copy link to this policy"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition"
              title="Print Policy"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>

        </div>

        {/* Policy Tab Navigation Bar */}
        <div className="bg-zinc-50 border-t border-zinc-200 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-1 py-1.5 min-w-max">
            {POLICIES_LIST.map((item) => {
              const ItemIcon = POLICY_ICONS[item.id] || FileText
              const isSelected = item.id === activeId
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-brand-dark shadow-xs border border-zinc-200 font-bold'
                      : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/60'
                  }`}
                >
                  <ItemIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-blue' : 'text-zinc-400'}`} />
                  <span>{item.shortTitle}</span>
                </button>
              )
            })}
          </div>
        </div>
      </header>

      {/* Main Page Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Breadcrumb trail */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-6 font-medium">
          <button onClick={onBackToStore} className="hover:text-zinc-600 transition">Store</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-600">Legal & Customer Policies</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-blue font-semibold">{policy.shortTitle}</span>
        </nav>

        {/* Hero Card for Current Policy */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-10 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block bg-blue-50 border border-blue-200 text-brand-blue text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                  {policy.badge}
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                  {policy.title}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200/80 self-start md:self-auto">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Last updated: <strong>{policy.lastUpdated}</strong></span>
            </div>
          </div>

          <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-4xl mb-6">
            {policy.description}
          </p>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-zinc-100">
            {policy.highlights.map((h, i) => (
              <div key={i} className="bg-[#f8f9fa] border border-zinc-200/80 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-brand-blue mb-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-brand-blue" />
                  <span className="text-xs font-bold text-brand-dark">{h.title}</span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Search bar inside policy */}
          <div className="mt-6 pt-4 border-t border-zinc-100">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search within ${policy.shortTitle}...`}
                className="w-full pl-9 pr-4 py-2 text-xs md:text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout: Sidebar Table of Contents + Policy Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table of Contents (Desktop Sticky) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-36">
            <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-[10px] font-normal text-zinc-400">{filteredSections.length} sections</span>
              </h3>
              <nav className="space-y-1">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left text-xs py-2 px-2.5 rounded-lg transition-all flex items-center justify-between group ${
                      activeSectionId === sec.id
                        ? 'bg-blue-50 text-brand-blue font-bold border-l-2 border-brand-blue'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-brand-dark'
                    }`}
                  >
                    <span className="truncate pr-2">{sec.heading}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-300 group-hover:text-zinc-500 shrink-0" />
                  </button>
                ))}
              </nav>

              {/* Direct Support Box */}
              <div className="mt-6 pt-5 border-t border-zinc-100 bg-[#f8f9fa] rounded-lg p-3.5 text-center">
                <span className="text-xs font-bold text-brand-dark block mb-1">Need help with an order?</span>
                <p className="text-[11px] text-zinc-500 mb-2.5">
                  Our UK support team is on standby to assist with downloads and templates.
                </p>
                <a
                  href="mailto:support@shoraminimalist.com"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-dark hover:bg-zinc-800 px-3.5 py-1.5 rounded-md transition shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>support@shoraminimalist.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Policy Content Body */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* If user is on Contact Us tab, render contact form right away */}
            {activeId === 'contact' && (
              <div className="mb-6">
                <PolicyContactForm />
              </div>
            )}

            {filteredSections.length === 0 ? (
              <div className="bg-white border border-zinc-200 rounded-xl p-8 text-center text-zinc-500">
                <Info className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                <p className="font-semibold text-sm">No sections match your search "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-brand-blue font-bold underline"
                >
                  Clear search query
                </button>
              </div>
            ) : (
              filteredSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-white border border-zinc-200 rounded-xl p-6 md:p-8 shadow-xs scroll-mt-28"
                >
                  <h2 className="text-lg md:text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-zinc-100">
                    {section.heading}
                  </h2>

                  <div className="prose prose-zinc prose-sm md:prose-base max-w-none text-zinc-600 leading-relaxed space-y-3">
                    {section.content.split('\n\n').map((paragraph, idx) => {
                      // Check for markdown sub-headers
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={idx} className="text-base font-bold text-brand-dark mt-4 mb-2">
                            {paragraph.replace('### ', '')}
                          </h3>
                        )
                      }
                      
                      // Check for bullet lists
                      if (paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
                        const items = paragraph.split('\n')
                        return (
                          <ul key={idx} className="list-disc pl-5 space-y-1.5 my-2 text-xs md:text-sm">
                            {items.map((it, iIdx) => {
                              const cleanItem = it.replace(/^(\*|\d+\.)\s*/, '')
                              // Simple render with bold formatting support
                              return (
                                <li key={iIdx} dangerouslySetInnerHTML={{ __html: formatMarkdownBold(cleanItem) }} />
                              )
                            })}
                          </ul>
                        )
                      }

                      return (
                        <p 
                          key={idx} 
                          className="text-xs md:text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatMarkdownBold(paragraph) }}
                        />
                      )
                    })}
                  </div>

                  {/* Render alert callout box if present */}
                  {section.callout && (
                    <div className="mt-4 p-4 rounded-xl border border-amber-200 bg-amber-50/80 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs md:text-sm font-bold text-amber-900 mb-1">
                          {section.callout.title}
                        </strong>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              ))
            )}

            {/* Bottom Support Callout */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-bold text-brand-blue uppercase tracking-wider block mb-1">
                  UK Customer Satisfaction Guarantee
                </span>
                <h3 className="text-base md:text-lg font-extrabold text-brand-dark mb-1">
                  Have questions about our digital products or policies?
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 max-w-xl">
                  We are dedicated to transparent, fair consumer relations. Reach out to our support team anytime with your order details.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleTabChange('contact')}
                  className="px-4 py-2.5 rounded-lg bg-brand-dark text-white text-xs font-bold hover:bg-zinc-800 transition whitespace-nowrap shadow-xs"
                >
                  Contact Support Form
                </button>
                <button
                  onClick={onBackToStore}
                  className="px-4 py-2.5 rounded-lg bg-white border border-zinc-200 text-brand-dark text-xs font-bold hover:bg-zinc-50 transition whitespace-nowrap"
                >
                  Return to Store
                </button>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f8f9fa] border-t border-zinc-200 py-10 px-4 text-center mt-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="mb-4 cursor-pointer" onClick={onBackToStore}>
            <img 
              src="/Assets/shora images01.png" 
              alt="Shoraminimalist" 
              className="h-9 w-auto object-contain mx-auto"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 text-xs font-semibold text-zinc-500">
            {POLICIES_LIST.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`transition hover:text-brand-dark ${activeId === item.id ? 'text-brand-blue font-bold underline' : ''}`}
              >
                {item.shortTitle}
              </button>
            ))}
          </div>

          <p className="text-[11px] text-zinc-400 max-w-xl mb-4 leading-relaxed">
            © {new Date().getFullYear()} Shora Minimalist (shoraminimalist.com). All rights reserved. 
            All digital planners and templates are subject to intellectual property laws and consumer regulations of the United Kingdom.
          </p>

          <div className="text-[10px] text-zinc-400 flex items-center justify-center gap-2">
            <span>Governed by the laws of England & Wales</span>
            <span>•</span>
            <button onClick={onBackToStore} className="hover:underline text-brand-blue font-medium">Back to Homepage</button>
          </div>

        </div>
      </footer>

    </div>
  )
}

// Simple helper to parse basic markdown bold (**text**) and links into HTML
function formatMarkdownBold(str) {
  if (!str) return ''
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-brand-blue hover:underline font-medium">$1</a>')
}
