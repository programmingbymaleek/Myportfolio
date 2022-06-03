import './header.style.scss'
import Typed from 'react-typed';
import Custombutton from '../button/button';
const Header = () => {


  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Hi there, My name is wisdom</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Email Template", "Web Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop={true} />
        <Custombutton />
      </div>
    </div>
  )
}

export default Header; 