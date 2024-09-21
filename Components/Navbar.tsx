import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="h-16 w-full bg-gradient-to-r from-blue-800 to-white flex justify-between items-center relative px-10">
        <div className="flex flex-row">
          <Image src="/assets/logo.jpg" alt="AqsaShah Logo" width={60} height={60} className='rounded-full' />
          <span className="text-black text-xl font-bold p-4 inline-block">Aqsa Shah</span>
        </div> 

        <div className="text-blue-900 text-lg font-semibold">
          <ul className="flex h-full cursor-pointer">
            <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
              <Link href="/Accessories">
                <a>Accessories</a>
              </Link>
            </li>
            <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
              <Link href="/Fragrances">
                <a>Fragrances</a>
              </Link>
            </li>
            <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
              <Link href="/Clothes">
                <a>Clothes</a>
              </Link>
            </li>
            <li className="h-full w-32 flex items-center justify-center hover:text-white duration-500">
              <Link href="/Shoes">
                <a>FootWear</a>
              </Link>
            </li>
          </ul>
        </div>

        <ul className="h-full flex">
          <li className="h-full w-19 flex items-center justify-center hover:bg-blue-800">
            <a href="https://www.linkedin.com/feed/"><FaLinkedin size={40} /></a>
          </li>
          <li className="h-full w-19 flex items-center justify-center hover:bg-blue-800">
            <a href="https://github.com/Dev-AqsaShah"><FaGithubSquare size={40} /></a>
          </li>
          <li className="h-full w-19 flex items-center justify-center hover:bg-blue-800">
            <a href="https://www.instagram.com/developer_aqsashah"><FaInstagramSquare size={40} /></a>
          </li>
        </ul>
      </nav>
    </>
  );
}
