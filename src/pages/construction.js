import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header/Header2'
import { Link } from 'gatsby'

const Cons = () => (
  <Layout>
    <Header />
    <div>
      <section className="status dark-bg dark-bg--status">
        <div className="container">
          <h2 className="title title--page">
            <span className="title__bold">En Construction</span>
          </h2>
        </div>
      </section>

      <div className="blog-page blog-page--article">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 col-xs-7">
              <div className="blog-main">
                <div className="articles">
                  <div className="article">
                    <h2
                      className="title title--main"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.5s',
                        animationDelay: '0.7s',
                        animationName: 'fadeInUp',
                      }}
                    >
                      En Construction
                      <span className="title__bold" />
                      <span className="line line--title">
                        <span className="line__first" />
                        <span className="line__second" />
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-5">
              <aside className="blog-aside">
                <div className="blog-aside__block">
                  <h3 className="blog-title">
                    Qui somme nous ?
                    <span className="line line--title line--blog-title">
                      <span className="line__first" />
                      <span className="line__second" />
                    </span>
                  </h3>
                  <div className="blog-aside__about">
                    <p className="blog-text">
                      La société SYM – Algeria HAM MOTORS- est spécialisée dans
                      la fabrication des motocycles. Elle est une filiale de la
                      SARL IBN AOUF REGAIGUI et CIE, créée en 1997 par messieurs
                      REGAIGUI El Hamdi et MADI Aissa.
                    </p>
                    <Link
                      to="/"
                      className="btn button button--red button--main"
                    >
                      Lire Plus
                    </Link>
                    <br />
                    <br />
                    <br />
                    <div className="social-blocks">
                      <div className="row row--no-padding">
                        <div className="col-xs-4">
                          <div className="social-blocks__one social-blocks__one--fb">
                            <div className="social-blocks__logo">
                              <span className="fa fa-facebook" />
                            </div>
                            <Link
                              to="/"
                              className="social-blocks__action no-decoration"
                            >
                              J'aime
                            </Link>
                          </div>
                        </div>
                        <div className="col-xs-4">
                          <div className="social-blocks__one social-blocks__one--twitter">
                            <div className="social-blocks__logo">
                              <span className="fa fa-twitter" />
                            </div>
                            <Link
                              to="/"
                              className="social-blocks__action no-decoration"
                            >
                              Follow
                            </Link>
                          </div>
                        </div>
                        <div className="col-xs-4">
                          <div className="social-blocks__one social-blocks__one--google">
                            <div className="social-blocks__logo">
                              <span className="fa fa-google-plus" />
                            </div>
                            <Link
                              to="/"
                              className="social-blocks__action no-decoration"
                            >
                              ADD
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Cons
