import React from 'react'
import { Link, graphql, withPrefix } from 'gatsby'
// import Img from 'gatsby-image'
import Layout from '../components/layout'
import Header from '../components/Header/Header2'
import Side from '../components/Side'

const Row = props => {
  return (
    <Link
      to={`/models/${props.pathName}/${props.name}`}
      className="no-decoration"
      style={{ color: 'inherit' }}
    >
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <div className="item-cell js-cell equal-height-item">
          <div className="item-cell__top">
            <div className="item-cell__img">
              <img
                src={withPrefix(`${props.pathName}/${props.id}/1.jpg`)}
                className="img-responsive center-block"
                alt="item"
              />
            </div>
          </div>

          <div className="item-cell__bottom">
            <h1 className="item-title">{props.title}</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

class Models extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleCategoryItemClick = this.handleCategoryItemClick.bind(this)
  }

  handleCategoryItemClick(e) {
    e.preventDefault()
  }

  render() {
    const models = this.props.data.allAssetsJson.edges[0].node.data
    const { location } = this.props

    return (
      <Layout>
        <Header location={location} />
        <section className="status status--shop dark-bg dark-bg--shop">
          <div className="container">
            <h2 className="title title--page">
              <span className="title__bold">Modeles</span> SYM
            </h2>
          </div>
        </section>

        <section className="shop">
          <div className="container">
            <div className="row row--main-shop">
              <Side models={models} />
              <div className="col-lg-9 col-md-8 col-sm-7 col-xs-6">
                <div className="shop-main">
                  <div className="items">
                    {models.map((m, i) => {
                      return (
                        <div id={i} key={i} className="row">
                          <h4 style={{ paddingLeft: 20 }}>{m.title}</h4>
                          {m.models.map((it, ii) => {
                            return (
                              <Row key={ii} {...it} pathName={m.pathName} />
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Models

export const pageQuery = graphql`
  query {
    allAssetsJson {
      edges {
        node {
          data {
            title
            pathName
            models {
              id
              name
              title
              color
              description
              gallerie
            }
          }
        }
      }
    }
  }
`
