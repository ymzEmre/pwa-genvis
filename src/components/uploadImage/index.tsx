import { useDispatch } from 'react-redux'
import { actions } from '@/stores/upload-store'
import { FileUpload } from 'primereact/fileupload'

const ImageUploader = () => {
  const dispatch = useDispatch()

  const handleImageChange = (e) => {
    if (!e.files.length) return dispatch(actions.setUploadURL(''))

    const imageURL = URL.createObjectURL(e.files[0])

    dispatch(actions.setUploadURL(imageURL))
  }

  return (
    <div>
      <FileUpload
        mode="basic"
        chooseLabel="Icon"
        chooseOptions={{ icon: 'pi pi-upload' }}
        name="demo"
        url=""
        accept="image/*"
        maxFileSize={1000000}
        onUpload={handleImageChange}
        auto
      />
    </div>
  )
}

export default ImageUploader
