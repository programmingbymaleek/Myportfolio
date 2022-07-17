import './profile.scss'
import styled from 'styled-components'
const Profile = () => {

  return (<>
    <div className="profile-pic">
      <div className='pro-pic-outter'>
        <div className='pro-pic'></div>
      </div>
    </div>
    <div className="profile">
      <div className='profile_container'>
        <div className='display-5 p-2'>About me</div>
        <About>
          <p className='p-2'>Hi There, my name is Wisdom Maliki, I am a software developer and also a graduate of computer science. It's been over two years I am working as a software developer.<br />I have used technologies like html, css, javascript and react to produce amazing responsive web application over the years. I also have great experience using javascript ES6 features,redux, GraphQL etc. Other technologies I have used as a web developer are: firebase Mysql, phyton Django and PHP for backend. I have also created mobile applications using Java and Mysql as the database. Whether is small scale web application, large Scale web application, E-commerce web applications, Mobile Applications  or simply just working with APIs or any other external data source, I got you covered. Take a look at some of my  sample projects down below, from simple basic web apps and Api usage to a broader Dental E-commerce web app which is still ongoing. Teaching is another fun thing I like to do so I do have a youbtube channel where I teach other developers like myself programming.  </p>
        </About>
      </div>
    </div>
  </>)
}

export default Profile;

const About = styled.div`
font-size:1.3rem;
`