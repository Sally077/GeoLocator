import React, { useEffect } from 'react';
import Uploaded from './UploadFile';

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = Uploaded(file);
    console.log(url, progress);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    return (
        <div className='progress-bar' style={{ width: progress + '%'}}>Progress</div>
    )

}

export default ProgressBar; 