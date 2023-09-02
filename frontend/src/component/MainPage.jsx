import React from 'react'
import '../assets/css/main.css'


const MainPage = () => {
    return (
        <main>
            {/* <!--? Hero Area Start--> */}
            <div className="slider-area">
                <div className="slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10">
                                {/* <!-- Hero Caption --> */}
                                <div className="hero__caption">
                                    <h1 className='text-6xl md:text-8xl tracking-widest lg:text-9xl font-semibold md:font-black' >Hi There!</h1>
                                    <h3 className='mt-3 text-3xl md:text-6xl trcking-tight lg:text-5xl font-semibold md:font-bold'>It's George Chike</h3>
                                    <p className="mt-3 text-xl md:text-2xl lg:text-5xl tracking-tight font-semibold md:font-semibold">Your favorite Developer
                                        {/* <a href="#" className="cd-words-wrapper"> */}
                                        {/* <b className="is-visible">amost other things</b>
                                        <b>Spondon</b>
                                        <b>Infix</b>
                                        <b>Directory</b> */}
                                        {/* </a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainPage