import { useState } from "react"

export default function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const menuHandler = () => {
        document.getElementById("root").style.overflow = "hidden"
        document.body.style.overflow = 'hidden'
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button
                className="bg-transparent hover:bg-transparent inline-flex p-0 absolute left-4 top-[50%] translate-y-[-50%] lg:hidden"
                onClick={menuHandler}
            >
                <svg className="w-6 h-6" fill="#007d72" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="1" id="_1"><path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /><path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /><path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /></g></svg>
            </button>
            <div className={`absolute bg-[rgba(0,0,0,.5)] w-full ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all absolute top-0 left-0 z-10 h-screen`}>
                <div className="bg-[rgba(255,250,250,.94)] max-w-[250px] w-full h-screen">
                    <ul className="pt-10">
                        <li className="  hover:bg-gray-300 border-b border-b-gray-200">
                            <a href="#" className="px-2.5 py-[15px] block hover:text-black text-gray-500 font-semibold text-sm">MSD bu nima</a>
                        </li>
                        <li className="  hover:bg-gray-300 border-b border-b-gray-200">
                            <a href="#" className="px-2.5 py-[15px] block hover:text-black text-gray-500 font-semibold text-sm">Nega MSD</a>
                        </li>
                        <li className="  hover:bg-gray-300 border-b border-b-gray-200">
                            <a href="#" className="px-2.5 py-[15px] block hover:text-black text-gray-500 font-semibold text-sm">MSD SHIFTLARINI KIM O'RNATADI</a>
                        </li>
                        <li className="  hover:bg-gray-300 border-b border-b-gray-200">
                            <a href="#" className="px-2.5 py-[15px] block hover:text-black text-gray-500 font-semibold text-sm">HAQIQIYLIGINI TEKSHIRING</a>
                        </li>
                        <li className="  hover:bg-gray-300 ">
                            <a href="#" className="px-2.5 py-[15px] block hover:text-black text-gray-500 font-semibold text-sm">MEN MSD BILAN SHERIK BO'LISHNI XOHLAYMAN</a>
                        </li>
                    </ul>
                </div>
            </div>
            <button className={`absolute right-4 top-4 z-20 ${isOpen ? 'block' : 'hidden'}`}
                onClick={() => {
                    console.log('clicked');
                    setIsOpen(!isOpen)
                    document.getElementById("root").style.overflow = 'auto'
                    document.body.style.overflow = 'auto'
                }}>
                <svg height="30" viewBox="0 0 48 48" width="30" fill="#e4e4e4" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
            </button>
        </div>
    )
}
