import { card } from '../assets'
import devices from '../assets/devices.png'
import styles, { layout } from '../style'
import Button  from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Responsive for mobile, tablet and desktop devices</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Smart phones are now the most popular device used to access the internet, with 60% of the overall global internet traffic originating from a mobile device.
        </p>
        <Button styles="mt-10"/>

      </div>

      <div className={layout.sectionImg}>
        <img src={devices} alt="card" className='w-[100%] h-[100%]' />
      </div>
      

    </section>
  )


export default CardDeal