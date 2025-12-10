// FILE: components/layout/Footer.tsx
// Create file: components/layout/Footer.tsx

'use client';

import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Portraits', href: '/portraits' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Editorial', href: '/editorial' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/paira_art.6?utm_source=qr', 
      icon: Instagram 
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/1BkzV8SAdF/?mibextid=wwXIfr', 
      icon: Facebook 
    },
    { 
      name: 'X (Twitter)', 
      href: 'https://x.com/peter_paira?s=11', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      href: 'https://www.tiktok.com/@paira.art.6?_r=1&_t=ZM-926inGseuBY', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@pairaart.6?si=B-9AiU6MquCtsx9V', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/peter-muwulya-a33041392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 
      icon: Linkedin 
    },
  ];

  return (
    <footer className="bg-charcoal-950 text-white">
      
      {/* Main Footer Content */}
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="font-display text-4xl mb-6 text-white">
              Paira Art.6
            </h2>
            <p className="text-charcoal-300 leading-relaxed mb-6 max-w-md">
              Award-winning Ugandan photographer and cinematographer capturing stories through lens. 
              Specializing in fashion, lifestyle, and visual storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-charcoal-700 flex items-center justify-center hover:bg-pumpkin-500 hover:border-pumpkin-500 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-charcoal-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="luxury-text text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-pumpkin-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="luxury-text text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pumpkin-500 flex-shrink-0 mt-1" />
                <span className="text-charcoal-300 text-sm">
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pumpkin-500 flex-shrink-0 mt-1" />
                <a
                  href="mailto:peterpaira43@gmail.com"
                  className="text-charcoal-300 hover:text-pumpkin-500 transition-colors duration-300 text-sm"
                >
                  peterpaira43@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pumpkin-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+256756143976"
                    className="text-charcoal-300 hover:text-pumpkin-500 transition-colors duration-300 text-sm"
                  >
                    +256 756 143 976 (WhatsApp)
                  </a>
                  <a
                    href="tel:+256764103776"
                    className="text-charcoal-300 hover:text-pumpkin-500 transition-colors duration-300 text-sm"
                  >
                    +256 764 103 776
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-charcoal-400 text-sm">
              © {currentYear} Paira Art.6. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-charcoal-400 hover:text-pumpkin-500 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-charcoal-400 hover:text-pumpkin-500 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}