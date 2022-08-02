import React, { useContext } from 'react';

import './Volunteer.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { volunteerData } from '../../data/volunteerData'


function Item({bullet,description}) {
    const { theme } = useContext(ThemeContext);
    return <li>
        <b  style={{color:theme.primary, textAlign: 'justify'}}>{bullet}</b> : 

        {<p style={{color:theme.tertiary, textAlign: 'justify'}}>{description} <br/></p> }
        <br/>
        </li>;
  }
function Volunteer() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="volunteer" id="volunteer" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="volunteer-body">
                <div className="volunteer-description">
                    
                <h2 style={{color: theme.primary}}>{volunteerData.title}</h2>

                <ul>  {volunteerData.points.map(exp =>(
                        
                        <Item 
                        bullet={exp.bullet}
                        description = {exp.description}/>
                    ))}
  </ul>
    
         
            
                    {/* <p style={{color:theme.tertiary80, textAlign: 'justify'}}>{volunteerData.description1}<br/><br/>{volunteerData.description2}<br/><br/>{volunteerData.description3}</p> */}
                </div>
                <div className="volunteer-img">
                    <img 
                        src={volunteerData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default Volunteer
