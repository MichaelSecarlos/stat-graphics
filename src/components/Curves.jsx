import { useEffect } from 'react'

const Curves = ({ casesData }) => {

    const totalLine = casesData.map(item => item.TotalCases).reverse()
    const deathLine = casesData.map(item => item.TotalDeaths).reverse()
    const recovLine = casesData.map(item => item.TotalRecovered).reverse()

    const labels = casesData.map(item => item.Country).reverse()
    useEffect(() => {
        Plotly.newPlot('curves', [
            {
                x: labels,
                y: totalLine,
                mode: 'lines',
                name: 'Total cases'
            },
            {
                x: labels,
                y: deathLine,
                mode: 'lines',
                name: 'Total deaths'
            },
            {
                x: labels,
                y: recovLine,
                mode: 'lines',
                name: 'Total recovered'
            }
        ])
    }, [])

    return (
        <div id="curves">
        </div>
    )
}

export default Curves 