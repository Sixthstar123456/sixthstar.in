import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, ArrowRight, Mail, Calendar, Video, Smartphone, FileText, Edit2 } from "lucide-react"
import Faq3 from "../components/ui/community-faq"
import IntegrationsShowcaseCommunity from "../components/ui/Community-features"
import CommunityEditionForm from "../components/ui/community-form"
import TableComparison from "../components/ui/community-table"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
<div className="container grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-sm text-blue-900">
              <span className="font-medium">Zextras</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Carbonio Community Edition for Enterprises
            </h1>
            <p className="text-xl text-blue-100">
              Secure, scalable, and open-source email & collaboration—hosted on your infrastructure for full control and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-blue-700 hover:text-white">
               Contact us
              </Button>
            </div>
          </div>
        <div className="relative w-full h-[400px] rounded-lg bg-[url(https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747895849/exagon_1_ph8h4c.png)] bg-cover bg-center p-6 shadow-xl md:justify-self-end">
  <Image
    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746618356/Untitled_1000_x_1000_px_7_clwqhe.png"
    alt="Digital Workplace Illustration"
    width={500}
    height={400}
    className="object-contain w-full h-full"
    priority
  />
</div>
        </div>
      </section>

      {/* Integrations Section */}
   <IntegrationsShowcaseCommunity/>

      {/* Sign Up Form Section */}
    <TableComparison/>

      {/* Features Section */}
       <section className="py-20 bg-gray-50">
               <div className="container">
                 <div className="text-center max-w-2xl mx-auto mb-12">
                   <h2 className="text-3xl font-bold mb-4">
                     A Complete Platform with All the Features You Need
                   </h2>
                   <p className="text-gray-600">
                     Everything you need for seamless team collaboration in one place
                   </p>
                 </div>
     
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <PlatformFeatureCard
                     icon={<Mail />}
                     title="Advanced E-mail"
                     description="Professional email management for business communication with advanced features and security."
                     image="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748492870/Untitled_design_40_g5sp3l.png?height=100&width=200"
                   />
                   <PlatformFeatureCard
                     icon={<Calendar />}
                     title="Shared Calendars"
                     description="Easily schedule meetings and share availability with team members for better coordination."
                     image="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748493160/Untitled_design_41_n3xqvu.png?height=200&width=300"
                   />
                   <PlatformFeatureCard
                     icon={<Video />}
                     title="Video Chats"
                     description="High-quality video conferencing with screen sharing and recording capabilities."
                     image="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748493749/Untitled_design_42_d7gotd.png?height=200&width=300"
                   />
                   <PlatformFeatureCard
                     icon={<Smartphone />}
                     title="Dedicated Mobile Applications"
                     description="Stay connected on the go with our mobile apps for iOS and Android devices."
                     image="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748494412/Untitled_design_43_s90juv.png?height=200&width=300"
                   />
                   <PlatformFeatureCard
                     icon={<FileText />}
                     title="File Management"
                     description="Secure file storage and sharing with version control and access permissions."
                     image="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748494652/Untitled_design_44_wyxmrv.png?height=200&width=300"
                   />
                   <PlatformFeatureCard
                     icon={<Edit2 />}
                     title="Collaborative Editing"
                     description="Edit documents simultaneously with team members in real-time for efficient collaboration."
                     image="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748494620/Untitled_design_45_ii8g8e.png?height=200&width=300"
                   />
                 </div>
               </div>
             </section>

      {/* Community Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Carbonio Community Edition for Your Enterprise?</h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl font-bold">
                    C
                  </div>
                ),
                title: "Open-Source & Fully Private",
                description:
                  "Carbonio Community Edition is 100% open-source, giving enterprises full control, transparency, and the ability to customize based on internal IT needs.",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl font-bold">
                    J
                  </div>
                ),
                title: "Deploy & Use Instantly",
                description: "Ready to go right out of the box with native Linux packages—just install and start using all features without extra setup.",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl font-bold">
                    E
                  </div>
                ),
                title: "All-in-One Collaboration Suite",
                description: "From secure email and calendars to video calls, file sharing, and real-time document editing—Carbonio CE supports the hybrid enterprise workspace.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-blue-700 rounded-xl p-8 hover:bg-blue-800 transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 mb-6">{item.description}</p>
               
              </div>
            ))}
          </div>

        </div>
      </section>

<section className="py-12   bg-black text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 pb-4">Know more about Carbonio Community Edition 
</h2>
              
              <Button className="bg-white  text-blue-900 hover:bg-white/90 ">
                 Connect with us
                </Button>
            </div>
          </div>
        </section>
      {/* Newsletter Section */}
      
<CommunityEditionForm/>
      {/* Footer */}
      <Faq3/>



      
    </div>
  )
}


function PlatformFeatureCard({ icon, title, description, image }) {
  return (
    <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-[400px] bg-gray-100 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-orange-500">{icon}</div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
