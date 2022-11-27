import { useState } from 'react';
import { NavGroup } from './NavGroup';
import Logo from '../assets/logo.svg';

export const HeroSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<section id='hero' className='bg-hero-mobile bg-center md:bg-hero-desktop md:bg-no-repeat md:bg-cover'>
			<div className='container max-w-6xl mx-auto px-6 py-12'>
				<nav className='flex items-center justify-between font-bold text-white'>
					<img src={Logo} alt='logo' />
					<div className='hidden h-10 font-alata md:flex md:space-x-8'>
						<NavGroup text={'About'} />
						<NavGroup text={'Careers'} />
						<NavGroup text={'Events'} />
						<NavGroup text={'Products'} />
						<NavGroup text={'Support'} />
					</div>
					{/*  Hamburguer button */}
					<div className='md:hidden'>
						<button
							id='menu-btn'
							onClick={navToggle}
							type='button'
							className={`${isOpen ? 'open' : ''} z-40 block hamburger md:hidden focus:outline-none`}
						>
							<span className='hamburger-top'></span>
							<span className='hamburger-middle'></span>
							<span className='hamburger-bottom'></span>
						</button>
					</div>
				</nav>
				{/* Mobile Menu */}
				<div
					className={`${
						isOpen ? 'flex' : 'hidden'
					} absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
				>
					<a href='#' className='hover:text-pink-500'>
						About
					</a>
					<a href='#' className='hover:text-pink-500'>
						Careers
					</a>
					<a href='#' className='hover:text-pink-500'>
						Events
					</a>
					<a href='#' className='hover:text-pink-500'>
						Products
					</a>
					<a href='#' className='hover:text-pink-500'>
						Support
					</a>
				</div>
				<div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
					Impressive Experiences That Deliver
				</div>
			</div>
		</section>
	);
};
