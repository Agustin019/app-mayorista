import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Formulario({ 
    handleChangeArchivo,
    camposProducto,
    setCamposProducto,
    inputFileRef,
    imagenUrl 
}) {


    const categorias = [
        'Bijou',
        'Electro',
        'Marroquinería',
        'Cosmética',
        'Packaging',
        'Pelo',
        'Relojería',
        'Librería',
        'otros'
    ]

    return (
        <>
{/*  En el onChange se crea una copia del objeto actual  y se reemplaza el campo seleccionado por el valor nuevo del input*/}
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Producto"
                    name="nombre"
                    value={camposProducto.nombre}
                    onChange={(e) => setCamposProducto({...camposProducto,nombre: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="precio"
                >Precio:</label>
                <input
                    id="precio"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio del Producto"
                    name="precio"
                    value={camposProducto.precio}
                    onChange={(e) => setCamposProducto({...camposProducto,precio: e.target.value})}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="descripcion"
                >Descripcion:</label>
                <input
                    id="descripcion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Descripcion del Producto"
                    value={camposProducto.descripcion}
                    onChange={(e) => setCamposProducto({ ...camposProducto, descripcion: e.target.value })}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800 "
                    htmlFor="categoria"
                >Seleccionar categoria:</label>
                <select
                    name="categoria"
                    id="categoria"
                    className='w-full py-3 text-center'
                    value={camposProducto.categoria}
                    onChange={(e) => setCamposProducto({ ...camposProducto, categoria: e.target.value })}
                >
                    <option value="">-- Seleccione la Categoria --</option>
                    {
                    categorias.map((categoria, i) =>(<option key={i} value={categoria}>{categoria}</option>))
                    }
                </select>

            </div>
            <div className="mb-4">
                {
                    imagenUrl === null &&
                    <img src={camposProducto.imagen} className='h-40 w-32 py-3 mx-auto' alt={`Imagen del producto ${camposProducto.nombre}`} />
                }
                <label
                    className="text-gray-800"
                    htmlFor="imagen"
                >Seleccionar imagen</label>
                <input
                    id="imagen"
                    type="file"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Selecciona la imagen"
                    name="imagen"
                    ref={inputFileRef}
                    onChange={(e) => { 
                        handleChangeArchivo(e), 
                        setCamposProducto({ ...camposProducto, imagen: e.target.files[0].name }) 
                    }}
                />
            </div>

        </>
    )
}
