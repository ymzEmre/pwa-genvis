'use client'
import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import UploadImage from '../uploadImage'
import Image from 'next/image'

export default function Example() {
  const [status, setStatus] = useState(false)

  const [receivedData, setReceivedData] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    setStatus(!status)
  }

  const handleDataFromChild = (data) => {
    setReceivedData(data)
  }

  return (
    <div>
      <UploadImage sendDataToParent={handleDataFromChild} />
      <button onClick={handleClick}>Toggle Status</button>
      {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}

      <div className={styles.container}>
        {status ? (
          <div className={styles.bg}>
            {/* <Image src="/ios.png" alt="Vercel Logo" width={320} height={610} /> */}
            <div className={receivedData ? styles.appIcon : styles.appIcon2}>
              <p className={styles.appIconText}>Text</p>
            </div>
            <Image src={receivedData ?? ''} width={42} height={42} alt="Selected" className={styles.emreImg} />
          </div>
        ) : (
          <iframe className={styles.test} src="https://en.wikipedia.org/wiki/Next.js" width="256px" height="480px" title="External Content" />
        )}
      </div>
    </div>
  )
}
