import Image from '../image/image';
import List from '../list/list';
import Error from '../error/error';

import { useEffect, useState } from 'react';
import { getRequest } from '../request/getRequest';
import { GetRequest } from '../request/apiUrl';

function History() {
    const [history, setHistory] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        getRequest(GetRequest.History).then((data) => {
            setHistory(data.items);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        }).then(() => window.scrollTo(0, 0))}, []);

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div className="panel animate-fade">
            <Image.ImageRecently list={history}/>
            <List.HistoryList list={history}/>
        </div>
    );
}

export default History;