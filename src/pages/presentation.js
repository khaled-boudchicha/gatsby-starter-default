import React from "react";
import Layout from "../components/layout";
import Header from "../components/Header/Header2";
import { Link } from "gatsby";

export default function Presentation() {
  return (
    <Layout>
      <Header />
      <div>
        <section className="status dark-bg dark-bg--status">
          <div className="container">
            <h2 className="title title--page">
              <span className="title__bold">Qui somme nous ?</span>
            </h2>
          </div>
        </section>
        {/*status*/}
        <div className="blog-page blog-page--article">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-sm-8 col-xs-7">
                <div className="blog-main">
                  <div className="articles">
                    <div className="article">
                      <h2
                        className="title title--main wow fadeInUp"
                        data-wow-delay="0.7s"
                        data-wow-duration="1.5s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.5s",
                          animationDelay: "0.7s",
                          animationName: "fadeInUp"
                        }}
                      >
                        SYM Algérie
                        <span className="title__bold" />
                        <span className="line line--title">
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <p>
                        La société SYM – Algeria HAM MOTORS- est spécialisée
                        dans la fabrication des motocycles. Elle est une filiale
                        de la SARL IBN AOUF REGAIGUI et CIE, créée en 1997 par
                        messieurs REGAIGUI El Hamdi et MADI Aissa.
                      </p>
                      <p>
                        Son activité initiale était principalement l’importation
                        de pièces détachées pour cycle, motocycle, véhicule
                        automobile, ainsi que tous les types de pneus leur
                        référant.
                      </p>
                      <p>
                        Forts de cette notoriété et expérience, nous avons créé
                        en 2016 une usine de montage de motocycle dans la zone
                        industrielle d’Ain Azel, wilaya de Sétif. Ce projet fut
                        un réel succès, notamment grâce à la qualité de nos
                        matières premières ainsi qu’à l’utilisation de matériel
                        de dernière technologie. Nous mettons également un point
                        d’honneur à la compétitivité de nos prix et au Service
                        Apres Vente.{" "}
                      </p>
                      <p>
                        Notre société a atteint une telle notoriété qu’elle n’a
                        rien à envier aux autres marques commerciales
                        internationales les plus actives, nous avons su séduire
                        le cœur des algériens, fan incontestés des deux roues.{" "}
                      </p>
                      <p>
                        La bonne réputation de nos produits et ce succès a
                        dépassé nos prévisions, ce qui est évidemment une fierté
                        pour nous et pour tout le pays.
                      </p>
                      <p>
                        Le succès de notre société se base essentiellement sur
                        le facteur humain. Nous accordons à ces hommes et ces
                        femmes accomplissant chaque jour leur mission une grande
                        autonomie, s’assurant ainsi qu’ils pourront développer
                        leurs qualifications professionnelles avec enthousiasme
                        et qu’ils mettront leur savoir-faire au service de la
                        société.{" "}
                      </p>
                      <p>
                        Ainsi, l’esprit d’équipe et la collaboration sont les
                        mots clés pour effectuer la mission principale qui reste
                        satisfaire les clients, mais aussi promouvoir et
                        développer l’économie nationale.{" "}
                      </p>
                      <p>
                        Grace à Dieu avant tout, ainsi qu’à la performance des
                        gérants et de tout le personnel, qui ont tous fait
                        preuve d’esprit de créativité et de commerce rigoureux,
                        notre société a décrochée plusieurs reconnaissances et
                        prix internationaux.{" "}
                      </p>
                      <p>
                        Aujourd’hui, nous sommes fiers de dire que notre société
                        est une des plus grandes et actives en Algérie avec des
                        résultats remarquables et plus satisfaisant chaque jour…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-5">
                <aside className="blog-aside">
                  <div
                    className="blog-aside__block wow fadeInUp"
                    data-wow-delay="0.7s"
                    data-wow-duration="1.5s"
                  >
                    <h3
                      className="blog-title"
                      style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
                      dir="rtl"
                    >
                      من نحن ؟
                      <span className="line line--title line--blog-title">
                        <span className="line__first" />
                        <span className="line__second" />
                      </span>
                    </h3>
                    <div className="blog-aside__about" dir="rtl">
                      <p
                        dir="rtl"
                        className="blog-text"
                        style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
                      >
                        شركة سيم ألجيريا هام موتورز هي شركة مختصة في صناعة
                        الدراجات النارية، وهي شركة منبثقة من شركة ابن عوف رقايقي
                        وشركائه التي تأسست سنة 1997 من طرف مؤسسيها السيدان
                        رقايقي الحامدي وماضي عيسى.
                      </p>
                      <Link
                        to="/presentationar"
                        style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
                        className="btn button button--red button--main"
                      >
                        المزيد
                      </Link>
                      <br />
                      <br />
                      <br />
                      <div className="social-blocks">
                        <div className="row row--no-padding">
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
  );
}
