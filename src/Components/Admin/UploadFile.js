import { useState, useEffect } from 'react';
import { glDbase }  from '../Firebase/Config';

const UploadFile = (file) => {
    
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const uploadRef = glDbase.ref(file.name);
        uploadRef.put(file).on('state_changed', (snap) => {
        let duration = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(duration);    
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await uploadRef.getDownloadURL();
            setUrl(url);
        })

    }, [file]);

    return { url, error, progress }

}

export default UploadFile;