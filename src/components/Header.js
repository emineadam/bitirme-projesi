import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Header() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"  
          src="slider-img-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Meram Belediyesi Hizmet Binası</h3>
          <p> Mimari tasarımıyla gözleri üzerine çeken Meram Belediye Hizmet Binası hizmet standartlarını yükseltiyor. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"  
          src="slider-img-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Magnum Ağaçlar</h3>
          <p>Yeni Meram Caddesi üzerinde yol boyu devam eden, Magnum dondurmaya benzeyen ağaçlar yaz,kış görsel şölen oluşturmaktadır.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"  
          src="slider-img-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Meram Bağları</h3>
          <p>
            Temiz havası, göz dinlendiren yeşilliğiyle Meram Bağlarında yaz akşamları bir başkadır.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
