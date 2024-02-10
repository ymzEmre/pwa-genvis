'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Button } from 'primereact/button'
import IUploadStore from '@/stores/upload-store/IUploadStore'
import IFormStore from '@/stores/form-store/IFormStore'

export default function Example() {
  const imageUrl = useSelector((state: IUploadStore) => state.upload.url)
  const { shortName, appURL } = useSelector((state: IFormStore) => state.form)

  const [status, setStatus] = useState(true)

  const handleClick = () => {
    setStatus(!status)
  }

  return (
    <div>
      {!status && (
        <Button
          onClick={handleClick}
          className={styles.backButton}
          icon="pi pi-arrow-left"
          outlined
          severity="warning"
          aria-label="back-button"
        />
      )}

      <div>
        {status ? (
          <div className={styles.iphone}>
            <Image src="/iphone.png" width={300} height={600} alt="Iphone" />
            <div className={styles.appIcon}>
              {imageUrl ? (
                <Image
                  onClick={handleClick}
                  src={imageUrl}
                  width={42}
                  height={42}
                  alt="Selected"
                />
              ) : (
                <Image
                  onClick={handleClick}
                  src="/emptyIcon.png"
                  width={42}
                  height={42}
                  alt="Iphone"
                />
              )}
              <span className={styles.shortName}>{shortName}</span>
            </div>
          </div>
        ) : (
          <iframe
            className={styles.iframe}
            src={appURL}
            title="External Content"
          />
        )}
      </div>
    </div>
  )
}
