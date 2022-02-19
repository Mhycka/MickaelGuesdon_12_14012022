import { PieChart, Pie } from 'recharts';
import PropTypes from 'prop-types'


/** Piechart Component. It checks the presence of props.data.score, if not props.data.todayScore take its place.
 * * @param {object} data - the fetched userdata
*/
export default function Piechart(props) {

    var result;
    if (props.data.score){
         result = {score: props.data.score*100}
    } else {
         result = {score: props.data.todayScore*100}  
    }

    let scoreData=[]
    scoreData.push(result)
    let angleStart=90;
    let angleFinish= (angleStart+ (result.score*3.6))

    return (
        <div id ="pieChart"className="card">
            <div id="resultTitle">Score</div>
            <PieChart width={258} height={263}>
            
            <Pie data= {scoreData} dataKey="score"startAngle={angleStart} endAngle={angleFinish} cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#f00"/>
            </PieChart>
            <div id="result"><p id="resultscore">{result.score}%</p><p>de votre objectif</p></div>
      </div>
    );
}

Piechart.propTypes = {
    props: PropTypes.object,
}