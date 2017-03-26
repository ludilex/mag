import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { AxiosProvider, Get } from 'react-axios'
import { courseworksRetrieved } from '../actions/index'


//import CourseThumbnail from '../components/CourseThumbnail'
//import { Row } from 'react-bootstrap';

class CourseWorksContainer extends React.Component {

  render() {

    var courseWorks = {} //var to save courses from response
    console.log(this.props);
    const axiosInstance = axios.create({
      baseURL: 'https://classroom.googleapis.com',
      timeout: 2000,
      headers: { 'Authorization': 'Bearer ' + this.props.accessToken } //accessToken retrieved from OAuth
    })

    var url = "v1/courses/" + this.props.courseId + "/courseWork"
    console.log(url);
      return(
        <AxiosProvider instance={axiosInstance}>
          <Get url={url} onSuccess={() => this.props.courseworksRetrieved(courseWorks)}>
             {(error, response, isLoading) => {
               if(error) {
                 return (<div>Something bad happened: {error.message}</div>)
               }
               else if(isLoading) {
                 return (<div>Loading...</div>)
               }
               else if(response !== null) {
                 courseWorks = response.data.courseWork //Save in global variable
                 return <button>See the skill tree</button>
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
    //courseWorksList: state.classroomReducer.courseWorksList,
    //hasCourses: state.classroomReducer.hasCourses,
    accessToken: state.loginReducer.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    courseworksRetrieved: courseworksRetrieved
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseWorksContainer);
