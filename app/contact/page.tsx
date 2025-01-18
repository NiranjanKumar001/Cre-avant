// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically handle form submission
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <h1 className="heading">Get In Touch</h1>
          <p className="sub-heading mb-12">
            Have a question or project in mind? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="startup-card flex flex-col items-center text-center p-6">
              <Mail className="size-8 mb-4 text-primary" />
              <h3 className="text-20-medium mb-2">Email Us</h3>
              <p className="text-16-medium text-black-300 ">niranjanarts6204@gmail.com</p>
            </div>
            
            <div className="startup-card flex flex-col items-center text-center p-6">
              <Phone className="size-8 mb-4 text-primary" />
              <h3 className="text-20-medium mb-2">Call Us</h3>
              <p className="text-16-medium text-black-300">+91 000 000 0000</p>
            </div>
            
            <div className="startup-card flex flex-col items-center text-center p-6">
              <MapPin className="size-8 mb-4 text-primary" />
              <h3 className="text-20-medium mb-2">Visit Us</h3>
              <p className="text-16-medium text-black-300">Bhubneshwar,Odisha,India</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}