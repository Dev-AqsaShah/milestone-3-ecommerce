// Components/Navbar.tsx
import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 w-full bg-gradient-to-r from-blue-800 to-white flex justify-between items-center relative px-10">
      <div className="flex flex-row">
        <Image src="/assets/logo.jpg.jpg" alt="AqsaShah Logo" width={50} height={40} className='rounded-full' />
        <span className="text-black text-xl font-bold p-4 inline-block">Aqsa Shah</span>
      </div>

      <div className="text-blue-900 text-lg font-semibold">
        <ul className="flex h-full cursor-pointer">
          <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
            <Link href="/">Home</Link>
          </li>
          <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
            <Link href="/accessories">Accessories</Link>
          </li>
          <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
            <Link href="/fragrances">Fragrances</Link>
          </li>
          <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
            <Link href="/clothes">Clothes</Link>
          </li>
          <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
            <Link href="/footwear">FootWear</Link>
          </li>
        </ul>
      </div>

      <ul className="h-full flex">
        <li className="h-full w-20 flex items-center justify-center hover:bg-blue-800">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </li>
        <li className="h-full w-20 flex items-center justify-center hover:bg-blue-800">
          <a href="https://github.com/Dev-AqsaShah" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={40} />
          </a>
        </li>
        <li className="h-full w-20 flex items-center justify-center hover:bg-blue-800">
          <a href="https://www.instagram.com/developer_aqsashah" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare size={40} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
