import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className=" mx-auto py-4 px-6 flex justify-between items-center h-20">
        <div className="flex items-center">
          <Link href="/" className='text-xl font-extralight'>
          🌸 Frame Craft
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/"  className="text-sm font-medium">
            Home
          </Link>
          <Link href="/about"  className="text-sm font-medium">
            About
          </Link>
          <Link href="/contact"  className="text-sm font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
