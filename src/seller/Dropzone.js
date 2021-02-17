function Dropzone(userProfileId) {
    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      
      console.log(userProfileId)
      
      const formData = new FormData();
      formData.append("file", file);

      axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId.userProfileId}/image/upload`,
      formData,
      {
        header: {
          "Content-Type" : "multipart/form-data"
        }
      }
      )
      .then(() => {
        console.log("file uploaded successfully");
      })
      .catch(err => {
        console.log(err);
      })

    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the image</p> :
            <p>Drag 'n' drop profile image, or click to select profile image</p>
        }
      </div>
    )
  }
}