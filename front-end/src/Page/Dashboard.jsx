import Char from '../Components/Char';
import Fetch from '../Utils/fetch';
import { useParams } from "react-router-dom";
import Linechart from '../Components/Linechart';
import Piechart from '../Components/Piechart';
import Radarchart from '../Components/Radarchart';
import Barchart from '../Components/Barchart';
import AsideCard from '../Components/AsideCard';


/** Component of the dashboard. It collect the id in the url page, and do a fetch. A loading page is displayed during the fetch. Throw error if needed */
function App (){ // 


    //Router
        //Accueil -> choix de l'utilisateur
            //User -> affiché donnée user

    const { id } = useParams();
   
    const { userdata, averageSessionsData,performanceData, isLoaded,activityData, error } = Fetch(id)

    if (error) {
        return (<div className="error-message"><i class="fas fa-exclamation-triangle fa-5x"></i><div >Veuillez réactualiser la page...</div></div>);
    } else if (!isLoaded) {
        return <div className="container"><div className="loading">Chargement...</div></div>;
    }else if (isLoaded && (userdata ||activityData ||averageSessionsData ||performanceData )){
        return (
            <div className="container">
                <Char name={userdata.userInfos.firstName}/>
                <main>
                    <article>
                        <div className="dailyactivity">
                        <Barchart data={activityData.sessions}/>
                        </div>
                        <div className="card-div">
                            <Linechart data={averageSessionsData.sessions} />
                            <Radarchart data={performanceData.data} />
                            <Piechart data={userdata} />
                        </div>
                    </article>
                    <aside>
                        <AsideCard id={"calories"} data={userdata.keyData.calorieCount} nutriment={"Calories"} type={"kCal"}/>
                        <AsideCard id={"proteines"} data={userdata.keyData.proteinCount} nutriment={"Proteines"} type={"g"}/>
                        <AsideCard id={"glucides"} data={userdata.keyData.carbohydrateCount} nutriment={"Glucides"} type={"g"}/>
                        <AsideCard id={"lipides"} data={userdata.keyData.lipidCount} nutriment={"Lipides"} type={"g"}/>
                    </aside>
                </main>
            </div>
        )
    }else if (isLoaded &&(!userdata ||!activityData ||!averageSessionsData ||!performanceData )){
        return (<div className="error-message"><i class="fas fa-exclamation-triangle fa-5x"></i><div >L'utilisateur n'existe pas !</div></div>);
    }
}

export default App