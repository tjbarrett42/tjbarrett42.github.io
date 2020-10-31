import React from 'react';
import Experience from "../components/Experience";
import Sidekick from "../components/Sidekick";

function ExperiencePage(props){
    return(
        <div>
            <Sidekick title={props.title}></Sidekick>
            <Experience/>
        </div>
    )
}

export default ExperiencePage;