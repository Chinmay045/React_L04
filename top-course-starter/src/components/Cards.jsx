import React, { useState } from 'react';
import Card from './Card';

export default function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    console.log("Course new " + courses);
    let allCourses = [];
    console.log("Courses " + courses)
    //it returns list of all the courses received from api response

    const getCourses = () => {
        if (category === "All") {
            console.log(courses)
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else {
            //do send courses based on specific category
            return courses[category];
        }

    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}
