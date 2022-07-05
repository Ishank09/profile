import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Publication.css'
import PublicationCard from './PublicationCard';

import { publicationData } from '../../data/publicationData'

function Publication() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="publication" id="publications" style={{backgroundColor: theme.secondary}}>
           
            <div className="publication-body">
                <div className="publication-description">
                <h1 style={{color:theme.primary}}>Publications</h1>
                    {publicationData.map(edu => (
                        <PublicationCard 
                            key={edu.id}
                            id={edu.id}
                            name={edu.name}
                            journal={edu.journal}
                            publicationDetails={edu.publicationDetails}
                            startYear={edu.startYear}
                            description={edu.description}
                            link={edu.link}
                        />
                    ))}
                </div>
                <div className="publication-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Publication
