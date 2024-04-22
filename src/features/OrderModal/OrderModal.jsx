import { useContext } from "react";
import OrderForm from "../OrderForm/OrderForm"
import { IsModalOpenContext } from "../../shared/Context";

export default function OrderModal() {

    const { setIsModalOpen } = useContext(IsModalOpenContext);

    const closeModal = () => {
        setIsModalOpen(false);
        document.getElementById("root").style.overflow = 'auto'
        document.body.style.overflow = 'auto'
    };

    return (
        <div className="fixed w-full h-full bg-[rgba(0,0,0,.6)] z-30">
            <div className="bg-white w-[500px] py-10 absolute top-[50%] rounded-xl left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <OrderForm >
                    <h4 className="text-center text-3xl mb-6">Ariza qoldirish</h4>
                </OrderForm>
            </div>
            <button className={`absolute right-4 top-4 z-20 `}
                onClick={closeModal}>
                <svg height="30" viewBox="0 0 48 48" width="30" fill="#e4e4e4" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
            </button>
        </div>
    )
}
