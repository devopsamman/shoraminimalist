import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react'

export default function PolicyContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    product: 'ADHD-Friendly Daily Cleaning Planner',
    subject: 'General Question',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }

    setSubmitting(true)

    // Simulate submission / mailto fallback
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center my-6 animate-fade-in">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Message Received!</h3>
        <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6">
          Thank you, <strong>{formData.name}</strong>. Our UK customer support team has received your inquiry regarding <em>{formData.product}</em> and will respond to <strong>{formData.email}</strong> within 24 to 48 business hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                name: '',
                email: '',
                orderId: '',
                product: 'ADHD-Friendly Daily Cleaning Planner',
                subject: 'General Question',
                message: ''
              })
            }}
            className="text-xs font-semibold px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
          >
            Send Another Message
          </button>
          <a
            href="mailto:support@shoraminimalist.com"
            className="text-xs font-semibold px-4 py-2 border border-emerald-300 text-emerald-800 rounded-md hover:bg-emerald-100/50 transition"
          >
            Direct Email: support@shoraminimalist.com
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 rounded-xl p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-brand-dark mb-1">Send a Message to UK Customer Support</h3>
        <p className="text-xs md:text-sm text-zinc-500">
          Have a question about your order, digital download, or need help with a Canva template? Fill out the details below:
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
            Order Reference / Stripe ID
          </label>
          <input
            type="text"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            placeholder="e.g. cs_live_... or N/A"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
            Product Inquired
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none bg-white transition"
          >
            <option value="ADHD-Friendly Daily Cleaning Planner">ADHD Cleaning Planner</option>
            <option value="Done For You Guide on 30 Healthy Food Swaps">30 Healthy Food Swaps Guide</option>
            <option value="General Inquiry">General / Other Inquiries</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none bg-white transition"
          >
            <option value="Download / Access Issue">Download / Access Link Help</option>
            <option value="Canva Template Assistance">Canva Template Editing Help</option>
            <option value="Refund Request under CRA 2015">Refund Request (CRA 2015 / Faulty Content)</option>
            <option value="Duplicate Order Assistance">Accidental Duplicate Order</option>
            <option value="UK GDPR Data Inquiry">UK GDPR Data Inquiry</option>
            <option value="General Question">General Question</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe how we can assist you. If reporting an issue with a download, mention the device or browser you are using..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-zinc-100">
        <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <span>Responses typically within 24-48 business hours (Mon-Fri, 9am-5pm GMT).</span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-zinc-800 transition shadow-sm disabled:opacity-50"
        >
          {submitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
