import React, { Component } from "react";
import { Link } from "gatsby";
import footer1 from "../../images/casques/1.jpg";
import footer2 from "../../images/casques/2.jpg";
import footer3 from "../../images/casques/3.jpg";
import footer4 from "../../images/casques/4.jpg";
import footer5 from "../../images/casques/5.jpg";
import footer6 from "../../images/casques/6.jpg";
//import footer7 from '../../images/casques/7.jpg'
//import footer8 from '../../images/casques/8.jpg'
import axios from "axios";

export default class Footer extends Component {
  state = {
    html: null
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get("lastnews.php");
      this.setState({ html: data });
    } catch (error) {
      console.log("error in php footer", error);
    }
  }

  render() {
    const { data } = this.props;
    return (
      <footer className="home-footer">
        <div className="footer-main-home dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer-main-home__block equal-height-item">
                  <h2 className="footer-main-home__title">SYM Algérie</h2>
                  <p className="text text--footer-main-home">
                    La société SYM – Algeria HAM MOTORS- est spécialisée dans la
                    fabrication des motocycles. Elle est une filiale de la SARL
                    IBN AOUF REGAIGUI et CIE, créée en 1997 par messieurs
                    REGAIGUI El Hamdi et MADI Aissa.
                  </p>
                  <Link
                    to="presentation"
                    className="btn button button--red button--main"
                  >
                    Lire Plus
                  </Link>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer-main-home__block equal-height-item footer-main-home__block--img">
                  <h2 className="footer-main-home__title">Nos accessoires</h2>
                  <div className="row row--no-padding">
                    <div className="col-xs-4">
                      <Link to="accessory">
                        <img
                          className="img-responsive"
                          alt="bike"
                          src={footer1}
                        />
                      </Link>
                    </div>
                    <div className="col-xs-4">
                      <Link to="accessory">
                        <img
                          className="img-responsive"
                          alt="bike"
                          src={footer2}
                        />
                      </Link>
                    </div>
                    <div className="col-xs-4">
                      <Link to="accessory">
                        <img
                          className="img-responsive"
                          alt="bike"
                          src={footer3}
                        />
                      </Link>
                    </div>
                    <div className="col-xs-4">
                      <Link to="accessory">
                        <img
                          className="img-responsive"
                          alt="bike"
                          src={footer4}
                        />
                      </Link>
                    </div>
                    <div className="col-xs-4">
                      <Link to="accessory">
                        <img
                          className="img-responsive"
                          alt="bike"
                          src={footer5}
                        />
                      </Link>
                    </div>
                    <div className="col-xs-4">
                      <Link to="accessory">
                        <img
                          className="img-responsive"
                          alt="bike"
                          src={footer6}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer-main-home__block equal-height-item">
                  <h2 className="footer-main-home__title">Page Facebook</h2>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSymAlgerie&tabs&width=250&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=688406744665278"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media"
                    width={250}
                    height={130}
                    frameBorder={0}
                  />
                </div>

                {/*<div dangerouslySetInnerHTML={{ __html: this.state.html }} />
                 <div className="footer-main-home__block equal-height-item footer-main-home__block--margin">
                  <h2 className="footer-main-home__title">Actualités / News</h2>
                  <div className="footer-main-home__event clearfix">
                    <div className="event-num triangle pull-right">2017</div>
                    <div className="footer-main-home__event-text">
                      <h3>
                        <a className="no-decoration" href="/actualite.php">
                          SALON AUTOWEST
                        </a>
                      </h3>
                      <p className="text text--footer-main-home">ORAN</p>
                    </div>
                  </div>
                  <div className="footer-main-home__event clearfix">
                    <div className="event-num triangle pull-right">2018</div>
                    <div className="footer-main-home__event-text">
                      <h3>
                        <a className="no-decoration" href="/actualite.php">
                          SALON AUTOWEST
                        </a>
                      </h3>
                      <p className="text text--footer-main-home">ORAN</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="footer-main-home__block equal-height-item">
                  <h2 className="footer-main-home__title">Contactez-nous</h2>
                  <h5 className="footer-main-home__address-title">
                    AIN LAHDJAR
                  </h5>
                  <h5 className="text text--footer-main-home">
                    Tel : 036-55-50-86 / Fax : 036-55-52-12
                  </h5>
                  <h5 className="footer-main-home__address-title">EL EULMA</h5>
                  <h5 className="text text--footer-main-home">
                    Tel : 036-76-63-17 / Fax : 036-76-63-20
                  </h5>
                  <h5 className="footer-main-home__address-title"> SETIF</h5>
                  <h5 className="text text--footer-main-home">
                    Tel : 036-63-51-91 / Fax : 036-63-52-92
                  </h5>
                  <h5 className="footer-main-home__address-title">AIN AZEL</h5>
                  <h5 className="text text--footer-main-home">
                    Tel : 036-55-29-27 / Fax : 036-55-29-42
                  </h5>

                  <div className="email">
                    <span>Email: </span>contact@symalgerie.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-home">
          <div className="container">
            <div className="copyright">
              <p>
                © Copyrights 2019 <span>SYM Algérie</span> Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
        <a id="to-top" href="#header-top">
          <i className="fa fa-chevron-up" />
        </a>
      </footer>
    );
  }
}

// export const pageQuery = graphql`
//   query getImagesFooter {
//     images: allFile(
//       filter: {
//         sourceInstanceName: { eq: "images" }
//         relativeDirectory: { eq: "sym/accessoires" }
//       }
//     ) {
//       totalCount
//       edges {
//         node {
//           name
//           childImageSharp {
//             fixed(width: 80, height: 80) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `
