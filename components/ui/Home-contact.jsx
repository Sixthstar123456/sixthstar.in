import React from 'react'
import { Input } from './input'
import Image from 'next/image'
import { Button } from './button'

export default function Contactus() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-900 text-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[400px]">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747821091/interfaccia_carbonio_CE_lmxi8o.webp?height=400&width=400"
                  alt="Carbonio Community Edition"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/30 rounded-full filter blur-2xl"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">
              Get Carbonio Community Edition
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium block mb-1"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium block mb-1"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium block mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  placeholder="+91 234 567 8900"
                />
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium block mb-1">
                  Company
                </label>
                <Input
                  id="company"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="companyUrl" className="text-sm font-medium block mb-1">
                  Company URL
                </label>
                <Input
                  id="companyUrl"
                  type="url"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  placeholder="https://acme.com"
                />
              </div>

              <div>
                <label htmlFor="country" className="text-sm font-medium block mb-1">
                  Country
                </label>
                <Input
                  id="country"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  placeholder="United States"
                />
              </div>

              <div>
                <label htmlFor="membersCount" className="text-sm font-medium block mb-1">
                  Members Count
                </label>
                <select
                  id="membersCount"
                  className="w-full p-2 rounded-md bg-white/20 border border-white/20 text-white placeholder:text-white/60"
                >
                  <option className ='text-black' value="">Select</option>
                  <option className ='text-black' value="0-10">0 - 10</option>
                  <option className ='text-black' value="10-100">10 - 100</option>
                  <option className ='text-black' value="100-500">100 - 500</option>
                  <option className ='text-black' value="500+">500+</option>
                </select>
              </div>

              <div className="pt-2">
                <Button className="w-full bg-white text-black hover:bg-black hover:text-white">
                  Get a Quote
                </Button>
              </div>
              <p className="text-xs text-white/70 text-center">
                By submitting this form, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
