import React, { useState } from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import './Form.scss';
import './photo.scss';

const PhotoDropZone = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const[error, setError] = useState(false);

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => {
        var file = URL.createObjectURL(file);
        setTimeout(function() {
            setImgPreview(file);
        }, 2650 );
        console.log(file);
     }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach((f) => {
            f.remove();
        })
    }

    return (
        <div>
            <Dropzone
            classNames="con-btn"
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
            maxFiles={1}
            inputContent={(files, extra) => (extra.reject ? 'Only Image, audio and video files allowed!' : 'Select and Drop a File')}
            styles={{
                dropzoneReject: { borderColor: '#F19373', backgroundColor: '#F1BDAB' },
                inputLabel: (files, extra) => (extra.reject ? { color: '#A02800' } : {}),
            }}
            />
            {imgPreview ? <img className="imgPreview" src={imgPreview}/> : null}
        </div>
        
    );
};

export default PhotoDropZone;
