import styles from "../style"
import Button from "./Button"

const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  p-5 rounded-md">
        <h2 className={`${styles.heading2} text-center`}>Lets try my service now.</h2>
        <p className={`${styles.paragraph} text-center mt-5`}>Everything you need to grow your business anywhere on the planet.</p>
      </div>

      {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div> */}
    </section>
  )


export default CTA