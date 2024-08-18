import { Logo, Fb, Ig, Link, Hero, Rarr, Hero_m1 } from "./assets"
import {useState, useRef} from 'react'

export default function App() {

  const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzISJnaUeI1J5N00rGeXJL9rG6UHUjWn7dsEahoN5C5eBMvZu0BNRp0oTVgDdSh5ZqvYA/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        document.getElementById('sub-button').src = ''

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
            var element = document.getElementById('name');
            element.value = ''
            element.placeholder = 'Your email has been submitted!'
            element.style.fontWeight = '550'

            setTimeout(function () {
              element.style.fontWeight = '400'
              element.placeholder = 'Email Address'
            }, 5000); 

        })
        .catch(err => console.log(err))
    }

  return (
    <section className="flex flex-col h-[100vh] bg-[#F0F0F0] justify-between">
      <div className="flex flex-col bg-[#F0F0F0]">
        <nav className="w-full flex flex-row sm:justify-start justify-center px-16 py-1">
          <img src={Logo} className="w-[125px] lg:w-[150px] h-auto py-6 sm:ml-0 ml-3"/>
        </nav>
        <section>
          <img src={Hero} style={{ width: '100%', height: 'auto'  }} className="lg:flex hidden w-full"/>
          <div className="image-container flex lg:hidden">
            <img src={Hero_m1}/>
          </div>    
        </section>
        <section className="px-6 sm:px-16 py-8 sm:py-12">
          <h1 className="sm:mt-0 -mt-4 leading-tight text-[36px] sm:text-[42px] font-bold tracking-wider text-[#222222]">
            STAY TUNED FOR SOMETHING <span className="text-[#B5D411]">ELECTRIC.</span>
          </h1>
          <h2 className="text-base sm:text-xl font-semibold text-[#a1a1a1] mt-6 sm:mt-2">Get notified when we launch the site</h2>
          <div className="container mt-2 mb-3 sm:mb-4">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-[700px] px-4 py-2 sm:py-3 w-full border-2 border-[#B5D411] rounded-lg sm:rounded-xl flex flex-row"
            >
              <input
                id="name"
                type="email"
                name="name"
                placeholder="Enter your email"
                className="bg-[#F0F0F0] max-w-[700px] text-lg flex-grow focus:outline-0"
              />
              <button
                type="submit"
                id="sub-button"
                className={`shrink-0 w-10 h-10 bg-[#B5D411] p-1 text-white font-semibold rounded-full flex items-center justify-center ${loading ? 'cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="loader">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                  </div>
                ) : (
                  <img id="rarr" src={Rarr} className="w-5 h-5" alt="Arrow" />
                )}
              </button>
              
            </form>
          </div>
          <ul className="flex flex-1 flex-row gap-1 items-center align-center">
              <li className="opacity-90 hover:opacity-100"><a target="_blank" href="https://www.linkedin.com/company/meineelectric/?originalSubdomain=in"><img src={Link} className="w-6 sm:w-6 h-auto"/></a></li>
              <li className="opacity-90 hover:opacity-100"><a target="_blank" href="https://www.instagram.com/meineelectric/"><img src={Ig} className="w-6 sm:w-6 h-auto"/></a></li>
              <li className="opacity-90 hover:opacity-100"><a target="_blank" href="https://m.facebook.com/p/MEINE-Electric-100083796047404/?locale=hi_IN"><img src={Fb} className="w-6 sm:w-6 h-auto"/></a></li>
          </ul>
        </section>
      </div>
      <div className="bottom-0 left-0">
        <footer className="bottom-0 w-full bg-[#222222] text-[#B5D411] font-medium text-xs py-6 px-10 flex flex-col sm:text-center gap-1 justify-center">
          <p className="mb-4">Copyright © 2023, MEINE Electric Automotives Pvt. Ltd. All Rights Reserved. Icons by <u><a target="_blank" href="https://icons8.com/">Icons8</a></u>
          </p>
          <p className="text-[0.65rem] text-[#a1a1a1]">E- 21 MIG DDA Flats, Saket, Malviya Nagar, Delhi - 10017</p>
          <p className="text-[0.65rem] text-[#a1a1a1]">CIN: U34100DL2022PTC404082</p>
        </footer>
      </div>
    </section>
  )
}