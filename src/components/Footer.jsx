import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#E8621A] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            Paw Finder
          </h1>
          <p className="mt-4 max-w-xl">
            Where lonely paws find loving homes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white mb-3 tracking-wide">SOCIAL LINKS</h3>
            <div className="flex items-center gap-1">
                <a href=""><Image src={'/instagram.png'} alt="instagram" width={40} height={40} className="cursor-pointer" ></Image></a>
                <a href=""><Image src={'/youtube.png'} alt="instagram" width={40} height={40} className="cursor-pointer" ></Image></a>
                <a href=""> <Image src={'/twitter.png'} alt="instagram" width={40} height={40} className="cursor-pointer" ></Image></a>
            </div>
             
          </div>
          <div>
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">All Pets</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>+17759865200</li>
              <li>info@pawfinder.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 PawFinder. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
           Made with ❤️ for every pet
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;