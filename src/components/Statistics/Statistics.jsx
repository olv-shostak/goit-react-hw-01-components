import PropTypes from 'prop-types';
import { StatisticsSec, Title, StatisticsList, StatisticsItem, Label, Percentage } from './Statistics.styled';

// function getRandomColor() {
//   var letters = '0123456789ABCDEF'.split(''),
//       color = '#';
//   for(var i = 0; i < 6; i++ ) {
//       color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

function randomHSL(){
  return `hsla(${~~(360 * Math.random())},70%,70%,0.9)`
}

function Statistics({ title, data }) {
  return (
    <StatisticsSec>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {data.map(s => (
            <StatisticsItem key={s.id} style={{backgroundColor: randomHSL()}}>
            <Label>{s.label}</Label>
            <Percentage>{s.percentage}</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSec>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default Statistics;
