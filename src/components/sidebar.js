import React from 'react';
import { googleLogout } from '@react-oauth/google';

const Sidebar = (props) => {
  const logOut = () => {
    googleLogout();
    props.setProfile(null);
    localStorage.clear();
  };

  const setPage = (value) => {
    //console.log(value);
    props.setActivePage(value);
    props.setPage('main');
  }

  const landingPageData = props.myUserData?.user?.landing;
  const activePage = props.activePage;
  //const classSetting = `sidebar-button ${props.activePage === 'setting' ? 'sidebar-button_action' : ''}`
  //const classPay = `sidebar-button ${props.activePage === 'pay' ? 'sidebar-button_action' : ''}`

  return (
    <>
      <div className='sidebar'>
        <div className="sidebar-left">
          
          {/*<button className={classSetting} onClick={() => setPage('setting')}>Settings</button>
          <button className={classPay} onClick={() => setPage('pay')}>Payment</button>*/}
          {landingPageData === undefined ? 
              ""
            : 
              landingPageData.map((el, ind) => { 
                return <button key={ind} onClick={() => setPage(ind)} className={activePage === ind ? 'sidebar-button sidebar-button_action' : 'sidebar-button'}>Website{ind + 1}</button> })}
          <button className={ activePage === landingPageData?.length ? 'sidebar-button sidebar-button_action' : 'sidebar-button'} onClick={() => setPage(landingPageData.length)}>1 min How-To</button>
          
        </div>
        <div className="sidebar-logout">
          <button className="sidebar-button sidebar-button_logout" onClick={logOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
