import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
            <nav>
              <ul className="flex space-x-3 m-1">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  