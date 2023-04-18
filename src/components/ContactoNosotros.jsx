import React from 'react'

export default function ContactoNosotros() {
  return (
    <section className=" flex flex-col gap-16 w-full bg-blanco col-span-2 sm:flex-row sm:gap-0 sm:w-full md:flex-row md: justify-between md:w-full">
    <div className="text-center mt-10 p-6 sm:w-1/2 sm:text-left sm:px-0 sm:pl-10 md:w-1/2  ">
      <h2 className=" font-bold text-3xl w-full md:my-4 ">¿Querés conocer más de nosotros?</h2>
      <p className=" font-light text-sm w-full my-4 mb-14 ">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
      <a href="http://api.whatsapp.com/send?phone=542644823420" target="_blank">
      <button
        className=" w-full sm:w-1/2
        text-center font-semibold py-4 px-6 
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
        rounded-lg
        "
      >
        Contacto
      </button>
      </a>

    </div>
  </section>
  )
}