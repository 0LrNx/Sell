import Image from "next/image"
import Link from "next/link"

import BlackLogo from "@/public/logo_black.svg"

function Footer() {
    return (
        <footer className="w-full h-52 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8">
                <div className="flex items-center mb-6 md:mb-0">
                    <div className="flex items-center">
                        <Image src={BlackLogo || "/placeholder.svg"} alt="Sell Logo" width={24} height={24} className="mr-2" />
                        <span className="font-bold text-lg">Sell</span>
                    </div>
                </div>

                <nav>
                    <ul className="flex items-center space-x-10 text-sm text-gray-800 hover:text-gray-6008 font-bold">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/agencies">
                                Agencies
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/shortlist">
                                My Shortlist
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
