import React from 'react';
import { Button, Result } from 'antd';

const ChildVerify: React.FC = () => {
    return (
        <div style = {{display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: 'column'}}>
            <img src="images/waiting.png" alt="waiting" style={{ width: '15%', height: '15%' }} />
            <h1>Successfully url was sended!</h1>
            <h2>Please wait until your parent submit</h2>
            <Button type='primary'         style={{
          marginTop: "1%",
          fontSize: "17px",
          width: "10%",
          height: "50px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}>Send submit again</Button>
        </div>
    )
}

export default ChildVerify;