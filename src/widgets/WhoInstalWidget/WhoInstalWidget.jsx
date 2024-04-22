import MsdPreview1 from "@/assets/msd-preview1.png"
import MsdPreview2 from "@/assets/msd-preview2.png"
import MsdPreview3 from "@/assets/msd-preview3.png"
import { useContext, useEffect } from "react";
import { IsModalOpenContext } from "../../shared/Context";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function WhoInstalWidget() {
    const { setIsModalOpen } = useContext(IsModalOpenContext);

    const openModal = () => {
        setIsModalOpen(true);
        document.getElementById("root").style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
    };


    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section className="pt-20" id="who">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-extrabold max-[500px]:text-2xl">MSD cho'zilgan shiftlarni kim o'rnatadi</h2>
                <p className="font-light text-center max-w-[1100px] mx-auto mt-6">
                    MSD plyonkasining rasmiy etkazib beruvchisi Folio PVX sizning shahringizdagi rasmiy MSD sheriklariga shiftlarni o'rnatish uchun murojaat qilishni tavsiya qiladi.
                </p>
                <p className="font-light text-center max-w-[1100px] mx-auto mt-6">
                    Siz ushbu sahifada cho'zilgan ship ishlab chiqaruvchisini o'zingiz tanlashingiz yoki so'rov qoldirishingiz mumkin.
                </p>
                <div className="grid grid-cols-3 justify-between gap-x-8 mt-6 max-[1030px]:px-4 max-[500px]:grid-cols-1 gap-y-8">
                    <div className="max-w-[400px] h-[300px] shadow-[0_14px_28px_0_rgba(0,0,0,0.4)]"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        <img src={MsdPreview1} alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="max-w-[400px] h-[300px] shadow-[0_14px_28px_0_rgba(0,0,0,0.4)]"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="400"
                        data-aos-once="true"
                    >
                        <img src={MsdPreview2} alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="max-w-[400px] h-[400px] max-[1030px]:max-h-[300px]">
                        <img src={MsdPreview3} alt="" className="object-cover w-full h-full" />
                    </div>
                </div>
                <button
                    className="bg-main-green text-white text-sm font-semibold mx-auto block py-4 px-5 rounded-full mt-12 mb-24 hover:bg-dark-green"
                    onClick={openModal}
                >MEN MSD PLYONKALI SHIFTNI XOHLAYMAN
                </button>
            </div>
        </section>
    )
}
