'use client'
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import styles from './styles.module.css'
import { ColorPicker } from 'primereact/colorpicker'
import { Dropdown } from 'primereact/dropdown'

export default function ManifestForm() {
  const [name, setName] = useState('')
  const [shortName, setShortName] = useState('')
  const [description, setDescription] = useState('')
  const [startUrl, setStartUrl] = useState('/')
  const [display, setDisplay] = useState()
  const [backgroundColor, setBackgroundColor] = useState('#')
  const [themeColor, setThemeColor] = useState('#')
  const [orientation, setOrientation] = useState()

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
    start_url: startUrl,
    display: display,
    background_color: backgroundColor,
    theme_color: themeColor,
    orientation: orientation,
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
        <div className="p-float-label">
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setShortName(e.target.value)}
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
            options={displayList}
            optionLabel="Display"
            showClear
            placeholder="Select a Display Type"
            className="w-full md:w-14rem"
            tooltip="Specifies how the web app should be displayed. Possible values include 'fullscreen', 'standalone', 'minimal-ui', and 'browser'."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
        </div>
        <div className="p-float-label">
          <InputText
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            tooltip="The background color of the splash screen when the app is launched."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
          <label htmlFor="backgroundColor">Background Color</label>
          <ColorPicker
            format="hex"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(`#${e.value}`)}
          />
        </div>

        <div className="p-float-label">
          <InputText
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
            tooltip="The color used for the toolbar or address bar."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
          <label htmlFor="themeColor">Theme Color</label>
          <ColorPicker
            format="hex"
            value={themeColor}
            onChange={(e) => setThemeColor(`#${e.value}`)}
          />
        </div>
        <div>
          <Dropdown
            value={orientation}
            onChange={(e) => setOrientation(e.value)}
            options={orientationList}
            optionLabel="Orientation"
            showClear
            placeholder="Select a Orientation Type"
            className="w-full md:w-1rem"
            tooltip="Specifies the default orientation of the web app (e.g., 'portrait' or 'landscape')."
            tooltipOptions={{
              position: 'right',
              showDelay: 350,
              style: { width: '20em' },
            }}
          />
        </div>
      </div>
    </div>
  )
}
