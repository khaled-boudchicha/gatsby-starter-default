import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Link, graphql, withPrefix } from "gatsby";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import Header from "../components/Header/Header2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exclusive from "../assets/exclusive.png";
import beon from "../assets/beon.jpg";
import cgm from "../assets/cgm.jpg";

const settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 1500
};
const Row = props => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <div className="item-cell js-cell equal-height-item">
        <div className="item-cell__top">
          <div className="item-cell__img">
            <img
              src={withPrefix(`${props.childImageSharp.fixed.src}`)}
              className="img-responsive center-block"
              alt="item"
            />
          </div>
        </div>

        <div className="item-cell__bottom">
          <h1 className="item-title">{props.name}</h1>
        </div>
      </div>
    </div>
  );
};

class Accessory extends React.Component {
  render() {
    const { data, location } = this.props;

    const casqueGCM =
      data.casque &&
      data.casque.edges.map(im => {
        return im.node;
      });
    const casqueBEON =
      data.casquebeon &&
      data.casquebeon.edges.map(im => {
        return im.node;
      });

    const malette =
      data.malette &&
      data.malette.edges.map(im => {
        return im.node;
      });
    const bagage =
      data.bagage &&
      data.bagage.edges.map(im => {
        return im.node;
      });
    const visiere =
      data.visiere &&
      data.visiere.edges.map(im => {
        return im.node;
      });
    const housse =
      data.housse &&
      data.housse.edges.map(im => {
        return im.node;
      });
    const huile =
      data.huile &&
      data.huile.edges.map(im => {
        return im.node;
      });
    const cst =
      data.cst &&
      data.cst.edges.map(im => {
        return im.node;
      });
    const ham =
      data.ham &&
      data.ham.edges.map(im => {
        return im.node;
      });

    return (
      <Layout>
        <Header location={location} />
        <section className="status dark-bg dark-bg--status">
          <div className="container">
            <h2 className="title title--page">
              <span className="title__bold">Accessoires</span>
            </h2>
          </div>
        </section>
        <br />
        <br />

        <section className="shop">
          <div className="container">
            <div className="row row--main-shop">
              <div className="col-lg-3 col-md-4 col-sm-5 col-xs-6 sticky-slide">
                <aside className="shop-aside">
                  <div className="shop-aside__block wow fadeInUp">
                    <h2 className="shop-title">
                      Nos accessoires disponibles
                      <span className="line line--title line--shop">
                        <span className="line__first" />
                        <span className="line__second" />
                      </span>
                    </h2>
                    <ul className="triangle-list triangle-list--shop">
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#casqueGCM`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Casque CGMS
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#casqueBEON`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Casque BEON
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#malette`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Malette SHAD
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#bagage`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Porte Bagage
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#visiere`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Visière
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#housse`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Housse Scooter / Tablier
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#huile`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Huile Castrol - Exclusive -
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#cst`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Pneu CST - Exclusive -
                        </Link>
                      </li>
                      <li className="triangle triangle-list__one">
                        <Link
                          to={`/accessory#ham`}
                          style={{ cursor: "pointer" }}
                          className="no-decoration"
                        >
                          Pneu HAM - Exclusive -
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                </aside>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-7 col-xs-6">
                <div className="shop-main">
                  <div className="items">
                    <div
                      id="casqueGCM"
                      className="row"
                      style={{ margin: "20px 0 40px 01" }}
                    >
                      <h2 className="shop-title">
                        Casque CGM
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <div
                        className="row"
                        style={{
                          margin: "20px 100px 40px 0",
                          position: "relative"
                        }}
                      >
                        <Slider {...settings}>
                          {casqueGCM.map((it, ii) => {
                            return (
                              <div
                                style={{
                                  display: "block",
                                  padding: "10px",
                                  margin: "10px",
                                  border: "5px solid #ccc"
                                }}
                              >
                                <img
                                  key={ii}
                                  src={withPrefix(
                                    `${it.childImageSharp.fixed.src}`
                                  )}
                                  className="img-responsive center-block"
                                  alt="{it.name}"
                                />
                                <p
                                  style={{
                                    display: "block",
                                    textAlign: "center",
                                    padding: "10px 0"
                                  }}
                                >
                                  {it.name}
                                </p>
                              </div>
                            );
                          })}
                        </Slider>
                        <img
                          src={cgm}
                          style={{
                            display: "block",
                            width: "100px",
                            position: "absolute",
                            top: "30px",
                            right: "-120px"
                          }}
                          className="img-responsive"
                        />
                      </div>
                    </div>

                    <div
                      id="casqueBEON"
                      className="row"
                      style={{ margin: "20px 0 40px 01" }}
                    >
                      <h2 className="shop-title">
                        Casque BEON
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <div
                        className="row"
                        style={{
                          margin: "20px 100px 40px 0",
                          position: "relative"
                        }}
                      >
                        <Slider {...settings}>
                          {casqueBEON.map((it, ii) => {
                            return (
                              <div
                                style={{
                                  display: "block",
                                  padding: "10px",
                                  margin: "10px",
                                  border: "5px solid #ccc"
                                }}
                              >
                                <img
                                  key={ii}
                                  src={withPrefix(
                                    `${it.childImageSharp.fixed.src}`
                                  )}
                                  className="img-responsive center-block"
                                  alt="{it.name}"
                                />
                                <p
                                  style={{
                                    display: "block",
                                    textAlign: "center",
                                    padding: "10px 0"
                                  }}
                                >
                                  {it.name}
                                </p>
                              </div>
                            );
                          })}
                        </Slider>
                        <img
                          src={beon}
                          style={{
                            display: "block",
                            width: "100px",
                            position: "absolute",
                            top: "30px",
                            right: "-120px"
                          }}
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div
                      id="malette"
                      className="row"
                      style={{ margin: "20px 0 40px 0" }}
                    >
                      <h2 className="shop-title">
                        Malette SHAD
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <div
                        className="row"
                        style={{
                          margin: "20px 100px 40px 0",
                          position: "relative"
                        }}
                      >
                        <Slider {...settings}>
                          {malette.map((it, ii) => {
                            return (
                              <div
                                style={{
                                  display: "block",
                                  padding: "10px",
                                  margin: "10px",
                                  border: "5px solid #ccc"
                                }}
                              >
                                <img
                                  key={ii}
                                  src={withPrefix(
                                    `${it.childImageSharp.fixed.src}`
                                  )}
                                  className="img-responsive center-block"
                                  alt="{it.name}"
                                />
                                <p
                                  style={{
                                    display: "block",
                                    textAlign: "center",
                                    padding: "10px 0"
                                  }}
                                >
                                  {it.name}
                                </p>
                              </div>
                            );
                          })}
                        </Slider>
                        <img
                          src={exclusive}
                          style={{
                            display: "block",
                            width: "100px",
                            position: "absolute",
                            top: "30px",
                            right: "-120px"
                          }}
                          className="img-responsive"
                        />
                      </div>
                    </div>

                    <div
                      id="bagage"
                      className="row"
                      style={{ margin: "20px 0 40px 0" }}
                    >
                      <h2 className="shop-title">
                        Porte Bagage
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <Slider {...settings}>
                        {bagage.map((it, ii) => {
                          return (
                            <div
                              style={{
                                display: "block",
                                padding: "10px",
                                margin: "10px",
                                border: "5px solid #ccc"
                              }}
                            >
                              <img
                                key={ii}
                                src={withPrefix(
                                  `${it.childImageSharp.fixed.src}`
                                )}
                                className="img-responsive center-block"
                                alt="{it.name}"
                              />
                              <p
                                style={{
                                  display: "block",
                                  textAlign: "center",
                                  padding: "10px 0"
                                }}
                              >
                                {it.name}
                              </p>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>

                    <div
                      id="visiere"
                      className="row"
                      style={{ margin: "20px 0 40px 0" }}
                    >
                      <h2 className="shop-title">
                        Visière
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <Slider {...settings}>
                        {visiere.map((it, ii) => {
                          return (
                            <div
                              style={{
                                display: "block",
                                padding: "10px",
                                margin: "10px",
                                border: "5px solid #ccc"
                              }}
                            >
                              <img
                                key={ii}
                                src={withPrefix(
                                  `${it.childImageSharp.fixed.src}`
                                )}
                                className="img-responsive center-block"
                                alt="{it.name}"
                              />
                              <p
                                style={{
                                  display: "block",
                                  textAlign: "center",
                                  padding: "10px 0"
                                }}
                              >
                                {it.name}
                              </p>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>

                    <div
                      id="housse"
                      className="row"
                      style={{ margin: "20px 0 40px 0" }}
                    >
                      <h2 className="shop-title">
                        Housse Scooter / Tablier
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <Slider {...settings}>
                        {housse.map((it, ii) => {
                          return (
                            <div
                              style={{
                                display: "block",
                                padding: "10px",
                                margin: "10px",
                                border: "5px solid #ccc"
                              }}
                            >
                              <img
                                key={ii}
                                src={withPrefix(
                                  `${it.childImageSharp.fixed.src}`
                                )}
                                className="img-responsive center-block"
                                alt="{it.name}"
                              />
                              <p
                                style={{
                                  display: "block",
                                  textAlign: "center",
                                  padding: "10px 0"
                                }}
                              >
                                {it.name}
                              </p>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>

                    <div
                      id="cst"
                      className="row"
                      style={{ margin: "20px 0 40px 0", position: "relative" }}
                    >
                      <h2 className="shop-title">
                        Pneu CST - Exclusive -
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <div
                        className="row"
                        style={{
                          margin: "20px 100px 40px 0",
                          position: "relative"
                        }}
                      >
                        <Slider {...settings}>
                          {cst &&
                            cst.map((it, ii) => {
                              return (
                                <div
                                  class="ribbon"
                                  style={{
                                    display: "block",
                                    padding: "10px",
                                    margin: "10px",
                                    border: "5px solid #ccc"
                                  }}
                                >
                                  <img
                                    class="ribbon1"
                                    key={ii}
                                    src={
                                      it.childImageSharp &&
                                      withPrefix(
                                        `${it.childImageSharp.fixed.src}`
                                      )
                                    }
                                    className="img-responsive center-block"
                                    alt="{it.name}"
                                  />
                                  <p
                                    style={{
                                      display: "block",
                                      textAlign: "center",
                                      padding: "10px 0"
                                    }}
                                  >
                                    {it.name}
                                  </p>
                                </div>
                              );
                            })}
                        </Slider>
                        <img
                          src={exclusive}
                          style={{
                            display: "block",
                            width: "100px",
                            position: "absolute",
                            top: "30px",
                            right: "-120px"
                          }}
                          className="img-responsive"
                        />
                      </div>
                    </div>

                    <div
                      id="ham"
                      className="row"
                      style={{ margin: "20px 0 40px 0", position: "relative" }}
                    >
                      <h2 className="shop-title">
                        Pneu HAM - Exclusive -
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <Slider {...settings}>
                        {ham &&
                          ham.map((it, ii) => {
                            return (
                              <div
                                style={{
                                  display: "block",
                                  padding: "10px",
                                  margin: "10px",
                                  border: "5px solid #ccc"
                                }}
                              >
                                <img
                                  key={ii}
                                  src={withPrefix(
                                    `${it.childImageSharp.fixed.src}`
                                  )}
                                  className="img-responsive center-block"
                                  alt="{it.name}"
                                />
                                <p
                                  style={{
                                    display: "block",
                                    textAlign: "center",
                                    padding: "10px 0"
                                  }}
                                >
                                  {it.name}
                                </p>
                              </div>
                            );
                          })}
                      </Slider>
                    </div>

                    <div
                      id="huile"
                      className="row"
                      style={{ margin: "20px 0 40px 0" }}
                    >
                      <h2 className="shop-title">
                        Huile Castrol - Exclusive -
                        <span className="line line--title line--shop">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <div
                        className="row"
                        style={{
                          margin: "20px 100px 40px 0",
                          position: "relative"
                        }}
                      >
                        <Slider {...settings}>
                          {huile &&
                            huile.map((it, ii) => {
                              return (
                                <div
                                  style={{
                                    display: "block",
                                    padding: "10px",
                                    margin: "10px",
                                    border: "5px solid #ccc"
                                  }}
                                >
                                  <img
                                    key={ii}
                                    src={
                                      it.childImageSharp &&
                                      withPrefix(
                                        `${it.childImageSharp.fixed.src}`
                                      )
                                    }
                                    className="img-responsive center-block"
                                    alt="{it.name}"
                                  />
                                  <p
                                    style={{
                                      display: "block",
                                      textAlign: "center",
                                      padding: "10px 0"
                                    }}
                                  >
                                    {it.name}
                                  </p>
                                </div>
                              );
                            })}
                        </Slider>
                        <img
                          src={exclusive}
                          style={{
                            display: "block",
                            width: "100px",
                            position: "absolute",
                            top: "30px",
                            right: "-120px"
                          }}
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Accessory;

export const pageQuery = graphql`
  query getAccessoires {
    casque: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Casque CGM" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    casquebeon: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Casque BEON" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 150, height: 130) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    malette: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Malette SHAD" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    bagage: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Porte Bagage" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    visiere: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Visière" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    housse: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Housse Scooter   Tablier" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    huile: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Huile Castrol  - Exclusive" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    cst: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Pneu CST - Exclusive" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    ham: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "sym/accessoires/Pneu HAM  - Exclusive" }
      }
    ) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
