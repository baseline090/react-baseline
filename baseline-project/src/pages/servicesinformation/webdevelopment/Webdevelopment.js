import React from "react";
import Navbar from "../../../common/navbar/Navbar";
import img from "../../../assets/images.jpg";
import Frontend from "./frontendinfo/Frontend";
import Backend from "./backendinfo/Backend";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Footer from "../../../components/footer/footer";

const WebDevelopment = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div style={{ marginTop: '80px', backgroundColor: "black" }}>
        <div style={{ backgroundColor: "black", margin: "0 auto", maxWidth: "1200px" }}>
          <div className={styles.container}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Text Content */}
              <div style={{ flex: 1, marginRight: '20px' }}>
                <h2 className={styles.heading}>
                  <span className={styles.whiteText}>Best Web</span> Development Company In Mohali
                </h2>
                <p className={styles.text}>
                  Web development services help create all types of web-based software and ensure a great experience for web users.
                </p>
                <p className={styles.text}>
                  Developing a website for your business is the first step in climbing the digital marketing ladder, and we are experts at giving your first step the recognition it deserves. As the best web development company in Mohali, we know what it takes to develop a creative, engaging, and user-friendly website. Founded in Mohali in 2012, we have a team of the best website developers in India who always go above and beyond to provide you with a future-proof website. Baseline IT Development has been rated as one of the best web development companies in India by various reputed online sources and review sites. We have a large pool of talented, experienced web developers who provide clients with nothing less than an award-winning website.
                </p>
              </div>

              {/* Image */}
              <div style={{ flex: 1, marginLeft: '20px', textAlign: 'center' }}>
                <img src={img} alt="images" className={styles.image} />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className={styles.container2}>
            <h3 className={styles.heading1}>
              Web Development can be classified into two ways:
            </h3>
            <div className={styles.text1}>
              <Link to="/frontend" className={styles.link}>
                Frontend Development
              </Link>
              <Link to="/backend" className={styles.link}>
                Backend Development
              </Link>
            </div>
            <Frontend />
            <Backend />
          </div>
        </div>

        {/* Footer */}
        <div >
          <Footer />
        </div>

      </div>

    </>
  );
};

export default WebDevelopment;
