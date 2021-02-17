import React, {useState} from "react";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import './photo.scss';

const PhotoDropZone = () => {




    // // Payload data and url to upload files
    // const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // // Return the current status of files being uploaded
    // const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // // Return array of uploaded files after submit button is clicked
    // const handleSubmit = (files, allFiles) => {
    //     console.log(files.map(f => f.meta))
    //     allFiles.forEach(f => f.remove())
    // }

    const [imgPreview, setImgPreview] = useState(null);
    const[error, setError] = useState(false);

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if(selected && ALLOWED_TYPES.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result)
            }
            reader.readAsDataURL(selected);
        } else{
            setError(true)
        }
    }

    return (
        <div className="photo">
            <div className="container">
                {error && <p className="errorMsg">File not supported</p>}
                <div className="imgPreview" style={{background: imgPreview ?
                     `url("${imgPreview}") no-repeat center/cover` : "#121212"}}>
                    {!imgPreview && (
                        <>
                            <p>Add an image</p>
                            <label htmlFor="fileUpload" className="customFileUpload">Choose File</label>
                            <input type="file" id="fileUpload" onChange={handleImageChange}/>
                            <span>(jpg, jpeg, png)</span>
                        </>
                    )}
                </div>
                {!imgPreview && <button onClick={() => setImgPreview(null)}>Remove Image</button>}
            </div>
            </div>
                );
};

export default PhotoDropZone;


