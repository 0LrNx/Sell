"use client";
import { motion } from "framer-motion";

function Card({ delaClass }: { delaClass: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center justify-center w-full py-16 px-4"
        >
            <div className="bg-white w-4/6 h-[350px] rounded-3xl shadow-lg relative z-20 p-12">
                <h2 className={delaClass + " text-5xl font-normal text-center"}>Be the first to know about new features, special offers, and more.</h2>
                <div className="flex flex-row mt-20 justify-center items-center">
                    <input
                        type="text"
                        placeholder="Your best email address"
                        className="bg-[#F7F7F7] text-[#626262] font-medium font-dmsans rounded-lg px-6 py-2 h-[50px] placeholder:text-[#626262] placeholder:font-bold placeholder:font-dmsans"
                    />
                    <button className="bg-[#314EE7] text-white font-bold font-dmsans rounded-lg px-6 py-2 ml-4">
                        Join waitlist
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default Card;