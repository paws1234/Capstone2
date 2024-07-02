import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("/teachers");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleDelete = async (teacherId) => {
    try {
      const response = await axios.delete(`/teachers/${teacherId}`);
      console.log("Teacher deleted:", response.data);

      // After deleting, fetch updated list of teachers
      fetchTeachers();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Teachers List</h2>
      <Link
        to="/admin/teachers/add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
      >
        Add Teacher
      </Link>
      <ul className="divide-y divide-gray-300">
        {teachers.map((teacher) => (
          <li key={teacher.id} className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{teacher.name}</p>
                <p className="text-gray-600">{teacher.email}</p>
              </div>
              <div className="flex">
                <Link
                  to={`/admin/teachers/edit/${teacher.id}`}
                  className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                  Edit
                </Link>
                {/* Add delete functionality here */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r ml-2"
                  onClick={() => handleDelete(teacher.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
