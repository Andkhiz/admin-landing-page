import React, { useState, useEffect } from 'react';
import SettingsItem from './SettingItem';

const SettingsList = (props) => {
  const d = props.myUserData.user.landing[props.activePage];
  const email = props.myUserData.user.email;
  const [data, setData] = useState(d);
  //const data = [props.myUserData?.user?.landing[props.activePage]];
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(d.isEdit); 
    setData(d);
  }, [d]);

  //console.log(data)
  //let firstDomain = null;

  const handleEdit = () => {
    //firstDomain = data[0].domain;
    //setIsEditing(!isEditing);
    const userData = { ...props.myUserData };
    userData.user.landing[props.activePage].isEdit = !userData.user.landing[props.activePage].isEdit;
    props.setMyUserData(userData);
    setIsEditing(userData.user.landing[props.activePage].isEdit);
  };

  const clickPay = () => {
    props.setPage('pay');
  }

  const handleSave = () => {
    if (data.domain === null || data.domain.split('.')[0].length < 6) {
      window.alert('Domain length can be at least 6 characters!');
      return;
    }

    fetch('https://landing.pyxl.uk/domain',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json", // Указываем тип контента как JSON
      },
      body: JSON.stringify({"email": props.myUserData.user.email, "domain": data.domain, "link": data.link})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(responseData => {
      // Обрабатываем полученные данные в ответе
      if (responseData.message === data.domain) { 
        setIsEditing(false);
        const userData = { ...props.myUserData };
        userData.user.landing[props.activePage].isEdit = !userData.user.landing[props.activePage].isEdit;
        props.setMyUserData(userData);
        return;
      }
      /*if (responseData.message === null) {
        data[index].domain = firstDomain;
        setIsEditing(false);
        return;
      }*/
      window.alert(responseData.message);
    })
    .catch(error => {
      // Обрабатываем ошибки
      console.error("Fetch error:", error);
    });
  };

  function toDate(second) {
    const date = new Date(second * 1000).toLocaleString();
    return date.split(',')[0]
  }
   
  return (
    <div className='setting'>
      <h2 className='setting-header'>Settings</h2>
      <SettingsItem 
        title= "Name"
        text="Website"
        note=""
        isEditing={false}
        isButton={false}
        isLink={true}
        link={data.link}
      />
      
      {/* ---- Пока такой костыль           */}
        <div className="setting-item">
          <h3 className="setting-title">Subdomain</h3>
          <div className="setting-container">
            <div className="setting-name">
              {isEditing === true ? (
                <>
                <div>
                  <input
                    className="setting-input"
                    type="text"
                    value={data.domain === null || data.domain.length === 0 ? '' : String(data.domain).replace('.pyxl.uk', '')}
                    pattern="^[a-zA-Z]*$"
                    title="Only latin letters are allowed"
                    onChange={(e) => {
                      const newData = {...data};
                      const inputValue = e.target.value;
                      if (/^[a-z]*$/.test(inputValue)) {
                        newData.domain = inputValue === '' ? '' : `${inputValue}.pyxl.uk`;
                        setData(newData);
                      }
                    }}
                  />.pyxl.uk
                </div>
                <button className='btn-pay' onClick={handleSave} > Save </button>
                </>
                ) : (
                  data.domain === null || data.domain.length === 0 ? 
                    <>Empty
                      {data.tarif !== null ? <img src="edit.svg" alt="btn" onClick={handleEdit}></img> : ""}
                    </> :
                    <>
                    <a className="setting-link" href={`https://${data.domain}`} target="_blank" rel="noopener noreferrer">{data.domain}</a>
                    <img src="edit.svg" alt="btn" onClick={handleEdit}></img> 
                    </>
              )}
              </div>
            </div> 
            <h5 className="setting-note"> {(data.domain === null || data.domain.length === 0 ? "" : "Link" )}</h5>
          </div>

      <SettingsItem 
        title= "Admin"
        text={ data.adminLink.includes('data') ? data.adminLink.replace('https://', '') : data.adminLink.replace("http://landing.pyxl.uk/", "landing.pyxl.uk/data/" ) } 
        note="Link" 
        isEditing={false} 
        isButton={false} 
        isLink={true}
        link={ data.adminLink.includes('data') ? data.adminLink : data.adminLink.replace("http://landing.pyxl.uk/", "https://landing.pyxl.uk/data/" ) }
      />
      <SettingsItem 
        title= "Password"
        text= "admin"
        note="Change it after logging into the system" 
        isEditing={false} 
        isButton={false} 
        isLink={false}
        link=""
      />
      <SettingsItem 
        title="Current Plan"
        text= {data.tarif === null ? 'None' : (data.tarif === 'light' ? 'LeadGen Landing' : 'Simple InfoPage' )  }
        note="" 
        isEditing={false} 
        isButton={true}
        isLink={false}
        link=""
        click={clickPay}
      />
      <SettingsItem 
        title="Valid until"
        text= {data.date === null ? 'none' : toDate(data.date) }
        note="" 
        isEditing={false} 
        isButton={false}
        isLink={false}
        link=""
      />
      <SettingsItem 
        title= "Notifications and lead forms (if enabled) are sent to this address"
        text={email}
        note="" 
        isEditing={false} 
        isButton={false} 
        isLink={false}
        link=""
      />
    
    </div>
    /*<table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ width: '30%' }}></th>
          <th style={{ width: '40%' }}></th>
          <th style={{ width: '30%' }}></th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>Name</td>
            <td><a href={data.link} target="_blank" rel="noopener noreferrer">Website</a></td>
            <td></td>
          </tr>
          <tr>
            <td>Subdomain</td>
            <td>
            {isEditing === true ? (
              <div>
                <input
                  type="text"
                  value={data.domain === null || data.domain.length === 0 ? '' : String(data.domain).replace('.pyxl.uk', '')}
                  pattern="^[a-zA-Z]*$"
                  title="Only latin letters are allowed"
                  onChange={(e) => {
                    const newData = {...data};
                    const inputValue = e.target.value;
                    if (/^[a-z]*$/.test(inputValue)) {
                      newData.domain = inputValue === '' ? '' : `${inputValue}.pyxl.uk`;
                      setData(newData);
                    }
                  }}
                />.pyxl.uk
              </div>
              ) : (
                <a href={`https://${data.domain}`} target="_blank" rel="noopener noreferrer">{data.domain}</a>
            )}
            </td>
            <td>
              {data.tarif !== null ?
                isEditing === true ? (
                  <button className='btn-pay' onClick={() => handleSave()}>Save</button>
                ) : (
                  <button className='btn-pay' onClick={() => handleEdit()}>Change</button>
                ) :
                (<></>)
              }
            </td>
          </tr>

          <tr>
            <td>Admin</td>
            <td><a href={data.adminLink} target="_blank" rel="noopener noreferrer">Link</a></td>
            <td></td>
          </tr>
          <tr>
            <td>Password</td>
            <td>admin</td>
            <td>You can change it at the login</td>
          </tr>
          <tr>
            <td>{data.tarif === null ? 'Upgrade Plan' : 'Plan' }</td>
            <td>{data.tarif === null ? 'none' : data.tarif}</td>
            <td><button className='btn-pay' onClick={() => clickPay()}> Upgrade </button></td>
          </tr>
          <tr>
            <td>Valid until</td>
            <td>{ data.date === null ? 'none' : toDate(data.date) }</td>
            <td>Changed after pay</td>
          </tr>
          <tr>
            <td>Email-recipient of the forms submitted on the website</td>
            <td>{ email }</td>
            <td></td>
          </tr>
          {/*<tr>
            <td>Download</td>
            <td><a href={`${data.link}index.zip`} download>Website</a></td>
            <td></td>
          </tr>
          {/*<tr> 
            {/*<td>{index + 1}</td>*//*}
            <td><a href={data.link} target="_blank" rel="noopener noreferrer">Landing page</a></td>
            <td><a href={data.adminLink} target="_blank" rel="noopener noreferrer">Admin panel</a></td>
            <td>
            {isEditing === true ? (
              <div>
                <input
                  type="text"
                  value={data.domain === null || data.domain.length === 0 ? '' : String(data.domain).replace('.pyxl.uk', '')}
                  pattern="^[a-zA-Z]*$"
                  title="Only latin letters are allowed"
                  onChange={(e) => {
                    const newData = {...data};
                    const inputValue = e.target.value;
                    if (/^[a-z]*$/.test(inputValue)) {
                      newData.domain = inputValue === '' ? '' : `${inputValue}.pyxl.uk`;
                      setData(newData);
                    }
                  }}
                />.pyxl.uk
              </div>
            ) : (
              <a href={`https://${data.domain}`} target="_blank" rel="noopener noreferrer">{data.domain}</a>
            )}
            </td>
            <td>
              {data.tarif !== null ?
                isEditing === true ? (
                  <button onClick={() => handleSave()}>Save</button>
                ) : (
                  <button onClick={() => handleEdit()}>Change</button>
                ) :
                (<></>)
              }
            </td>
            </tr>*/
        //))
    /*    }
      </tbody>
    </table>*/
  );
};

export default SettingsList;