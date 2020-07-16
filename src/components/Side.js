import React from "react";
import { Link } from "gatsby";

export default function Side({ models = [] }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-5 col-xs-6 sticky-slide">
      <aside className="shop-aside">
        <div className="shop-aside__block wow fadeInUp">
          <h2 className="shop-title">
            Type de motos
            <span className="line line--title line--shop">
              <span className="line__first" />
              <span className="line__second" />
            </span>
          </h2>
          <ul className="triangle-list triangle-list--shop">
            {models.map((item, i) => {
              return (
                <li key={item.pathName} className="triangle triangle-list__one">
                  <Link
                    to={`/models#${i}`}
                    style={{ cursor: "pointer" }}
                    className="no-decoration"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
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
  );
}
