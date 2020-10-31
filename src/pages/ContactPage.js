import React from 'react';
import Hero from "../components/Hero";
import Contact from "../components/Contact";


function ContactPage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}></Hero>
            <Contact/>
        </div>
    )
}
export default ContactPage;