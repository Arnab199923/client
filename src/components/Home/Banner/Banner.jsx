import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">

        <div className="content">
            <div className="text">
                <h1>Sales</h1>
                <p>Lorem ipsum dolor, 
                     Sit, asperiores enim excepturi quae nemo a rerum eum 
                     praesentium fugit minima magnam.
                     </p>
                     
                     <div className="ctas">
                        <div className="banner-content ">Read More</div>
                        <div className="banner-content v2">Shop</div>
                     </div>
            </div>
            <img className="banner-image" src={BannerImg} alt="" />

        </div>

</div>

};

export default Banner;
