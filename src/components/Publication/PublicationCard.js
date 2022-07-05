import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Publication.css'

function PublicationCard({ id, name, journal, publicationDetails, startYear,description, link }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{name}</h4>
                    <h5 style={{color: theme.tertiary80}}>{journal}</h5>
                    <h6 style={{color: theme.tertiary80}}>{publicationDetails}</h6>
                    <p style={{color: theme.tertiary80}}>{description}</p>
                    <text>{"\n"} {"\n"}
                    
                    
                    
                    </text>
                    <a
                        href={link}
                        target='_blank'
                        title={name}
                        rel='noreferrer'
                        style={{color: theme.tertiary}}
                    >
                    <h6 >View Certificate</h6>
                    </a>
         
                </div>
            </div>
        </Fade>        
    )
}

export default PublicationCard
