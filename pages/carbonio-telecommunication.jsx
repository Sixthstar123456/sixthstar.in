import Image from "next/image"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/text-area"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Server, Cloud } from "lucide-react"
import Faq5 from "../components/ui/tele-faq"
import Contactus from "../components/ui/tele-contact"


export default function ZextrasPageTele() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
     <section className="bg-blue-200 py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100 text-sm">
          A DIGITAL WORKPLACE
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
          Empower Your Digital Sovereignty Today
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Zextras Carbonio offers a secure, compliant digital workplace designed
          for public sector and regulated industries — fully aligned with Italy’s
          data protection laws.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748078036/carbonio_public_sector_h8irdx.png?height=400&width=500"
            alt="Digital Sovereignty Illustration"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Keep Your Data Safe and Under Your Control</h2>
              <p className="text-gray-600 leading-relaxed">
                Carbonio helps your organization stay in charge of its data while meeting privacy and legal requirements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Everything You Need, in One Place
</h2>
              <p className="text-gray-600 leading-relaxed">
                No more switching between tools. Carbonio brings email, chat, file sharing, and more into one easy-to-use platform.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Where to Run It</h2>
              <p className="text-gray-600 leading-relaxed">
               Use Carbonio on your own servers or in the cloud — wherever works best for you.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
               Work Smarter with All-in-One Tools
              </h2>
              <p className="text-gray-600 leading-relaxed">
             From emails and calendars to video calls and file sharing, Carbonio gives your team all the tools they need to collaborate smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hexagonal Diagrams */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40">
            {/* First Hexagon */}
            <div className="relative">
              <div className="w-64 h-64 bg-teal-800 transform rotate-45 rounded-lg flex items-center justify-center">
                <div className="transform -rotate-45 text-center">
                  <div className="text-orange-500 text-2xl font-bold mb-2">Digital</div>
                  <div className="text-white text-xl font-bold">Sovereignty</div>
                </div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Compliance
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Auditing
              </div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Data Privacy
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Governance
              </div>
            </div>

            {/* Second Hexagon */}
            <div className="relative">
              <div className="w-64 h-64 bg-slate-800 transform rotate-45 rounded-lg flex items-center justify-center">
                <div className="transform -rotate-45 text-center">
                  <div className="text-orange-500 text-2xl font-bold mb-2">Digital</div>
                  <div className="text-white text-xl font-bold">Workplace</div>
                </div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                Video Meeting
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                File Sharing
              </div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                Email
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                Chat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Our network of partners is here to assist you. They will provide you with quality local service from a local
            company in your country that guarantees compliance with all applicable local regulations.
          </p>
        </div>
      </section>

    

      {/* World Map Section */}
      <section className="bg-blue-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748078340/partner-zextras-location_mpekvq.png?height=300&width=600"
              alt="World Map"
              width={600}
              height={300}
              className="mx-auto opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Best of Hands Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Native Support You Can Rely On</h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
           Our trusted partners are here to help with personalized, high-quality service in your language and region — always ensuring full compliance with local regulations.
          </p>

         

         
        </div>
      </section>

      {/* Contact Form */}
    <Contactus/>

     <Faq5/>
     
    </div>
  )
}
