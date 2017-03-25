import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { AxiosProvider, Get } from 'react-axios'
import { apiSuccesfulResponse } from '../actions/index'

import CoursesList from '../components/CoursesList'
//import CourseThumbnail from '../components/CourseThumbnail'
//import { Row } from 'react-bootstrap';





class CoursesListContainer extends React.Component {

  render() {

    var courses = {} //var to save courses from response
    //console.log(this.props.isLogged);
    const axiosInstance = axios.create({
      baseURL: 'https://classroom.googleapis.com',
      timeout: 2000,
      headers: { 'Authorization': 'Bearer ' + this.props.accessToken } //accessToken retrieved from OAuth
    })

    if(this.props.isLogged && !this.props.hasCourses) {
      return(
        <AxiosProvider instance={axiosInstance}>
          <Get url={"/v1/courses/"} onSuccess={() => this.props.succesfulResponse(courses)}>
             {(error, response, isLoading) => {
               if(error) {
                 return (<div>Something bad happened: {error.message}</div>)
               }
               else if(isLoading) {
                 return (<div>Loading...</div>)
               }
               else if(response !== null) {
                 courses = response.data.courses //Save in global variable
                 //return <CoursesList courses={courses} />
               }
               return (<div>Default message before request is made.</div>)
             }}
           </Get>
         </AxiosProvider>
       )
    }else if (this.props.hasCourses) {
      return(<CoursesList courses={this.props.coursesList} />)
    }else {
      return (<div>No logged</div>)
    }

  }
}

const mapStateToProps = (state) => {
  return {
    coursesList: state.classroomReducer.coursesList,
    hasCourses: state.classroomReducer.hasCourses,
    isLogged: state.loginReducer.isLogged,
    accessToken: state.loginReducer.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    succesfulResponse: apiSuccesfulResponse
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListContainer);
