import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,  } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-500 to-blue-900 text-white py-10 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <div className="flex gap-2 mb-4">
            {/* Replace src with your real cert URLs */}
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516340/iso-27001_nenayk_nz4c7a.webp" alt="Cert 1" width={40} height={40} />
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516342/rqc_vqtye4_zxkbe8.webp" alt="Cert 2" width={40} height={40} />
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516341/iso-20000_obiguc_xpsmzb.webp" alt="Cert 3" width={40} height={40} />
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516341/ukasl_ae4pum_kajkcb.webp" alt="Cert 4" width={40} height={40} />
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746516340/iso-27001_nenayk_nz4c7a.webp" alt="Cert 4" width={40} height={40} />

          </div>
       <div className="space-y-2 text-sm text-white">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faEnvelope} className="text-white w-4 h-4" />
        <p>sales@sixthstar.in</p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faEnvelope} className="text-white w-4 h-4" />
        <p>support@sixthstar.in</p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPhone} className="text-white w-4 h-4" />
        <p>9176627399</p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPhone} className="text-white w-4 h-4" />
        <p>9176637399</p>
      </div>
    </div>

          <div className="flex gap-3 mt-4">
            {/* Replace # with real social links */}
            <Link href="#"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748514249/Untitled_design_55_neiygn.png" alt="Facebook" width={24} height={24} /></Link>
            <Link href="#"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748514460/Untitled_design_56_bh3rbh.png" alt="X" width={24} height={24} /></Link>
            <Link href="#"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748514462/Untitled_design_57_q8fwtw.png" alt="Instagram" width={24} height={24} /></Link>
            <Link href="#"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748514532/Untitled_design_59_a9rbzb.png" alt="YouTube" width={24} height={24} /></Link>
            <Link href="#"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748514662/Untitled_design_61_dqphvj.png" alt="LinkedIn" width={24} height={24} /></Link>
          </div>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Corporate Office:</h3>
          <p>
            Sixth Star Technologies, 1st Floor, No.3 & 4, Siri Towers, Fourrts Ave,
            Annani Indira Nagar, Thoraipakkam, Chennai, Tamilnadu, India – 600097
          </p>
          <h4 className="font-semibold mt-4">Germany:</h4>
          <p>Sixth Star Technologies, Boetzinger Straße 60, 79111 Freiburg, Germany</p>
        </div>

        {/* Hyderabad */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Hyderabad:</h3>
          <p>
            Sixth Star Technologies, Plot No A-38, Ground Floor JJ Nagar, Naredmet x Roads, Hyderabad - 500094 <br />
            PH: 9383996666
          </p>

          <h4 className="font-semibold mt-4">Malaysia:</h4>
          <p>
            Sixth Star Technologies, C4-2-39, Jalan 1/152, Taman OUG, Parklane, 58200, Kuala Lumpur, Malaysia.
          </p>
        </div>

        {/* Company + Hosting */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/why-sixthstar">Why Sixthstar</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Hosting</h3>
          <ul className="space-y-1">
            <li><Link href="/carbonio-mail-features">Carbonio Mail Features</Link></li>
            <li><Link href="/carbonio-community-edition">Carbonio Community Edition</Link></li>
            <li><Link href="/high-availability">High Availability</Link></li>
                <li><Link href="/carbonio-telecommunication">Carbonio Telecommunication</Link></li>
            
          </ul>
        </div>

        {/* Servers + Spam Filter + Blogs */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Servers</h3>
          <ul className="space-y-1">
            <li><Link href="https://sixthstartech.com/servers/dedicated-server">Dedicated Server</Link></li>
            <li><Link href="https://sixthstartech.com/servers/vps-server-hosting">VPS Server</Link></li>
            <li><Link href="https://sixthstartech.com/servers/cloud-hosting-services">Cloud Server</Link></li>
            <li><Link href="https://sixthstartech.com/servers/web-hosting">Shared Server</Link></li>
          </ul>

        

          <h3 className="text-lg font-semibold mt-4 mb-2">Insights</h3>
          <ul>
            <li><Link href="#">Blogs</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-white/20 mt-10 pt-4 text-xs text-gray-300">
        © Copyright 2025 | All Rights Reserved by Sixthstar tech
      </div>
    </footer>
  )
}
