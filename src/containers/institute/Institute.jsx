import React from 'react';
import './institute.css';
import institute1 from '../../assets/institute/institute-1.png';
import institute2 from '../../assets/institute/institute-2.png';
import institute3 from '../../assets/institute/institute-3.png';
import institute4 from '../../assets/institute/institute-4.png';
import institute5 from '../../assets/institute/institute-5.png';
import institute6 from '../../assets/institute/institute-6.png';
import institute7 from '../../assets/institute/institute-7.png';
import institute8 from '../../assets/institute/institute-8.png';
import institute9 from '../../assets/institute/institute-9.png';
import institute10 from '../../assets/institute/institute-10.png';
import institute11 from '../../assets/institute/institute-11.png';
import institute12 from '../../assets/institute/institute-12.png';
import institute13 from '../../assets/institute/institute-13.png';
import institute14 from '../../assets/institute/institute-14.png';

const instituteItem = [
  {
    image: institute1,
    text: 'MEDIA CIPTA PRESTASI',
  },
  {
    image: institute2,
    text: 'REWATA CONSULTANT',
  },
  {
    image: institute3,
    text: 'LKP DUTA',
  },
  {
    image: institute4,
    text: 'GADJAH MADA YOGYAKARTA',
  },
  {
    image: institute5,
    text: 'LKP GLOBAL BONTANG',
  },
  {
    image: institute6,
    text: 'BINURI LEARNING CENTER',
  },
  {
    image: institute7,
    text: 'SENJA HASTA AZIZAN',
  },
  {
    image: institute8,
    text: 'MITRA POLRI',
  },
  {
    image: institute9,
    text: 'SURYA COMPUTER',
  },
  {
    image: institute10,
    text: 'YES STUDY',
  },
  {
    image: institute11,
    text: 'SMART BRAIN',
  },
  {
    image: institute12,
    text: 'AVICENNA CIPTA TRAINING',
  },
  {
    image: institute13,
    text: 'LKP MSI',
  },
  {
    image: institute14,
    text: 'GLOBAL ANTUSIAS SEMESTA',
  },
];

const Institute = () => {
  return (
    <div className="institute section__margin">
      <div className="section_header">
        <h1>Lembaga</h1>
      </div>
      <div className="institute_container">
        {instituteItem.map((institute, index) => {
          return (
            <div key={index} className="institute_content">
              <img src={institute.image} alt="" />
              <p>{institute.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Institute;
