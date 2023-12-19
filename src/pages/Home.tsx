import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        if (!response.ok) throw new Error("Data not found with this resources!");
        const data = await response.json();
        setUsers(data.data.users);
      } catch (error) {
        // create error state and set the error
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <main>
      <ul className="my-6 grid grid-cols-3 gap-4">
        {users?.map((item: { _id: string; image: string; name: string; email: string }) => (
          <li key={item._id} className="border flex flex-col gap-4 rounded p-4">
            <div className="bg-slate-600">
              <img className="h-[200px] w-full object-contain pt-2" src={item.image} alt="profile" />
            </div>
            <div>
              <h2 className="text-2xl font-medium uppercase">{item.name}</h2>
              <p className="lowercase">{item.email}</p>
            </div>
            <div className="flex gap-2 items-start">
              <UserDeleteBtn />
              <Link to={`/updateUser/123`}>
                <button className="c-btn bg-green-600">update</button>
              </Link>

              <Link to={`/userDetails/123`}>
                <button className="c-btn bg-blue-600">details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

// user delete button component

function UserDeleteBtn() {
  return <button className="c-btn bg-red-600">delete</button>;
}
