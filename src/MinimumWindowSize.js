// This component also requires 'react',
// but it has already been included in the
// list of dependencies in package.json
import React, {useEffect, useState} from 'react';

import './MinimumWindowSize.css';

const MinimumWindowSize = ({width, height, ...props}) => {
    const [shouldHide, setShouldHide] = useState(true);

    useEffect(() => {
        updateHiddenStatus();
        window.addEventListener('resize', updateHiddenStatus);
    })

    function updateHiddenStatus() {
        if (window.innerWidth && window.innerWidth < width) {
            setShouldHide(true)
        } else if (window.innerHeight && window.innerHeight < height) {
            setShouldHide(true)
        } else {
            setShouldHide(false)
        }
    }

    return (
        <div className="minimum-window-size-container">
            <div className={"minimum-window-size-hide-content"} hidden={!shouldHide}>
                Minimum width: {width}
                Minimum height: {height}
            </div>
            <div className={"minimum-window-size-real-content"} hidden={shouldHide}>
                {props.children}
            </div>
        </div>
    );
}

export default MinimumWindowSize;