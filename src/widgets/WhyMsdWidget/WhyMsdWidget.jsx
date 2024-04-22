import { useContext, useEffect } from "react";
import { IsModalOpenContext } from "../../shared/Context";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function WhyMsdWidget() {

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
        <section id="why">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold mb-16 max-[500px]:mt-20 max-[500px]:text-2xl">Nimaga MSD?</h2>
                <div className="grid grid-cols-3 flex-wrap gap-[30px] max-[1030px]:px-4 max-[500px]:grid-cols-1"

                >
                    <div className="text-center" data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1000">
                        <h5 className="uppercase text-main-green text-[17px] font-bold">Hidsiz shift</h5>
                        <p className="text-sm font-light leading-6 mt-3">
                            MSD plyonkasi ekologik toza xom ashyolardan yaratilgan, shuning uchun shiftni o'rnatgandan va ozgina shamollatgandan so'ng <br />
                            xonada <span className="text-light-green font-medium">yoqimsiz hid qolmaydi!</span>
                        </p>
                    </div>
                    <div className="text-center" data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        data-aos-delay="700"
                    >
                        <h5 className="uppercase text-main-green text-[17px] font-bold">Salomatlik uchun xavfsiz</h5>
                        <p className="text-sm font-light leading-6 mt-3">
                            MSD plyonkasida dioktil ftalat (DOP) mavjud emas. <br />
                            MSD tarkibida <br />
                            <span className="text-light-green font-medium">xavfsiz plastifikator</span> dioktil tereftalat (DOTP).
                        </p>
                    </div>
                    <div className="text-center" data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        data-aos-delay="1000">
                        <h5 className="uppercase text-main-green text-[17px] font-bold">SHIFTNING YAXSHILANGAN XUSUSIYATLARI</h5>
                        <p className="text-sm font-light leading-6 mt-3">
                            MSD plyonkali shiftlar yaxshi issiqlik va namlik izolyatsiyasi xususiyatlariga ega; ular bardoshli va <span className="font-medium text-light-green">uzoq vaqt xizmat qiladi!</span>
                        </p>
                    </div>
                    <div className="text-center" data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        data-aos-delay="1300">
                        <h5 className="uppercase text-main-green text-[17px] font-bold">CHIROYLI VA YUQORI SIFATLI O'RNATISH</h5>
                        <p className="text-sm font-light leading-6 mt-3">
                            MSD plyonkasi <span className="text-light-green font-medium">taranglashganda ko'rinmaydi, yaxshi cho'ziladi, elastik va bardoshlidir.</span> MSD shiftini qo'shnilar yuqoridan suv bosganda katta miqdordagi suvga bardosh bera oladi.
                        </p>
                    </div>
                    <div className="text-center"
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        data-aos-delay="1600"
                    >
                        <h5 className="uppercase text-main-green text-[17px] font-bold">TASDIQLANGAN SIFAT</h5>
                        <p className="text-sm font-light leading-6 mt-3">
                            MSD plyonkasining sifati muvofiqlik sertifikatlari bilan tasdiqlangan. MSD film yetkazib beruvchi Folio PVX kompaniyasi mahsulotlarning xalqaro sifat menejmenti tizimlari talablariga <span className="text-light-green font-medium">muvofiqligini sertifikatlash uchun barcha zarur sinovlarni o'tkazdi.</span>
                        </p>
                    </div>
                    <div className="text-center"
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        data-aos-delay="2000"
                    >
                        <h5 className="uppercase text-main-green text-[17px] font-bold">EKOLOGIK SERTIFIKATLASH</h5>
                        <p className="text-sm font-light leading-6 mt-3">
                            Stretch shiftlari uchun film MSD Rossiyada ixtiyoriy ekologik sertifikatlashdan o'tdi. MSD plyonkali shiftlar ekologik standartlarga javob beradi, shuning uchun ular uzoq vaqtdan beri <span className="text-light-green font-medium uppercase">EKO shiftlar</span> deb nomlangan.
                        </p>
                    </div>
                </div>
                <h3 className="text-center text-xl text-main-green font-bold my-10 max-[500px]:px-2 max-[500px]:text-lg">Stretch shiftini tanlashda MSD plyonkali shiftlarni talab qiling!</h3>
                <button
                    className="bg-main-green text-white text-sm font-semibold mx-auto block py-4 px-5 rounded-full hover:bg-dark-green"
                    onClick={openModal}
                >
                    MEN MSD PLYONKALI SHIFTNI XOHLAYMAN
                </button>
            </div>
        </section>
    )
}
