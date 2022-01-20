import React from 'react'
import "./Products.scss";

const ProductInfo = (props) => {
    return (
        <div className='product-info'>
            <h5>Información del producto</h5>
            <button >Volver</button>
            <div className="row g-0 py-4 ps-4 pe-3 contenedor-info">
                <div className="col-md-8">
                    <img src={"https://acf.geeknetic.es/imgri/imagenes/tutoriales/1520/1520-asus-tuf-fx504gm-00.jpg?f=webp"} className="img-fluid rounded-start" alt={"imgProd_"+props.product.id}/>
                    <hr className='my-3' />
                    <div>
                        <p>Descripción</p>
                        <p>{props.product.description}</p> 
                    </div>
                </div>
                <div className="col-md-1 "></div>
                <div className="col-md-3">
                    <div className="card-body  info-col pb-5 pt-3">
                        <p className="card-title">{props.product.name.toUpperCase()}</p>
                        <p className="card-title">{props.product.price}</p>
                        <p className="card-text">{props.product.stars} Estrellas</p>
                        <button >Añadir al carrito</button>
                        <button >Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo