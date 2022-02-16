import { useLayoutEffect, useState } from "react"
import { NumberDisplay, Label, NumberContainer } from "./Number/styles"
type Props = {
    number: number,
    type: string
}

const Number = ({number, type}: Props) => {
    const [numberDisplay, setNumberDisplay] = useState<string>("")

    useLayoutEffect(() => {
        let decimals = number.toString().indexOf('.') === -1 ? 0 : number.toString().split('.')[1].length
        let amount = number / 100
        let count = 1
        let negative = false
        let numberLength = number.toString().length
        if(number < 0){
            amount *= -1
            numberLength -= 1
            negative = true
        }
        console.log(decimals)
        const updateNumber = setInterval(() => {
            let nextNumber = ((Math.floor((amount * count)*100)) /100).toFixed(decimals).toString().padStart(numberLength, "0")
            setNumberDisplay(negative ? "-" + nextNumber : nextNumber)
            if(count === 100) {
                setNumberDisplay(number.toString())
                clearInterval(updateNumber)     
            }
            count++
        }, 10)

        return () => clearInterval(updateNumber)
    }, [number])

    

    return <NumberContainer>
        <NumberDisplay number={number}>
            {numberDisplay}
        </NumberDisplay>
        {type !== "number" ? <Label>{type}</Label> : null}
    </NumberContainer>
}

export default Number