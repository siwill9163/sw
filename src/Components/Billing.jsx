import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"
import colab from '../assets/colab.png'

const Billing = () => (
    
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={colab} alt="billing" className="w-[100%] h-{100%] relative z-[5] pr-20" />


            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Shops, Social Media, Payment Systems, Company Profiles and mush more.</h2>
            <p className={`${styles.paragraph} max-w-[470px]`}>Online payments. Elevate your e-commerce with fast, secure and seamless online payments for card and alternative payment methods.</p>

            <div className="flex flex-row flex-wrap sm:mt -10 mt-6">
                <img src={apple} alt="apple_store" className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer" />
                <img src={google} alt="google_paly" className="w-[120px] h-[42px] object-contain cursor-pointer" />

            </div>
        </div>
    </section>
  )


export default Billing