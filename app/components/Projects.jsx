import Link from "next/link";

const portfolio = () => {
    return (
        <div className='relative flex flex-col gap-8 bg-gradient-to-br from-mystic to-white rounded-2xl p-8' style={{boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 0.75)'}}>
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <hr className="border-t-black"/>
            <ul className="flex flex-col leading-loose tracking-wider text-lg">
                <Link href="/portfolio">
                    <li className="custom-hover hover:text-rose-500 relative">
                        <span class="w-4 text-gray-400">•</span>
                        <span className="px-2">SenAuto - A car rental web application</span>
                        <span class="arrow hidden absolute">→</span>
                    </li>
                </Link>
                <Link href="/portfolio">
                    <li className="custom-hover hover:text-rose-500 relative">
                        <span class="w-4 text-gray-400">•</span>
                        <span className="px-2">Dine - A website restaurant with booking page</span>
                        <span class="arrow hidden absolute">→</span>
                    </li>
                </Link>
                <Link href="/portfolio">
                    <li className="custom-hover hover:text-rose-500 relative">
                        <span class="w-4 text-gray-400">•</span>
                        <span className="px-2">Shortly - A url shortener web application</span>
                        <span class="arrow hidden absolute">→</span>
                    </li>
                </Link>
                <Link href="/portfolio">
                    <li className="custom-hover hover:text-rose-500 relative">
                        <span class="w-4 text-gray-400">•</span>
                        <span className="px-2">Jobify - A job listing website with filtering</span>
                        <span class="arrow hidden absolute">→</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default portfolio;