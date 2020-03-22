import { connect } from 'react-redux'
import { toggleHall } from '../actions'
import HallsList from '../components/HallsList'

const mapStateToProps = state => ({
    halls: state.calendar.selectedHalls
})

const mapDispatchToProps = dispatch => ({
    toggleHall: name => dispatch(toggleHall(name))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HallsList)