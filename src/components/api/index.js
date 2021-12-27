import axios from 'axios'
import React, {useEffect} from 'react'

function index({setData, link}) {

    useEffect(() => {
        axios.get(link)
        .then(response => {
            setData(response.data)
        }).catch('Some error occurred')
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default index
