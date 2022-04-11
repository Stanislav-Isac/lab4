import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Button } from 'antd';
import { Input } from 'antd';


const { TextArea } = Input;

ReactDOM.render(
  <>
    <Button type="primary">LOL Button</Button>
    <br />
    <br />
    <TextArea rows={4} /> 
    <br />
    <br />
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} />
  </>,
  document.getElementById('container'),
);

