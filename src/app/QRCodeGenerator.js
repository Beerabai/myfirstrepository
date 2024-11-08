import React, { useEffect } from 'react';
import QRious from 'qrious';
import Swal from 'sweetalert2';

const QRCodeGenerator = () => {
  const qrValue = "https://example.com"; // Define the value you want to encode in the QR code;

  useEffect(() => {
    const qr = new QRious({
      element: document.getElementById('qr'),
      value: qrValue,
      size: 256,
    });
  }, [qrValue]);
  const handleAlert = () =>{
    Swal.fire({
      title: 'Success!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'Done',
    });
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      {/* <h2>QR Code Generator</h2> */}
      <canvas id="qr" onClick={handleAlert}></canvas>
   
      <p style={{ marginTop: '20px' }}>scan here</p>
    </div>
  );
};

export default QRCodeGenerator;
