import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Featured() {
  return (
    <Card className="text-center mt-4">
      <Card.Header></Card.Header>
      
      <Card.Body>
        <Card.Title>MERAM BELEDİYESİ'NE HOŞGELDİNİZ </Card.Title>
        <Card.Text>
        Sayın Belediye Başkanımız Mustafa KAVUŞ önderliğinde, Meram Belediyesi ve Meram Gelişim Akademisi (MEGA) kapsamında gerçekleştirilen projelerimizin birkaçından aşağıda bahsettik. Diğer projelerimize aşağıdaki linkten göz atabilirsiniz.
        
        </Card.Text>

      <a href="https://www.meram.bel.tr/ara?q=MEGA" title="MEGA Etkinlikleri">
       <Button variant="primary">
         Detaylı Bilgi
       </Button>
      </a>

      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default Featured;