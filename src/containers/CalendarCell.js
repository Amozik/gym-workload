import { connect } from 'react-redux'
import { find } from 'lodash'

import CardList from '../components/CardsList'

const mapStateToProps = (state, props) => ({
    schedules: state.calendar.schedules.reduce((memo, item) => {
        if (item.booked && item.from + ' - ' + item.to === props.time && item.day === props.day) {
            const hall = find(state.calendar.selectedHalls, { name: item.hall });
            if (hall && hall.selected) memo.push({...item, color: hall.color})
        }
        return memo;
    }, [])
})

export default connect(
    mapStateToProps,
  )(CardList)