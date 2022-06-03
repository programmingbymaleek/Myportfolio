import './portfolio.scss'
import EccommceCover from '../../dental_ecommence_site_cover.png'
const Portfolio = () => {

  return (<div className="container">
    <div className="top">
      <div className="project1">
        <div className='pro-display'>
          <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
        </div>
        <h1>STATUS:<span>Still Under development</span></h1>
        <div>
          <p>Web development tools used: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>JavaScript Libery :
              <ul>
                <li>React</li>
              </ul>
            </li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div className="project2">
        <div className='pro-display'>
          <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
        </div>
        <h1>STATUS:<span>Still Under development</span></h1>
        <div>
          <p>Web development tools used: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>JavaScript Libery :
              <ul>
                <li>React</li>
              </ul>
            </li>
            <li>Firebase</li>
          </ul>
        </div>

      </div>
    </div>
    <div className="buttom">
      <div className="project3">
        <div className='pro-display'>
          <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
        </div>
        <h1>STATUS:<span>Still Under development</span></h1>
        <div>
          <p>Web development tools used: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>JavaScript Libery :
              <ul>
                <li>React</li>
              </ul>
            </li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>

  </div>)
}
export default Portfolio; 