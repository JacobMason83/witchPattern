import { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import {ProductData} from '../../data/productData';

const ProductDisplay = (props) => {
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        setDescription(props.description);
        setImg(props.img)
        setPrice(props.price)
    },[])
  return (
      <div className="ProductDisplay">
      <CardGroup >
          <Card
            style={{
              width: '15rem',
              marginRight: 'auto',
              marginLeft: 'auto',
              border: '5px solid black',
              marginBottom: '2em',
            }}
          >
            <Card.Img
              variant="top"
              src={img}
            />
            <Card.Body>
              <Card.Title>Price: {price}</Card.Title>
              <Card.Text> Description: {description}</Card.Text>
            </Card.Body>
          </Card>
    </CardGroup>
    </div>
  );
};

export default ProductDisplay;
