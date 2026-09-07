import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Asadullah Shahbaz | Backend Software Engineer</title>
          <meta
            name="description"
            content="Asadullah Shahbaz is a Software Engineer specializing in Backend and Full-Stack Development with experience in Node.js, Express.js, TypeScript, and MongoDB."
          />
          <meta name="twitter:title" content="Asadullah Shahbaz" />
          <meta property="twitter:url" content="https://asadsdev.vercel.app" />
          <meta
            name="twitter:description"
            content="Asadullah Shahbaz is a Software Engineer specializing in Backend and Full-Stack Development with experience in Node.js, Express.js, TypeScript, and MongoDB."
          />
          <meta property="og:title" content="Asadullah Shahbaz" />
          <meta
            property="og:description"
            content="Asadullah Shahbaz is a Software Engineer specializing in Backend and Full-Stack Development with experience in Node.js, Express.js, TypeScript, and MongoDB."
          />
          <meta property="og:url" content="https://asadsdev.vercel.app" />
          <meta property="og:site_name" content="Asadullah Shahbaz" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
