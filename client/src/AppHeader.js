import { useState } from "react";
import Navbar from "./Navbar";
import "./AppHeader.css"

function AppHeader() {
    const maxHeight = window.innerWidth * 9 / 16;
    const minHeight = 50;
    const [headerHeight, setHeaderHeight] = useState(maxHeight);
    const headerStyle = {
        height: `${headerHeight}px`
    };

    function caclculateHeight() {
        let height = maxHeight - window.scrollY;
        return height > minHeight ? height : minHeight;
    }

    window.addEventListener('scroll', () => {

    });

    return (
        <div className='AppHeader' style={headerStyle}>
            <Navbar />
        </div >
    );
}
export default AppHeader;