import './beta.css'
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { DeleteRequest, GetRequest } from '../request/apiUrl';
import { getRequest } from '../request/getRequest';
import { postNotification } from '../request/postRequest';
import { deleteRequest } from '../request/deleteRequest';

function Beta() {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    const handleDelete = () => {
        deleteRequest(DeleteRequest.BetaUsers).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        });
        setData([]);
    }
    
    const handleSubmit = (name, email, date) => {
        postNotification(name, email, date).catch((err) => {
            setHasError(true);
            setStatus(err.message);
        }).then(() => handleGetBetaUsers());
    }

    const handleGetBetaUsers = () => {
        getRequest(GetRequest.BetaUsers).then((data) => {
            setData(data);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message)
        })
    }

    useEffect(() => {
        handleGetBetaUsers();
    }, []);

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div>
            <div className='container mt-5'>
                <div className='beta-section'>
                    <h1 className='beta-title'>Beta users</h1>
                    <div style={{ justifyContent: "center", display: "flex", marginBottom: "2%" }}>
                        <div className="button-submit" onClick={() => handleDelete()}
                            style={{ textAlign: "center", width: '100px' }}>Delete all</div>
                    </div>
                    <table className="list" style={{ fontSize: "16px" }}>
                        {data.map((item, index) => {
                            return (
                                <tbody key={item + index}>
                                    <tr>
                                        <th>
                                            {item.fullName}
                                        </th>
                                        <td><div>
                                            {item.email}
                                        </div></td>
                                        <td>
                                        </td>
                                        <td>{new Intl.DateTimeFormat('en-US',
                                            { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                                            .format(Date.parse(new Date(item.date).toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })))}</td>
                                        <td>
                                            {!item.active && <div className="button-submit" onClick={() => handleSubmit(item.fullName, item.email, null)} style={{ textAlign: "center" }}>Activate</div>}
                                            {item.active && <div className="button-submit" style={{ opacity:"0.2", textAlign: "center" }}>Activated</div>}
                                        </td>
                                    </tr>
                                </tbody>)
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Beta;