import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Tab from '../components/Tab'
import Gallery from '../components/Gallery'
import Header from '../components/Header/Header2'
import Side from '../components/Side'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#___gatsby')

class Item extends Component {
  constructor(props) {
    super(props)
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal(e) {
    e.preventDefault()
    this.setState({ showModal: false })
  }

  render() {
    const { pageContext, data } = this.props
    const { images, colors, md, imgCover, json } = data
    const { jsonData } = pageContext

    let pres,
      chart = ''
    md &&
      md.edges.forEach(item => {
        if (item.node.frontmatter.type === 'chart') {
          chart = item.node.html
        } else {
          pres = item.node.html
        }
      })

    const models = json.edges[0].node.data

    return (
      <Layout>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Img
                className="img-responsive center-block"
                fluid={imgCover.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>

        <div className="shop-item">
          <div className="container">
            <div className="row row--main-shop">
              <Side models={models} />
              <div className="col-lg-9 col-md-8 col-sm-7 col-xs-6">
                <div className="shop-item-main">
                  <div className="row">
                    <div className="col-xs-12" style={{ marginBottom: 20 }}>
                      <div className="shop-item-desc">
                        <header className="shop-item-desc__head">
                          <div className="row">
                            <div className="col-lg-8">
                              <h1>{jsonData.title}</h1>
                            </div>
                            <div className="col-lg-4">
                              <button
                                onClick={this.handleOpenModal}
                                className="btn button button--red"
                                style={{
                                  fontWeight: 'inherit',
                                  padding: '10px 18px',
                                  textTransform: 'none',
                                }}
                              >
                                Demander ce modele
                              </button>
                            </div>
                          </div>
                        </header>
                      </div>
                    </div>
                    <Gallery colors={colors} />
                  </div>
                </div>

                <Tab pres={pres} chart={chart} images={images} />
              </div>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="model modal"
          closeTimeoutMS={225}
          onRequestClose={this.handleCloseModal}
          className="modal_content"
          style={{
            content: {
              padding: 20,
              width: '50%',
              maxWidth: '50rem',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <form id="contactForm" className="comment-form">
            <div className="comment-form__input">
              <input
                type="text"
                className="search-input"
                name="name"
                id="user-name"
                placeholder="Nom et prénom ou(Raison sociale)"
              />
            </div>
            <div className="comment-form__input">
              <input
                type="text"
                className="search-input"
                name="Tel"
                id="user-Tel"
                placeholder="Tél ou Mobile"
              />
            </div>
            <div className="comment-form__input">
              <select
                className="search-input"
                name="agence"
                id="user-agence"
                placeholder="Selectionner votre Agence"
              >
                <option value={0} id={0}>
                  Selectionner votre Agence
                </option>
                <option value={1} id={1}>
                  AIN-DEFLA AIN DEFLA
                </option>
                <option value={2} id={2}>
                  ALGER SIDI M'HAMED
                </option>
                <option value={3} id={3}>
                  ALGER BORDJ EL-KIFFAN
                </option>
                <option value={4} id={4}>
                  ALGER AIN BENIAN
                </option>
                <option value={5} id={5}>
                  ALGER CHERAREBA
                </option>
                <option value={6} id={6}>
                  ALGER BIR KHADEM
                </option>
                <option value={7} id={7}>
                  ALGER ALGER
                </option>
                <option value={8} id={8}>
                  ALGER ROUIBA
                </option>
                <option value={12} id={12}>
                  ANNABA ANNABA
                </option>
                <option value={13} id={13}>
                  BATNA BARIKA
                </option>
                <option value={14} id={14}>
                  BATNA BATNA
                </option>
                <option value={15} id={15}>
                  BEDJAIA BEJAIA
                </option>
                <option value={16} id={16}>
                  BEDJAIA LAKSAR
                </option>
                <option value={17} id={17}>
                  BISKRA BISKRA
                </option>
                <option value={18} id={18}>
                  BISKRA TOULGA
                </option>
                <option value={19} id={19}>
                  BISKRA Z'RIBAT EL OUED
                </option>
                <option value={20} id={20}>
                  BISKRA SIDI KHALED
                </option>
                <option value={21} id={21}>
                  BLIDA BEN CHAABANE
                </option>
                <option value={23} id={23}>
                  BLIDA BLIDA
                </option>
                <option value={24} id={24}>
                  BLIDA BOUFARIC
                </option>
                <option value={26} id={26}>
                  BORDJ-BOUAR B.B.A
                </option>
                <option value={27} id={27}>
                  CHLEF BOUKADIR
                </option>
                <option value={28} id={28}>
                  CHLEF OUED SLY
                </option>
                <option value={29} id={29}>
                  CONSTANTINE CONSTANTINE
                </option>
                <option value={30} id={30}>
                  DJELFA AIN OUSSARA
                </option>
                <option value={31} id={31}>
                  EL-OUED KOUININE
                </option>
                <option value={33} id={33}>
                  GUELMA GUELMA
                </option>
                <option value={34} id={34}>
                  JIJEL TAHIR
                </option>
                <option value={35} id={35}>
                  LAGHOUAT LAGHOUAT
                </option>
                <option value={36} id={36}>
                  MEDEA MEDEA
                </option>
                <option value={37} id={37}>
                  M'SILA BOUSAADA
                </option>
                <option value={39} id={39}>
                  ORAN ORAN
                </option>
                <option value={40} id={40}>
                  OUM-EL-BOUAGHI AIN FAKROUN
                </option>
                <option value={41} id={41}>
                  OUM-EL-BOUAGHI AIN BAYDA
                </option>
                <option value={42} id={42}>
                  OUM-EL-BOUAGHI Ain Mlila
                </option>
                <option value={43} id={43}>
                  RELIZANE OUED RHIOU
                </option>
                <option value={44} id={44}>
                  SETIF AIN LAHDJAR
                </option>
                <option value={45} id={45}>
                  SETIF AIN AZEL
                </option>
                <option value={46} id={46}>
                  SETIF AIN OULMENE
                </option>
                <option value={47} id={47}>
                  SETIF AIN AZEL
                </option>
                <option value={48} id={48}>
                  SIDI-BEL-ABBES SIDI BEL-ABBES
                </option>
                <option value={49} id={49}>
                  SKIKDA KERKERA
                </option>
                <option value={50} id={50}>
                  SOUK-AHRAS SOUK AHRAS
                </option>
                <option value={51} id={51}>
                  TIARET TIARET
                </option>
                <option value={52} id={52}>
                  TIPAZA KOLEA
                </option>
                <option value={54} id={54}>
                  TIPAZA ELHADJOUT
                </option>
                <option value={55} id={55}>
                  TIZI-OUZOU TIZI OUZOU
                </option>
                <option value={56} id={56}>
                  TLEMCEN TLEMCEN
                </option>
              </select>
            </div>
            <div className="comment-form__input">
              <input
                type="text"
                className="search-input"
                name="email"
                id="user-email"
                placeholder="Email"
              />
            </div>
            <div className="comment-form__input">
              <textarea
                id="user-message"
                name="message"
                placeholder="Message"
                className="comment-textarea search-input"
                defaultValue={''}
              />
            </div>
            <button
              type="submit"
              className="btn button button--main button--grey transparent"
            >
              Envoyer
            </button>
            <button
              onClick={this.handleCloseModal}
              style={{ marginLeft: 20 }}
              className="btn button button--main button--grey transparent"
            >
              Fermé
            </button>
          </form>
        </ReactModal>
      </Layout>
    )
  }
}

export default Item
