import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import Carousel from 'nuka-carousel'
// import Media from '../images/370x180/news.jpg'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import Img1 from '../images/1.jpg'
import Img2 from '../images/2.jpg'
//import ImgModel1 from '../images/models/ALLO125EURO4.jpg'
import ImgModel2 from '../images/models/CRUISYM250i.jpg'
import ImgModel3 from '../images/models/CRUISYM300i.jpg'
import ImgModel4 from '../images/models/HD300.jpg'
import ImgModel5 from '../images/models/MAXSYMTL500.jpg'
import ImgModel6 from '../images/models/MIO115CC.jpg'
import ImgModel7 from '../images/models/MOTONH180.jpg'
import ImgModel8 from '../images/models/MOTOWOLF300.jpg'
//import ImgModel9 from '../images/models/ORBITIII125EURO4.jpg'
//import ImgModel10 from '../images/models/TONIK125EURO4.jpg'
import ImgModel11 from '../images/models/X-PRO150.jpg'
import ImgModel12 from '../images/models/MOTONH180.jpg'

import Header from '../components/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 1500,
};

const _handleImageLoaded = () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'))
  }, 0)
}

const IndexPage = ({ data, location }) => {
  return (
    <Layout>
      <Header location={location} />
      <section className="slider-images">
        <Carousel
          withoutControls={false}
          transitionMode="scroll"
          cellAlign="left"
          slidesToShow={1}
          wrapAround
          heightMode="max"
          initialSlideHeight={834}
          slideIndex={0}
        >
          <Img
            onLoad={_handleImageLoaded}
            fluid={data.imageOne.childImageSharp.fluid}
          />
          <Img
            onLoad={_handleImageLoaded}
            fluid={data.imageTwo.childImageSharp.fluid}
          />
          <Img
            onLoad={_handleImageLoaded}
            fluid={data.imageThree.childImageSharp.fluid}
          />
        </Carousel>
      </section>
      <section className="we-are ">
        <div className="container">
          <h2 className="title title--main">
            QUI SOMME NOUS ?
            <span className="title__bold" />
            <span className="line line--title">
              <span className="line__first" />
              <span className="line__second" />
            </span>
          </h2>
          <div className="row">
            <div className="col-sm-6 col-xs-12" dir="rtl">
              <Fade right>
                <div className="we-are__img">
                  <img className="img-responsive" src={Img2} alt="moto" />
                </div>
              </Fade>
              <Zoom>
                <div className="we-are__block triangle triangle--big">
                  <h3 className="title title--block">
                    <span
                      className="title__bold"
                      style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
                    >
                      سيم ألجيريا{' '}
                    </span>
                  </h3>
                  <p
                    className="text"
                    style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
                  >
                    شركة سيم ألجيريا هام موتورز هي شركة مختصة في صناعة الدراجات
                    النارية، وهي شركة منبثقة من شركة ابن عوف رقايقي وشركائه التي
                    تأسست سنة 1997 من طرف مؤسسيها السيدان رقايقي الحامدي وماضي
                    عيسى.
                  </p>
                  <Link
                    to="presentationar"
                    className="btn button button--red button--main"
                  >
                    المزيد
                  </Link>
                </div>
              </Zoom>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="we-are__block triangle triangle--big">
                <h3 className="title title--block">
                  <span className="title__bold">SYM ALGÉRIE MODÈLES</span>
                </h3>
                <p className="text">
                  La société SYM – Algeria HAM MOTORS- est spécialisée dans la
                  fabrication des motocycles. Elle est une filiale de la SARL
                  IBN AOUF REGAIGUI et CIE, créée en 1997 par messieurs REGAIGUI
                  El Hamdi et MADI Aissa.
                </p>
                <Link
                  to="presentation"
                  className="btn button button--red button--main"
                >
                  Lire Plus
                </Link>
              </div>
              <div className="we-are__img">
                <img className="img-responsive" src={Img1} alt="moto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="listings">
        <div className="container">
          <header className="tab-header clearfix">
            <h2 className="title title--main pull-left">
              <span className="title__bold">SYM Algérie </span> Modèles
              <span className="line line--title">
                <span className="line__first" />
                <span className="line__second" />
              </span>
            </h2>
          </header>
          
          <div className="row isotope">
          <Slider {...settings}>
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/maxiscooters/CRUISYM-250i"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel2} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">CRUISYM 250i</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>CRUISYM 250i</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/maxiscooters/CRUISYM-300i"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel3} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">CRUISYM 300i</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>CRUISYM 300i</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="models"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel4} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">HD 300</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>HD 300</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/maxiscooters/MAXSYM-TL-500"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel5} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">MAXSYM TL 500</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>MAXSYM TL 500</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/scooters-115-200/MIO-115CC"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel6} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">MIO 115CC</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>MIO 115CC</h3>
                </div>
              </Link>
            </div> 
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/motos/MOTO-NH-180"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel7} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">MOTO NH 180</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>MOTO NH 180</h3>
                </div>
              </Link>
            </div> 
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/motos/MOTO-NH-180"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel12} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">MOTO NHX 180</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>MOTO NHX 180</h3>
                </div>
              </Link>
            </div>             
            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/motos/MOTO-WOLF-300"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel8} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">MOTO WOLF 300</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>MOTO WOLF 300</h3>
                </div>
              </Link>
            </div> 
  

            <div className="col-md-3 col-xs-6 isotope-item">
              <Link
                to="/models/solution-entreprise/X-PRO-150"
                className="listing-anons equal-height-item listing-anons--home triangle triangle--big line-down no-decoration"
              >
                <div className="listing-anons__img">
                  <img src={ImgModel11} className="img-responsive" alt="bike" />
                </div>
                <div className="listing-anons__title">
                  <h4 className="name">X-PRO 150</h4>
                </div>
                <div className="listing-anons__hidden">
                  <h3>X-PRO 150</h3>
                </div>
              </Link>
            </div>                                                                                  
      </Slider>
          
            
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/img-1.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "images/img-2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "images/img-3.jpg" }) {
      ...fluidImage
    }
  }
`
