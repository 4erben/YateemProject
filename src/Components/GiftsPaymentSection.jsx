import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import html2canvas from "html2canvas";
import { useNavigate } from 'react-router-dom';

export default function GiftsPaymentSection({selectedCard}) {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    const title_1_x =1000;
    const title_1_y =500;
    const title_2_x =1000;
    const title_2_y =1655;

    const [image , setImage] = useState(null);
    const [from , setFrom] = useState("");
    const [boolean , setBoolean] = useState(false);
    const [phoneFrom , setPhoneFrom] = useState("")
    const [to , setTo] = useState("");
    const [phoneTo , setPhoneTo] = useState("");
    const [donateMoney , setMoney] = useState("");
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
            img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0,canvas.width,canvas.height);
            ctx.font = "bold 80px Comic Sans MS";
            ctx.fillStyle = "black";
            ctx.fillText(to,title_1_x,title_1_y)
            ctx.fillText(from,title_2_x,title_2_y)
        };
        img.src = selectedCard; 
        handleImage();
    }, [to,from,selectedCard]);

    const captureAsJPG = ()=>{
        const element = document.getElementById("capture");
        html2canvas(element).then((canvas)=>{
            const imgData = canvas.toDataURL("image/jpeg");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "capture.jpg";
            console.log(link);
            link.click();
        })
    };
    const dataURLtoBlob = (dataURL) => {
        const byteString = atob(dataURL.split(',')[1]);
        const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
      };
    const handleImage = ()=>{
        const element = document.getElementById("capture");
        html2canvas(element).then((canvas)=>{
            const imgData = canvas.toDataURL("image/jpeg");
            const blob = dataURLtoBlob(imgData);
             setImage(blob);
             return blob;
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/checkout",{state:{image,from,to,boolean,phoneFrom,phoneTo,donateMoney}})
    }
  return (
    <Row>
    <Col lg={6} className='py-5'>
        <Form className='py-5' onSubmit={handleSubmit}>
            
            <Form.Group className='row py-2 '>
              <Form.Label>اسم المهدي الية</Form.Label>
              <Form.Control placeholder='اكتب اسم المهدي اليه' type='text' value={to} onChange={(e)=>{setTo(e.target.value)}}/>
            </Form.Group>
            <Form.Group className='row py-1 '>
              <Form.Label>رقم جوال المهدي الية</Form.Label>
              <Form.Control  type='tel' placeholder='5xxxxxxxx' value={phoneTo}  onChange={(e)=>{setPhoneTo(e.target.value)}}/>
            </Form.Group>
            <Form.Group className='row py-1 '>
              <Form.Label>اسم المرسل</Form.Label>
              <Form.Control placeholder='اكتب اسمك' type='text' value={from} onChange={(e)=>{setFrom(e.target.value)}}/>
            </Form.Group>
            <Form.Group className='row w-50 py-1 '>
              <Form.Label>رقم جوال المرسل</Form.Label>
              <Form.Control  type='tel' placeholder='5xxxxxxx' value={phoneFrom} onChange={(e)=>{setPhoneFrom(e.target.value)}}/>
            </Form.Group>
            <Form.Group className='d-flex px-2  w-50 align-items-center py-1 '>
              <input type='checkbox'  className='ms-3' value={boolean} onChange={(e)=>{setBoolean(e.target.value)}}/>
              <Form.Label>ارسال البطاقة الي جوالي ايضا</Form.Label>
            </Form.Group>
            <Form.Group className='row  py-1 '>
              <Form.Label>المبلغ</Form.Label>
              <div className='d-flex align-items-center justify-content-between'>
              <Col className='d-flex w-50 px-3'>
                <Col className='col-4 text-center'>
                  <button type='button' className='btn btn-white border ' onClick={(e)=>{setMoney(150)}}>
                  <span className='text-golden'>150</span> 
                  <small className='ms-1'> ر.س</small>
                  </button>
                  </Col>
                  <Col className='col-4 text-center'>
                      <button type='button' className='btn btn-white border ' onClick={(e)=>{setMoney(300)}}>
                          <span className='text-golden'>300</span>
                          <small className='ms-1'> ر.س</small>
                      </button>
                      </Col>
                  <Col className='col-4 text-center'>
                    <button type='button' className='btn btn-white border ' onClick={(e)=>{setMoney(450)}}>
                        <span className='text-golden'> 450</span> 
                        <small className='ms-1'> ر.س</small>
                    </button>
                  </Col>
              </Col>
              <Form.Group className="position-relative">
                <Form.Control
                    type="number"
                    placeholder="اكتب المبلغ"
                    className="payment-input"
                    value={donateMoney}
                    onChange={(e)=>{setMoney(e.target.value)}}
                />
                <div className="currency-symbol">ر.س</div>
                </Form.Group>
                </div>
            </Form.Group>
            <br/>
            <br/>
            <br/>
            <Form.Group className='row'>
            <button type='submit' className='payment-btn btn'>المتابعة للدفع</button>
            </Form.Group>
            <Form.Group className='row mt-5'>
            <button type='button' className='download-btn btn' onClick={captureAsJPG}>تحميل الصورة</button>
            </Form.Group>
            
        </Form>
    </Col>
    <Col lg={6} className='py-5 ' >
    <canvas  id="capture" ref={canvasRef}  dir="rtl" style={{ maxWidth: '100%' }} className='border border-2 rounded rounded-3' ></canvas>
    </Col>
  </Row>
  )
}
