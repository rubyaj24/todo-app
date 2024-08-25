import React from 'react'

const Todo = () => {
  return (
    <tr className="bg-white border-b dark:border-gray-100 hover:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1
                </th>
                <td className="px-6 py-4">
                    Study
                </td>
                <td className="px-6 py-4">
                    Learn Next js
                </td>
                <td className="px-6 py-4">
                    Pending
                </td>
                <td className="px-6 py-4 text-right flex gap-1">
                <button className='py-2 px-4 bg-red-600 text-white rounded'>Delete</button>
                <button className='py-2 px-4 bg-green-500 text-white rounded'>Done</button>
                </td>
            </tr>
  )
}

export default Todo