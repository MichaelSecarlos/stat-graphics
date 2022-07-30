import { useEffect } from 'react'

const Heatmap = ({ casesData }) => {
    const x_data = casesData.map(item => item.Country)
    const y_data = ['Cases', 'Deaths', 'Recovered']
    const z_data = casesData.map(item => {
        let temp = [item.TotalCases, item.TotalDeaths, item.TotalRecovered]
        return temp
    })
    useEffect(() => {
        Plotly.newPlot('heatmap', [
            {
                z: z_data,
                x: y_data,
                y: x_data,
                type: 'heatmap',
                hoverongaps: false
            }
        ])
    }, [])

    return (
        <div id="heatmap">
        </div>
    )
}

export default Heatmap