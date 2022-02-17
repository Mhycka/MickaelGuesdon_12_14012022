/** Component of the left sidebar */
function SideBar() {

    return (
        <div className="sidebar">
            <div className="sidebar-div"></div>
            <div className="sidebar-div">
                <div className="icon" id="yoga-icon"></div>
                <div className="icon" id="swim-icon"></div>
                <div className="icon" id="bike-icon"></div>
                <div className="icon" id="lift-icon"></div>
            </div>
            <div className=" sidebar-div copyright">Copiryght, SportSee 2020</div>
        </div>
    )
}
export default SideBar