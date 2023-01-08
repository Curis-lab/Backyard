import React, {useRef, useEffect, useState} from 'react'

function Profile() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () =>{
        navigator.mediaDevices.getUserMedia({
            video: {width: 720, height: 1080}
        })
        .then(stream=>{
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err=>{
            console.error(err);
        })
    }
    
    useEffect(()=>{
        getVideo();
    }, [videoRef]);

    const takePhoto = () =>{
        const width = 414;
        const height = width;

        let stream_video = videoRef.current;
        let stream_photo = photoRef.current;

        stream_photo.width = width;
        stream_photo.height = height;

        let ctx = stream_photo.getContext('2d');
        ctx.drawImage(stream_video, 0, 0, width, height);
        setHasPhoto(true);
    }
  return (
    <div className='w-screen h-screen'>
        <div className='flex p-2'>
            <video ref={ videoRef } className='h-80'></video>
            <button onClick={takePhoto} className='w-12 h-12 bg-blue-900 rounded-full shadow-lg hover:bg-pink-600'></button>
        </div>
        <div>
            <canvas ref={photoRef}></canvas>
            <button>CLOSE!</button>
        </div>
    </div>
  )
}

export default Profile
