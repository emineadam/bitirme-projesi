import React from 'react';
import Alert from 'react-bootstrap/Alert';

function CardBottom() {
  return (
    <Alert variant="success" className='mt-4'>
      <Alert.Heading>SOSYAL TESİSLER</Alert.Heading>
      <ul>
        <li>80 Binde Devri Alem Parkı</li>
        <li>Meram Lavanta Bahçesi</li>
        <li>Kızlar Kayası</li>
        <li>Tantavi Kültür Sanat Merkezi</li>
        <li>Dutlu Mİllet Bahçesi</li>
        <li>Huzur Kafe Meram</li>
        <li>Âlâbalık Restaurant</li>
      </ul>
      <hr />
      <p className="mb-0">
        Meram'da bulunan doğal güzellikleri ile ilgi çeken yerleri fotoğraflarken aynı zamanda dinlenip çay, kahve içip, bişeyler atıştırabileceğiniz tesisleri ziyaret etmenizi öneririm.
      </p>
    </Alert>
  );
}

export default CardBottom;

