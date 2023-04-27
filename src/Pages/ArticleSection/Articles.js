import React from "react";
import "./articles.css";
import Line from "../Line";
import ArticleImg1 from "../../assets/images/needle.png";
import ArticleImg2 from "../../assets/images/lab.png";
import ArticleImg3 from "../../assets/images/makeup.png";
import ArrowImage from "../ArticleSection/ArrowImage";

function Articles() {
  return (
    <div className="container mt-5 article-row">
      <div className="article-header">
        <h2>Check out our latest article</h2>
        <Line />
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-5">
        <div className="col mb-4">
          <div className="card h-100 article-card card-1">
            <img src={ArticleImg1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Disease detection, check <br /> up in the laboratory
              </h5>
              <p className="card-text">
                In this case, the role of the health <br /> laboratory is very
                important to do <br /> a disease detection...
              </p>
              <div className="card-footer">
                <h3>Read more</h3>
                <ArrowImage />
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card article-card card-2">
            <img src={ArticleImg2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Herbal medicines that are <br />
                safe for consumption
              </h5>
              <p className="card-text">
                Herbal medicine is very widely used <br />
                at this time because of its very good <br /> for your health...
              </p>
              <div className="card-footer">
                <h3>Read more</h3>
                <ArrowImage />
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100 article-card card-3">
            <img src={ArticleImg3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Natural care for healthy <br />
                facial skin
              </h5>
              <p className="card-text">
                A healthy lifestyle should start from <br />
                now and also for your skin health.
                <br />
                There are some...
              </p>
              <div className="card-footer">
                <h3>Read more</h3>
                <ArrowImage />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-section-button text-center">
        <button className="service-btn">View all</button>
      </div>
    </div>
  );
}

export default Articles;
