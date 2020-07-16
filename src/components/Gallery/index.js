import React, { Component } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      photoIndex: 0,
      isOpen: false,
    }

    this.imgClickHandler = this.imgClickHandler.bind(this)
    this.onCloseRequest = this.onCloseRequest.bind(this)
  }

  imgClickHandler = (photoIndex, e) => {
    e.preventDefault()
    this.setState({ isOpen: true, photoIndex })
  }

  onCloseRequest = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { photoIndex, isOpen } = this.state

    const imgsLarge = this.props.colors.edges.map(im => {
      return im.node.childImageSharp.fluid.src
    })

    return (
      <>
        {isOpen && (
          <Lightbox
            mainSrc={imgsLarge[photoIndex]}
            nextSrc={imgsLarge[(photoIndex + 1) % imgsLarge.length]}
            prevSrc={
              imgsLarge[(photoIndex + imgsLarge.length - 1) % imgsLarge.length]
            }
            onCloseRequest={this.onCloseRequest}
            onMovePrevRequest={() => {
              this.setState({
                photoIndex:
                  (photoIndex + imgsLarge.length - 1) % imgsLarge.length,
              })
            }}
            onMoveNextRequest={() => {
              this.setState({
                photoIndex: (photoIndex + 1) % imgsLarge.length,
              })
            }}
          />
        )}
        {this.props.colors.edges.map((obj, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-5 col-xs-12">
              <a
                className="center"
                onClick={this.imgClickHandler.bind(this, i)}
                style={{ textDecoration: 'none' }}
                href={obj.node.childImageSharp.fluid.src}
              >
                <Img
                  className="img-responsive"
                  fluid={obj.node.childImageSharp.fluid}
                  alt="ok"
                />
                <h5
                  style={{
                    textTransform: 'capitalize',
                    textAlign: 'center',
                    color: '#383535',
                  }}
                >
                  {String(obj.node.name).replace('-', ' ')}
                </h5>
              </a>
            </div>
          )
        })}
      </>
    )
  }
}

export default Gallery
