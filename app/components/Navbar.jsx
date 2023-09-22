import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className='flex' >
            <Link href="/"><Image className="rounded-full border-2 border-gray-300" src='/avatar.jpg' alt="avatar" height={60} width={60}></Image></Link> 
        </div>
    )
}

export default Navbar;
