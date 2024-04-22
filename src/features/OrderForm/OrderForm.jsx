import React from 'react'

export default function OrderForm(props) {
    return (
        <div>
            {props.children}
            <form className='flex flex-col gap-y-4 items-center'>
                <div>
                    <input type="text" placeholder='Ism' className='border border-[#ddd] shadow-sm bg-white rounded-[20px] outline-none px-3 w-[450px] max-[500px]:w-[350px] max-[500px]:text-sm max-[330px]:w-[300px] max-[500px]:py-0 text-lg py-1' />
                </div>
                <div>
                    <input type="number" placeholder='Telefon raqam' className='border border-[#ddd] shadow-sm bg-white rounded-[20px] outline-none px-3 w-[450px] max-[500px]:w-[350px] max-[500px]:text-sm max-[330px]:w-[300px] max-[500px]:py-0 text-lg py-1' />
                </div>
                <div>
                    <input type="text" placeholder='Shahar' className='border border-[#ddd] shadow-sm bg-white rounded-[20px] outline-none px-3 w-[450px] max-[500px]:w-[350px] max-[500px]:text-sm max-[330px]:w-[300px] max-[500px]:py-0 text-lg py-1' />
                </div>
                <button type='button' className='bg-main-green inline-block max-w-[140px] py-1 px-4 rounded-full text-white hover:bg-dark-green'>
                    Yuborish
                </button>
            </form>
        </div>
    )
}
