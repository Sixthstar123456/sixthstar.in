import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Shield, Clock, Database, Users, Zap, Lock, BarChart, Server } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"
import Faq4 from "../components/ui/high-availability-faq"
import Contactus from "../components/ui/highavailability-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-900/20 dark:to-blue-800/20
">
        <div className="container flex flex-col lg:flex-row items-center py-20 gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block rounded-full  bg-blue-200  px-3 py-1 text-sm text-blue-800 dark:text-purple-300">
              Enterprise Email Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              High Availability
 <br />
             
            </h1>
            <p className="text-lg text-white text-muted-foreground max-w-[600px]">
              High Availability (HA) is the ability of a system to operate
continuously and error-free over a period of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button size="lg" className="gap-2 bg-black hover:bg-black">
                Connect With us <ChevronRight className="h-4 w-4" />
              </Button>
            
            </div>
            
          </div>
          <div className="flex-1 relative">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748499958/carbonio_telco_operators_cxxjbh.png?height=400&width=500"
                alt="NexusMail Dashboard Preview"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Comprehensive Email Management</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Everything you need for professional email operations in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle>Advanced Security</CardTitle>
              <CardDescription>Multi-layered protection against threats and vulnerabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-purple-600" />
                  </div>
                  <span>AI-powered threat detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-purple-600" />
                  </div>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-purple-600" />
                  </div>
                  <span>Advanced phishing protection</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1">
                Learn more <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-cyan-600 mb-2" />
              <CardTitle>Intelligent Backup</CardTitle>
              <CardDescription>Never lose critical communications with smart recovery options</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span>Continuous point-in-time backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span>Granular recovery options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span>Cross-region redundancy</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1">
                Learn more <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-10 w-10 text-pink-600 mb-2" />
              <CardTitle>Smart Storage</CardTitle>
              <CardDescription>Optimize your email storage with intelligent management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-pink-600" />
                  </div>
                  <span>Automatic archiving policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-pink-600" />
                  </div>
                  <span>Deduplication technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-pink-600" />
                  </div>
                  <span>Tiered storage optimization</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1">
                Learn more <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="py-8 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300">
                Enterprise Reliability
              </div>
              <h2 className="text-3xl font-bold">IT Catastrophe Recovery Versus High Availability?
</h2>
        

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Server className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-xl text-justify">Almost always on is the so-called “five-nine reliability system.” The backup system or backup component takes over if a vital IT infrastructure fails but is still maintained by a high-availability architecture</h3>
                 
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-xl text-justify">Users and programmes can access the same data that was accessible prior to the interruption and continue working uninterrupted as a result. </h3>
                 
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <BarChart className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-xl text-justify"> IT Disaster Recovery describes the techniques, tools, and policies that IT organisations should use to restore vital IT services and components following a disaster. A data centre being destroyed as a result of a significant earthquake is an example of a cyber disaster.</h3>
                  
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute right-0 bottom-0 h-[350px] w-[350px] bg-gradient-to-br from-purple-200/50 to-cyan-200/50 rounded-full blur-3xl"></div>
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748495918/Untitled_design_47_m6savv.png?height=400&width=500"
                  alt="Reliability Infrastructure"
                  width={500}
                  height={400}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20 container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Infrastructure with High Availability Components
</h2>
       
        </div>

        <Tabs defaultValue="composition" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-[600px] grid-cols-3">
              <TabsTrigger value="composition">Redundancy</TabsTrigger>
              <TabsTrigger value="organization">Replication</TabsTrigger>
              <TabsTrigger value="administration">Malfunction</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="composition" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Redundancy</h3>
                <p className="text-muted-foreground">
                Hardware redundancy, software and application redundancy, and data redundancy are all elements of high-availability IT infrastructure. 
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Hardware Redundancy</p>
                      <p className="text-sm text-muted-foreground">Involves duplicating critical physical components like servers, power supplies, and network devices to ensure system uptime in case of hardware failure.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Software and Application Redundancy</p>
                      <p className="text-sm text-muted-foreground">
                         Ensures that software services and applications are replicated across multiple systems, allowing uninterrupted operation even if one instance fails.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Data Redundancy</p>
                      <p className="text-sm text-muted-foreground">
                        Involves storing copies of data across multiple locations or systems, ensuring data availability and integrity in the event of corruption or loss.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="gap-1">
                  Explore Composition Features <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748588372/Untitled_500_x_300_px_500_x_500_px_1_jqczvu.png?height=400&width=500"
                  alt="Email Composition Interface"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="organization" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Replication</h3>
                <p className="text-muted-foreground">
                 High availability can only be attained by data replication.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium">Cluster Node Synchronization
</p>
                      <p className="text-sm text-muted-foreground">
                        High availability relies on data replication between identical cluster nodes that communicate and share information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium"> Cross-Cluster Data Replication</p>
                      <p className="text-sm text-muted-foreground">
                       Data can be replicated between clusters to ensure business continuity during data center failures.


                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium">Off-Site Failover Infrastructure</p>
                      <p className="text-sm text-muted-foreground">
                        Off-site failover infrastructure is a recommended practice for high availability and disaster recovery.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="gap-1">
                  Explore Organization Features <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748588371/Untitled_500_x_300_px_500_x_500_px_2_bo7ajb.png?height=400&width=500"
                  alt="Email Organization Interface"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="administration" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Malfunction</h3>
                <p className="text-muted-foreground">
                  In contrast to fault tolerance, which aims for zero downtime, high availability has a lower downtime target.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">Downtime Target</p>
                      <p className="text-sm text-muted-foreground">
                        High availability allows minimal downtime, while fault tolerance aims for zero downtime.


                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">Uptime Expectation</p>
                      <p className="text-sm text-muted-foreground">
                        A high-availability system targeting 99.999% uptime expects only 4.61 minutes of downtime per year.


                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium"> Performance Priority</p>
                      <p className="text-sm text-muted-foreground">
                        High availability focuses on uptime and availability, while fault tolerance does not prioritize performance quality.


                      </p>
                    </div>
                  </div>
                </div>

                <Button className="gap-1">
                  Explore Administration Features <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748588370/Untitled_500_x_300_px_500_x_500_px_3_b98n93.png?height=400&width=500"
                  alt="Email Administration Dashboard"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Authentication Section */}
      <section className="py-8 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[400px] w-full">
                <div className="absolute left-0 bottom-0 h-[350px] w-[350px] bg-gradient-to-br from-purple-200/50 to-cyan-200/50 rounded-full blur-3xl"></div>
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748587111/Untitled_500_x_300_px_500_x_500_px_brbnzw.png?height=300&width=500"
                  alt="Secure Authentication"
                  width={500}
                  height={400}
                  className="object-contain relative z-10"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                Enterprise Security
              </div>
              <h2 className="text-3xl font-bold">High Availability Advantages
</h2>
             

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Lock className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Decreased downtime​
</CardTitle>
                  </CardHeader>
                  
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Users className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">SLA within 1%​
</CardTitle>
                  </CardHeader>
                
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Assurance of service continuity
</CardTitle>
                  </CardHeader>
                 
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <BarChart className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Outstanding performance
</CardTitle>
                  </CardHeader>
                 
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 container">
        <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 p-8 md:p-12 lg:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ready to transform your email infrastructure?</h2>
              <p className="text-white/80">
                Join thousands of organizations that trust NexusMail for their critical communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  Contect us <ChevronRight className="h-4 w-4" />
                </Button>
              
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-white/80">Organizations</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">99.99%</div>
                  <div className="text-white/80">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80">Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">5M+</div>
                  <div className="text-white/80">Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<Contactus/>
<Faq4/>      
    </div>
  )
}
