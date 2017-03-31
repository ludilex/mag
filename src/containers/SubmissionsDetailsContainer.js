import React from 'react'
import axios from 'axios'
import { AxiosProvider, Get } from 'react-axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { submissionsRetrieved } from '../actions/actionCreators'
import SubmissionDetails from '../components/SubmissionDetails'


class SubmissionsDetailsContainer extends React.Component {
  render() {
    var submissions = {}
    const axiosInstance = axios.create({
      baseURL: 'https://classroom.googleapis.com',
      timeout: 2000,
      headers: { 'Authorization': 'Bearer ' + this.props.accessToken } //accessToken retrieved from OAuth
    })

    var url = "v1/courses/" + this.props.courseId + "/courseWork/" + this.props.courseWorkId + "/studentSubmissions"

    return(
      <AxiosProvider instance={axiosInstance}>
        <Get url={ url } onSuccess={() => this.props.submissionsRetrieved(submissions)}>
           {(error, response, isLoading) => {
             if(error) {
               return (<div>Something bad happened: {error.message}</div>)
             }
             else if(isLoading) {
               return (<div>Loading Course Works...</div>)
             }
             else if(response !== null) {
               submissions = response.data.studentSubmissions //Save in global variable

               return <div><SubmissionDetails submissions={submissions}/></div>

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
    accessToken: state.loginReducer.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submissionsRetrieved: submissionsRetrieved
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsDetailsContainer)
