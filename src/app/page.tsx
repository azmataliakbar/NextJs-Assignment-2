import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div className="flex justify-around flex-wrap w-full pt-24 bg-black min-h-screen px-4 sm:px-28">
            <div className="card bg-gray-800 rounded-lg shadow-md w-full sm:w-72 h-96 mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl shadow-white">
                <Image
                    className="w-full h-48 object-cover rounded-t-lg "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GT08nLtoxWw4bqUimTMvDyOXWFLhb2FPZw&s"
                    alt="Image 1"
                    width={300}
                    height={200}
                />
                <div className="p-4">
                    <h4 className="text-yellow-400 text-2xl mb-8 mt-8 font-bold">Assignments</h4>
                    <p className="text-white text-sm">
                        View and manage all your assignments submitted by students
                    </p>
                </div>
            </div>

            <div className="card bg-gray-800 rounded-lg shadow-md w-full sm:w-72 h-96 mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl shadow-white">
                <Image
                    className="w-full h-48 object-cover rounded-t-lg"
                    src="https://poetsandquants.com/wp-content/uploads/sites/5/2022/08/rankingschools.jpg"
                    alt="Image 2"
                    width={300}
                    height={200}
                />
                <div className="p-4">
                    <h4 className="text-yellow-400 text-2xl mb-8 mt-8 font-bold">Students Ranking</h4>
                    <p className="text-white text-sm">
                        Check the top-performing students and their rankings.
                    </p>
                </div>
            </div>

            <div className="card bg-gray-800 rounded-lg shadow-md w-full sm:w-72 h-96 mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl shadow-white">
                <Image
                    className="w-full h-48 object-cover rounded-t-lg"
                    src="https://static.vecteezy.com/system/resources/previews/011/410/749/non_2x/young-male-teacher-teaching-math-lesson-to-students-in-the-classroom-vector.jpg"
                    alt="Image 3"
                    width={300}
                    height={200}
                />
                <div className="p-4">
                    <h4 className="text-yellow-400 text-2xl mb-8 mt-8 font-bold">Teachers</h4>
                    <p className="text-white text-sm">
                        Explore teachers and connect with them through LinkedIn.
                    </p>
                </div>
            </div>
            
        </div>
    );

};

export default Page;
