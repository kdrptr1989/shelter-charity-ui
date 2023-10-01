import Image from "next/image";

const AboutUs = () => {
  return (

    //m-auto justify-between items-center md:flex md:w-3/4 md:py-20
    <div className="w-auto p-10 items-centermd: md:py-20 ">
      <div className="flex flex-col items-center text-4xl font-extrabold text-gray-800">
        Hogyan működik a rendszer?
        <div className="text-xl font-extrabold text-gray-800 text-center p-10">
          A rendszer segítségével a nálunk regisztrált összes állatvédő szervezet, havi előfizetéses alapon működő, projekt alapú támogatására van lehetőség.
        </div>
        <div className="text-2xl font-extrabold text-gray-800 text-center p-10">
          Mit is jelent ez pontosan?
        </div>
      </div>

      <div className="flex flex-col m-auto md:flex-row md:justify-evenly gap-10 p-10 w-4/5">
        <div className="flex flex-1 flex-col">
          <Image
            src="/images/subscribers.svg"
            alt="marketplace"
            width={200}
            height={200}
            className="self-center"
          />
          <div className="flex flex-col">
          <div className="text-2xl font-semibold self-center py-1">
              421
            </div>
            <div className="text-2xl font-semibold self-center py-1">
              Aktív támogató
            </div>
            <div className="text-lg">
              <div className="text-center pt-5">
                Akik segítségével minden hónapban egyre több menhely orvosi, ételellátási, fenntartási költségeit támogathatjuk.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <Image
            src="/images/active-projects.svg"
            alt="marketplace"
            width={200}
            height={200}
            className="self-center"
          />
          <div className="flex flex-col">
          <div className="text-2xl font-semibold self-center py-2">
              43
            </div>
            <div className="text-2xl font-semibold self-center py-1">
              Aktuális projekt
            </div>
            <div className="text-lg">
              <div className="text-center pt-5">
              Minden állatvédő szervezetet arra bíztatunk, hogy hozzák létre saját projekt oldalukat a rendszerben az adott menhely aktuális paramétereivel és igényeivel együtt.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <Image
            src="/images/all-registered-pets-number.svg"
            alt="marketplace"
            width={173}
            height={180}
            className="self-center"
          />
          <div className="flex flex-col">
          <div className="text-2xl font-semibold self-center py-2">
              7650
            </div>
            <div className="text-2xl font-semibold self-center py-1">
              Házikedvenc
            </div>
            <div className="text-lg">
              <div className="text-center pt-5">
                Jelenleg a rendszerben regisztrált 43 projekthez tartozó összes örökbe fogadásra és segítségre váró házi kedvenc.
              </div>
            </div>
          </div>
        
      </div>
        </div>

        <div className="flex flex-col m-auto md:flex-row md:justify-evenly gap-10 p-10 w-4/5">
        <div className="flex flex-1 flex-col">
          <Image
            src="/images/actual-all-amount.svg"
            alt="all-supported-amount"
            width={200}
            height={200}
            className="self-center"
          />
          <div className="flex flex-col">
          <div className="text-2xl font-semibold self-center py-1">
              3.243.000.- HUF
            </div>
            <div className="text-2xl font-semibold self-center py-1">
              Összes támogatás
            </div>
            <div className="text-lg">
              <div className="text-center pt-5">
                A rendszerbe eddig beérkezett összes támogatás összege.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <Image
            src="/images/actual-bank-amount.svg"
            alt="actual-bank-amount"
            width={200}
            height={200}
            className="self-center"
          />
          <div className="flex flex-col">
          <div className="text-2xl font-semibold self-center py-2">
              1.242.000.- HUF
            </div>
            <div className="text-2xl font-semibold self-center py-1">
              Aktuális összeg
            </div>
            <div className="text-lg">
              <div className="text-center pt-5">
              OTP banknál vezetett aktuális számlán szereplő összeg, melyet az OTP open Api segítségével real-time követhetünk.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <Image
            src="/images/all-supported-food.svg"
            alt="marketplace"
            width={173}
            height={180}
            className="self-center"
          />
          <div className="flex flex-col">
          <div className="text-2xl font-semibold self-center py-2">
              12.000 kg
            </div>
            <div className="text-2xl font-semibold self-center py-1">
              Támogatott állateledel
            </div>
            <div className="text-lg">
              <div className="text-center pt-5">
                Jelenleg a rendszerben regisztrált 43 projekthez tartozó összes örökbe fogadásra és segítségre váró házikedvenc.
              </div>
            </div>
          </div>
        
      </div>
        </div>

        <div className="flex flex-col items-center m-auto md:flex-row md:justify-evenly self-center py-20">
      <div className="flex">
        <Image src="/images/shelter.svg" alt="shelter" width={800} height={300} />
        </div>

        <div className="flex flex-col max-w-xl">
          
        <div className="flex-col text-center justify-center">
            <div className="text-lg p-10 flex flex-row items-center gap-5">
              <div>
              Hozzávetőlegesen 2 millió kutya, 3 millió macska és körübelül 4 millió díszmadár van jelenleg ma Magyarországon
              </div>
            </div>
            </div>
          <div className="flex-col text-center justify-center ">
            <div className="text-lg p-10 flex flex-row items-center gap-5">
              <div className="flex flex-col text-center justify-center 
              "> 
                Anyagi és egyéb okokból egyre több házikedvenc kényszerül az utcára
             </div>
            </div>
          </div>
          <div className="flex-col text-center justify-center">
            <div className="text-lg p-10 flex flex-row items-center gap-5">
              <div>
              Közel 300 állatvédő szervezet műküdik ma hazánkban. Célunk, hogy az előfizetők segítségével minél több rászoruló szervezetet tudjunk támogatni 
              </div>
            </div>
          </div>      
            </div>
            </div>
            
            <div className="py-20">
              <div className="text-2xl font-extrabold text-gray-800 text-center p-10">
                Milyen jellegű költségek merülnek fel egy állatvédő szervezet életében?
              </div>

              <div className="items-center pt-0">
              <Image src="/images/all-cost.svg" alt="cost" width={1300} height={300} />
              </div>
            </div>

    </div>
  );
};

export default AboutUs;