import {useEffect,useState,useContext} from "react"
import {useNavigate} from "react-router-dom"
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/Context"
import "./Header.scss";
const Header = () => {

    const [scrolled,setscrolled] =useState(false)
    const handlescroll=()=>{
        const offset = window.scrollY
        console.log(offset)
        if(offset > 200){
            setscrolled(true)
        }else{
            setscrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)
    },[])
    return <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">LoudShout</div>
            <div className="right">
                <TbSearch/>
                <AiOutlineHeart/>
                <span  className="cart-icon">
                    <CgShoppingCart/>
                    <span>5</span>
                </span>
            </div>
        </div>
    </header>;
};

export default Header;
