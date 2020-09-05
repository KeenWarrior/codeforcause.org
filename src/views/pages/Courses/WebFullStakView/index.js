import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import Recommendations from '../../common/Recommendations'
import CTA from '../CTA'
import FinalAction from '../FinalAction'
import Schedule from '../Schedule'
import coursesContent from 'src/data/courses';
import Major from '../Major';

const advanced = coursesContent.advanced;
const course = advanced.webDevelopment;

const useStyles = makeStyles(() => ({
  root: {}
}));

function CoursesView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Courses">
      <Major course={course}/>
      {/* <CourseRecommendations /> */}
      <Schedule course={course}/>
      <Recommendations />
      <FinalAction course={course}/>
      <CTA />
      <Footer />
    </Page>
  );
}

export default CoursesView;
