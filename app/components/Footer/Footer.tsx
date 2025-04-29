import { Link } from '@remix-run/react';
import {AiFillYoutube} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {CgFacebook} from 'react-icons/cg';
import {FaInstagram} from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-[#F6F6F5] w-screen text-sm text-[#1B1F23] py-10 px-6 h-auto">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div>
          <h3 className="font-bold mb-2 md:text-[24px] text-[18px]">
            Be a Part of Our Journey
          </h3>
          <p className="mb-4 text-[16px]">
            Welcome to UNCMFRT. Sign up for exclusive content and we’ll send you
            10% off.
          </p>
          <div className="flex mt-10 h[50px] flex-row  content-center flex-wrap items-center">
            <input
              type="email"
              placeholder="Email Address"
              className=" p-2 border border-gray-300 rounded-l h-[50px] "
            />
            <button className="p-2 h-[50px] bg-black text-white rounded-xl w-[136px] ">
              Subscribe
            </button>
          </div>
        </div>
        <div className="links flex flex-row gap-8">
          <div>
            <h4 className="font-semibold mb-2 text-[18px]">About Us</h4>
            <ul className="space-y-1 text-[16px]">
              <li>Blog</li>
              <li>Product Reviews</li>
              <li>Our Story</li>
              <li>Delivery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-[18px]">Support</h4>
            <ul className="space-y-1 text-[16px]">
              <li>Order Status</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-[18px]">Legal</h4>
            <ul className="space-y-1 text-[16px]">
              <li>Privacy Policy</li>
              <li>Accessibility</li>
              <li>Terms of Service</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-[18px]">Contact Us</h4>
          <p className="mb-2 text-[16px]">Let Us Help You</p>
          <p className="font-bold mb-4 text-[24px]!">(888) 860-0572</p>
          <p className="mb-1 mt-5! font-medium text-[18px] ">Connect With Us</p>
          <div className="flex space-x-2 gap-5">
            <FaInstagram size={25} />
            <BsTwitter size={25} />
            <CgFacebook size={25} />
            <AiFillYoutube size={25} />
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-8 text-center flex flex-row flex-wrap gap-1 md:justify-between justify-center">
        <p>© uncmfrt.com. All rights reserved.</p>
        <p className="mt-1">Made with ❤️  by <Link className='text-gray-500!' to="https://github.com/barbiwonderland/">Barbara Bottazzi</Link>  for Arctic Grey Challenge</p>
      </div>
    </footer>
  );
}
