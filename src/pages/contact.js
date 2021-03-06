import React, { Component } from "react";
import { Link } from "gatsby";
import { Formik } from "formik";
import Layout from "../components/layout";
import Header from "../components/Header/Header2";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: false
    };
  }

  handleFormSubmit = async (values, { setSubmitting }) => {
    // console.log(JSON.stringify(values, null, 2))
    try {
      const result = await axios.post("/contact_me.php", {
        ...values
      });
      if (result && result.data.success) {
        this.setState({ success: true });
      }
      // console.log(result)
    } catch (error) {
      console.log(error);
    }

    setSubmitting(false);
  };

  render() {
    const { location } = this.props;
    return (
      <Layout>
        <Header location={location} />
        <div>
          <section className="status status--contacts dark-bg dark-bg--about">
            <div className="container">
              <h2 className="title title--page">
                <span className="title__bold">Contactez-nous</span>
              </h2>
            </div>
          </section>

          <section className="contacts">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="contacts-find">
                    <div className="map">
                      <h3 className="blog-title">
                        SERVICE COMMERCIAL
                        <span className="line line--title line--blog-title">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h3>
                      <h4>
                        <span className="fa fa-map-marker" /> AIN LAHDJAR
                      </h4>
                      <p>MECHETAT OUELED BAROUCHE AIN LAHDJAR 19018 - SETIF</p>
                      <p> Tel : 036-55-50-86 / Fax : 036-55-52-12 </p>
                      <h4>
                        <span className="fa fa-map-marker" />
                        EL EULMA
                      </h4>
                      <p>68 LOTS N° 02 TRANCHE B3 EL EULMA 19600 - SETIF</p>
                      <p> Tel : 036-76-63-17 / Fax : 036-76-63-20 </p>
                      <h4>
                        <span className="fa fa-map-marker" /> SETIF
                      </h4>
                      <p>
                        CITE EL-HIDHAB LOTS 162 COP IMMOBOLIER EL MOSTAKBEL
                        19000 - SETIF
                      </p>
                      <p> Tel : 036-63-51-91 / Fax : 036-63-52-92 </p>
                      <h4>
                        <span className="fa fa-map-marker" /> AIN AZEL
                      </h4>
                      <p>ZONE D’ACTIVITE 74 LOTS N° 04 AIN AZEL – SETIF </p>
                      <p> Tel : 036-55-29-27 / Fax : 036-55-29-42 </p>
                      <h3 className="blog-title">
                        SERVICE CARTE GRISE
                        <span className="line line--title line--blog-title">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h3>
                      <h4>
                        <span className="fa fa-map-marker" /> AIN AZEL
                      </h4>
                      <p>ZONE D’ACTIVITE 74 LOTS N° 04 AIN AZEL – SETIF</p>
                      <p>Tel : 036-55-29-27 / Fax : 036-55-29-42</p>
                      <h4>
                        <span className="fa fa-map-marker" /> ELEULMA
                      </h4>
                      <p>68 LOTS N° 02 TRANCHE B3 EL EULMA 19600 - SETIF </p>
                      <p>Tel : 036-76-63-17 / Fax : 036-76-63-20</p>
                      <br />
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12885.084051478698!2d5.6858295!3d36.1599592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x612591bc0cd2071e!2sSarl+Ibn+Aouf!5e0!3m2!1sfr!2sdz!4v1554352556728!5m2!1sfr!2sdz"
                        width={550}
                        height={300}
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="contacts-form">
                    <h3 className="blog-title">
                      Contactez-nous
                      <span className="line line--title line--blog-title">
                        <span className="line__first" />
                        <span className="line__second" />
                      </span>
                    </h3>
                    <div id="success" />
                    <p className="blog-text blog-text--article">
                      Nous mettons tout en oeuvre pour faciliter votre visite
                      sur notre site et en magasin afin de répondre au mieux à
                      vos attentes. Vous pouvez nous contacter par téléphone,
                      par email et nous vous répondrons dans les plus brefs
                      délais.
                    </p>

                    <Formik
                      initialValues={{ name: "", email: "", message: "" }}
                      validate={values => {
                        let errors = {};
                        if (!values.name) {
                          errors.name = "Champ Obligatoir";
                        }

                        if (!values.message) {
                          errors.message = "Champ Obligatoir";
                        }

                        if (!values.email) {
                          errors.email = "Champ Obligatoir";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Address email non valide";
                        }
                        return errors;
                      }}
                      onSubmit={this.handleFormSubmit}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <form onSubmit={handleSubmit} className="comment-form">
                          <div className="comment-form__input">
                            <input
                              type="text"
                              className="search-input"
                              name="name"
                              id="user-name"
                              placeholder="Nom et prénom ou(Raison sociale)"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                            <span className="form_error">
                              {errors.name && touched.name && errors.name}
                            </span>
                          </div>
                          <div className="comment-form__input">
                            <input
                              type="email"
                              className="search-input"
                              name="email"
                              id="user-email"
                              placeholder="Email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            <span className="form_error">
                              {errors.email && touched.email && errors.email}
                            </span>
                          </div>
                          <div className="comment-form__input">
                            <textarea
                              id="user-message"
                              name="message"
                              placeholder="Message"
                              className="comment-textarea search-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                            />
                            <span className="form_error">
                              {errors.message &&
                                touched.message &&
                                errors.message}
                            </span>
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn button button--main button--grey transparent"
                          >
                            Envoyer
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Contact;
