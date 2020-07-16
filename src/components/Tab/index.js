import React, { Component } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
// import { Link } from 'gatsby'
// import './styles.css'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      galleryIndex: 0,
      isOpenPhoto: false,
    }
  }

  galClickHandler = (galleryIndex, e) => {
    e.preventDefault()
    this.setState({ isOpenPhoto: true, galleryIndex })
  }
  onCloseRequest = () => {
    this.setState({ isOpenPhoto: false })
  }


  onTabClick = (index, e) => {
    e.preventDefault()
    if (this.state.activeIndex !== index) {
      this.setState({ activeIndex: index })
    }
  }

  render() {
    const { pres, chart, images } = this.props

    const { galleryIndex, isOpenPhoto  } = this.state

    const imgsLarge = images  &&  images.edges.map(im => {
      return im.node.childImageSharp.fluid.src
    })
    return (
      <>
        {isOpenPhoto && (
          <Lightbox
            mainSrc={imgsLarge[galleryIndex]}
            nextSrc={imgsLarge[(galleryIndex + 1) % imgsLarge.length]}
            prevSrc={
              imgsLarge[(galleryIndex + imgsLarge.length - 1) % imgsLarge.length]
            }
            onCloseRequest={this.onCloseRequest}
            onMovePrevRequest={() => {
              this.setState({
                galleryIndex:
                  (galleryIndex + imgsLarge.length - 1) % imgsLarge.length,
              })
            }}
            onMoveNextRequest={() => {
              this.setState({
                galleryIndex: (galleryIndex + 1) % imgsLarge.length,
              })
            }}
          />
        )}

      <div className="aside-tabs aside-tabs--about aside-tabs--item wow fadeInUp">
        <div className="aside-tabs__links">
          <a
            href="/"
            onClick={this.onTabClick.bind(this, 0)}
            className={`no-decoration js-tab-link ${this.state.activeIndex ===
              0 && 'aside-tabs__active-link'}`}
          >
            Présentation
          </a>
          <a
            href="/"
            onClick={this.onTabClick.bind(this, 1)}
            className={`no-decoration js-tab-link ${this.state.activeIndex ===
              1 && 'aside-tabs__active-link'}`}
          >
            Caractéristiques
          </a>
          <a
            href="/"
            onClick={this.onTabClick.bind(this, 2)}
            className={`no-decoration js-tab-link ${this.state.activeIndex ===
              2 && 'aside-tabs__active-link'}`}
          >
            Galerie
          </a>
        </div>
        <div className="aside-tabs__blocks about-tab js-tab-block" id="desc">
          {this.state.activeIndex === 0 && (
            <div
              dangerouslySetInnerHTML={{
                __html: pres,
              }}
            />
          )}
          {this.state.activeIndex === 1 && (
            <div
              dangerouslySetInnerHTML={{
                __html: chart,
              }}
            />
          )}
          {this.state.activeIndex === 2 && (
            <div className="row">
              {images &&
                images.edges.map((item, i) => {
                  return (
                    <div key={i} className="col-lg-4 col-sm-6 col-xs-12">
                      <a
                        className="center"
                        onClick={this.galClickHandler.bind(this, i)}
                        style={{ textDecoration: 'none' }}
                        href={item.node.childImageSharp.fluid.src}
                      >
                      <Img
                        className="img-responsive"
                        fluid={item.node.childImageSharp.fluid}
                      />
                      </a>
                    </div>
                  )
                })}
            </div>
          )}
        </div>
      </div>
</>
    )
  }
}

export default Tab
