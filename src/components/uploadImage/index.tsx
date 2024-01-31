'use client'
import { useState } from 'react'
import Image from 'next/image'

const ImageUploader = ({ sendDataToParent }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(file)

    if (file) {
      const imageURL = URL.createObjectURL(file)
      setUploadedImageUrl(imageURL)
      sendDataToParent(imageURL)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />

      {selectedImage && (
        <div>
          <h2>Selected Image</h2>
          {/* <img src={URL.createObjectURL(selectedImage)} alt="Selected" /> */}
          {/* <Image src={URL.createObjectURL(selectedImage)} width={150} height={150} alt="Selected" /> */}
        </div>
      )}
      {/* {uploadedImageUrl && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={uploadedImageUrl} alt="Uploaded" />
        </div>
      )} */}
    </div>
  )
}

export default ImageUploader
