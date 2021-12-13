import React from 'react'
import { useState, useEffect } from 'react'
import {Fragment} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Loading from './Loading';
import ProductCard from './ProductCard';

function Products() {
    const [products, setproduct] = useState();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')

            .then(res => res.json())
            .then(data => {
                setproduct(data)
                setloading(false)
            })  
    }, [])
    return (
        <Fragment >
           
         <Container>
             <Row>
                <h2> API Used:  <a href="https://fakestoreapi.com" style={{textDecoration:'none', color:'white'}}> Fake Store </a> </h2>
               {loading ? <Loading/> :  products.map(item => (
               <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <ProductCard key={item.id} image={item.image} title={item.title} description={item.description}/> 
                </Col>
            ))}
             </Row>
         </Container>
          
       
    </Fragment>
    )
}

export default Products
