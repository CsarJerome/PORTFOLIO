import React, { useState } from 'react';
import './About.css';

function About() {
  const [rowData, setRowData] = useState([
    { title: 'NAME', content: 'JEROME CESAR G AGUAS' },
    { title: 'EDUCATION', content: 'OUR LADY OF FATIMA UNIVERSITY, 3rd Year BSIT' },
    { title: 'LANGUAGES', content: 'C++, Python, Java, HTML, Dart' },
  
  ]);

  const handleRowClick = (index) => {
    const updatedData = [...rowData];
    updatedData[index].isOpen = !updatedData[index].isOpen;
    setRowData(updatedData);
  };

  return (
    <section id="About">
      <div className="container-row">
        {rowData.map((row, index) => (
          <div
            className={`row ${row.isOpen ? 'open' : ''}`}
            key={index}
            onClick={() => handleRowClick(index)}
          >
            <div className="row-title">{row.title}</div>
            {row.isOpen && <div className="row-content">{row.content}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
