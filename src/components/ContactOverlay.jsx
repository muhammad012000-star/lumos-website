import { useEffect, useState } from 'react'
import { useContact } from '../context/ContactContext.jsx'
import './ContactOverlay.css'

function useOttawaClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Toronto',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())

    setTime(format())
    const id = setInterval(() => setTime(format()), 1000 * 15)
    return () => clearInterval(id)
  }, [])

  return time
}

export default function ContactOverlay() {
  const { isOpen, closeContact } = useContact()
  const time = useOttawaClock()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    timeline: '',
    message: '',
    scheduledAt: '',
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && closeContact()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeContact])

  if (!isOpen) return null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-overlay">
      <button className="contact-close" onClick={closeContact}>Close</button>

      <div className="contact-overlay-bg" />

      <div className="contact-overlay-inner">
        <div className="contact-overlay-left">
          <h1>Let's talk.</h1>
          <p>
            We'd love to hear about your vision. Share a bit about your business, what
            you're building, and the goals you're aiming to achieve. The more context you
            provide, the better we can tailor our response. Once you've submitted your
            message, we'll reach out within 24 hours.
          </p>
          <div className="contact-overlay-details">
            <a href="mailto:hello@lumosstudios.co.uk">hello@lumosstudios.co.uk</a>
            <a href="tel:+44393838141">+44 393 838 141</a>
          </div>
          <div className="contact-overlay-footer">
            <span>Birmingham, United Kindom</span>
            <span className="contact-overlay-clock">{time}</span>
          </div>
        </div>

        <div className="contact-overlay-right">
          {sent ? (
            <p className="contact-sent">Thanks — your message is in. We'll be in touch within 24 hours.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <div className="contact-overlay-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-overlay-row">
                <select name="budget" value={form.budget} onChange={handleChange}>
                  <option value="" disabled>Budget</option>
                  <option value="$700 - $1400">$700 - $1400</option>
                  <option value="$1400 - $2000">$1400 - $2000</option>
                  <option value="$2000 - $3500">$2000 - $3500</option>
                  <option value="$3500+">$3500+</option>
                </select>
                <select name="timeline" value={form.timeline} onChange={handleChange}>
                  <option value="" disabled>Timeline</option>
                  <option value="1 - 2 weeks">1 - 2 weeks</option>
                  <option value="2 - 4 weeks">2 - 4 weeks</option>
                  <option value="4 - 6 weeks">4 - 6 weeks</option>
                  <option value="6+ weeks">6+ weeks</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <label className="contact-overlay-label">Schedule a call.</label>
              <input
                type="datetime-local"
                name="scheduledAt"
                value={form.scheduledAt}
                onChange={handleChange}
              />
              <button type="submit" className="btn contact-submit">Send message</button>
              <p className="contact-consent">
                By submitting this form, you consent to Lumos Studios® storing your information
                for the purpose of responding to your inquiry. We respect your privacy. Your
                information will not be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
