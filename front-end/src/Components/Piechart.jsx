import { PieChart, Pie } from 'recharts';
import PropTypes from 'prop-types'


/** Piechart Component. It checks the presence of props.data.score, if not props.data.todayScore take its place.
 * * @param {object} data - the fetched userdata
*/
export default function Piechart(props) {

    var score;
    if (props.data.score){
         score = {score: props.data.score*100}
    } else {
         score = {score: props.data.todayScore*100}  
    }

    let scoreData=[]
    scoreData.push(score)
    let startangle=90;
    let endangle= (startangle+ (score.score*3.6))

    return (
        <div id ="piechart"className="card">
            <div id="score-title">Score</div>
            <PieChart width={258} height={263}>
            
            <Pie data= {scoreData} dataKey="score"startAngle={startangle} endAngle={endangle} cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#f00"/>
            </PieChart>
            <div id="result"><p id="resultscore">{score.score}%</p><p>de votre objectif</p></div>

      </div>
    );
}

Piechart.propTypes = {
    props: PropTypes.object,
}