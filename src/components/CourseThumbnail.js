import React from 'react'


class CourseThumbnail extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.courseTitle}</h2>
        <p>{this.props.section}</p>
        <p>{this.props.descriptionHeading}</p>
        <p>{this.props.link}</p>
      </div>
    )
  }
}
