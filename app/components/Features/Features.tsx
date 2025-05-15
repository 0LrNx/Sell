"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import Food from "@/public/food.svg"
import Love from "@/public/love.svg"
import Money from "@/public/money.svg"
import World from "@/public/world.svg"

import Card1 from "@/public/card_1.png"
function Features({ delaClass }: { delaClass: string }) {
    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <h1 className={`${delaClass} text-5xl font-bold mb-16`}>Features</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Image src={Money} alt="Save time & Reduce cost" width={60} height={60} />
                            </div>
                            <h3 className="text-xl font-semibold">Save time & Reduce cost</h3>
                            <p className="text-gray-600">
                                Building your own online store, shopping cart, checkout, and licensing is time-consuming
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Image src={Food} alt="More features" width={60} height={60} />
                            </div>
                            <h3 className="text-xl font-semibold">More features</h3>
                            <p className="text-gray-600">
                                We simplify all that by combining all of the features and solutions you need to sell
                            </p>
                        </div>
                    </motion.div>

                    <div className="h-24 w-96 col-span-1 bg-white rounded-lg shadow-md p-6 flex flex-row justify-between items-center">
                        <div className="flex-col">
                            <h3 className="text-xl font-semibold mb-1">Try for free</h3>
                            <p className="text-sm text-gray-500">*No credit card required</p>
                        </div>
                        <button className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                            <ArrowRight className="w-7 h-7" />
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Image src={Love} alt="Sell your popular product more" width={60} height={60} />
                            </div>
                            <h3 className="text-xl font-semibold">Sell your popular product more</h3>
                            <p className="text-gray-600">
                                Designed from the ground up to be easy to use and quick to set up for sellers
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <Image src={World} alt="Sell it across the Globe" width={60} height={60} />
                            </div>
                            <h3 className="text-xl font-semibold">Sell it across the Globe</h3>
                            <p className="text-gray-600">
                                Expand into new global markets with ease when you automatically display popular pricing
                            </p>
                        </div>
                    </motion.div>

                    <div className="col-span-1 relative">
                        <Image
                            src={Card1}
                            alt="Card"
                            className="w-full h-full object-cover rounded-lg shadow-md  ml-36"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
