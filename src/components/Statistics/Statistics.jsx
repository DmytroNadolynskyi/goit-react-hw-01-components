import PropTypes from 'prop-types';
 import {Section,
  Title,
  List,
  Item,
  Percentage, } from'./Statistics.styled'

export default function Statistics({ stats, title }) {
  
return(
  <Section>
    {title && <Title>{ title}</Title>}

    <List>
     {stats.map(e => (<Item key={e.id}>
        <span >{e.label}</span>
        <Percentage>{e.percentage}%</Percentage>
      </Item>))}
      
      
    </List>
  </Section>
  )
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape(
    {
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })).isRequired,
  title: PropTypes.string
};
