import React, { useRef } from 'react'
import '../styles/home.css'
import '../styles/index.css'
import cardB from '../assets/images/card-background.jpg'
import tile5 from '../assets/images/tile5.jpg'
import tile6 from '../assets/images/tile6.jpg'
import tile4 from '../assets/images/tile4.jpg'
import tile7 from '../assets/images/tile7.jpg'
import tile8 from '../assets/images/tile8.jpg'
import tile9 from '../assets/images/tile9.jpg'
import tile10 from '../assets/images/tile10.jpg'
import tile11 from '../assets/images/tile11.jpg'
import tile12 from '../assets/images/tile12.jpg'
import logo from '../assets/images/logo.png'
import Navbar from './Navbar'
import homeMain from '../assets/images/home/homeMain.jpg'
import { Astroid } from 'lucide-react';
import Portfolio from './Portfolio'
import { useNavigate } from 'react-router-dom'
const Home = (props) => {
    const navigate = useNavigate();
    const portfolioRef = useRef(null);

    const handleBtn = () => {
        navigate("/portfolio")
    }

    const handleExploreClick = () => {
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleGetInTouchClick = () => {
        navigate("/contact")
    }

    return (
        <div className='w-full bg-gray-50'>
            <Navbar />
            <section className='h-screen w-full flex '>
                <div className='h-full lg:w-[60%] overflow-hidden'>
                    <img src={homeMain} alt="" className='object-[50%_80%] h-full w-full object-cover ' />
                </div>
                <div className='lg:w-[40%] py-3 px-3 flex flex-col justify-between'>
                    <div className='text-right lg:py-10 relative'>
                        <h1 className='hero-text text-4xl md:text-5xl lg:text-8xl font-semibold mt-12'><span className='font-normal'>Crafting </span>experiences</h1>
                        <p className='mt-4 text-lg text-[#6b5c50] max-w-xl leading-tight'>
                            We <span className='font-bold'>tranform</span> ordinary spaces into meaningful experiences, blending creativity, functionality, and timeless elegance to reflect your unique <span className='italic'>lifestyle</span>.
                        </p>
                        <p className='hero-tag leading-tight mt-5 max-w-xl text-4xl'>Your Space, Reimagined. <br />Your Vision, Realized.</p>

                    </div>
                    <div className='h-[30%] relative flex flex-col justify-center'>
                        <div className='flex absolute left-0 top-[20%] translate-x-[50%] gap-4 items-center'>
                            <button className='hero-button' onClick={handleExploreClick}>
                                Explore
                            </button>
                            <Astroid size={20} color="#683818" strokeWidth={2} />
                            <button className='hero-button' onClick={handleGetInTouchClick}>Get in Touch</button>
                        </div>
                        <hr className=" w-1/4 border-3 border-[#452e1c] absolute bottom-0 right-0" />
                        <hr className=" h-full border-3 border-[#452e1c ] absolute bottom-0 right-0" />
                    </div>

                </div>
            </section>
            <div ref={portfolioRef}>
                <Portfolio videos={props.videos} />
            </div>
        </div>
    )
}

{/* <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'
                            style={{
                                background: 'linear-gradient(135deg, #b87333, #5a3520)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent',
                            }}>
                            Crafting Digital <br /> Experiences
                        </h1>
                        <p className='mt-4 text-lg text-[#6b5c50] max-w-xl leading-relaxed'>
                            We blend creativity with technology to build stunning solutions
                            that elevate your brand.
                        </p> */}

export default Home