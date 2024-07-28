import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './homePage.css';
import newsImg from '../../assets/news.png';
import NavBar from '../../components/navBar/navBar';
import axios from 'axios';

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8082/news', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const newsData = response.data;

        if (newsData && Array.isArray(newsData.data.news)) {

          // Sadece ilk beş haberi alın
          setData(newsData.data.news.slice(0, 5));
        } else {
          console.error('API response data.news is not an array:', newsData.data.news);
          setData([]);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <>
      <NavBar handleLogout={handleLogout} />
      <Container className="body mt-5">
        {data.length > 0 && (
          <section className="ms-auto col-8">
            <h1 className="">{data[0].title}</h1>
            <p>time:9:00 May 2024</p>
            <br />
            <img src={newsImg} alt="" className="newsImg" />
            <p className="mt-5">
              {data[0].body}
            </p>
          </section>
        )}

        <aside className="me-auto col-4">
          <h1 className="mb-5">Haberler</h1>
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className='cardHeader'>
                <img src={newsImg} alt="" />
                <h1>{item.title}</h1>
              </div>
              <div className="cardBody ms-4">
                {item.body.length > 100 ? `${item.body.substring(0, 100)}...` : item.body}
              </div>
            </div>
          ))}
          <hr />
        </aside>
      </Container>
    </>
  );
}

export default HomePage;
