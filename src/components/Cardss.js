import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardss() {
  return (
    <div className="d-block d-sm-flex justify-content-between mt-3">
      <Card style={{ width: "16rem" }} className='mt-3'>
        <Card.Img variant="top" src="card-6.jpg" />
        <Card.Body>
          <Card.Title>MERAM’DA ŞİVLİLİK COŞKUSU</Card.Title>
          <Card.Text>
          Şivlilik geleneği Meram’da coşkuyla yaşandı. Sabahın erken saatlerinde sokaklara çıkan çocukların heyecanı ve mutluluğuna ortak olan Meram Belediye Başkanı Mustafa Kavuş, şivlilik toplayan çocuklara eşlik etti. Bu özel günü hastanede geçirmek zorunda kalan çocukları da unutmayan Kavuş, Meram Tıp Fakültesi’nde tedavi gören çocuklara hediyelerini hastane yönetimi ile birlikte verdi. Dolu dolu geçen günün sonunda DOSD Meram’da eğitim gören down sendromlu bireyler Başkan Kavuş’u ziyaret ederek şivlilik manisini okudu.
          </Card.Text>
          
        </Card.Body>
      </Card>
     
      <Card style={{ width: "16rem" }}  className='mt-3'>
        <Card.Img variant="top" src="card-7.jpg" />
        <Card.Body>
          <Card.Title>2023’ÜN EN GÖZDESİ; KIZLAR KAYASI</Card.Title>
          <Card.Text>
          Meram Belediyesi tarafından oluşturulan ‘Yeni Turizm Rotası’nın en nadide parçası Kızlar Kayası, 2023’ün en gözde mekanlarından biri oldu. Kızlar Kayası’nı kısa zamanda on binlerce kişinin ziyaret ettiğini söyleyen Meram Belediye Başkanı Mustafa Kavuş, “Kızlar Kayası, pek çok hikayeye konu oldu. Ama artık hemşehrilerimiz kendi hikayelerini yazacak dedik, öyle de oldu” diye konuştu.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card style={{ width: "16rem" }}  className='mt-3'>
        <Card.Img variant="top" src="card-8.jpg" />
        <Card.Body>
          <Card.Title>2023’ÜN EN ÖZELİ; DOSD MERAM</Card.Title>
          <Card.Text>
          Eğitim modeli ve yapısıyla pek çok ilki bünyesinde barındıran Down Sendromlu Bireyler Yaşam Destek Merkezi DOSD Meram alanında önemli bir eksikliği tamamladı. Özel bireylerin ve ailelerinin hayatlarına dokunan DOSD Meram eğitim faaliyetleri ve hedefleriyle her kesimden büyük beğeni ve takdir topladı.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card  style={{ width: '16rem' }} className='mt-3'>
        <Card.Img variant="top" src="mega.jpeg" />
        <Card.Body>
          <Card.Title>2023’ÜN YILDIZI; MEGA</Card.Title>
          <Card.Text>
          Meram Belediyesinin hayata geçirdiği yeni nesil eğitim projesi Meram Gelişim Akademisi (MEGA), her yıl 75 bin öğrencinin hayatına dokunuyor. Ahlaki karakter eğitimini merkeze alarak yeni nesli, yeni nesil eğitim yöntemleriyle tanıştıran ve bilim, sanat, yaşam, doğa, sağlık ve spor eğitimleriyle yeni bir çığır açan MEGA ortaya koyduğu projelerle her yıl olduğu gibi 2023’ün de yıldızı oldu.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardss;