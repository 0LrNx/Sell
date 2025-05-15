import Image from "next/image";
import Logo from "@/public/logo.svg";

function Features({ delaClass }: { delaClass: string }) {
    return (
        <div className="">
            <h1 className={delaClass}>Features</h1>
        </div>
    );
}

export default Features;