
import phone from '../assets/Phone.png'

import phone1 from '../assets/Phone1.png'
import AST from '../assets/AST.png'
import pST from '../assets/pST.png'
const Team = () => {
    return (
        <div className="px-5 md:px-28 py-8 bg-[#f8f8f8]">
            <div className="bg-[#fdddde] p-5 md:p-0 py-8 gap-10 flex items-center flex-col md:flex-row md:pl-5 lg:pl-10 xl:pl-40 justify-between overflow-hidden rounded-3xl">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-bold text-red-500">
                        Want to be a <br /> part of our team
                    </h1>
                    <p className="text-xl text-[#444444]">
                        Be a part of best site of discount coupons
                    </p>
                    <div className="flex gap-2 lg:flex-row flex-col">
                        <div className="bg-white rounded-lg flex items-center justify-center gap-3 w-48 h-20">
                            <img className="h-10" src= {AST} alt="" />
                            <div>
                                <p className="text-xs text-[#747577]">Download From</p>
                                <p className="font-bold text-">App Store</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg flex items-center justify-center gap-3 w-48 h-20">
                            <img className="h-10" src={pST} alt="" />
                            <div>
                                <p className="text-xs text-[#747577]">Download From</p>
                                <p className="font-bold text-">Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] flex lg:gap-10 gap-5 rotate-[-18deg]">
                    <div className="h-[70%] ">
                        <img className="h-full" src={phone1}alt="" />
                    </div>
                    <div className="h-full">
                        <img className="h-full mt-24 mr-10" src={phone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team