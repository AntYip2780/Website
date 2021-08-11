import React, {Fragment} from 'react';
import './Scroll.css'
const Scroll = (props) => {
    return (
        <Fragment>
            <div className="Rig">
                {props.children}
            </div>
        </Fragment>
    )
}

export default Scroll;