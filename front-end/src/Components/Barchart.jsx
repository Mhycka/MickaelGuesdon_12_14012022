import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types'


/** Component for the linechart. It personnalises the tooltip */

function CustomTooltip2({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kCal`}</p>
       
      </div>
    );
  }

  return null;
}

 
/** Barchart Component. The days are changed to fit in the chart.
 *  @param {object} data - the fetched userdata
 */
function Barchart({data}){

    return  ( 
        <React.Fragment>
        <div className="activity-title">Activité quotidienne</div>
        <ResponsiveContainer  minWidth={745} width='100%' height={290}>
        <BarChart
         width='100%'
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={7}
          barGap={8}
          
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis hide yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis  yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip content={<CustomTooltip2 />}cursor={{ stroke: 'rgba(224,224,224,0.3)'}} contentStyle={{color:'white', backgroundColor:'red'}}wrapperStyle={{ width: 45, height: 63,fontSize: 10, color:'white', backgroundColor:'red'}}/>
          <Legend   padding="1000" iconSize={8} iconType="circle"verticalAlign="top"  height={66} />
          <Bar name="Poids(kg)" yAxisId="right" dataKey="kilogram" radius={[3.5, 3.5, 0, 0]} fill="#282d30" />
          <Bar name="Calories brûlées (kCal)"yAxisId="left" dataKey="calories" radius={[3.5, 3.5, 0, 0]} fill="red" />
        </BarChart>
        </ResponsiveContainer>
        </React.Fragment>
    )
}

Barchart.propTypes = {
  data:PropTypes.array
}

export default Barchart