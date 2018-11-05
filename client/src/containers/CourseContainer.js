import React from 'react'
import { withRouteData } from 'react-static'
import { connect } from 'react-redux'
import Course from '../components/Course/Course'
import {
  getPaidCourses,
  getIsAuthenticated
} from '../redux/selectors/commonSelectors.js'

const CourseContainer = props => <Course {...props} />

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  paidCourses: getPaidCourses(state)
})

export default connect(mapStateToProps)(withRouteData(CourseContainer))
