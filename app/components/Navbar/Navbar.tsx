import Image from "next/image";
import Logo from "@/public/logo.svg";

function Navbar() {
    return (
        <nav className="flex justify-center mt-12 items-center ">
            <div className="bg-[#282828] w-2/4 p-8 h-[37px] rounded-xl flex items-center justify-between shadow-lg" style={{ boxShadow: '0px 0px 22px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={30} height={30} />
                    <p className="ml-2 font-bold text-xl font-dmsans text-white">Sell</p>
                </div>
                <div>
                    <p className="ml-2 font-semibold text-lg font-dmsans text-white">Follow us on Twitter</p>
                </div>
            </div>
        </nav> 
    );
}

export default Navbar;