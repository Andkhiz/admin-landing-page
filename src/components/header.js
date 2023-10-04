import React from "react";

const Header = (props) => {
    const { name, email, picture } = props.profile;
    
    return <header className={ name === undefined ? 'header-container header-container_center' : 'header-container'}>
    <div className='header-main'>
      <h1 className='header-logo'> <img className="header-logo-img" src="logo.svg" alt="Logo"/> Pyxl.uk</h1>
      <h3 className='header-site-name'>Micro Website Hosting</h3>
    </div>
    { name === undefined ?
      (<></>)
      :
      (<div className='header-max'>
        <img className="header-picture" src={picture} alt="Foto"></img>
        <div className='header-max-contact'>
          <p className='header-max-name'>{name}</p>
          <p className='header-max-email'>{email}</p>
        </div>
      </div>
      )
    }
  </header>
}

export default Header;
