import React from 'react'
import { Fragment } from 'react'

function ProductCard(props) {

    //write a function to display only three sentences of the description
    const description = (description) => {
        let sentences = description.split('.')
        let newDescription = []
        for (let i = 0; i < 3; i++) {
            newDescription.push(sentences[i])
        }
        return newDescription.join('.')
    }

    return (
     
           
            <div classNameName= "card col-lg-3" >
                <div className="card-body">
                <img className="card-img-top" style={{height:300, width:250, display:'block', marginLeft:'auto', marginRight:'auto', borderRadius:'25px'}} src={props.image} alt="Card image cap" />

                    <h4 className="card-title">{props.title}</h4>
                    {/* <p className="card-text">
                       {description(props.description)}
                    </p> */}
                   
                </div>
                <button href="#" className="btn btn-primary col-lg-3">Buy</button>
            </div>
           
     
    )
}

export default ProductCard
