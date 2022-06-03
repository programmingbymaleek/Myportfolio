import ServicesData from "./myservicesdata";
import './myservice.style.scss'
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
const Myservices = () => {

  // const [data, setData] = useState(ServicesData);

  return (<div className="container-fluid  myService">
    <div><h1 className="display-4" style={{ textAlign: 'center' }}>My services</h1></div>
    <div className="service-wrapper">
      {ServicesData.map((s) => (
        <div className="s-icon">
          <div className="s-main">
            <div className="s-icon-before"></div>
            <div className="s-icon-after">
              <div className="icon-bg icon-spin"><FontAwesomeIcon icon={s.icon} className={'i'} /></div>
              <div className="s-title">{s.title}</div>
              <div className="s-info">{s.info}</div>

            </div>
          </div>


          {/*  */}
        </div>
      ))}
    </div>




  </div>)
}

export default Myservices