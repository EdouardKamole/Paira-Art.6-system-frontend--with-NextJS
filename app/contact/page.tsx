'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contactMethod: '',
    contactInfo: '',
    photoshootType: '',
    location: '',
    needServices: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with your backend or email service
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ 
      name: '', 
      contactMethod: '', 
      contactInfo: '', 
      photoshootType: '', 
      location: '', 
      needServices: '', 
      budget: '', 
      message: '' 
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pairaart6@gmail.com',
      href: 'mailto:pairaart6@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+256 700 000 000',
      href: 'tel:+256700000000',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kampala, Uganda',
      href: 'https://maps.google.com/?q=Kampala,Uganda',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/pairaart6', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/pairaart6', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pairaart6', label: 'LinkedIn' },
  ];

  return (
    <main>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="luxury-text text-white/90 mb-6 animate-fade-in">
            Get in Touch
          </p>
          <h1 className="hero-title mb-8 animate-slide-up">
            Let's Create<br />Together
          </h1>
          <p className="subtitle text-white/90 animate-fade-in-slow">
            Ready to bring your vision to life? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <p className="luxury-text mb-4">Inquiries</p>
                <h2 className="section-title mb-8">Let's Talk</h2>
                <p className="text-charcoal-600 leading-relaxed text-lg mb-8">
                  I respond within an hour to my emails but even quicker on Whatsapp, 
                  if that's your preferred method please let me know!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-cream-50 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-pumpkin-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pumpkin-500 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-pumpkin-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="luxury-text mb-1">{info.label}</p>
                        <p className="text-charcoal-800 font-light">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="luxury-text mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-charcoal-200 flex items-center justify-center hover:bg-pumpkin-500 hover:border-pumpkin-500 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-charcoal-600 group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Success Message */}
                {submitted && (
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg animate-slide-down">
                    <p className="text-green-800 font-light">
                      ✓ Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="luxury-text block mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Preferred Method of Contact */}
                <div>
                  <label htmlFor="contactMethod" className="luxury-text block mb-2">
                    PREFERRED METHOD OF CONTACT *
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300 bg-white"
                  >
                    <option value="">Select method</option>
                    <option value="email">Email</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="whatsapp">Whatsapp</option>
                  </select>
                </div>

                {/* Contact Info */}
                <div>
                  <label htmlFor="contactInfo" className="luxury-text block mb-2">
                    CONTACT INFO *
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300"
                    placeholder="Email, phone number or WhatsApp"
                  />
                </div>

                {/* Type of Photoshoot */}
                <div>
                  <label htmlFor="photoshootType" className="luxury-text block mb-2">
                    WHAT TYPE OF PHOTOSHOOT ARE YOU LOOKING FOR? *
                  </label>
                  <select
                    id="photoshootType"
                    name="photoshootType"
                    value={formData.photoshootType}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300 bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="fashion">Fashion</option>
                    <option value="commercial">Commercial</option>
                    <option value="portrait">Portrait / Portfolio</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="luxury-text block mb-2">
                    YOUR LOCATION *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300"
                    placeholder="City, Country"
                  />
                </div>

                {/* Need Services */}
                <div>
                  <label htmlFor="needServices" className="luxury-text block mb-2">
                    WILL YOU NEED A STYLIST, LOCATION SCOUT OR MOOD BOARD? *
                  </label>
                  <select
                    id="needServices"
                    name="needServices"
                    value={formData.needServices}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300 bg-white"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="luxury-text block mb-2">
                    WHAT IS YOUR OVERALL BUDGET FOR THE SHOOT? *
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300"
                    placeholder="Your budget"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="luxury-text block mb-2">
                    PLEASE DESCRIBE IN DETAIL WHAT YOU ARE LOOKING FOR *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-charcoal-200 rounded-lg focus:outline-none focus:border-pumpkin-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project in detail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-charcoal-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35854633103!2d32.452502!3d0.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6c4c6c7b3f%3A0x5eb6b8e8f3b4d6c4!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </main>
  );
}