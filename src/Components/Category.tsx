import { Title, ItemsContainer } from "../styles"
import {Metric} from "../App"
import Card from "./Card"
import { useRef, useEffect, useState } from "react"

type Props = {
    items: Metric[]
}

const Category = ({items}: Props) => {
    const catRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false)
    const onScroll = () => {
        const top = catRef?.current?.getBoundingClientRect().top;
        setVisible(top ? (top - (window.innerHeight  * (55 /100)))<=0 : false)
    }

    const animationStyle = (visible: boolean) => {
        return visible ? {} : {opacity: 0, animation: "none"}
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        onScroll()
        return () => document.removeEventListener('scroll', onScroll, true);
      });

    return <div ref={catRef}>
            <Title duration={0.3} style={{backgroundColor: "white",paddingLeft: "2vw",height: "10vh", lineHeight:"10vh",fontSize: "2rem", textTransform: "capitalize",...animationStyle(visible)}}>{items[0].category}</Title>
            <ItemsContainer style={animationStyle(visible)}>
                {items.map(({id, value, label, type, description}, index: number) => <Card customStyle={animationStyle(visible)} animationDur={index*0.1} key={id} value={value} label={label} type={type} description={description} />)}
            </ItemsContainer>
    </div>
}

export default Category