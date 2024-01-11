import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <div className="d-block d-sm-flex justify-content-between mt-3">
      <Card style={{ width: "16rem" }} className='mt-3'>
        <Card.Img variant="top" src="card-1.jpg" />
        <Card.Body>
          <Card.Title>Meram'da Şampiyon Sporcular Yetişiyor</Card.Title>
          <Card.Text>
          Günümüz şartlarında çocukların ve gençlerin iyi bir birey olarak yetişmesinde; İnternet, televizyon ve bilgisayar oyunları gibi eğlencelerin kişilerinin hareketsiz hale getirdiği dönemde obezite riskini azaltacak sağlıklı bir yaşama devam edecekleri Yaz Spor Okullarımız ilçemiz çocukları için kurulmuştur.
          </Card.Text>
          
        </Card.Body>
      </Card>
     
      <Card style={{ width: "16rem" }}  className='mt-3'>
        <Card.Img variant="top" src="card-3.jpg" />
        <Card.Body>
          <Card.Title>Bilimin Dilinden</Card.Title>
          <Card.Text>
          Milli teknoloji köyleri kapsamında üç yıldır belediyemizin okullarında yürütülen Bilim Kurdu projesinin daha kapsamlı ve sistemli olması için üniversite ve milli eğitim müdürlüğü birliği ile planlanmış spesifik bir projedir.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "16rem" }}  className='mt-3'>
        <Card.Img variant="top" src="card-4.jpg" />
        <Card.Body>
          <Card.Title>Trafiği Uygulamalı Öğreniyorum</Card.Title>
          <Card.Text>
          Trafik, günümüzde yaşayan şehirlerin en büyük ortak sorunu haline geldi. Saygı, eğitim ve okulda olmak trafikte huzuru sağlamak adına sayabileceğimiz en önemli unsurlardandır. Bu faktörlerin erken çocukluk döneminde öğrenilmesi, kendilerinin kazalardan korunmasına, şebekelerin düzgün kurallı olarak kullanılması ve düzenli sokan yetişkinliklerinin devamında dosyalanmasıdır.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card  style={{ width: '16rem' }} className='mt-3'>
        <Card.Img variant="top" src="card-5.jpg" />
        <Card.Body>
          <Card.Title>Doğanın Dilini Öğren</Card.Title>
          <Card.Text>
          Kop Doğa Okulu kapsamında, eğitim programında yer alan taşınabilirler, okul dışı öğrenme ortamlarında yapılan etkinliklerle eşleştirilerek öğrenme süreci devam ettirilmekte ve yönlendirme uygulamaları sırasında öğrenme yöntemleri aktif olarak verilmektedir.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;