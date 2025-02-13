import PropTypes from 'prop-types'

/** Aside card with the recovered props, the component is reusable and is displayed according to the props to create different cards
 * @param {string} id- give an id for the css
 * @param {number} data- fetched amount of kcal or g 
 * @param {string} type- kcal or g 
 * @param {string} nutriment- calories or proteines or glucides or lipides
 */
function AsideCard({id,data,nutriment,type}){

    return (
        <div className="asideCard">
            <div className="iconContainer">
                <div id={id}></div>
            </div>
            <div>
                <p className="nutrimentData">{data}{type}</p>
                <p className="nutriment">{nutriment}</p>
            </div>
        </div>
    )
}

AsideCard.propTypes = {
    id: PropTypes.string,
    data:PropTypes.number,
    nutriment:PropTypes.string,
    type:PropTypes.string,
}

export default AsideCard