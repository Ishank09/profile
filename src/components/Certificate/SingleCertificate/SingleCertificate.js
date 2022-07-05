
import React,{ useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../../contexts/ThemeContext';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleCertificate.css';

function SingleCertificate(
    { id,
    issuingOrganization,
    fullCertificateName,
    name,
    issueDate,
    credentialId, 
    credentialUrl,
    issuingOrganizationLogo
    }) {

        const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleCertificate'
                style={{ backgroundColor: theme.primary400} }
            >
                  
                <div className='certificateContent' >

                <Tooltip title={fullCertificateName}>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                       {name}
                    </h2>

                    </Tooltip>
                    <img src={issuingOrganizationLogo} style={{width:250 , height:100}} alt={issuingOrganization}></img>

                  
                    {/* <h3
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary80 }}
                    >
                        {issuingOrganization}
                    </h3>
                   */}

                    <h5
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary80 }}
                    >
                        {issueDate}
                    </h5>

                    <a
                        href={credentialUrl}
                        target='_blank'
                        title={credentialId}
                        rel='noreferrer'
                        style={{color: theme.tertiary}}
                    >
                    <h3 >View Certificate</h3>
                    </a>
         
              
                    <div className='certificate--showcaseBtn'>
                 
                    </div>
                </div>
         
              
   
            </div>
        </Fade>
    );
}

export default SingleCertificate;
