import { useState,} from 'react'
import { useRouter } from 'next/router'

const cover = '/assets/images/cover.jpg'

const PreorderPage = () => {
  // const [ timerDays, setTimerDays ] = useState('00')
  // const [ timerMinutes, setTimerMinutes ] = useState('00')
  // const [ timerHours, setTimerHours ] = useState('00')
  // const [ timerSeconds, setTimerSeconds ] = useState('00')
  const [ counter, setCounter ] = useState(0)

  // let interval = useRef()
  const router = useRouter()

  // const startTimer = () => {
  //   const countDownDate = new Date('September 14, 2021 00:00:00').getTime()

  //   interval = setInterval(() => {

  //     const now = new Date().getTime()
  //     const distance = countDownDate - now

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //     if (distance < 0) {
  //       clearInterval(interval.current)
  //     } else {
  //       setTimerDays(days)
  //       setTimerHours(hours)
  //       setTimerMinutes(minutes)
  //       setTimerSeconds(seconds)
  //     }
  //   }, 1000)
  // }

  // useEffect(() => {
  //   startTimer()

  //   return () => {
  //     clearInterval(interval.current)
  //   }
  // })

  const handlerDecrement = () => {
    if (counter === 0) {
      return 0
    } else {
      setCounter(current => current - 1)
    }
  }

  const handleIncrement = () => {
    setCounter(current => current + 1)
  }

  const disableButton = counter === 0 && true
  const handlerPreorder = () => router.push(`https://api.whatsapp.com/send?phone=6282244416800&text=Halo, Admin! Saya ingin order buku Mawar Setengah Hati ${counter}pcs :)`)
  const handleOrdeGooglePlaybook = () => router.push('https://play.google.com/store/books/details?id=Dec_EAAAQBAJ')

  return (
    <section className="preorder-page">
      <div className="container">
        <div className="preorder-page__row">
          <div className="preorder-page__contain-image">
            <img src={cover} alt="cover boook mawar setengah hati" />
          </div>
          <div className="preorder-page__contain-counter">
            
            <div className="preorder-page__product">
              <h1 className="preorder-page__product-title">Pre-order Buku Mawar Setengah Hati</h1>
              <p className="preorder-page__product-detail">Aku kehilangan sosok yang selalu kujadikan alasan semangat dalam melewati hari-hari yang berat, sangat sulit rasanya untuk bangkit dari semua kenyataan ini, karena semua yang kumimpikan telah hancur.</p>
              <div className="preorder-page__product-quantity">
                <p className="preorder-page__product-prices">Rp 49.000</p>
                <div className="preorder-page__product-wrapper-quantity">
                  <p className="preorder-page__product-decrement" onClick={handlerDecrement}>-</p>
                  <p className="preorder-page__product-counter--value">{counter}</p>
                  <p className="preorder-page__product-increment" onClick={handleIncrement}>+</p>
                </div>
              </div>
            </div>
              <div className="preorder-page__button">
                <button 
                  disabled={disableButton} 
                  className={disableButton ? 'preorder-page__button--disable' : 'preorder-page__button--on'}
                  onClick={handlerPreorder}
                >
                  Pre-order
                </button>
                <button  
                  className="preorder-page__button--on google-playbook"
                  onClick={handleOrdeGooglePlaybook}
                >
                  Google play book
                </button>
              </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default PreorderPage
