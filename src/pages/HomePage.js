import React from 'react';
import Hero from '../components/Hero';
import Content from "../components/Content";

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Content>
                <p>Hi, I'm a graduating computer science student at Stevens Institute of Technology (2020) in Hoboken, New Jersey and I love to tinker, break down, and reverse engineer anything and everything.</p>
                <p>In my free time I enjoy working on side projects, building model aircraft, and finding new creative outlets.</p>
                <p>Recently discovered an allergy to cashews.</p>
            </Content>
        </div>

    )
}

export default HomePage;