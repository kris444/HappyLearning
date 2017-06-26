import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends React.Component{
  constructor(props, context){
      super(props, context);

      // this.state = {
      //   course: {title: ''}
      // };
      //better practice
      //this.onTitleChange = this.onTitleChange.bind(this);
      //this.onSaveClick = this.onSaveClick.bind(this);
  }  

  // onTitleChange(event){
  //   const course = this.state.course; //bind this function only incase of ES6 classes to make this is referenced to this class
  //   course.title = event.target.value;
  //   this.setState({course:course});
  // }

  // onSaveClick(event){
  //   this.props.createCourse(this.state.course);
  // }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
 
 render(){
   return (
      <div>
        <CourseList courses={this.props.courses}/>
        {/*<h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}*/}
        {/*<h2>Add Courses </h2>
        <input
         type="text"
         onChange={this.onTitleChange}
         value={this.state.course.title} />

         <input
         type="submit"
         value="Save"
        onClick={this.onSaveClick} />*/}

      </div>
    );
 }
}

 CoursesPage.propTypes = {
   //createCourse:PropTypes.func.isRequired, 
   courses: PropTypes.array.isRequired
 }

function mapStateToProps(state, ownProps){
 return {
   courses: state.courses
 };
}

// function mapDispatchToProps(dispatch){
//   return {
//     //createCourse: course => dispatch(createCourse(course))
//     //actions: bindActionCreators(courseActions, dispatch)
//     //createCourse: bindActionCreators(createCourse, dispatch)
//   }

//}
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps)(CoursesPage);
