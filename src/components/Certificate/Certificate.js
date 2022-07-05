import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { certificateData } from '../../data/certificateData'
import { HiArrowRight } from "react-icons/hi";

import './Certificate.css'
import SingleCertificate from './SingleCertificate/SingleCertificate';

function Certificate() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {certificateData.length > 0 && (
                <div className="certificate" id="certificate" style={{backgroundColor: theme.secondary}}>
                    <div className="certificate--header">
                        <h1 style={{color: theme.primary}}>Certificate</h1>
                    </div>
                    <div className="certificate--body">
                        <div className="certificate--bodyContainer">
                        {certificateData.slice(0,3).map(exp =>(
                        

         
                        
                        <SingleCertificate
                            key={exp.id}
                            id={exp.id}
                            issuingOrganization={exp.issuingOrganization}
                            name={exp.name.length > 33 ?`${exp.name.substring(0, 30)}...` : exp.name}
                            issueDate={exp.issueDate}
                            credentialId={exp.credentialId}
                            credentialUrl={exp.credentialUrl}
                            issuingOrganizationLogo={exp.issuingOrganizationLogo}
                            />
                    ))}
                        </div> 

                        {certificateData.length > 3 && (
                            <div className="certificate--viewAll">
                                <Link to="/certificate">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Certificate
