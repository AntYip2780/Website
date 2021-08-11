import React, {Fragment} from 'react';
import './Child.css'

const Child = ({alias, age}) => {
    return (
        <Fragment>
          <div className="hot">
          <img src = {`https://robohash.org/${alias}`} alt = "Robots"/>
          <p>Name:{alias}</p>
          <p>Email: {age}</p>
          </div>
        </Fragment>
    )
}
export default Child;