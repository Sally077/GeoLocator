import { useState, useEffect } from 'react';
import { glStore }  from '../Firebase/Config';

const ImgStore = (archive) => {
    const [img, setImage] = useState([]);

    useEffect(() => {
       const reset = glStore.collection(archive)
        .onSnapshot((snap) => {
            let gallery = [];
            snap.forEach(img => {
                gallery.push({...img.data(), id: img.id});
            })
            setImage(gallery);
        })

        return () => reset();

    }, [archive]);

    return { img };
    
}

export default ImgStore;
