import React from 'react';
import Card from './Card';

export default function Cards({ courses }) {
    let allCourses = [];
    console.log("Courses " + courses)
    //it returns list of all the courses received from api response

    const getCourses = () => {
        console.log(courses)
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    return (
        <div>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} />
                })
            }
        </div>
    )
}
