"use client"

import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="hidden md:flex fixed w-screen h-30 flex-row items-center px-12 justify-between z-50 from-black/20 to-transparent bg-gradient-to-b text-white">
                <div className="flex flex-row gap-2">
                    <div className="relative w-16 h-16 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm shadow-md border border-black/10">
                        <Image
                            src="https://www.finiteloop.co.in/_next/image?url=%2Fimages%2Fflc-logo-crop.png&w=1920&q=75"
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="bg-black/40 rounded-2xl w-64 h-16 flex justify-center items-center text-2xl backdrop-blur-sm shadow-md border border-black/10 font-serif font-extrabold">
                        Finite Loop Club
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-120 h-16 flex flex-row justify-between items-center px-2 gap-2">
                        <div className="bg-black/10 hover:bg-black/40 rounded-2xl w-full h-12 justify-center items-center flex backdrop-blur-sm shadow-md border border-black/10 cursor-pointer">
                            Team
                        </div>
                        <div className="bg-black/10 hover:bg-black/40 rounded-2xl w-full h-12 justify-center items-center flex backdrop-blur-sm shadow-md border border-black/10  cursor-pointer">
                            Events
                        </div>
                        <div className="bg-black/10 hover:bg-black/40 rounded-2xl w-full h-12 justify-center items-center flex backdrop-blur-sm shadow-md border border-black/10  cursor-pointer">
                            Leaderboard
                        </div>
                    </div>
                    <div className="relative group" tabIndex={0}>
                        <div className="bg-white/40 hover:bg-white/60 rounded-full w-12 h-12 flex justify-center items-center backdrop-blur-sm shadow-md border border-black/10 cursor-pointer">
                            <AiOutlineUser size={28} className="text-white" />
                        </div>
                        <div className="absolute flex flex-row right-0 mt-4 w-100 h-56 bg-black/20 backdrop-blur-2xl rounded-xl shadow-lg p-4 text-white text-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-200 z-50">
                            <div className="flex justify-center items-center w-1/2">
                                <div className="bg-white/40 hover:bg-white/60 rounded-full w-32 h-32 flex justify-center items-center backdrop-blur-sm shadow-md border border-black/10 cursor-pointer">
                                    <AiOutlineUser size={48} className="text-white" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center flex-col w-1/2 px-4">
                                <div className="bg-black/40 rounded-2xl h-16 w-full flex justify-center items-center text-white font-medium transition-all duration-200 cursor-pointer border border-black/30 shadow-2xl">
                                    Username
                                </div>
                                <div className="bg-white/40 hover:bg-white/60 rounded-full h-12 w-full flex justify-center items-center text-black font-medium transition-all duration-200 cursor-pointer border border-white/30 shadow-2xl mt-4">
                                    Join Us
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden fixed w-full h-20 flex flex-row items-center px-4 justify-between z-50 pt-8 from-black/30 to-transparent bg-gradient-to-b text-white">
                <div className="flex flex-row gap-2 items-center">
                    <div className="relative w-16 h-16 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm shadow-md border border-black/10">
                        <Image
                            src="https://www.finiteloop.co.in/_next/image?url=%2Fimages%2Fflc-logo-crop.png&w=1920&q=75"
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
                <div className="bg-black/40 rounded-2xl px-4 h-16 flex justify-center items-center text-2xl font-extrabold font-serif backdrop-blur-sm shadow-md border border-black/10">
                    Finite Loop Club
                </div>

                {/* Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="bg-black/40 hover:bg-black/50 rounded-full w-16 h-16 flex justify-center items-center backdrop-blur-sm shadow-md border border-black/10 transition-all duration-200"
                >
                    {isMenuOpen ? (
                        <AiOutlineClose size={20} className="text-white" />
                    ) : (
                        <AiOutlineMenu size={20} className="text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Popout Menu */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="md:hidden fixed inset-0  bg-black/20 backdrop-blur-2xl z-40 pointer-events-none select-none"
                        onClick={toggleMenu}
                    />

                    {/* Popout Menu */}
                    <div className="md:hidden fixed top-24 right-0 w-full z-50 overflow-hidden px-16 text-white">
                        <div className="p-4 space-y-3 flex flex-col justify-center px-12">
                            <div className="bg-black/30 hover:bg-black/40 rounded-full h-16 flex justify-center  items-center text-white font-medium transition-all duration-200 cursor-pointer shadow-2xl">
                                Team
                            </div>
                            <div className="bg-black/30 hover:bg-black/40 rounded-full h-16 flex justify-center items-center text-white font-medium transition-all duration-200 cursor-pointer shadow-2xl">
                                Events
                            </div>
                            <div className="bg-black/30 hover:bg-black/40 rounded-full h-16 flex justify-center items-center text-white font-medium transition-all duration-200 cursor-pointer shadow-2xl">
                                Leaderboard
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-8 px-16">
                            <div className="bg-white/40 hover:bg-white/60 rounded-full w-32 h-32 flex justify-center items-center backdrop-blur-sm shadow-md border border-black/10 cursor-pointer">
                                <AiOutlineUser size={48} className="text-white" />
                            </div>
                            <div className="bg-black/40 rounded-2xl h-16 w-full flex justify-center items-center text-white font-medium transition-all duration-200 cursor-pointer border border-black/30 shadow-2xl mt-8">
                                Username
                            </div>
                            <div className="bg-white/40 hover:bg-white/60 rounded-full h-16 w-full flex justify-center items-center text-black font-medium transition-all duration-200 cursor-pointer border border-white/30 shadow-2xl mt-4">
                                Join Us
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}