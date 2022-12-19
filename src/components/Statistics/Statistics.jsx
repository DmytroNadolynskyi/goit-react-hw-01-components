import PropTypes from 'prop-types';
import { Section, Title, List, Item, Percentage } from './Statistics.styled';

export default function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({id,label,percentage}) => (
          <Item key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
