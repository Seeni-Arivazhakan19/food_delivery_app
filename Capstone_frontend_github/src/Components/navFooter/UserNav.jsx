import "../navFooter/UserNav.css"

export default function Usernav(){

        return <>
        
        <div className="nav">
        <div className="appname">
          <a href="/">Tomato</a>
        </div>
        <div className="options">
          <ul>
            <li><a href="/login">Logout</a></li>
          </ul>
        </div>
      </div>

        </>

}