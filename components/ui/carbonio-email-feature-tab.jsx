"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./button"

export default function EmailFeatures() {
  const [activeTab, setActiveTab] = useState("compose")

  const tabData = [
    {
      value: "compose",
      title: "Advanced Composition",
      icon: "✉️",
      description: "Create professional emails with our advanced composition tools.",
      features: [
        "Rich text formatting with customizable templates",
        "Attachment preview and inline image support",
        "Drag and drop capabilities for files and content",
        "Scheduled sending with timezone awareness",
      ],
      imgAlt: "Email composition illustration",
      imgSrc: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747980811/Untitled_design_32_vfs08k.png",
    },
    {
      value: "manage",
      title: "Email Management",
      icon: "📂",
      description: "Efficiently manage your inbox with powerful organization tools.",
      features: [
        "Smart folders with customizable rules",
        "Advanced search with filters and saved searches",
        "Conversation view with threading options",
        "Bulk actions for efficient inbox management",
      ],
      imgAlt: "Email management illustration",
      imgSrc: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747981054/Untitled_design_33_pgot0z.png",
    },
    {
      value: "organize",
      title: "Email Organization",
      icon: "📋",
      description: "Keep your communications organized with powerful categorization tools.",
      features: [
        "Custom labels and tags with color coding",
        "Priority inbox with AI-powered importance detection",
        "Automated sorting based on custom rules",
        "Folder templates for consistent organization",
      ],
      imgAlt: "Email organization illustration",
      imgSrc: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747981186/Untitled_design_34_xkxwsd.png",
    },
    {
      value: "security",
      title: "Email Security",
      icon: "🔒",
      description: "Protect your communications with enterprise-grade security features.",
      features: [
        "End-to-end encryption for sensitive communications",
        "Advanced spam and phishing protection",
        "Data loss prevention with content scanning",
        "Multi-factor authentication options",
      ],
      imgAlt: "Email security illustration",
      imgSrc: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747981259/Untitled_design_35_wphgzt.png",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Comprehensive Email Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for professional email communications.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabData.map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`relative px-6 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-medium">{tab.title}</span>
              {activeTab === tab.value && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-2 h-2 bg-blue-600 rotate-45"
                  layoutId="tabIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
          {tabData.map((tab) => (
            <motion.div
              key={tab.value}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: activeTab === tab.value ? 1 : 0,
                x: activeTab === tab.value ? 0 : 20,
                position: activeTab === tab.value ? "relative" : "absolute",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`w-full ${activeTab !== tab.value ? "pointer-events-none" : ""}`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Text Section */}
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-6">
                    <span className="text-3xl">{tab.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{tab.title}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{tab.description}</p>
                  <div className="space-y-4">
                    {tab.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="mr-3 mt-1 flex-shrink-0 bg-blue-500 rounded-full p-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                  <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 md:p-12 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-blue-200 rounded-lg rotate-3"></div>
                    <img
                      src={tab.imgSrc}
                      alt={tab.imgAlt}
                      className="relative rounded-lg shadow-lg w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
