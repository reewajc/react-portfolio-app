import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import JokesSetup from './JokesSetup'
import axios from 'axios'
import Loading from './Loading'


export default function Jokes() {
    const url = 'https://v2.jokeapi.dev/joke/Programming'
    const [jokes, setJokes] = useState()
    const [loading, setLoading] = useState(true)

    // const getJokes = async () => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setJokes(data)
    //     setLoading(false)
    // }

    const getJoke =  () => {
        axios.get(url)
            .then(res => {
                setJokes(res.data)
                setLoading(false)
            })
    }

    //Get jokes using fetch

    useEffect(() => {
        getJoke()
    }, [url])


    const getAnotherJoke =  () => {
        return (
            getJoke()
        )
    }

    return (
        <Fragment>
            {loading ? <Loading/> :

                <JokesSetup setup={jokes.setup} delivery={jokes.delivery} getAnotherJoke={getAnotherJoke} />
            }
        </Fragment>



    )



}
