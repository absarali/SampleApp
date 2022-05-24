import Months from '../data/Months';

const formatDate = props => {
  if (props.date) {
    return `${Months[props.date?.getMonth()]} ${
      props.date?.getDate() < 10
        ? `0${props.date?.getDate()}`
        : props.date?.getDate()
    }, ${props.date?.getFullYear()}`;
  }
  if (props.day) {
    const d = new Date(props.year, props.month, props.day);

    return `${Months[d?.getMonth()]} ${
      d?.getDate() < 10 ? `0${d?.getDate()}` : d?.getDate()
    }, ${d?.getFullYear()}`;
  }
  if (props.string) {
    const day = props.string.split('-')[2];
    const month = props.string.split('-')[1];
    const year = props.string.split('-')[0];

    return `${Months[month - 1]} ${day}, ${year}`;
  }
};

export default formatDate;
