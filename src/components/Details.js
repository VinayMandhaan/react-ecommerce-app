import React, { Component } from 'react'
import {ProductConsumer} from "../context"
import {Link} from "react-router-dom"
import {ButtonContainer} from "./Button"

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                  const{id,company,img,title,info,price,inCart} =   value.detailProduct;
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                             <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img className="img-fluid" src={img} alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className=" text-uppercase text-muted mt-3 mb-2">
                                        Manufacturer: {company}
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price <span></span>
                                            {price}
                                        </strong>
                                    </h4>   
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Features
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back To Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart
                                            disabled={inCart?true:false}
                                            onClick={()=>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}
                                        >
                                            {inCart?'inCart':'Add To Cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>

                             </div>
                        </div>
                    )
                }}
                
            </ProductConsumer>
        )
    }
}
