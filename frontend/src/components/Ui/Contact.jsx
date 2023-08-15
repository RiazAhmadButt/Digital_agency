import React, { useRef } from 'react';
import { useState } from 'react';
import image from '../../assets/img/image.png';
import { Container, Row, Col } from "reactstrap";
import RImage from '../../assets/img/Rectangle 38.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/contact.css';


const Contact = () => {

  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // Send a POST request to the backend's /send-email endpoint
      const response = await axios.post('http://localhost:5000/send-email', data); // This URL should match the backend's route
      console.log(response.data);
      setEmailSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section className='hero__section' style={{ backgroundColor: '#FFFBE7' }}>
      <Container>
        <Link to='/home' style={{ border: '1px solid gray', background: '#FED105', padding: '1%', borderRadius: '10px' }}>Back to Home</Link>
        <Row>

          <Col lg='6' md='6'>
            <h2 style={{ fontSize: '50px', fontFamily: 'Frijole, cursive', color: '#fed105', alignItems: "center", justifyContent: 'center', marginTop: '35%', textAlign: ' center' }}>Contact Us</h2>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={image} alt='' />
            </div>
          </Col>
          <Col lg='6' md='6' style={{ width: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative' }} >
            <div data-aos='fade-up' data-aos-duration='2000'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26607.35960849459!2d73.09508770996854!3d33.52946681262129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sphase%207%20bahria%20town%20islamabad%20soltridge!5e0!3m2!1sen!2s!4v1690799867463!5m2!1sen!2s" width="600" height="450" style={{ border: '0', borderRadius: '20px', justifyContent: 'center', alignItems: 'center', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
          <Col style={{ border: '1px solid gray', marginTop: '5%', borderRadius: '20px', fontFamily: 'Balsamiq Sans' }}>
            <div className='hero__content' data-aos='fade-up' data-aos-duration='2000' >
              <form class="row g-3" ref={form} onSubmit={sendEmail}>
                <div class="col-md-6" >

                  <input type="text" class="form-control" name='username' placeholder="Your Name" style={{ borderRadius: '40px', height: '120%', background: '#D9D9D9', width: '100%', height: '78px' }} />
                </div>
                <div class="col-md-6">

                  <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="Your Email Address" style={{ borderRadius: '40px', height: '120%', background: '#D9D9D9', width: '100%', height: '78px' }} />
                </div>

                <div class="col-12">

                  <input type="text" class="form-control" name="address" id="inputAddress" placeholder="Phone Number" style={{ borderRadius: '40px', height: '120%', background: '#D9D9D9', width: '100%', height: '78px' }} />
                </div>
                <div class="col-12">

                  <input type="text" name="address2" class="form-control" id="inputAddress2" placeholder="Subject" style={{ borderRadius: '40px', height: '120%', background: '#D9D9D9', width: '100%', height: '78px' }} />
                </div>
                <div class="col-12">

                  <textarea type="text" name="message" class="form-control wym" id="inputAddress2" placeholder="Write Your Message here." style={{ borderRadius: '40px', height: '120%', background: '#D9D9D9', width: '100% ', height: '78px' }} />
                </div>

                <div class="col-12" style={{ alignItems: 'center', marginTop: '2%' }}>
                  <button style={{ background: '#FED105', color: 'black', borderRadius: '40px', width: "100%", height: '180%', align: 'center' }} type="submit" value="Send" class="btn btn-primary">Send Message</button>
                  {emailSent && <p>Email sent successfully!</p>}
                </div>
              </form>

            </div>
          </Col>

        </Row>
        <Row style={{ marginTop: '5%', backgroundColor: "white", borderRadius: '20px' }}>

          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={RImage} alt='' style={{ marginLeft: '-5%', backgroundColor: "white" }} />
            </div>
          </Col>
          <Col lg='6' md='6' >
            <h2 style={{ fontFamily: 'Frijole, cursive', color: '#fed105', alignItems: "center", justifyContent: 'center', marginTop: '25%', fontSize: '50px' }}>Quick Find Us</h2>

            <div style={{ marginTop: '15%' }} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{ fontSize: '20px' }}>Email</h3>
              <h4 style={{ fontSize: '15px', color: 'gray' }}>info@soltridge.com</h4>

            </div>
            <div style={{ marginTop: '5%' }} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{ fontSize: '20px' }}>Opening Hours</h3>
              <h4 style={{ fontSize: '15px', color: 'gray' }}>Monday - Saturday</h4>

            </div>
            <div style={{ marginTop: '5%' }} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{ fontSize: '20px' }}>Location</h3>
              <h4 style={{ fontSize: '15px', color: 'gray' }}>Islamabad, Pakistan</h4>

            </div>
            {/*<div style={{marginTop:'15%'}}>
              <button style={{background:'blue', color:'white', marginRight:'2%'}}><i class="ri-facebook-line"></i>Facebook</button>
              <button style={{background:'red', color:'white', marginRight:'2%'}}><i class="ri-fingerprint-fill"></i>Printrest</button>
              <button style={{background:'lightBlue', color:'white', marginRight:'2%'}}><i class="ri-linkedin-line"></i>Linked In</button>
              <button style={{background:'green', color:'white'}}><i class="ri-twitter-line"></i>Twitter</button>

  </div>*/}
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Contact;