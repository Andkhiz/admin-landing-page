import './App.css';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as GoogleIcon } from './icon/google.svg';
import './App.css'; // Подключите стили для страницы
import Sidebar from './components/sidebar';
import BtnPrice from './components/btnPrice';
import SettingsList from './components/SettingsList';
import { buyButtons, faq } from './const';
import FAQPage from './components/FAQPage';
import Header from './components/header';
//import BtnStripePay from './components/btnStripe';

const token = 'token';

function App() {
  const access_token = localStorage.getItem(token);
/*
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js?';
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
      <Header profile={profile}></Header>
      
      <div className={profile?.name === undefined ? 'container container_center' : 'container'}>
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
                  { activePage === -1 ? <></> : activePage === myUserData.user.landing.length ? 
                      (<FAQPage faq={faq}/>)
                    :
                     ( 
                     <div className='page'>
                        { page === 'main' ? (
                          <> 
                            {
                              <SettingsList 
                                myUserData={myUserData}
                                setMyUserData={setMyUserData}
                                setPage={setPage}
                                activePage={activePage}>
                              </SettingsList>
                            }
                          </>)
                        : 
                          (<>
                            <div className='page-btn-header'>
                              <h2 className='setting-header'>Settings</h2>
                              <div className='page-header'>
                                <img src='home.svg' alt="home"/>
                                <img src='chevron_down.svg' alt="down"/>
                                Update plan
                              </div>
                              <div className='page-btn'>
                                {buyButtons.buttons.map((el, ind) => { 
                                  return <BtnPrice 
                                    main={ind === 1 ? true : false }
                                    noprice={el.noprice} 
                                    price={el.price}
                                    tarifName={el.tarifName}
                                    howPay={el.howPay}
                                    link={`${el.link}${myUserData.user.landing[activePage].id}`}
                                    profits={el.profits}
                                  /> })}
                              </div>    
                               {/* <BtnStripePay buyButtonId={'buy_btn_1Nfz9dCDDrGgviapgOWnOq0h'}
                                publishableKey={'pk_test_51NVx6PCDDrGgviap9yVasFTM0I2UEPtcapxkSR6uwzVkMMENEff4YybVmaBbQpodR5sk5K1aBWovtuvtv9NS2LsL00N0qG6hJh'}
                                clientReferenceId={'123'}
                              customerEmail={'andkhiz@gmail.com'} />*/}
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
                            <p>If you are experiencing any difficulties or have any suggestions on improvement,</p>
                            <p>dont hesitate to write us an email at our email <a href="mailto:customers@pyxl.uk">customers@pyxl.uk</a></p>
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
                <button className="btn-google" onClick={() => login() }>
                    <GoogleIcon size={20} style={{ marginRight: '10px' }} /> Sign up with Google
                </button>
              </div>
              
            )}
      </div>
    </div>
  );
}

export default App;
