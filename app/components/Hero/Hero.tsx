import Image from "next/image";
import BgGrid from "@/public/grid.svg";
import AvatarList from "@/public/avatar.png";
import Marquee from "@/components/magicui/marquee";

import Card1 from "@/public/card_1.png";
import Card2 from "@/public/card_2.png";
import Card3 from "@/public/card_3.png";




function Hero({ delaClass }: { delaClass: string }) {
    return (
        <div>
            <div className="bg-[#92C4FE] w-[450px] h-[450px] rounded-full absolute right-96 -top-56 blur-[150px] -z-[500] opacity-80"></div>
            <div className="bg-[#FEA492] w-[550px] h-[550px] rounded-full absolute -z-[500] left-40 -top-24 blur-[300px] opacity-40"></div>

            <Image
                src={BgGrid}
                alt="Background Grid"
                className="absolute -z-[100] w-full h-full left-[5%] top-[5%] "
            />

            <div className="flex flex-col items-center justify-center mt-20">
                <button className="bg-gradient-to-r from-[#E693A5] to-[#3951E5] text-white font-bold font-dmsans rounded-full px-6 py-2">
                    Introducing a new online selling platform 🎉
                </button>

                <h1 className={delaClass + " text-6xl font-normal text-center mt-10"}>
                    Best way to sell <br /> your digital product
                </h1>

                <p className="mt-10 text-[#626262] text-base font-medium text-center">Go from Zero to Hero with simple platform that helps <br /> creators like you sell their digital products online.</p>

                <div className="flex flex-row mt-10">
                    <input
                        type="text"
                        placeholder="Your best email address"
                        className="bg-white text-[#626262] font-medium font-dmsans rounded-lg px-6 py-2 h-[50px] placeholder:text-[#626262] placeholder:font-bold placeholder:font-dmsans"
                    />
                    <button className="bg-[#314EE7] text-white font-bold font-dmsans rounded-lg px-6 py-2 ml-4">
                        Try it out
                    </button>
                </div>

                <div className="flex flex-row mt-6 w-1/2 mx-auto justify-center items-center">
                    <Image
                        src={AvatarList}
                        alt="Avatar List"
                        className="w-28 h-full rounded-full border-2 border-white mr-3"
                    />
                    <p className="text-[#626262]"><strong className="text-black">More than 100+</strong> users are selling their products <br /> online with simple & easy ways</p>
                </div>

                <div className="mt-36">
                    <Marquee
                        className="w-[820px] h-[275px] bg-gradient-to-r from-[#3951E5] to-[#E693A5] rounded-lg"
                        pauseOnHover
                        repeat={1}
                    >
                        <div className="flex flex-row items-center justify-center gap-20">
                            <Image
                                src={Card1}
                                alt="Card 1"
                                className="w-[300px] h-[200px] rounded-lg mr-4"
                            />
                            <Image
                                src={Card2}
                                alt="Card 2"
                                className="w-[300px] h-[200px] rounded-lg mr-4"
                            />
                            <Image
                                src={Card3}
                                alt="Card 3"
                                className="w-[300px] h-[200px] rounded-lg mr-4"
                            />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Hero;