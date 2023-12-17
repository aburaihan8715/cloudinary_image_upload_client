import { Link } from "react-router-dom";

export default function AppNav() {
  return (
    <>
      <header className="sticky top-0">
        <nav className="bg-slate-600 px-4 py-2 flex justify-between items-center rounded border ">
          <Link to={"/"} className="text-white">
            <div>
              REAC<span className="text-2xl text-red-700">T</span>T CRUD
            </div>
            <div className="text-xs">upload image and typescript</div>
          </Link>
          <Link to={"/addUser"}>
            <button className="c-btn bg-green-600">Add user</button>
          </Link>
        </nav>
      </header>
    </>
  );
}
