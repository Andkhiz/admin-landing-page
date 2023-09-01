import './App.css';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as GoogleIcon } from './icon/google.svg';
import './App.css'; // Подключите стили для страницы
import Sidebar from './components/sidebar';
import BtnStripePay from './components/btnStripe';
import BtnPrice from './components/btnPrice';
import LandingList from './components/landingList';
import { publishableKey, buyButtonIdLight, buyButtonIdSuperLight } from './const';

const token = 'token';

function App() {
  const access_token = localStorage.getItem(token);
/*
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  */

  const [ user, setUser ] = useState(access_token === null ? [] : {access_token});
  const [ page, setPage ] = useState('main');
  const [ myUserData, setMyUserData ] = useState({});
  const [ profile, setProfile ] = useState([]);
  const [ activePage, setActivePage ] = useState(-1);
  const id = window.location.search.split('=').pop();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  
  useEffect(
      () => {
        if (user.access_token) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                      localStorage.setItem(token, user.access_token);
                      return res.data;
                  })
                  .then((res) => {
                    let add = '';
                    if (id !== '') {
                      add = `&landingId=${id}`;
                    }
                    return axios.post(`https://landing.pyxl.uk/user?email=${res.email}&id=${res.id}${add}`);
                  })
                  .then((res) => {
                    res.data.user.landing.map(el => el.isEdit = false);
                    setMyUserData(res.data);
                    setActivePage(res.data.user.landing[0].id > 0 ? 0 : -1);
                  })
                  .catch((err) => { localStorage.clear(); console.log(err)});
          }
      },
      [ user, id ]
  );

  return (
    <div className="App">
      <header className="header-container">
        <h1>Pyxl.uk - Micro Website Hosting</h1>
        { profile?.name === undefined ?
          (<></>)
          :
          (<>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
          </>
          )
        }
      </header>
      <div className="container">
            { 
              profile?.email ? (
                <div className="app-container">
                  <Sidebar setProfile={setProfile} 
                    setActivePage= {setActivePage}
                    activePage={activePage}
                    myUserData={myUserData}
                    setPage={setPage}
                  >
                  </Sidebar>
                  { activePage === -1 || activePage === myUserData.user.landing.length ? 
                      (<></>)
                    :
                     ( 
                     <div className='page'>
                        { page === 'main' ? (
                          <> 
                            {
                              <LandingList 
                                myUserData={myUserData}
                                setMyUserData={setMyUserData}
                                setPage={setPage}
                                activePage={activePage}>
                              </LandingList>
                            }
                          </>)
                        : 
                          (<>
                            <div className='page-btn'>
                            <BtnPrice/>
                            <BtnPrice/>
                            </div>
                             {/* 
                            <div className='for-btn-pay'>
                            <div className='tarif-text'>
                              <h2>Super light (1$/mo)</h2>
                              <p>Ai assisted builder (why would you come here anyways)</p>
                              <p>Web page with admin panel with editing functions (text/picture editing)</p>
                              <p>Custom subdomain</p>
                              <p>No banners</p>
                              <p>Downloadable code</p>
                            </div>  
                            <BtnStripePay 
                              buyButtonId={buyButtonIdSuperLight}
                              publishableKey={publishableKey}
                              clientReferenceId={myUserData?.user?.landing[activePage]?.id}
                              customerEmail={myUserData?.user?.email}
                            />
                          </div>
                          <div className='for-btn-pay'>
                          <div className='tarif-text'>
                              <h2>Light ($9/mo)</h2>
                              <p>All Super Light +</p>
                              <p>Enabled Lead forms if you have any - you will get emails any time someone submits a form</p>
                              <p>Custom pixel integration</p>
                            </div>
                            <BtnStripePay 
                              buyButtonId={buyButtonIdLight}
                              publishableKey={publishableKey}
                              clientReferenceId={myUserData?.user?.landing[activePage]?.id}
                              customerEmail={myUserData?.user?.email}
                            />
                          </div>*/}
                          </>)
                        }
                        { profile?.email 
                        ?
                          <div className='footer'>
                            <p>If you are experiencing any difficulties or have any suggestions on improvement, dont hesitate to write us an email at our email <a href="mailto:pyxl.project@gmail.com">pyxl.project@gmail.com</a></p>
                          </div>
                        :
                          <></>  
                        }
                      </div> 
                      )
                 }
                </div>
            ) : (
              <div style={{
                display: 'flex',
                justifyContent: 'center', // Выравнивание элементов по горизонтали
                alignItems: 'center', // Выравнивание элементов по вертикали
                height: '10vh', // Высота контейнера для центрирования по вертикали
              }}>
                <button 
                  onClick={() => login()} 
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}>
                    <GoogleIcon size={20} style={{ marginRight: '10px' }} />
                  Sign in with Google
                </button>
              </div>
              
            )}
      </div>
    </div>
  );
}

export default App;
