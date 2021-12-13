import Button from '@restart/ui/esm/Button'
import React, { Fragment } from 'react'

function JokesSetup(props) {

    return (
            <Fragment>
                <pre/>
                <div className="jokes-setup">
                <h1 style={{fontWeight:'bolder'}} className="text-light text-center bg-dark">Jokes from Jokes API</h1>
                <h2 className="text-warning">Caution: Some Jokes might be offensive. I am not liable for the wrong interpretation since the jokes are not owned by me.</h2>
            <p style={{height:'80px'}} >
                <span className="d-block p-2 bg-primary text-white">{props.setup}</span>
            </p>
            <p style={{height:'80px'}}>
                <span className="d-block p-2 bg-warning text-white">{props.delivery}</span>
            </p>

            <button onClick={props.getAnotherJoke} className="btn btn-primary btn-lg">Next Joke..</button> 
            </div>
            </Fragment>
         
       
    )
}

export default JokesSetup
 