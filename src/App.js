import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import TravelCarousel from './Carousel';
import Footer from './Footer';
import Contents from './Contents';
import AboutUsPage from './AboutUs';
import { collection, getDocs } from 'firebase/firestore';
import { metaDataStore } from './config/firebase';


function App() {
  const [data, setData] = useState([]);
  const [pastData , setPastData] = useState([]);

  const getData = async () => {
    const valRef = collection(metaDataStore, 'metaData');
    try {
      const dataDb = await getDocs(valRef)
      const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id })) || []
      const rnData = allData.filter(item => {
        const eventDate = item.eventDate || new Date()
        return new Date().getTime() < new Date(eventDate).getTime()
      })

      const pData = allData.filter(item => {
        const eventDate = item.eventDate || new Date()
        return new Date().getTime() > new Date(eventDate).getTime()
      })
      setData(rnData)
      setPastData(pData);
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">

        <Navbar.Brand href="/">

          <img
            alt=""
            // src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png"
            // src = '/logo.png'
            src='https://firebasestorage.googleapis.com/v0/b/giritara-admin-web.appspot.com/o/Imgs%2Flogo.png?alt=media&token=cfacc639-c297-433a-80b5-3b63796e2d59'
            width="30"
            height="30"
            style={{ marginLeft: '20px' }}
            className="d-inline-block align-top"
          />{' '}
          Giritara</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


      </Navbar>

      <TravelCarousel data={data || []} />

      <Container className="mt-4 text-center font-weight-bold">
        <h2 className='mb-4'>Past Adventures</h2>
        <hr />
        <Contents data={pastData || []} />
      </Container>

      <Container className='mt-4 mb-4 text-center font-weight-bold'>
        <h2 className='mb-4'>About Us</h2>
        <hr />
        <AboutUsPage />

      </Container>

      <Footer />
    </div>
  );
}

export default App;
