'use client'
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import styles from './styles.module.css'
import { ColorPicker } from 'primereact/colorpicker'
import { Dropdown } from 'primereact/dropdown'
import UploadImage from '../uploadImage'
import { useDispatch } from 'react-redux'
import { actions } from '@/stores/form-store'

export default function ManifestForm() {
  const [name, setName] = useState('')
  const [shortName, setShortName] = useState('')
  const [description, setDescription] = useState('')
  const [startUrl, setStartUrl] = useState('')
  const [display, setDisplay] = useState('')
  const [orientation, setOrientation] = useState('')
  const [themeColor, setThemeColor] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  const [appURL, setAppURL] = useState('')

  const dispatch = useDispatch()

  const displayList = [
    { name: 'fullscreen', value: 'fullscreen' },
    { name: 'standalone', value: 'standalone' },
    { name: 'minimal-ui', value: 'minimal-ui' },
    { name: 'browser', value: 'browser' },
  ]

  const orientationList = [
    { name: 'portrait', value: 'portrait' },
    { name: 'landscape', value: 'landscape' },
  ]

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
        src: 'icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }

  const inputShortName = (e) => {
    setShortName(e.target.value)
    dispatch(actions.setShortName(e.target.value))
  }

  const inputAppURL = (e) => {
    setAppURL(e.target.value)
    dispatch(actions.setAppURL(e.target.value))
  }

  const manifestJson = JSON.stringify(manifestObject, null, 4)

  return (
    <div>
      <div className={`${styles.areaContainer} ${styles.form}`}>
        <div className="p-float-label">
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100% ' }}
            tooltip="The name of the web app."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="p-float-label">
          <InputText
            value={shortName}
            onChange={inputShortName}
            style={{ width: '100% ' }}
            tooltip="A shorter version of the app name, which is used on the home screen or app launcher when space is limited."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
          <label htmlFor="shortName">Short Name</label>
        </div>
        <div className="p-float-label">
          <InputText
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100% ' }}
            tooltip="A brief description of the web app."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="p-float-label">
          <InputText
            value={startUrl}
            onChange={(e) => setStartUrl(e.target.value)}
            tooltip="The URL that should be loaded when the app is launched."
            style={{ width: '100% ' }}
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
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
            optionLabel="Display"
            showClear
            placeholder="Select a Display"
            className="w-full md:w-14rem"
            tooltip="Specifies how the web app should be displayed. Possible values include 'fullscreen', 'standalone', 'minimal-ui', and 'browser'."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
        </div>
        <div>
          <Dropdown
            value={orientation}
            onChange={(e) => setOrientation(e.value)}
            style={{ width: '100% ' }}
            options={orientationList}
            optionLabel="Orientation"
            showClear
            placeholder="Select a Orientation"
            className="w-full md:w-1rem"
            tooltip="Specifies the default orientation of the web app (e.g., 'portrait' or 'landscape')."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
        </div>
        <div className={styles.inputWithColor}>
          <div className="p-float-label">
            <InputText
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              style={{ width: '200%' }}
              tooltip="The background color of the splash screen when the app is launched."
              tooltipOptions={{
                position: 'right',
                showDelay: 350,
                style: { width: '20em' },
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
        <div className={styles.inputWithColor}>
          <div className="p-float-label">
            <InputText
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
              style={{ width: '200%' }}
              tooltip="The color used for the toolbar or address bar."
              tooltipOptions={{
                position: 'right',
                showDelay: 350,
                style: { width: '20em' },
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
        <div className="p-float-label">
          <InputText
            value={appURL}
            onChange={inputAppURL}
            style={{ width: '100% ' }}
            tooltip="Optional URL to the app's website. For preview purposes only."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
          <label htmlFor="appURL">App URL</label>
        </div>
        <UploadImage />
      </div>
      <div className={styles.areaContainer}>
        <pre className={styles.code}>{manifestJson}</pre>
      </div>
    </div>
  )
}
