import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

interface ContactProps {
  darkMode: boolean
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await emailjs.send(
        'service_ony3jse',      // ← replace with your emailjs service id
        'template_4uivad8',     // ← replace with your emailjs template id
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '8NZXtSAIVrJtSamD_'     // ← replace with your public key
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Message not sent — check console.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sarathitvm1@gmail.com',
      link: 'mailto:sarathitvm1@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8610069621',
      link: 'tel:+918610069621',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'sarathikannan13',
      link: 'https://github.com/sarathikannan13',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/sarathi-kannan-b-b8b6132a5',
    },
  ]
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h3>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through any of the following channels:
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
                >
                  <div className="p-3 rounded-lg bg-blue-600 flex-shrink-0">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {info.title}
                    </p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all`}
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'} border focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 px-6 rounded-lg ${submitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium flex items-center justify-center gap-2 transition-all disabled:cursor-not-allowed`}
              >
                {submitted ? (
                  <>Success! Message Sent</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
