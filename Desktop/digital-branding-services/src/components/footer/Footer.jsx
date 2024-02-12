// components/Footer.tsx
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h5 className="text-xl font-bold mb-2">Company Name</h5>
            <p className="text-gray-400">
              Empowering your digital presence with innovative solutions.
            </p>
            <div className="mt-4">
              {/* Social Icons Example */}
              <a href="#" className="mr-2"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></a>
              <a href="#" className="mr-2"><Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} /></a>
              <a href="#" className="mr-2"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
            <ul className="text-gray-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xl font-bold mb-2">Our Services</h5>
            <ul className="text-gray-400">
              <li><a href="#">Social Media Management</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Website Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h5 className="text-xl font-bold mb-2">Newsletter</h5>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form>
              <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full rounded-md text-black" />
              <button type="submit" className="mt-2 w-full bg-blue-600 py-2 rounded-md">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-8">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
