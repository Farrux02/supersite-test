import React, { useContext } from 'react'
import LogoImg from "@/assets/msd-logo.png"
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { IsModalOpenContext } from '../../shared/Context';

export default function Header() {
    const { setIsModalOpen } = useContext(IsModalOpenContext);

    const openModal = () => {
        setIsModalOpen(true);
        document.getElementById("root").style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
    };

    return (
        <header className='py-2 relative'>
            <div className='container mx-auto flex justify-between items-center max-[1030px]:px-4 max-[800px]:justify-center'>
                <BurgerMenu />
                <a href="#" className='w-auto h-20 max-[500px]:h-[70px]'>
                    <img src={LogoImg} alt="" className='w-full h-full object-contain' />
                </a>
                <h2 className='text-main-green font-bold text-2xl max-w-72 text-center max-[800px]:hidden'>Sifat! Xavfsizlik! Ekologik toza!</h2>
                <button className='max-w-72 w-full px-4 py-2.5 bg-main-green text-white rounded-full text-base font-semibold max-[800px]:hidden hover:bg-dark-green'
                    onClick={openModal}
                >MSD dan shift xohlayman</button>
            </div>
        </header>
    )
}
