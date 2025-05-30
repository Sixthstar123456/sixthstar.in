"use client"

import { useState } from "react"
import { Link2, ShoppingBag, CreditCard, Receipt } from "lucide-react"
import { motion } from "framer-motion"


export default function IntegrationsShowcase() {
  const [activeIntegration, setActiveIntegration] = useState("books")

  const integrationMedia = {
    books:
      "https://res.cloudinary.com/dwyn5jgh3/video/upload/v1747823067/email-management-ce_dx9mmb.mp4",
    checkout: "https://res.cloudinary.com/dwyn5jgh3/video/upload/v1747824486/calendaring-ce_jq2t8k.mp4",
    commerce: "https://res.cloudinary.com/dwyn5jgh3/video/upload/v1747824484/chats-meeting-ce_njqydv.mp4",
    website: "https://res.cloudinary.com/dwyn5jgh3/video/upload/v1747824482/collaborative-editing-ce_qodrkf.mp4",
  }

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-screen-1xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Works seamlessly
          <br />
          with business apps
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left side integrations */}
          <div className="space-y-16">
            <div
              className={`flex items-start space-x-4 cursor-pointer transition-opacity ${
                activeIntegration === "books"
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
              onClick={() => setActiveIntegration("books")}
            >
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Receipt className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Take Control of Your Inbox, Effortlessly</h3>
                <p className="text-gray-600">
                  We’ve reimagined email for the modern user—fast, clean, and intuitive.
Switch between multiple profiles, collaborate through shared accounts and folders.

                </p>
                {activeIntegration === "books" && (
                  <motion.div
                    layoutId="underline"
                    className="h-1 w-24 mt-4 bg-blue-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </div>

            <div
              className={`flex items-start space-x-4 cursor-pointer transition-opacity ${
                activeIntegration === "commerce"
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
              onClick={() => setActiveIntegration("commerce")}
            >
              <div className="bg-white p-4 rounded-full shadow-sm">
                <ShoppingBag className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Smarter Scheduling, Seamless Coordination</h3>
                <p className="text-gray-600">
                 Make the most of your time with a calendar that works the way you do.
From shared calendars to smooth integration with both physical and virtual meeting spaces.

                </p>
                {activeIntegration === "commerce" && (
                  <motion.div
                    layoutId="underline"
                    className="h-1 w-24 mt-4 bg-green-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Center video */}
          <div className="w-full">
            <div className="bg-blue-400 rounded-xl p-3 md:p-6 shadow-lg aspect-[16/9] flex items-center justify-center">
              <video
                key={integrationMedia[activeIntegration]}
                src={integrationMedia[activeIntegration]}
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right side integrations */}
          <div className="space-y-16">
            <div
              className={`flex items-start space-x-4 cursor-pointer transition-opacity ${
                activeIntegration === "checkout"
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
              onClick={() => setActiveIntegration("checkout")}
            >
              <div className="bg-white p-4 rounded-full shadow-sm">
                <CreditCard className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Meet. Chat. Share. All in One Place.</h3>
                <p className="text-gray-600">
                 Say goodbye to juggling apps—your communication hub is here.
Jump into video calls, ping your team, share your screen, or loop in external guests with zero hassle.

                </p>
                {activeIntegration === "checkout" && (
                  <motion.div
                    layoutId="underline"
                    className="h-1 w-24 mt-4 bg-gray-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </div>

            <div
              className={`flex items-start space-x-4 cursor-pointer transition-opacity ${
                activeIntegration === "website"
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
              onClick={() => setActiveIntegration("website")}
            >
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Link2 className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Collaborative editing: </h3>
                <p className="text-gray-600">
                  Work together simultaneously and edit documents.
Integrated word processor, spreadsheet, and presentations (supporting Microsoft formats and ODF).

                </p>
                {activeIntegration === "website" && (
                  <motion.div
                    layoutId="underline"
                    className="h-1 w-24 mt-4 bg-gray-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
