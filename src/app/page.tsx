import styles from './page.module.css'

import Ios from '@/components/ios'
import ManifestForm from '@/components/manifestForm'

export default function Page() {
  return (
    <div className={styles.container}>
      <ManifestForm />
      <Ios />
    </div>
  )
}
