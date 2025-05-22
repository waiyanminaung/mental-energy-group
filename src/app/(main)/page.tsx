import Image from "next/image";

export default function Root() {
  return (
    <section
      id="home"
      className="h-[100vh] md:h-screen flex items-center justify-center relative overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover bg-[url(../../public/images/coming-soon-background.jpg)]"
    >
      <div className="absolute bg-black/80 inset-0"></div>

      <div className="container">
        <div className="flex items-center justify-center relative text-center py-12 px-12 h-full w-full">
          <div className="">
            <a href="\" className="flex items-center justify-center mb-10">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Mental Energy Group"
              />
            </a>
            <span className="text-white font-medium bg-white/20 py-[5px] px-4 rounded-md capitalize">
              Our Website Is
            </span>
            <h1 className="lg:text-6xl text-4xl font-extrabold !text-white capitalize my-8">
              coming soon
            </h1>
            <div className="flex justify-center">
              <div className="max-w-xl text-center">
                <p className="font-semibold text-white">
                  We&apos;re coming soon! W&apos;re working hard to give you the
                  best experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="hs-vertically-centered-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-screen-md sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="flex flex-col bg-white shadow-sm rounded-lg w-full relative">
            <div className="flex justify-between items-center ">
              <div className="overflow-y-auto w-full p-6">
                <div className="">
                  <h4 className="text-2xl/tight text-gray-800 font-bold mb-2">
                    Contact us
                  </h4>
                  <p className="text-base font-medium text-gray-500 capitalize mb-6">
                    Our design projects are fresh and simple and will benefit
                    your business greatly. Learn more about our work!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
