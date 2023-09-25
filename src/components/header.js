import React from "react";

const Header = (props) => {
    const name = props.profile?.name;

    return <header className={ name === undefined ? 'header-container header-container_center' : 'header-container'}>
    <div className='header-main'>
      <h1 className='header-logo'> <img className="header-logo-img" src="logo.svg" alt="Logo"/> Pyxl.uk</h1>
      <h3 className='header-site-name'>Micro Website Hosting</h3>
    </div>
    { name === undefined ?
      (<></>)
      :
      (<div className='header-max'>
        <img src="foto.svg" alt="Foto"></img>
        <div className='header-max-contact'>
          <p className='header-max-name'>Max Maxxx {/*Name: {profile.name} */}</p>
          <p className='header-max-email'>max3xis@gmail.com{/*Email Address: {profile.email}*/}</p>
        </div>
      </div>
      )
    }
  </header>
}

export default Header;
