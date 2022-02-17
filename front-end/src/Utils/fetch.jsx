import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/** 
 * Fetch the data of the 2 users. There are 4 url to fetch for the multiple charts and the hero section
 * @param {string} id - The id in the url, it depends of the current user
 */

function Fetch(id){
   
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [userdata, setData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);
    const [activityData, setActivityData] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              setData(result.data);
         
              return (fetch (`http://localhost:3000/user/${id}/average-sessions`))
            },
            (error) => {
              setError(error);
              setIsLoaded(true);
            }
          )
          .then(res => res.json())
          .then(
            (result) => {
              setAverageSessionsData(result.data);
              return (fetch (`http://localhost:3000/user/${id}/performance`))        
            },
            (error) => {
              setError(error);
              setIsLoaded(true);
              
            }
           )
           .then(res => res.json())
          .then(
            (result) => {
              setPerformanceData(result.data);
              return (fetch (`http://localhost:3000/user/${id}/activity`))        
            },
            (error) => {
              setError(error);
              setIsLoaded(true);
              
            }
           )
           .then(res => res.json())
           .then(
             (result) => {
               setActivityData(result.data);
               setIsLoaded(true);
                     
             },
             (error) => {
               setError(error);
               setIsLoaded(true);
               
             }
            )

      },[id] )
      return { userdata, averageSessionsData,performanceData,activityData, isLoaded, error };
}

Fetch.propTypes = {
  id: PropTypes.string
}

export default Fetch