import React from 'react'
import axios from 'axios'
import { AxiosProvider, Get } from 'react-axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { submissionRetrieved, submissionsLoaded, changeFetchingStatus  } from '../actions/actionCreators'
import SubmissionDetails from '../components/SubmissionDetails'
import Spinner from 'react-spinkit'



class SubmissionsDetailsContainer extends React.Component {

  shouldComponentUpdate() {
    //returns false because only should send the submissions, nothing more
    return false
  }

  render() {

    const axiosInstance = axios.create({
      baseURL: 'https://classroom.googleapis.com',
      timeout: 2000,
      headers: { 'Authorization': 'Bearer ' + this.props.accessToken } //accessToken retrieved from OAuth
    })

    var url = "v1/courses/" + this.props.courseId + "/courseWork/" + this.props.courseWorkId + "/studentSubmissions"
    
    return(
        <AxiosProvider instance={axiosInstance}>
          <Get url={ url } onSuccess={(response) => this.props.submissionsLoaded(response.data.studentSubmissions)}>
             {(error, response, isLoading) => {
               if(error) {
                 return (<div>Something bad happened: {error.message}</div>)
               }
               else if(isLoading) {
                 return (<div><Spinner spinnerName="double-bounce" /></div>)
               }
               else if(response !== null) {
                 //console.log(response);
                 return <div><SubmissionDetails submissions={response.data.studentSubmissions}/></div>
               }
               return (<div>Default message before request is made.</div>)
             }}
           </Get>
        </AxiosProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.loginReducer.accessToken,
    studentSubmissions: state.classroomReducer.studentSubmissions
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submissionsLoaded: submissionsLoaded,
    submissionRetrieved: submissionRetrieved,
    changeFetchingStatus: changeFetchingStatus
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsDetailsContainer)
