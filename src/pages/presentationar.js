import React from "react";
import Layout from "../components/layout";
import Header from "../components/Header/Header2";
import { Link } from "gatsby";

export default function presentationar() {
  return (
    <Layout>
      <Header />
      <div>
        {/*top-nav*/}
        <section className="status dark-bg dark-bg--status">
          <div className="container">
            <h2 className="title title--page">
              <span
                className="title__bold"
                style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
              >
                من نحن ؟
              </span>
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
                    <div
                      className="article"
                      dir="rtl"
                      style={{ fontFamily: '"Droid Arabic Kufi", serif' }}
                    >
                      <h2
                        className="title title--main"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.5s",
                          animationDelay: "0.7s",
                          animationName: "fadeInUp"
                        }}
                      >
                        من نحن ؟<span className="title__bold" />
                        <span
                          className="line line--title"
                          style={{ left: "auto", right: "0 !important" }}
                        >
                          <span className="line__first" />
                          <span className="line__second" />
                        </span>
                      </h2>
                      <p>
                        شركة سيم ألجيريا هام موتورز هي شركة مختصة في صناعة
                        الدراجات النارية، وهي شركة منبثقة من شركة ابن عوف رقايقي
                        وشركائه التي تأسست سنة 1997 من طرف مؤسسيها السيدان
                        رقايقي الحامدي وماضي عيسى. والتي في الأصل تعلق الأمر
                        أولا باستيراد عدة منتوجات منها ومن أبرزها قطع غيار
                        الدراجات والدراجات النارية ولواحقها وكذا استيراد كل
                        أنواع العجلات المطاطية وقطع غيار السيارات ولواحقها ..
                        هذا مما سمح لنا بالحصول على حجم كبير من الأعمال
                        والمشاريع ومن أبرزها إنشاء مصنع تركيب الدراجات النارية
                        بمنطقة النشاطات عين آزال ولاية سطيف، وكان هذا سنة 2016
                        والذي حقق قفزة نوعية في ظرف وجيز من خلال منتوجاتنا التي
                        تتضمن تكنولوجيا عالية وجودة رفيعة مع مستوى نوعي استثنائي
                        وكذلك بفضل سياستنا النشطة في التسيير الحسن، وفي مجال
                        الأسعار الموثوقية وخدمة ما بعد البيع.
                      </p>
                      <p>
                        تمكنا من رفع مستوى شركتنا ضمن العلامات التجارية العالمية
                        الأكثر أداء في البلاد ومن دخول قلوب الجزائريين المحبين
                        لعالم الدراجات والدراجات النارية.
                      </p>
                      <p>
                        لقد تجاوز النجاح الباهر لمنتوجاتنا على السوق الجزائرية
                        حدودنا وذلك بنوعية التصنيع والمصداقية والأداء الجيد حيث
                        يمكن لهذا أن يكون موضع فخر للجزائر.
                      </p>
                      <p>
                        يرتكز نجاح شركتنا بشكل أساسي على العامل البشري (نساء
                        ورجالا) وهي العناصر الرئيسة لمقاربتها فقد خولت لهم
                        استقلالية كبيرة تسمح لهم بأداء مهامهم على أحسن وجه
                        وتنمية كفاءاتهم المهنية، وقد ساهم تحمس وإشراك الكل في
                        خدمة المؤسسة وذلك يتمثل في روح الفريق الواحد والتكاتف
                        لبلوغ الأهداف المسطرة والمضي قدما في المساهمة بالنهوض
                        بالاقتصاد الوطني والازدهار والرقي وإرضاء زبائننا.
                      </p>
                      <p>
                        تحصلت شركتنا على عدة جوائز تقدير واحترام منها جوائز
                        عالمية وهذا يرجع كله بفضل الله أولا ثم الآداء المميز
                        للمسيرين والطاقم القائم على هذه المؤسسة الفتية وكذلك على
                        الطريق الأول المسطر على المصداقية الحقة وروح الإبداع
                        والتجارة النزيهة.
                      </p>
                      <p>
                        اليوم تمثل شركتنا إحدى أقوى وأنشط تكتلات المؤسسات
                        الجزائرية في هذا المجال في الساحة الاقتصادية في البلاد
                        مع نتائج جد مرضية وجديرة بالذكر.
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
                      Qui somme nous ?
                      <span className="line line--title line--blog-title">
                        <span className="line__first" />
                        <span className="line__second" />
                      </span>
                    </h3>
                    <div className="blog-aside__about">
                      <p className="blog-text">
                        La société SYM – Algeria HAM MOTORS- est spécialisée
                        dans la fabrication des motocycles. Elle est une filiale
                        de la SARL IBN AOUF REGAIGUI et CIE, créée en 1997 par
                        messieurs REGAIGUI El Hamdi et MADI Aissa.
                      </p>
                      <Link
                        to="presentation"
                        className="btn button button--red button--main"
                      >
                        Lire Plus
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
        {/*blog-page*/}
      </div>
    </Layout>
  );
}
