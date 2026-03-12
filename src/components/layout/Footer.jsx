import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
       <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Borderless Tech Hub. All rights reserved.
        <div className="justify-center mt-4 flex gap-6">
        <Link to="/legal" className="text-slate-500 hover:text-white text-sm">Privacy Policy</Link>
        <Link to="/legal" className="text-slate-500 hover:text-white text-sm">Terms of Service</Link>
      </div>
      </footer>
    </div>
  )
}

export default Footer
