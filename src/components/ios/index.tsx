'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import UploadImage from '../uploadImage'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export default function Example() {
  const imageUrl = useSelector((state) => state.upload.url)
  const [status, setStatus] = useState(true)

  const handleClick = () => {
    setStatus(!status)
  }

  return (
    <div>
      <UploadImage />
      <button onClick={handleClick}>Toggle Status</button>

      <div className={styles.container}>
        {status ? (
          <div className={styles.bg}>
            <div className={imageUrl ? styles.appIcon : styles.appIcon2}>
              <p className={styles.appIconText}>Text</p>
            </div>
            {imageUrl ? <Image src={imageUrl ?? ''} width={42} height={42} alt="Selected" className={styles.emreImg} /> : <p>No Image</p>}
          </div>
        ) : (
          <iframe className={styles.test} src="https://en.wikipedia.org/wiki/Next.js" width="256px" height="480px" title="External Content" />
        )}
      </div>
    </div>
  )
}
