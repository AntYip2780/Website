import React, {Fragment} from 'react';
import Child from './Child';

const Sorting = ({filtera}) => {
    const filer = filtera.map((robots, i) => {
        return <Child key = {i} alias = {robots.name} age = {robots.email}/>
    })
    return (
      <Fragment>
         {filer}
      </Fragment>
    )
}
export default Sorting;