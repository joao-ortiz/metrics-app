import { useLayoutEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    value: number
}

const PercentageCicrle = ({value}: Props) => {
    const [finalValue, setValue] = useState(0)

    useLayoutEffect(() => {
        const tick = 500 / (value*100)
        let count = 1
        const loading = setInterval(() => {
            setValue(count)
            if(count === value*100) {
                clearInterval(loading)
            }
            count++
        }, tick)
        return () => {clearInterval(loading)}
    }, [value]) 
    return <CircularProgressbar styles={buildStyles({pathTransitionDuration: 0.1})} value={finalValue} text={`${finalValue}%`}/>
}

export default PercentageCicrle