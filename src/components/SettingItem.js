import React from "react";

const SettingsItem = (props) => {
    const {title, text, note, isEditing, isButton, isLink, link, click} = props;
    
    return <div className="setting-item">
        <h3 className="setting-title">{title}</h3>
        <div className="setting-container">
            <div className="setting-name">
                {isLink ? <a className="setting-link" href={link} target="_blank" rel="noopener noreferrer">{text}</a> : text}
                {isEditing ? <img src="edit.svg" alt="btn"></img> : <></> }
                {isButton ? <button className='btn-pay' onClick={() => {click()} } > Upgrade </button> : <></>}
            </div>    
        </div> 
        <h5 className="setting-note">{note}</h5>
    </div>
}

export default SettingsItem;
