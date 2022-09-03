import React from 'react';
import './categories.css';
import category1 from '../../assets/category/category-1.png';
import category2 from '../../assets/category/category-2.png';
import category3 from '../../assets/category/category-3.png';
import category4 from '../../assets/category/category-4.png';
import category5 from '../../assets/category/category-5.png';
import category6 from '../../assets/category/category-6.png';
import category7 from '../../assets/category/category-7.png';

const categoryItem = [
  {
    image: category1,
    text: 'Bisnis',
  },
  {
    image: category2,
    text: 'Keuangan',
  },
  {
    image: category3,
    text: 'Pengembangan Karier',
  },
  {
    image: category4,
    text: 'Sertifikasi',
  },
  {
    image: category5,
    text: 'Teknologi',
  },
  {
    image: category6,
    text: 'Hobi',
  },
  {
    image: category7,
    text: 'Bahasa',
  },
];

const Categories = () => {
  return (
    <div className="categories section__margin">
      <div className="section_header">
        <h1>Kategori</h1>
      </div>
      <div className="categories_container">
        {categoryItem.map((category, index) => {
          return (
            <div key={index} className="category_content">
              <img src={category.image} alt="" />
              <p>{category.text}</p>
            </div>
          );
        })}
      </div>
      <button className="section_button categories_button">
        Lihat Semua Spesialisasi
      </button>
    </div>
  );
};

export default Categories;
