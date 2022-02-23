import React,{useEffect, useState} from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import PropTypes from 'prop-types'

/** Component of the radarchart. UseEffect optimize the data's kind number to string for better user experience 
 * @param {object} data - the fetched userdata
*/
function Radarchart ({data}) {

    const [load,setLoad]=useState(false)

    //it changes the different numbers of the sessions data to be explicit for the user
    useEffect(() => {
        const dataTable=['Cardio','Energie','Endurance','Force','Vitesse','Intensité']
        data.map((item)=>(item.kind=dataTable[item.kind -1] ))
        setLoad(true)
    },[data])
   
    return load && (
        <div id ="radarChart"className="card">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" width={248} height={255} data={data} startAngle={30} endAngle={-330} >
                <PolarGrid/>
                <PolarAngleAxis dataKey="kind" fontSize="12" color="white" />
                <PolarRadiusAxis />
                <Radar dataKey="value" stroke="white" fill="red" fillOpacity={0.6} />
            </RadarChart> 
        </div>
    )
}

Radarchart.propTypes={
    data: PropTypes.array
}

export default Radarchart