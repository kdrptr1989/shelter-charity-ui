'use client'

import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
    return ( 
    <div 
    className="m-auto justify-between items-center md:flex md:w-3/4 md:py-20">
        <div className="justify-center md:w-1/2">
            <div className="flex-col px-5 self-center justify-around gap-10">
                <div className="text-gray-800 font-extrabold text-6xl">
                Közösség <div className="text-blue-500 font-bold text-6xl">együtt</div> sokra képes
                </div>
                <div className="text-gray-800 font-semibold text-l py-5">
                Segítsük együtt a menhelyek működését globálisan. Tegyünk közösen azért, hogy a menhelyeken lévő házikedvencek jobb körülmények között várhassák az új gazdikat. 
                </div>

                <div>
                    <Link href="/signup">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Részletek
                        </button>
                    </Link>
                </div>
            </div>

        </div>

        <div>
        <Image
        src="/images/intro.jpg"
        alt='help'
        width={550}
        height={600} />
        </div>
    </div>
        );
}
 
export default Introduction;