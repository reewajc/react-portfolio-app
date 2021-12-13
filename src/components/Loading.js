import React, { Fragment } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import './Loading.css'

function Loading() {
    return (
    

        <Button variant="primary loading" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="lg"
            role="status"
            aria-hidden="true"
          />
            Loading... 
        </Button>
      
    )
}

export default Loading
