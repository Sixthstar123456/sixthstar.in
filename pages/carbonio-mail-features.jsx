"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Shield, Database, Clock, Users, Server, Cloud } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/Carbonio-mail-features-carousel"
import EmailFeatures from "../components/ui/carbonio-email-feature-tab"
import { Input } from "../components/ui/input"
import Image from "next/image"
import Faq2 from "../components/ui/mail-faq"
import Contactus from "../components/ui/feature-contact-form"


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="h-8 w-8 text-blue-600" />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-xl font-bold">SixthStar Technologies</span>
            </motion.div>
          </div>
          <nav className="hidden md:flex gap-6">
            {["Solutions", "Features", "Resources", "Pricing", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button>Get a Demo</Button>
          </motion.div>
        </div>
      </header> */}

      <main className="flex-1">
        {/* Hero Section */}
<section
  className="relative flex items-center justify-center min-h-screen text-white bg-no-repeat bg-cover bg-center px-4"
  style={{
    backgroundImage: "url('https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747981710/hero_pic_runners_1920x1080_hg7tya.webp')",
  }}
>
  {/* Overlay blur only on mobile */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm md:backdrop-blur-0 z-0" />

  <div className="container relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Carbonio Mail Features</h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-6">
          Secure Email Solutions for Business
        </h2>
        <p className="text-md md:text-lg mb-8 max-w-md mx-auto md:mx-0 text-white">
          Enterprise-grade email server with complete customization and advanced functionality for your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">Get Started</Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hidden md:block"
      >
        {/* Optional image or animation */}
      </motion.div>
    </div>
  </div>

  {/* Floating animated shapes */}
  <motion.div
    className="absolute top-20 right-10 w-20 h-20 rounded-full bg-blue-400/20"
    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
  <motion.div
    className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-blue-300/20"
    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 5, repeat: Infinity }}
  />
</section>





        {/* Features Carousel */}
     <section className="relative bg-blue-50">
  <div className="container relative z-10 py-10">
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Real-Time Backup and Restore</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Keep your email data safe with our comprehensive backup and restore solutions
      </p>
    </motion.div>

    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {[
          {
            title: "Real-time Backup",
            description: "Automatic backup of your mailbox data as changes occur, ensuring no data loss",
            icon: <Clock className="h-8 w-8 text-blue-600" />,
          },
          {
            title: "Disaster Recovery",
            description: "Quick recovery options for emergencies, with customizable recovery points",
            icon: <Cloud className="h-8 w-8 text-blue-600" />,
          },
          {
            title: "Single-Item Restore",
            description: "Selectively restore individual emails or folders without affecting other content",
            icon: <Database className="h-8 w-8 text-blue-600" />,
          },
          {
            title: "Backup Export",
            description: "Export backups in standard formats for archiving or migration purposes",
            icon: <Server className="h-8 w-8 text-blue-600" />,
          },
          {
            title: "Fast Multi-threading",
            description: "Parallel processing for speedy backups even with large mailboxes",
            icon: <Clock className="h-8 w-8 text-blue-600" />,
          },
          {
            title: "Automatic Purge",
            description: "Configure automatic cleanup of old backups based on retention policies",
            icon: <Database className="h-8 w-8 text-blue-600" />,
          },
        ].map((feature, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="relative static mr-2" />
        <CarouselNext className="relative static ml-2" />
      </div>
    </Carousel>
  </div>

  {/* Bottom curve using SVG */}
 
</section>



        {/* Storage Management Tabs */}
      <section className="py-8">
  <div className="container px-4 mx-auto">
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Advanced Storage Management</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Optimize your email storage with our advanced management tools
      </p>
    </motion.div>

    <Tabs defaultValue="object" className="max-w-6xl mx-auto">
      {/* Tabs Navigation */}
      <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 sm:mb-8 mb-4">
        <TabsTrigger value="object">Object Storage</TabsTrigger>
        <TabsTrigger value="centralized">Centralized Storage</TabsTrigger>
        <TabsTrigger value="hierarchical">Hierarchical Storage</TabsTrigger>
      </TabsList>

      {/* Object Storage Content */}
      <TabsContent value="object" className="border rounded-lg p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Object Storage Support</h3>
            <p className="mb-4">
              Store emails as objects in scalable cloud storage systems, optimizing for cost and performance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Compatible with S3, Azure Blob, and other object stores</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Automatic tiering based on access patterns</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Transparent access for users</span>
              </li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747906711/Untitled_design_29_ju0aeb.png?height=300&width=400"
              alt="Object storage illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </TabsContent>

      {/* Centralized Storage Content */}
      <TabsContent value="centralized" className="border rounded-lg p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Centralized Storage</h3>
            <p className="mb-4">
              Manage all email storage from a central location with advanced monitoring and control.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Single dashboard for all storage resources</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Real-time usage analytics and alerts</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Automated storage expansion</span>
              </li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747907077/Untitled_design_31_nt3t69.png?height=300&width=400"
              alt="Centralized storage illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </TabsContent>

      {/* Hierarchical Storage Content */}
      <TabsContent value="hierarchical" className="border rounded-lg p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hierarchical Storage</h3>
            <p className="mb-4">
              Automatically move emails between storage tiers based on age and access patterns.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Cost optimization with multi-tier storage</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Transparent access regardless of storage tier</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">•</div>
                <span>Customizable retention policies</span>
              </li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747907079/Untitled_design_30_mnmxiz.png?height=300&width=400"
              alt="Hierarchical storage illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</section>


        {/* Admin Features Carousel */}
        <section className="relative py-8 overflow-hidden">
  {/* Animated Blue Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 animate-pulse opacity-40 z-0" />

  {/* Decorative Shapes */}
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 animate-spin-slow z-0"></div>
  <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-[40%] blur-2xl opacity-40 animate-pulse z-0"></div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-32 bg-white rounded-t-[100px] z-10"></div>

  <div className="relative z-10 container">
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Specialized Administrative Profiles
      </h2>
      <p className="text-blue-700 max-w-2xl mx-auto">
        Granular control for your organization's email infrastructure
      </p>
    </motion.div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
      {[
        {
          title: "Take Control with Powerful Admin Tools",
          description: "Managing your enterprise email system shouldn’t be complicated. Carbonio Community Edition gives IT admins the flexibility and control they need—without the headache.",
          icon: <Users className="h-8 w-8 text-blue-600 mb-4" />,
          span: "lg:col-span-2"
        },
        {
          title: "Advanced Admin Controls for Enterprise IT Teams",
          description: "Assign specific admin roles to team members so they get just the access they need—nothing more, nothing less. It's role-based access control made easy.",
          icon: <Shield className="h-8 w-8 text-blue-600 mb-4" />,
          span: "lg:col-span-2"
        },
        {
          title: "Role-Based Access Control",
          description: "Want to control who can do what? With Carbonio CE, you can define permissions down to the smallest detail for complete email system security.",
          icon: <Server className="h-8 w-8 text-blue-600 mb-4" />,
          span: "lg:col-span-2"
        },
        {
          title: "Multi-Domain Configuration",
          description: "Running several domains? No problem. Carbonio lets you customize settings for each one, making multi-domain email hosting a breeze.",
          icon: <Database className="h-8 w-8 text-blue-600 mb-4" />,
          span: "lg:col-span-3"
        },
        {
          title: "Storage Quota Control",
          description: "Set user and department-level storage quotas so you always stay in control of disk space—without compromising performance.",
          icon: <Users className="h-8 w-8 text-blue-600 mb-4" />,
          span: "lg:col-span-3"
        },
      ].map((feature, index) => (
        <div key={index} className={`${feature.span} bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out`}>
          {feature.icon}
          <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
          <p className="text-blue-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



        {/* High Availability Section with Animation */}
       <section className="py-8 relative overflow-hidden">
  <div className="container">
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">High Availability</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Ensure your email services are always accessible with our high availability solutions
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {[
            {
              title: "Active/Active Clustering",
              description: "Multiple nodes work together in real time to balance email traffic. If one fails, the others take over instantly—no disruptions, no panic.",
            },
            {
              title: "Automated Failover Plans",
              description: "Scheduled maintenance? No worries. Carbonio automatically reroutes services, ensuring zero downtime while you perform updates behind the scenes.",
            },
            {
              title: "Always-On Monitoring",
              description: "The Heartbeat Monitoring System keeps an eye on every component. If something blinks, the system responds automatically to keep things smooth.",
            },
            {
              title: "Geo-Redundant Clusters",
              description: "Distribute your email services across multiple regions. Even if one site goes down, another kicks in—your data stays safe and accessible.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative h-[400px] w-full">
          <motion.div
            className="absolute top-0 left-0 right-0"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747914153/Untitled_design_22_rcxder.gif?height=400&width=500"
              alt="High availability illustration"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-[-20px] right-[-20px] bg-blue-600 text-white p-4 rounded-lg shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="text-3xl font-bold">99.99%</div>
            <div className="text-sm">Uptime Guarantee</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


        {/* Email Features Tabs */}
     <EmailFeatures/>



        {/* Authentication Section */}
        <section className="py-8">
          <div className="container">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Secure Authentication</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Enterprise-grade security for your email infrastructure</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Two Factor Authentication
                </h3>
                <p className="mb-4">Secure your accounts with additional verification steps beyond passwords.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span>Support for authenticator apps</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span>SMS verification options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span>Hardware security key support</span>
                  </li>
                </ul>
                <Button variant="outline">Learn More</Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  SSO Integration
                </h3>
                <p className="mb-4">Seamlessly integrate with your existing identity providers.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span>Support for SAML 2.0</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span>OAuth 2.0 and OpenID Connect</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span>Integration with major identity providers</span>
                  </li>
                </ul>
                <Button variant="outline">Learn More</Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
      </main>
      <Contactus/>

    </div>
  )
}
