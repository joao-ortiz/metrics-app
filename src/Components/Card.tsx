import Number from "./Card/Number";
import PercentageCicrle from "./Card/PercentageCircle";
import { Title, CardContainer, Description } from "./Card/styles";

type Props = {
    label: string,
    value: number,
    type: string,
    description: string,
    animationDur: number,
    customStyle: any
}

const Card = ({ label, value, type, description, animationDur, customStyle}: Props) => {
    return <CardContainer style={customStyle} animationDur={animationDur}>
        <Title style={customStyle}>
            {label}
        </Title>
        {type !== "percentage" ? <Number number={value} type={type} /> : <PercentageCicrle value={value} />}
        <Description style={customStyle}>
            {description}
        </Description>
    </CardContainer>
}

export default Card