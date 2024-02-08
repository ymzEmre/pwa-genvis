'use client'
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import styles from './styles.module.css'

export default function ManifestForm() {
  const [appName, setAppName] = useState('')
  const [shortName, setShortName] = useState('')
  const [description, setDescription] = useState('')
  const [startUrl, setStartUrl] = useState('/')
  const [displayType, setDisplayType] = useState('standalone')

  const manifestObject = {
    name: appName,
    short_name: shortName,
    description: description,
    start_url: startUrl,
    display: displayType,
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: 'icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }

  const manifestJson = JSON.stringify(manifestObject, null, 4)

  return (
    <div>
      <pre> {manifestJson}</pre>

      <div className={styles.form}>
        <InputText value={appName} onChange={(e) => setAppName(e.target.value)} placeholder="App Name" />
        <InputText value={shortName} onChange={(e) => setShortName(e.target.value)} placeholder="Short Name" />
        <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="App Description" />
        <InputText value={startUrl} onChange={(e) => setStartUrl(e.target.value)} placeholder="Start URL" />
        <InputText value={displayType} onChange={(e) => setDisplayType(e.target.value)} placeholder="Display Type" />
      </div>
    </div>
  )
}
