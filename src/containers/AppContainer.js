import {connect} from "react-redux"
import {bindActionCreators} from 'redux'

import App from "../components/App"
import * as noteActions from "../actions/noteActions"

function mapStateToProps(state){
    return {
        notes: state.notesReducer   
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(noteActions, dispatch)
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer