"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import Image from "next/image"

import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our team. We're here to help you with your technology needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Locations */}
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <section className="py-8 bg-gradient-to-br from-blue-500 to-blue-900 text-white rounded-xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg m-4">
            <h2 className="text-2xl font-bold mb-6">Get Carbonio Community Edition</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input id="firstName" placeholder="First Name" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <Input id="lastName" placeholder="Last Name" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <Input id="email" type="email" placeholder="Email" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <Input id="phone" type="tel" placeholder="Phone Number" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <Input id="company" placeholder="Company" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <Input id="companyUrl" type="url" placeholder="Company URL" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <Input id="country" placeholder="Country" className="bg-white/20 border-white/20 text-white placeholder:text-white/60" />
                <select
                  id="membersCount"
                  className="w-full p-2 rounded-md bg-white/20 border border-white/20 text-white placeholder:text-white/60"
                >
                  <option className="text-black" value="">Memebers Count</option>
                  <option className="text-black" value="0-10">0 - 10</option>
                  <option className="text-black" value="10-100">10 - 100</option>
                  <option className="text-black" value="100-500">100 - 500</option>
                  <option className="text-black" value="500+">500+</option>
                </select>
              </div>
              <Button className="w-full bg-white text-black hover:bg-black hover:text-white">Get a Quote</Button>
              <p className="text-xs text-white/70 text-center">
                By submitting this form, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>
        </section>

        {/* Office Locations */}
        <div className={`transition-all duration-1000 delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Corporate Office",
                address: `1st Floor, No.3 & 4, Siri Towers, Fourths Ave, Annani Indira Nagar, Chennai, India – 600 097`,
                phone: "+91 9383996666",
                email: "sales@sixthstar.in",
              },
              {
                title: "Malaysia",
                address: `C4-2-39, Jalan 1/152, Taman OUG, Parklane 58200, Kuala Lumpur, Malaysia`,
                phone: "+60 1021 17305",
                website: "https://www.sixthstar.in",
              },
              {
                title: "Germany",
                address: `Boetzinger Straße 60, 79111 Freiburg, Germany`,
                phone: "+49 761 4514 0",
                email: "sales@sixthstar.in",
              },
              {
                title: "Hyderabad",
                address: `No A-38, Ground Floor JJ Nagar, Naredmet x Roads, Hyderabad-500094`,
                phone: "+91 9383996666",
              },
            ].map((office, i) => (
              <Card
                key={i}
                className="shadow-md p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-600">{office.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
                    <p className="text-sm text-slate-600">{office.address}</p>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-slate-500" />
                      <a href={`tel:${office.phone}`} className="text-sm text-blue-600 hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  )}
                  {office.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-slate-500" />
                      <a href={`mailto:${office.email}`} className="text-sm text-blue-600 hover:underline">
                        {office.email}
                      </a>
                    </div>
                  )}
                  {office.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 text-slate-500" />
                      <a href={office.website} className="text-sm text-blue-600 hover:underline">
                        {office.website}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
