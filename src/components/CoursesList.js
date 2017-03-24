import React from 'react'


class CoursesList extends React.Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.courses)}</div>
    )
  }
}

export default CoursesList
