import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Tala Prattoy</h2>
          <p className="text-sm text-gray-400">
            Tala Barowari Durgotsab Committee<br />
            Tala Park Ave, Kolkata - 700037<br />
            West Bengal, India
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Follow us</h3>
          <div className="flex space-x-4 text-red-500 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
        <div>
          <h4 className="text-white font-semibold mb-2">Popular</h4>
          <ul className="space-y-1">
            <li><a href="#">Durga Puja</a></li>
            <li><a href="#">Tala Park</a></li>
            <li><a href="#">Theme</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Media Zone</h4>
          <ul className="space-y-1">
            <li><a href="#">Gallery</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Discover</h4>
          <ul className="space-y-1">
            <li><a href="#">About</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Awards</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li><a href="#">Sponsorship</a></li>
            <li><a href="#">Collaborate</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Tala Prattoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
