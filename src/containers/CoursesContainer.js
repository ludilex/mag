import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { AxiosProvider, Get } from 'react-axios'
import { apiSuccesfulResponse } from '../actions/index'
import CoursesList from '../components/CoursesList'

const axiosInstance = axios.create({
  baseURL: 'https://classroom.googleapis.com',
  timeout: 2000
  //headers: { 'Authorization': 'Bearer ya29.GlwYBKIOSFLJIsJWS91mLl4cLrsFt81CFlHpid1ChDQWJ7idm6lWjt17Bd-LxgBTMym38ExMK6gscKrJvXrUXbS9-vFHOCO3CCwMGzpMq6kasQBojNUos3TAcvSemQ' }
})

class CoursesContainer extends React.Component {

  render() {

    var courses = {} //var to save courses from response
    //console.log(this.props.isLogged);


    if(this.props.isLogged) {
      return(
        <AxiosProvider instance={axiosInstance}>
          <Get url={"/v1/courses/?access_token=" + this.props.accessToken} onSuccess={() => this.props.succesfulResponse(courses)}>
             {(error, response, isLoading) => {
               if(error) {
                 return (<div>Something bad happened: {error.message}</div>)
               }
               else if(isLoading) {
                 return (<div>Loading...</div>)
               }
               else if(response !== null) {
                 //this._handleResponse(response.data)
                 courses = response.data

                 return (
                   <div>
                     {JSON.stringify(courses)}
                     <CoursesList />
                   </div>

                 )
               }
               return (<div>Default message before request is made.</div>)
             }}
           </Get>
         </AxiosProvider>
       )
    }
    return (<div>No logged</div>)
  }
}

const mapStateToProps = (state) => {
  return {
    coursesList: state.classroomReducer.coursesList,
    isLogged: state.loginReducer.isLogged,
    accessToken: state.loginReducer.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    succesfulResponse: apiSuccesfulResponse
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
