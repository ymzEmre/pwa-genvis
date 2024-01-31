'use client'
import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import UploadImage from '../uploadImage'
import Image from 'next/image'

export default function Example() {
  const [status, setStatus] = useState(false)

  const [receivedData, setReceivedData] = useState(null)

  const handleClick = () => {
    setStatus(!status)
  }

  const handleDataFromChild = (data) => {
    setReceivedData(data)
  }

  return (
    <div>
      <UploadImage sendDataToParent={handleDataFromChild} />
      <p>Status: {status ? 'true' : 'false'}</p>
      <button onClick={handleClick}>Toggle Status</button>

      {status ? (
        <div className={styles.container}>
          <div className="box" onClick={handleClick}>
            <Image src={receivedData ?? ''} width={150} height={150} alt="Selected" />
          </div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
        </div>
      ) : (
        <iframe className={styles.test} src="https://en.wikipedia.org/wiki/Next.js" width="256px" height="480px" title="External Content" />
      )}
    </div>
  )
}
