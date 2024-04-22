import SectionImg from "@/assets/msd-apple.png"

export default function WhatIsWidget() {
    return (
        <section id="what">
            <div className="container mx-auto py-9 mb-14">
                <h2 className="text-center text-4xl font-bold mb-8">MSD bu nima?</h2>
                <div className="flex w-full gap-x-7  max-[1030px]:px-4 max-[500px]:flex-col">
                    <div className="max-w-[50%] flex flex-col gap-y-5 text-xl font-light text-[#282828] max-[500px]:max-w-full">
                        <p>MSD (MSD) – bu cho'zilgan shiftlar uchun plyonka ishlab chiqaruvchi kompaniya.</p>
                        <p>MSD zavodi innovatsion texnologiyalar va o'z tadqiqot ishlanmalaridan foydalangan holda zamonaviy uskunalarda yuqori sifatli mahsulotlar ishlab chiqaradi.</p>
                        <p>MSD filmni Germaniya, Frantsiya, Belgiya va Evropa Ittifoqining boshqa mamlakatlariga etkazib beradi.</p>
                        <p>Qozog'iston va Qirg'izistondagi MSD zavodining eksklyuziv vakili Folio PVX kompaniyasi.</p>
                    </div>
                    <div className="max-w-[50%] max-[800px]:h-[340px] max-[500px]:max-w-[100%] max-[500px]:mt-20 max-[500px]:max-h-[280px] shadow-[0_14px_28px_0_rgba(0,0,0,0.25)]">
                        <img src={SectionImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
