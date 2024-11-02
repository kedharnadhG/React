import React, {useState, useEffect} from "react";
import Axios  from "axios";
import {faker} from "@faker-js/faker"
import { Container, Col, Row } from "reactstrap";

import CartItem from "./CartItem";

const apikey = "Insert_Your_Key_Here";
//we need api key here, (for to get that sign_up and request api_key)
const url= "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

//if you give json-data in jsonserve website, it will give an api url
// const localurl = "https://api.jsonserve.com/cqcDnp"
//   1. npm install -g json-server
//   2. json-server --watch PEXELS.json --port 5000
// 3.const localurl = "http://localhost:5000/photos";
const localurl = "http://localhost:5000/photos";


const BuyPage = ({addInCart}) =>{
    const [product, setProduct]= useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apikey
    //         }
    //     });
    // };

    const fetchPhotos = async () => {
        const photos = await Axios.get(localurl);    
    
        //const {photos} = data;

        const allProduct = photos.data.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.word.sample(),
            productPrice: faker.commerce.price(),
            id: faker.string.uuid()
        }))

        setProduct(allProduct);

    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return(
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>

    )


};

export default BuyPage;