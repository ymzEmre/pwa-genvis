'use client'
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import styles from './styles.module.css'
import { ColorPicker } from 'primereact/colorpicker'
import { Dropdown } from 'primereact/dropdown'
import UploadImage from '../uploadImage'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '@/stores/form-store'
import copy from 'copy-to-clipboard'
import { Button } from 'primereact/button'
import IUploadStore from '@/stores/upload-store/IUploadStore'

export default function ManifestForm() {
  const dispatch = useDispatch()
  const imageName = useSelector((state: IUploadStore) => state.upload.name)

  const [name, setName] = useState('')
  const [shortName, setShortName] = useState('')
  const [description, setDescription] = useState('')
  const [startUrl, setStartUrl] = useState('')
  const [display, setDisplay] = useState('')
  const [orientation, setOrientation] = useState(null)
  const [themeColor, setThemeColor] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  const [appURL, setAppURL] = useState('')

  const [buttonClipboardIcon, setButtonClipboardIcon] = useState('pi pi-clone')

  const displayList = [
    { name: 'fullscreen' },
    { name: 'standalone' },
    { name: 'minimal-ui' },
    { name: 'browser' },
  ]

  const orientationList = [{ name: 'portrait' }, { name: 'landscape' }]

  const manifestObject = {
    name: name,
    short_name: shortName,
    description: description,
    start_url: `/${startUrl}`,
    display: display,
    orientation: orientation,
    theme_color: themeColor,
    background_color: backgroundColor,
    icons: [
      {
        src: imageName ?? '',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }

  const inputShortName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortName(e.target.value)
    dispatch(actions.setShortName(e.target.value))
  }

  const inputAppURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppURL(e.target.value)
    dispatch(actions.setAppURL(e.target.value))
  }

  const manifestJson = JSON.stringify(manifestObject, null, 4)

  const clipboardToManifestObject = () => {
    copy(manifestJson)
    setButtonClipboardIcon('pi pi-check')

    setTimeout(() => {
      setButtonClipboardIcon('pi pi-clone')
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.areaContainer} ${styles.form}`}>
        <div className="card flex justify-content-center"></div>
        {/*  */}
        <div className="p-float-label">
          <InputText
            value={name}
            className={styles.inputText}
            onChange={(e) => setName(e.target.value)}
            tooltip="The name of the web app."
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="p-float-label">
          <InputText
            value={shortName}
            onChange={inputShortName}
            className={styles.inputText}
            tooltip="A shorter version of the app name, which is used on the home screen or app launcher when space is limited."
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
          <label htmlFor="shortName">Short Name</label>
        </div>
        <div className="p-float-label">
          <InputText
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.inputText}
            tooltip="A brief description of the web app."
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="p-float-label">
          <InputText
            value={startUrl}
            onChange={(e) => setStartUrl(e.target.value)}
            tooltip="The URL that should be loaded when the app is launched."
            className={styles.inputText}
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
          <label htmlFor="startURL">Start URL</label>
        </div>
        <div>
          <Dropdown
            value={display}
            onChange={(e) => setDisplay(e.value)}
            style={{ width: '100% ' }}
            options={displayList}
            optionLabel="name"
            showClear
            placeholder="Select a Display"
            className={[styles.inputText, 'w-full md:w-14rem'].join(' ')}
            tooltip="Specifies how the web app should be displayed. Possible values include 'fullscreen', 'standalone', 'minimal-ui', and 'browser'."
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
        </div>
        <div>
          <Dropdown
            value={orientation}
            onChange={(e) => setOrientation(e.value)}
            style={{ width: '100% ' }}
            options={orientationList}
            optionLabel="name"
            showClear
            placeholder="Select a Orientation"
            className={[styles.inputText, 'w-full md:w-14rem'].join(' ')}
            tooltip="Specifies the default orientation of the web app (e.g., 'portrait' or 'landscape')."
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
        </div>

        <div className={styles.inputWithColor}>
          <div className="p-float-label">
            <InputText
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              className={[styles.inputColor, styles.inputText].join(' ')}
              tooltip="The color used for the toolbar or address bar."
              tooltipOptions={{
                position: 'left',
                showDelay: 350,
                style: { width: '14em' },
              }}
            />
            <label htmlFor="themeColor">Theme Color</label>
          </div>
          <ColorPicker
            className={styles.colorPicker}
            format="hex"
            value={themeColor}
            onChange={(e) => setThemeColor(`#${e.value}`)}
          />
        </div>
        <div className={styles.inputWithColor}>
          <div className="p-float-label">
            <InputText
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className={[styles.inputColor, styles.inputText].join(' ')}
              tooltip="The background color of the splash screen when the app is launched."
              tooltipOptions={{
                position: 'left',
                showDelay: 350,
                style: { width: '14em' },
              }}
            />
            <label htmlFor="backgroundColor">Background Color</label>
          </div>
          <ColorPicker
            className={styles.colorPicker}
            format="hex"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(`#${e.value}`)}
          />
        </div>
        <div className="p-float-label">
          <InputText
            value={appURL}
            onChange={inputAppURL}
            className={styles.inputText}
            tooltip="Optional URL to the app's website. For preview purposes only."
            tooltipOptions={{
              position: 'left',
              showDelay: 350,
              style: { width: '14em' },
            }}
          />
          <label htmlFor="appURL">App URL</label>
        </div>
        <UploadImage />
      </div>
      <div
        className={[styles.areaContainer, styles.manifestContainer].join(' ')}
      >
        <pre className={styles.code}>{manifestJson}</pre>

        <Button
          onClick={clipboardToManifestObject}
          icon={buttonClipboardIcon}
          outlined
          aria-label="clipboard"
        />
      </div>
    </div>
  )
}
