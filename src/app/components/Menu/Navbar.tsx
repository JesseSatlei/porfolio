"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Sobre Mim",
		path: "#about",
	},
	{
		title: "Projetos",
		path: "#projects",
	},
	{
		title: "Contato",
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
			<div className="flex flex-wrap items-center justify-between mx-auto p-8">
				<Link
					href="/"
					className="text-2xl md:text-5xl text-white font-semibold"
				>
					<Image
						src="/images/Logo.png"
						alt="Logo"
						className="w-12 h-auto md:w-15"
						width={20}
						height={20}
        	/>
				</Link>
				<div className="block md:hidden">
					{!navbarOpen ? (
						<button
							id="nav-toggle"
							className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
							onClick={() => setNavbarOpen(true)}
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							id="nav-toggle"
							className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
							onClick={() => setNavbarOpen(false)}
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="hidden md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => {
							return (
								<li key={index}>
									<NavLink
										key={link.title}
										title={link.title}
										href={link.path}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;