import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoUrl, email, password);
    setError("");
    setSuccess("");

    //Condition
    if (password.length < 6) {
      setError("Your password should be at least 6 characters or longer..!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your password should have at least one Uppercase charater..!");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Your password should have at least one Lowercase charater..!");
      return;
    }

    // Authentication
    createUser(email, password).then((result) => {
      console.log(result.user);
      updateUser(name, photoUrl).then(() => console.log("profile updated"));
      // Enter the user to database
      const userData = {
        name: name,
        email: email,
        photo: photoUrl,
      };
      axiosPublic.post("/users", userData).then((res) => {
        if (res.data.insertedId) {
          console.log("User added to database");
          form.reset();
          Swal.fire({
            title: "Good job!",
            text: "Your registration is Successfull..!",
            icon: "success",
          });
          navigate("/login");
        }
      });
    });
  };

  return (
    <div className=" flex justify-center p-10 bg-green-300/35 h-screen">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 bg-green-200">
        <h2 className="mb-3 text-3xl font-bold text-center">
          Create an account
        </h2>

        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4 mb-7">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Name"
                className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Give Your Photo URL"
                className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gamil.com"
                className=" input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <div className="relative form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute right-5 top-4 text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            {error && (
              <p className="mt-2 text-red-600 font-semibold ">{error}</p>
            )}
            {success && (
              <p className="mt-2 text-green-600 font-serif ">{success}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-500 border-none w-full px-8 py-3 text-xl font-bold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center dark:text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/joinUs">
            <span className="text-green-600 font-bold">Login</span> here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
