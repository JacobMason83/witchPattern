// import { useState } from 'react'
import { ProductData } from '../../data/productData'

const  ProductDisplay = () => {
    
    return(
        <div className="ProductDisplay">
            {ProductData.map(item => {
                return (
                <div className="ProductCard">
                    <div className="ProductCardWrapper">
                        <img src={item.img} alt="productnotshowing" />
                        <div className="ProductCardInfo">
                            <p className="ProductDescription">
                                {item.description}
                            </p>
                        </div>
                        <h3 className="ProductPrice">
                            {item.price}
                        </h3>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ProductDisplay
