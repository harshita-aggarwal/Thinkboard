import { PlusIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import useAuth from "../context/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out!");
    navigate("/login");
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-base-content/60 text-sm">Hi, {user?.name}!</span>
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
            <button className="btn btn-ghost" onClick={handleLogout}>
              <LogOutIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;