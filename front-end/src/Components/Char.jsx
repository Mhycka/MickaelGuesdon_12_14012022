import PropTypes from 'prop-types'

/**Char component
 * @param {string} name- User's name
 */
function Char ({name}){

    return (
        <div className="char">
            <div>  
                <span className="title">Bonjour</span><span className="title redTitle"> {name}  </span>
            </div>  
            <p>Félicitation ! Vous avez explosé vos objectifs hier  !👏</p>
        </div>
    )
}

Char.propTypes = {
    name: PropTypes.string
}

export default Char