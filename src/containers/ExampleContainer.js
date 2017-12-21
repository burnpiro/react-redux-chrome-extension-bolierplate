import { connect } from 'react-redux'
import { setExampleData } from '../actions/example'
import ExamplePresentation from '../components/ExamplePresentation/ExamplePresentation'

const mapStateToProps = state => {
  return {
    sampleData: state.data
  }
}

// You can use {setExampleData} instead of mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    setExampleData: (data) => {
      dispatch(setExampleData(data))
    }
  }
}

const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamplePresentation)

export default ExampleContainer