import React from 'react'
import Details from '@theme/Details'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps): JSX.Element => {
  return (
    <div>
      {items.map((item, index) => (
        <Details key={index} summary={item.title}>
          <div>
            {item.content}
          </div>
        </Details>
      ))}
    </div>
  )
}

export default Accordion
