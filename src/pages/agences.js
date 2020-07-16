import React from "react";
import Layout from "../components/layout";
import Header from "../components/Header/Header2";
import { graphql } from "gatsby";
import algerie from "../assets/algerie.jpg";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tableau.css";
import "../styles/bdb/mdb.css";

//import "mdbreact/dist/css/datatables.css";
import { MDBDataTable } from "mdbreact";
//import GoogleMapReact from 'google-map-react'
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const DatatablePage = ({ data }) => {
  const json = data.agences.edges[0].node.agences;

  var f = json.map(function(item, i) {
    const Mobile = item.Mobile;
    const Tel = item.Tel;
    const Fax = item.Fax;
    return {
      Wilaya: item.Wilaya,
      Distributeur: item.Distributeur,
      Adresse: item.Adresse,
      Mobile: ReactHtmlParser(Mobile),
      Tel: ReactHtmlParser(Tel),
      Fax: ReactHtmlParser(Fax),
      Email: item.Email
    };
  });

  console.log(f);
  const donnes = {
    columns: [
      {
        label: "Wilaya",
        field: "Wilaya",
        width: 130
      },
      {
        label: "Distributeur",
        field: "Distributeur",
        width: 150
      },
      {
        label: "Adresse",
        field: "Adresse",
        width: 150
      },
      {
        label: "Mobile",
        field: "Mobile",
        width: 150
      },
      {
        label: "Tél",
        field: "Tel",
        width: 150
      },
      {
        label: "Fax",
        field: "Fax",
        width: 130
      },
      {
        label: "Email",
        field: "Email",
        width: 150
      }
    ],
    rows: f
  };

  return (
    <MDBDataTable
      searchLabel="Recherche"
      entriesLabel="Affiche par"
      infoLabel={["Afficher", "a", "de", "lines"]}
      paginationLabel={["Précedent", "Suivant"]}
      fixed
      striped
      bordered
      hover
      data={donnes}
    />
  );
};

const Agences = ({ location, data }) => {
  const faultProps = {
    center: {
      lat: 36.411657,
      lng: 6.607981
    },
    zoom: 11
  };

  return (
    <Layout>
      <Header location={location} />

      <section className="status dark-bg dark-bg--status">
        <div className="container">
          <h2 className="title title--page">
            <span className="title__bold">NOS AGENCES</span>
          </h2>
        </div>
      </section>
      {/*status*/}
      <div className="blog-page blog-page--article">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-main">
                <div className="articles">
                  <div className="article">
                    <h2
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        display: "block"
                      }}
                    >
                       SYM maintenant partout en Algérie 
                    </h2>
                    <br />
                    <br />
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        display: "block"
                      }}
                    >
                      <img src={algerie} className="img-responsive" />
                    </p>

                    <br />

                    <div style={{ overflowX: "auto" }}>
                      <DatatablePage data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Agences;

export const pageQuery = graphql`
  query {
    agences: allAssetsJson {
      edges {
        node {
          agences {
            Wilaya
            Distributeur
            Adresse
            Tel
            Fax
            Mobile
            Email
          }
        }
      }
    }
  }
`;
