import React,{useEffect, useState} from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types'



/** Component for the linechart. It personnalises the tooltip */
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
 
/** LineChart Component. The days are changed to fit in the chart.
 * * @param {object} data - the fetched userdata
 */

function Linechart({data}){
  
  const [loadLineChart,setLoad]=useState(false)

  //change the days of the data to be more explicit with the letters of the days
  useEffect(() => {
    const dates=["L","M","M","J","V","S","D"]
    data.map((date)=>(date.day=dates[date.day-1]))
    setLoad(true)
  },[data])

  return loadLineChart &&(
    <div id ="lineChart"className="card">
        <div className="lineChartTitle">Durée moyenne des sessions</div>
        <LineChart  margin={{ top: 5, right: 15, bottom: 5, left: 15 }}width={258} height={263} data={data}>
            <Line type="monotone" dataKey="sessionLength" stroke="#ffb6b6" />
            <XAxis  dataKey="day"  />
            <YAxis  hide={true} type="number" domain={['dataMin', 'dataMax+15']} />                  
            <Tooltip cursor={{ stroke: 'rgba(236,61,61, 0.6)', strokeWidth: 50 }} wrapperStyle={{ width: 40, height: 25,fontSize: 10, backgroundColor: '#FFF',display:'flex',justifyContent:'center',alignItems:'center' }} content={<CustomTooltip />}/>
        </LineChart>
    </div>
  )
}

LineChart.propTypes = {
  data: PropTypes.array
}

export default Linechart