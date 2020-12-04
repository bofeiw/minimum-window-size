// This component also requires 'react',
// but it has already been included in the
// list of dependencies in package.json
import React, {useEffect, useRef, useState} from 'react';

import './MinimumWindowSize.css';

function MinimumWindowSize({width, height, ...props}) {
    const [shouldHide, setShouldHide] = useState(true);
    const requiredBox = useRef(null);
    const currentBox = useRef(null);

    useEffect(() => {
        onScreenResize();
        window.addEventListener('resize', onScreenResize);
    })

    function onScreenResize() {
        // update hidden status
        console.log(window.innerWidth, window.innerHeight)
        if (window.innerWidth && window.innerWidth < width) {
            setShouldHide(true)
        } else if (window.innerHeight && window.innerHeight < height) {
            setShouldHide(true)
        } else {
            setShouldHide(false)
            return;
        }

        // update present box
        let requiredWidth = 300;
        let requiredHeight = Math.floor(requiredWidth * height / width);
        requiredBox.current.style.height = `${requiredHeight}px`;
        requiredBox.current.style.width = `${requiredWidth}px`;

        let currentWidth = 300 * window.innerWidth / width;
        let currentHeight = requiredHeight * window.innerHeight / height;
        currentBox.current.style.height = `${currentHeight}px`;
        currentBox.current.style.width = `${currentWidth}px`;
    }

    return (
        <div className="minimum-window-size-container">
            <div className={"minimum-window-size-hide-content"} hidden={!shouldHide}>
                <div className={"minimum-window-size-caption"}>Adjust browser size</div>
                <div className={"minimum-window-size-sub-caption"}>This app requires a large screen size</div>
                <div className={"minimum-window-size-present-container"}>
                    <div className={"minimum-window-size-caption-required"}>Required size</div>
                    <div className={"minimum-window-size-box-required"} ref={requiredBox}>
                        <div className={"minimum-window-size-box-current"} ref={currentBox}>
                            <div className={"minimum-window-size-caption-current"}>Browser size</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"minimum-window-size-real-content"} hidden={shouldHide}>
                {props.children}
            </div>
        </div>
    );
}

export default MinimumWindowSize;