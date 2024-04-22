import LogoImg from "@/assets/msd-logo.png"
import OrderForm from "@/features/OrderForm/OrderForm"

export default function BannerWidget() {
    return (
        <section className="bg-[url('@/assets/msd-banner.jpg')] bg-cover bg-center py-6" id="banner">
            <div className="container mx-auto flex flex-col items-center max-[800px]:px-8">
                <div className='bg-white text-center max-w-4xl w-full p-6 rounded-3xl mb-20'>
                    <h1 className='font-bold text-4xl max-[500px]:text-base max-[350px]:text-sm '>AGAR CHO'ZILGAN SHIP BO'LSA –</h1>
                    <h1 className="font-bold text-4xl max-[500px]:text-base  max-[350px]:text-sm flex items-center justify-center mt-4">
                        KEYIN FILMDAN
                        <img src={LogoImg} alt="" className="max-w-36 object-contain" />
                    </h1>
                </div>
                <OrderForm>
                    <h4 className="text-white text-2xl max-[500px]:text-base font-bold text-center mb-4">MSD dan shift xohlayman!</h4>
                </OrderForm>
            </div>
        </section>
    )
}
