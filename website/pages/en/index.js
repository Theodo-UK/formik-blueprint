/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Detailed Docs</Button>
            <Button href={docUrl('doc2.html')}>API</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Contribute = () => (
      <Block background="dark">
        {[
          {
            content:
              'If you love using this library and want to help with it\'s development, please get in touch!',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'left',
            title: 'Contribute!',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Formik and Blueprint.js are highly popular libraries (15k + stars on github each) which are often used together, however, the libraries do not have a simple way of transfering data between them. When developing forms using both, developers have to write custom wrappers in order to make sure the data which is inputted to the form is saved in the way they expect, this can be time consuming and error prone.',
            image: `${baseUrl}img/undraw_both_sides_hbv3.svg`,
            imageAlign: 'right',
            title: 'Why?',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Uses the Formik API to make sure your data is where you want it',
            image: `${baseUrl}img/undraw_next_option_2ajo.svg`,
            imageAlign: 'top',
            title: 'Formik Data',
          },
          {
            content: 'Simply add and style Blueprint inputs',
            image: `${baseUrl}img/undraw_online_art_bgb4.svg`,
            imageAlign: 'top',
            title: 'Blueprint Styling',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <Contribute />
        </div>
      </div>
    );
  }
}

module.exports = Index;
