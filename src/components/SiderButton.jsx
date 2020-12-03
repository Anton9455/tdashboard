import React from 'react';
import { Button } from "antd";

export default ({icon})=>{
    return (<Button
        type="primary"
        shape="circle"
        icon={icon}
        size="large"
        className="col__buttons"
      />)
}