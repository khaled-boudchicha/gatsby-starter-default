import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Logo from '../../images/logo.png'
import cx from 'classnames'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.toggleNavBar = this.toggleNavBar.bind(this)
  }
  toggleNavBar = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    // const { siteTitle } = this.props
    // console.log('Header1', this.props)
    const { open } = this.state
    const cxBtn = cx({
      'navbar-toggle': true,
      collapsed: open,
    })
    const cxMenu = cx('collapse navbar-collapse navbar-nav-menu', {
      in: open,
    })
    return (
      <nav id="header-top" className="top-nav top-nav--home">
        <div className="container">
          <div className="top-nav__main top-nav__main--home">
            <div className="row" style={{  marginRight: "-15px",marginLeft: "-15px"}}>
              <div className="col-md-3 col-xs-3">
                <Link to="/" className="logo logo--home">
                  <img src={Logo} alt="SYM Algérie" />
                </Link>
              </div>
              <div className="col-md-9 col-xs-9">
                <div className="main-nav navbar-main-slide">
                  <div className="navbar-header">
                    <button
                      onClick={this.toggleNavBar}
                      type="button"
                      data-toggle="collapse"
                      className={cxBtn}
                      aria-expanded={open}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <ul className={cxMenu} id="nav">
                    <li>
                      <Link
                        activeStyle={{
                          color: '#ce0000',
                        }}
                        to="/"
                        // style={{ color: 'white' }}
                        className="no-decoration  header-link"
                      >
                        Accueil
                      </Link>
                      <span className="main-nav__separator">
                        <span />
                        <span />
                        <span />
                      </span>
                    </li>
                    <li>
                      <Link
                        activeStyle={{
                          color: '#ce0000',
                        }}
                        to="models"
                        className="no-decoration  header-link"
                      >
                        Modèles
                      </Link>
                      <span className="main-nav__separator">
                        <span />
                        <span />
                        <span />
                      </span>
                    </li>
                    <li>
                      <Link
                        activeStyle={{
                          color: '#ce0000',
                        }}
                        to="accessory"
                        className="no-decoration  header-link"
                      >
                        Nos accessoires
                      </Link>
                      <span className="main-nav__separator">
                        <span />
                        <span />
                        <span />
                      </span>
                    </li>
                    <li>
                      <a
                        className="no-decoration  header-link"
                        href="/actualite.php"
                      >
                        Actualités{' '}
                      </a>
                      <span className="main-nav__separator">
                        <span />
                        <span />
                        <span />
                      </span>
                    </li>
                    <li>
                      <Link
                        activeStyle={{
                          color: '#ce0000',
                        }}
                        to="agences"
                        className="no-decoration  header-link"
                      >
                        Nos agences{' '}
                      </Link>
                      <span className="main-nav__separator">
                        <span />
                        <span />
                        <span />
                      </span>
                    </li>                    
                    <li>
                      <a
                        className="no-decoration  header-link"
                        href="/hamcycle.php"
                      >
                        HAM CYCLES{' '}
                      </a>
                      <span className="main-nav__separator">
                        <span />
                        <span />
                        <span />
                      </span>
                    </li>                    
                    <li>
                      <Link
                        activeStyle={{
                          color: '#ce0000',
                        }}
                        to="contact"
                        className="no-decoration  header-link"
                      >
                        Contactez-nous
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
