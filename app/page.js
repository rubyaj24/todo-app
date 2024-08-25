"use client"
import Todo from "@/components/Todo";
import { useState } from "react"; //Functional components
import { ToastContainer, toast } from 'react-toastify'; //Notifications
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData, setFormData] = useState({ //adding functional components
    title: "",
    description: "",
  });

const onChangeHandler = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setFormData(form =>({...form, [name]: value}));
  console.log(formData);
  }

  const onSubmitHandle = async (e) =>{ //for prevent refreshing
    e.preventDefault();
    try {
      // api code
      const response = await axios.post('/api',formData);
      toast.success(response.data.msg); //Todo Created However ERROR shown
    } catch (error) {
      toast.error("Error")
    }
  }

  return (
    <>
    <ToastContainer/>
      <form onSubmit={onSubmitHandle} className="flex items-start flex-col gap-2 w-[80%] mt-24 max-w-[600] px-2 mx-auto">
      <input value={formData.title}onChange={onChangeHandler} type="text" name="title" placeholder="Enter title" className="rounded-lg px-3 py-2 border-2 w-full"></input>
      <textarea value={formData.description}onChange={onChangeHandler} name='description' placeholder="Enter description" className="border-2 px-3 py-2 w-full"></textarea>
      <button type="submit" className="bg-sky-500 text-white rounded py-3 px-11">Add</button>
      </form>
      

<div className="relative overflow-x-auto mt-24 w-[60%] mx-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-slate-100">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          <Todo/>
        </tbody>
    </table>
</div>

    </>
  );
}
