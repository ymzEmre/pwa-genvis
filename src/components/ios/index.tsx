'use client'
import { useState } from 'react'
import styles from './styles.module.css'
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
      {!status && <button onClick={handleClick}>Toggle Status</button>}
      <div className={styles.container}>
        {status ? (
          <div className={styles.bg}>
            <div className={imageUrl ? styles.appIcon : styles.appIcon2}>
              <p className={styles.appIconText}>Text</p>
            </div>
            <Image
              onClick={handleClick}
              src={imageUrl ?? '/emptyIcon.png'}
              width={42}
              height={42}
              alt="Selected"
              className={styles.emreImg}
            />
          </div>
        ) : (
          <iframe
            className={styles.bg}
            src="https://en.wikipedia.org/wiki/Next.js"
            title="External Content"
          />
        )}
      </div>
    </div>
  )
}
