import './portfolio.scss'
import EccommceCover from '../../dental_ecommence_site_cover.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Popup } from 'reactjs-popup';

const Portfolio = () => {

  return (<div className="container">
    <h1 className='portfolio_header'>My portfolio</h1>
    <div className="top">
      <div className="project1">
        <div className='pro-display'>
          <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
          <div className='overflow'></div>
          <FontAwesomeIcon className='portfolio_search_icon' icon={faSearchPlus} />
        </div>
        {/* <h1>STATUS:<span>Still Under development</span></h1> */}
        {/* <div>
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
        </div> */}
        {/* <a href={'https://programmingbymaleek.github.io/buyDentalImagingDigitalProduct/'} target={'_blank'}>Click to access site</a> */}
      </div>
      <div className="project2">
        <div className='pro-display'>
          <img src={EccommceCover} style={{ width: '100%', height: '100%' }} />
          <div className='overflow'></div>
          <FontAwesomeIcon className='portfolio_search_icon' icon={faSearchPlus} />
        </div>
        {/* <h1>STATUS:<span>Still Under development</span></h1>
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
        </div> */}

      </div>
    </div>

    {/* // need to forward ref if you are trying to use a function trigger with React Component

// Works */}
    <Popup
      trigger={open => (
        <button className="button">Trigger - {open ? 'Opened' : 'Closed'}</button>
      )}
      position="right center"
      closeOnDocumentClick
    >
      <span> Loremujighjiegjhrfe</span>
    </Popup>;

    {/* // works too
const CustomButton = React.forwardRef(({ open, ...props }, ref) => (
  <button className="button" ref={ref} {...props}>
    Trigger - {props.open ? 'Opened' : 'Closed'}
  </button>
));

<Popup
  trigger={open => <CustomButton open={open} />}
  position="right center"
  closeOnDocumentClick
>
  <span> Popup content </span>
</Popup>; */}







  </div>)
}
export default Portfolio; 