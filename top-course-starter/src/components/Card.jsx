import React from 'react'
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

export default function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);

            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked")
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
            <div className='relative'>
                <img src={course.image.url} alt='img' ></img>
                <div>
                    <button className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-2 grid place-items-center' onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem"></FcLike>)
                        }
                    </button>
                </div>
            </div>
            <div>
                <p className='text-white font-semibold text-lg leading-6 m-2'>{course.title}</p>
                <p className='m-2 text-white'>{course.description}</p>
            </div>
        </div>
    )
}
