import React from 'react'

export default function GaleriaImgInicio() {
    return (
        <>
            <section className="flex flex-col p-10  w-full col-span-2 ">
                <div className="w-full text-center">
                    <h2 className=" font-semibold text-3xl text-center text-blanco px-10 pt-20 mt-10 w-full">
                        ¿Qué productos ofrecemos?
                    </h2>
                    <div className="w-16 font-monsterrat border-2 border-secundario font-medium  text-base my-6 mx-auto"></div>
                </div>
                Imagenes



                <article className="flex flex-col md:flex-row md:h-[638px] md:gap-8 mx-10">
                    <div className="relative overflow-hidden w-full h-72 md:h-full flex rounded-xl md:w-1/3 mb-10">
                    
                        <img
                            className="absolute top-0 left-0 w-full h-full  transition-transform duration-300 transform origin-center hover:scale-110"
                            src="https://i.ibb.co/J2ZBnGy/unsplash-uf-IDew-I6i-Q-min.jpg"
                            alt="Accesorios de Acero"
                        />
                        <h3 className="p-6 abslute bottom-2 z-[5] font-semibold text-2xl text-blanco self-end ">
                            Accesorios de Acero
                        </h3>
                    </div>
                    <div className="md:h-full md:flex  flex-col md:gap-8 md:w-1/3">
                        <div className="relative overflow-hidden w-full h-72 flex  rounded-xl mb-10 md:h-1/3 md:mb-0">
                            <img
                                className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform origin-center hover:scale-110"
                                src="https://i.ibb.co/59VRZPh/image-15-min.jpg"
                                alt="Accesorios de Plata"
                            />
                            <h3 className="p-6 abslute bottom-2 z-[5] font-semibold text-2xl text-blanco self-end ">
                                Accesorios de Plata
                            </h3>
                        </div>
                        <div className="relative overflow-hidden  bg-cover w-full h-72 flex flex-row  rounded-xl mb-10 md:h-2/3 md:mb-0">
                            <img
                                className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform origin-center hover:scale-110"
                                src="https://i.ibb.co/pdVP5C3/unsplash-Foe-IOgzt-CXo-min.jpg"
                                alt="Maquillaje"
                            />
                            <h3 className="p-6 abslute bottom-2 z-[5] font-semibold text-2xl text-blanco self-end ">
                                Maquillaje
                            </h3>
                        </div>
                    </div>
                    <div className="md:h-full md:flex flex-col md:gap-8 md:w-2/4">
                        <div
                            className=" relative overflow-hidden w-full h-72 flex flex-row  rounded-xl mb-10 md:mb-0"

                        >
                            <img
                                className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform origin-center hover:scale-110"
                                src="https://i.ibb.co/sH11x34/image-17-min.jpg"
                                alt="Marroquineria"
                            />
                            <h3 className="p-6 abslute bottom-2 z-[5] font-semibold text-2xl text-blanco self-end">
                                Marroquineria
                            </h3>
                        </div>
                        {/**   Textil */}
                        <div
                            className=" w-full h-72 flex flex-row rounded-xl mb-10 md:mb-0 md:h-96 relative overflow-hidden"  >
                            <img
                                className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform origin-center hover:scale-110"
                                src="https://i.ibb.co/LppTftS/unsplash-7c-ERndk-Oy-Dw-min.jpg"
                                alt="Textil"
                            />
                            <h3 className="p-6 abslute bottom-2 z-[5] font-semibold text-2xl text-blanco self-end">
                                Textil
                            </h3>
                        </div>

                    </div>

                </article>
            </section>
        </>
    )
}