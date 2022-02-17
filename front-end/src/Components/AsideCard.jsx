import PropTypes from 'prop-types'

/** Aside card with fetched props, the component is reusable, and display according the props to make differents cards
 * @param {string} id- give an id for the css
 * @param {number} data- fetched amount of kcal or g
 * @param {string} type- kcal or g 
 * @param {string} nutriment- calories or proteines or glucides or lipides
 */
function AsideCard({id,data,nutriment,type}){

    return (
        <div className="aside-card">
                            <div className="icon-container">
                                <div id={id}></div>
                            </div>
                            <div>
                                <p className="nutriment-data">{data}{type}</p>
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