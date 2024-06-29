import React from 'react'
import "./counter.css"
import CountUp, { useCountUp } from 'react-countup';


function Counter() {

    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp(
        { ref: countUpRef, start: 0, end: 50, duration: 2 }
    );

    return (
        <div className="counter">

            <div className="qutular">
                <div className="qutu qutu-1">
                    {<CountUp end={100} duration={2} delay={3} />}
                </div>
                <div className="qutu qutu-2" ref={countUpRef}></div>
                <div className="qutu qutu-3">
                    <CountUp end={500} duration={1} prefix="&#x24;" suffix="USD" />
                </div>
            </div>

            <div className="buttonlar">
                <button onClick={start}>Start</button>
                <button onClick={pauseResume}>Pause-Resume</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => update(120)}>Update</button>
            </div>

        </div>
    )
}

export default Counter