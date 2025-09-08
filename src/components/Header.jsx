import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
          NutriWell
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#plans" className="hover:text-green-600">Plans</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="w-5 h-5 text-green-600 hover:text-green-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="w-5 h-5 text-green-600 hover:text-green-800" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

