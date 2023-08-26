import React from "react";
import { users } from "../../data/authData";

export default function Signin() {
  const [form, setFormData] = React.useState({
    email: "",
    password: "",
  });
    
    const [message, setMessage] = React.useState("")

    const submitForm = async () => {
        const user = await users.find(function (user) {
          return user.email === form.email
        })
        if (user === undefined || user.password !== form.password) {
            setMessage("Invalid credentials")
            return
        }

        alert("Success")
        // dispatch signed in user role and then dispatch view change
  };

  return (
      <div id="" className=" w-[15vw] h-[auto] my-2 flex flex-col items-center">
          <label className="text-[red]">{message}</label>
      <input
        type="email"
        placeholder="username"
        className="text-primary border-b-2 border-b-primary outline-none my-2"
        value={form.email}
        onChange={(e) => {
          setFormData({
            ...form,
            email: e.target.value,
          });
        }}
      />

      <input
        type="password"
        placeholder="password"
        className="text-primary border-b-2 border-b-primary outline-none my-2"
        value={form.password}
        onChange={(e) => {
          setFormData({
            ...form,
            password: e.target.value,
          });
        }}
      />

      <button
        onClick={submitForm}
        className="text-primary text-[1.2rem] px-1 font-semibold hover:text-secondary border rounded-lg my-2"
      >
        Signin
      </button>
    </div>
  );
}
