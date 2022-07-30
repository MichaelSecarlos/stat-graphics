import { useEffect, useState } from 'react'
import Heatmap from './Heatmap'
import Curves from './Curves'
import config from '../Config'

const Container = () => {
    const [data, setData] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': config.RAPID_KEY,
            'X-RapidAPI-Host': config.RAPID_HOST
        }
    }
    useEffect(() => {
        async function fetchData() {
            fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica', options)
                .then(response => response.json())
                .then(response => {
                    setData(response)
                })
                .catch(error => {
                    console.err(error)
                })
        }
        fetchData()
    }, [])
    return (
        <div>
            <Heatmap casesData={data} />
            <Curves casesData={data} />
        </div>
    )
}

export default Container
