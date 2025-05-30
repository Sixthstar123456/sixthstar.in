'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false) // close menu after click
  }

  return (
    <header className="sticky top-0 z-40 bg-white text-black shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748512211/Untitled_180_x_60_px_ivdyn0.png"
            alt="Zextras Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          <Link href="/carbonio-mail-features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Carbonio Mail Features
          </Link>
          <Link href="/carbonio-community-edition" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Carbonio Community Edition
          </Link>
          <Link href="/carbonio-telecommunication" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Carbonio Telecommunication
          </Link>
          <Link href="/high-availability" className="text-sm font-medium hover:text-blue-600 transition-colors">
            High Availability
          </Link>
          <Link href="https://zextras.com/zextras-and-sixthstartech" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Partners
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contactus" passHref>
            <Button className="bg-blue-500 hover:bg-blue-600">Contact us</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4 z-50">
          <Link href="/carbonio-mail-features" onClick={handleLinkClick} className="block text-sm font-medium hover:text-blue-600">
            Carbonio Mail Features
          </Link>
          <Link href="/carbonio-community-edition" onClick={handleLinkClick} className="block text-sm font-medium hover:text-blue-600">
            Carbonio Community Edition
          </Link>
          <Link href="/carbonio-telecommunication" onClick={handleLinkClick} className="block text-sm font-medium hover:text-blue-600">
            Carbonio TeleCommunication
          </Link>
          <Link href="/high-availability" onClick={handleLinkClick} className="block text-sm font-medium hover:text-blue-600">
            High Availability
          </Link>
          <Link href="https://zextras.com/zextras-and-sixthstartech" onClick={handleLinkClick} className="block text-sm font-medium hover:text-blue-600">
            Partners
          </Link>
          <Link href="/contactus" onClick={handleLinkClick}>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-4" >
              Contact us
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
