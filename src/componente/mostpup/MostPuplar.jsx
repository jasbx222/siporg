import React from 'react';
import './MostPuplar.css';
import CardWrapper from './CardWrapper';

const MostPuplar = () => {
  return (
    <div className='most-all-containt'>

      <div className='header'>
        <h4>الاكثر شهرة <span>حمل الان </span></h4>

      </div>



      <div className="containt">



        <CardWrapper title="Bupg mobile" star="3.2" star2="3.3" img="src\assets\img\popular-01.jpg"/>
        <CardWrapper title="FortNaight" star="2.2" star2="4.3" img="src\assets\img\popular-06.jpg"/>
        <CardWrapper title="Call Of Duaty" star="4.2" star2="3.2" img="src\assets\img\popular-03.jpg"/>
        <CardWrapper title="ATO" star="3.2" star2="3.3" img="src/assets/img/popular-04.jpg" />
        <CardWrapper title="Dont play" star="3.2" star2="1.3" img="src\assets\img\popular-07.jpg" />
        <CardWrapper title="Meni Oi" star="3.2" star2="3.3" img="src\assets\img\popular-08.jpg" />



      </div>
    </div>
  )
}

export default MostPuplar