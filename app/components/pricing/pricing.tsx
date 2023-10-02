'use client'

const Pricing = () => {
    return ( 
    <div>
         <div className="text-center my-10">
            <h1 className="font-bold text-3xl mb-2">Adományozási lehetőségek</h1>
            <h4 className="text-gray-600">A következő támogatási csomagok közül lehet választani</h4>
        </div>

        <div className="flex flex-col md:flex-row px-2 md:px-0">
        <div className="w-full md:w-1/3 text-white bg-pink-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <h3 className="text-2xl">Szuperhős</h3>
            <p className="mt-1"><span className="font-bold text-4xl">999 HUF</span> /hó</p>
            <p className="text-sm opacity-75 mt-2">Azon támogatók tábora akik támogatásukkal a legnagyobb szuperhős jelvénnyel rendelkeznek..</p>
            <div className="text-sm mt-4">
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 1.5 kg száraz kutyatáp havonta</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 1 kg nedves kutya konverz havonta</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 0.5 napi rezsi egy 50 kutyával működő menhelynek</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 1 orvosi vizit harmadának költségét</p>
            </div>
            <button className="w-full text-pink-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Támogatok</button>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-2xl">Haladó</h3>
            <p className="text-gray-600 mt-1"><span className="font-bold text-black text-4xl">1999 HUF</span> /hó</p>
            <p className="text-sm text-gray-600 mt-2">Szuperhős jelvény mellett haladó jelvénnyel is rendelkező, szorgos támogatók tábora.</p>
            <div className="text-sm mt-4">
                 <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 3 kg száraz kutyatáp havonta</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 3 kg nedves kutya konverz havonta</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 3 napi rezsi egy 50 kutyával működő menhelynek</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 1 orvosi vizit költségét</p>
            </div>          
            <button className="w-full text-pink-900 border border-purple-700 rounded hover:bg-pink-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Támogatok</button>
        </div>
      
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-2xl">Egyedi</h3>
            <p className="text-gray-600 mt-1"><span className="font-bold text-black text-4xl">9999 HUF</span> /hó</p>
            <p className="text-sm text-gray-600 mt-2">Cégeknek, magánszemélyeknek akik megenegedhetik, hogy támogatásukkal kiemelkedő hősök legyenek.</p>
            <div className="text-sm text-gray-600 mt-4">
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~15 kg száraz kutyatáp havonta</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 10 kg nedves kutya konverz havonta</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 8 napi rezsi egy 50 kutyával működő menhelynek</p>
                <p className="my-2"><span className="fa fa-check-circle mr-2 ml-1"></span> ~ 3 orvosi vizit költségét</p>
            </div>
            <button className="w-full text-pink-900 border border-purple-700 rounded hover:bg-pink-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Támogatok</button>
        </div>
       </div>
       </div>

     );
}
 
export default Pricing;