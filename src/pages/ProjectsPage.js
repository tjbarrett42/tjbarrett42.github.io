import React from 'react';
import Sidekick from "../components/Sidekick";
import Carousel from "../components/Carousel";

function ProjectsPage(props){
    return(
        <div>
            <Sidekick title={props.title} subTitle={props.subTitle}></Sidekick>
            <Carousel/>
        </div>
    )
}

export default ProjectsPage;