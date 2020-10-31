import React from 'react';
import Resume from "../components/Resume";
import Sidekick from "../components/Sidekick";

function ResumePage(props){
    return(
        <div>
            <Sidekick title={props.title} subTitle={props.subTitle}></Sidekick>
            <Resume/>
        </div>
    )
}

export default ResumePage;