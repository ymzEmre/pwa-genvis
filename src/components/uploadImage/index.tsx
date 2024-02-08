import { Button } from 'primereact/button'
import { useDispatch } from 'react-redux'
import { actions } from '@/stores/upload-store'

const ImageUploader = () => {
  const dispatch = useDispatch()

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const imageURL = URL.createObjectURL(file)
      dispatch(actions.setUploadURL(imageURL))
    }
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {/* <Button label="Click Me2" /> */}
    </div>
  )
}

export default ImageUploader
