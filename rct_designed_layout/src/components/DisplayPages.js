import React from 'react';
import Page1 from './Page_1';
import Page_2 from './Page_2';
import Page3 from './Page_3';


const DisplayPages = ({ selectedPage, togglePage }) => {
  let ComponentToRender;

  switch (selectedPage) {
    case 'page1':
      ComponentToRender = <Page1 />
      break;
    case 'page2':
      ComponentToRender = <Page_2 />
      break;
    case 'page3':
      ComponentToRender = <Page3 />
      break;

    default:
      ComponentToRender = null;
  }

  return (
    <div style={{
      position: 'absolute', bottom: 25, left: 25, width: 370, backgroundColor: "white",
      padding: '20px 20px 20px 20px'
    }}>
      <h4 style={{ textAlign: "center" }}>Display Pages Comp</h4>
      {ComponentToRender}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <button className="btn-sm btn-primary" onClick={togglePage} style={{ marginTop: 10, width: 'auto' }}>Close</button>
      </div>
    </div>
  );
};

export default DisplayPages;
