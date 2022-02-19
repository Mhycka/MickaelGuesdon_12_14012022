import { Link } from 'react-router-dom'


/**Component to render a temporary page to switch between the 2 userId.  */
function Home(){
    return (
        <div className='idCard'>
            <Link to={'/user/12'}><button>id 12</button></Link>
            <Link to={'/user/18'}><button>id 18</button></Link>
        </div>
        )
}

export default Home