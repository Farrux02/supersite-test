
export default function Footer() {
    return (
        <footer className="bg-main-green py-[30px]">
            <div className="container mx-auto">
                <ul className="flex justify-around flex-wrap max-[1030px]:px-8 gap-y-4 max-[500px]:flex-col">
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
                <p className="text-white font-semibold text-sm text-center mt-8" >© 2019 Qozog'iston va Qirg'izistondagi MSD zavodining eksklyuziv vakili kompaniya «Фолие ПВХ»</p>
            </div>
        </footer>
    )
}
