import { Fragment } from 'react'
import ProductDisplay from "../components/helpers/ProductDisplay"
import { ProductData } from '../data/productData'

const Products = () =>  {
    return (
        <div className='ProductContainer'>
        <div className="first-row" data-aos="fade-right" data-aos-duration="4000"
    data-aos-easing="ease-in-out">
       <ProductDisplay img={`../styles/images/${ProductData[0].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[1].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[2].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[3].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       </div>
       <div className="second-row" data-aos="fade-left">
       <ProductDisplay img={`../styles/images/${ProductData[4].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[5].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[6].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       </div>
       <div className="third-row" data-aos="fade-up">
       <ProductDisplay img={`../styles/images/${ProductData[7].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[8].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[9].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       <ProductDisplay img={`../styles/images/${ProductData[10].img}`} description={ProductData[0].description} price={ProductData[0].price} />
       </div>
        </div>
    )
}

export default Products
