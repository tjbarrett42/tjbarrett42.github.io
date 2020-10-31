import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Timothy Barrett',
            headerLinks: [
                { title: 'Home', path: '/'},
                { title: 'Projects', path: '/projects'},
                { title: 'Experience', path: '/experience'},
                { title: 'Resume', path: '/resume'},
                { title: 'Contact', path: '/contact'}
            ],
            home: {
                title: 'Hi, Tim here',
                subTitle: 'I like to ski fast and type faster.'
            },
            projects: {
                title: 'Projects',
                subTitle: 'Some things Ive worked on:'
            },
            experience: {
                title: 'Work Experience'
            },
            resume: {
                title: 'Resume',
                subTitle: 'Grab the latest version below:'
            },
            contact: {
                title: 'Say hello',
                subTitle: 'Want to get in touch?'
            }
        }
    }

    render() {
        //Would put navbar in container, but freaks out, likely a DOM issue
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar  expand="lg" sticky="top">
                        <Navbar.Brand>Timothy Barrett</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/projects">Projects</Link>
                                <Link className="nav-link" to="/experience">Experience</Link>
                                <Link className="nav-link" to="/resume">Resume</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>}/>
                    <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle}/>}/>
                    <Route path="/experience" render={() => <ExperiencePage title={this.state.experience.title} /> } />
                    <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} subTitle={this.state.resume.subTitle} /> } />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />}/>

                    <Footer />

                </Container>
            </Router>
        );
    }
}

export default App;
