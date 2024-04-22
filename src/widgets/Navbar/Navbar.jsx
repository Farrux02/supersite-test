export default function Navbar() {
    return (
        <nav className="bg-main-green py-2.5 max-[800px]:hidden">
            <div className="container mx-auto">
                <ul className="flex justify-around flex-wrap gap-y-4 max-[1030px]:px-8">
                    <li>
                        <a href="#what" className="text-white font-semibold text-sm">MSD bu nima</a>
                    </li>
                    <li>
                        <a href="#why" className="text-white font-semibold text-sm">Nega MSD</a>
                    </li>
                    <li>
                        <a href="#" className="text-white font-semibold text-sm">MSD SHIFTLARINI KIM O'RNATADI</a>
                    </li>
                    <li>
                        <a href="#" className="text-white font-semibold text-sm">HAQIQIYLIGINI TEKSHIRING</a>
                    </li>
                    <li>
                        <a href="#" className="text-white font-semibold text-sm">MEN MSD BILAN SHERIK BO'LISHNI XOHLAYMAN</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
