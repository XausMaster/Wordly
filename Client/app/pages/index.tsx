"use client";
import Head from 'next/head';
// import { useEffect, useState } from "react";

// interface UserData {
//   id: number;
//   date: string;
//   nickname: string;
//   rank: number;
//   level: string;
//   win: number;
//   lose: number;
// }

// export default function HomePage() {
//   const users_url: string = 'http://127.0.0.1:5000/users';
//   const [users_json, setUsers] = useState<UserData[]>([]);

//   useEffect(() => {
//     console.log("Fetching data...");
//     const fetchData = async () => {
//       try {
//         const response = await fetch(users_url);
//         if (!response.ok) {
//           throw new Error('Failed to fetch');
//         }
//         const data = await response.json();
//         console.log(data);
//         setUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDeleteUser = (id: number) => {
//     fetch(`http://127.0.0.1:5000/deleteUser/${id}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to delete user');
//         }
//         console.log(`User with ID ${id} has been deleted`);
//         // Remove the deleted user from the state
//         setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle error, e.g., display an error message to the user
//       });
//   };

//   return (
//     <>
//       <main className="p-5">
//         <table className="table-auto bg-gray-300 rounded">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="px-5">ID</th>
//               <th className="px-5">Date</th>
//               <th className="px-5">Nickname</th>
//               <th className="px-5">Rank</th>
//               <th className="px-5">Level</th>
//               <th className="px-5">Wins</th>
//               <th className="px-5">Loses</th>
//               <th className="px-5">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users_json.map((user: UserData) => (
//               <tr key={user.id}>
//                 <td className="px-5">{user.id}</td>
//                 <td className="px-5">{user.date}</td>
//                 <td className="px-5">{user.nickname}</td>
//                 <td className="px-5">{user.rank}</td>
//                 <td className="px-5">{user.level}</td>
//                 <td className="px-5">{user.win}</td>
//                 <td className="px-5">{user.lose}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDeleteUser(user.id)}
//                     className="px-5 bg-red-200 rounded hover:bg-red-300 transition-all"
//                   >
//                     Delete User
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//       <footer></footer>
//     </>
//   );
// }

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <div>Welcome to the Home Page!</div>
    </>
  )
};

export default HomePage;
