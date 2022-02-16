import { Header, Title } from "./styles"
import Category from "./Components/Category"
import { data } from "./data";
import GlobalStyles from "./globalStyles";
import { useEffect, useState } from "react";

export type Metric = {
  id: string,
  label: string,
  value: number,
  type: string,
  description: string,
  category: string
}

function App() {
  const sections: any = {}
  const [sectionsArr, setSectionsArr]: any = useState([])
  useEffect(() => {
    data.forEach((item: Metric) => {
      if(sections.hasOwnProperty(item.category)) {
        sections[item.category].push(item)
      } else {
        sections[item.category] = [item]
      }
    })
    for (let section in sections){
      setSectionsArr((prev: any) => [...prev, sections[section]])
    }
  })
  

  

  return (
    <div style={{backgroundColor: "#bebebe"}}>
      <GlobalStyles />
      <Header>
        <Title duration={0.2}>W</Title>
        <Title duration={0.25}>E</Title>
        <Title duration={0.3}>L</Title>
        <Title duration={0.35}>C</Title>
        <Title duration={0.4}>O</Title>
        <Title duration={0.45}>M</Title>
        <Title duration={0.5}>E</Title>
      </Header>
      {sectionsArr.map((sec: any) => {
        return <Category key={sec[0].category} items={sec}/>
      })}
    </div>
  );
}

export default App;
