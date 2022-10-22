import './Chart.css'
import ChartBar from './ChartBar'
const Chart=(props)=>{
    const maximum=props.datapoints.map(expenses=>expenses.value);
    const totalmaximum=Math.max(...maximum);
    return (<div className='chart'>
        {props.datapoints.map(datapoint=>{
            return(
            <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxvalue={totalmaximum}
            label={datapoint.label}
            />)
        })}
    </div>)
}
export default Chart;