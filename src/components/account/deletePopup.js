import '../home/popup.css'
import React from 'react';
import { Link } from 'react-router-dom';

import { DeleteRequest } from "../request/apiUrl";
import { deleteRequest } from "../request/deleteRequest";
import { logOut } from '../logOut/logOut';


function DeletePopup({ trigger, callbackTrigger }) {

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const handleDelete = () => {
        deleteRequest(DeleteRequest.Account)
        .then(() => sleep(2000)
        .then(() => logOut()));
    }

    return (trigger) ? (
        <div className="popup animate-fade">
            <div className="popup-inner">
                <br />
                <h4>Are you sure you want to delete your account?</h4>
                <br />
                <div style={{ opacity: ".85" }}>This action is irreversible and will delete all your data, including statistics and user information. 
                Once deleted, this data cannot be recovered.
                <br/>
                <br/>
                Please confirm that you understand the consequences of this action.
                <hr/>
                </div>
                <button className="popup-btn popup-btn-yes-position" onClick={() => handleDelete()}><Link to="/" className="link-item">Delete</Link></button>
                <button className="popup-btn popup-btn-no-position" onClick={() => callbackTrigger(false)}>Cancel</button>
            </div>
        </div>
    ) : "";
}

export default DeletePopup;