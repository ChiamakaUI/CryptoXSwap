"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-[88%] mx-auto my-2 lg:w-[40%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-6 rounded-md"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-semibold my-3">
          Sign In
        </h2>
        <p className="text-center lg:text-lg">Please log in to your account.</p>
        <div className="my-3.5">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("email")}
            placeholder="Your Email"
          />
          <p className="text-red-600 text-sm capitalize">
            {errors.email?.message}
          </p>
        </div>

        <div className="my-3.5">
          <label className="font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("password")}
            placeholder="Your Password"
          />
          <p className="text-red-600 text-sm capitalize">
            {errors.password?.message}
          </p>
        </div>
        <Link href="forgot-password">
          <p className="font-semibold text-right mb-2">Forgot Password?</p>
        </Link>

        <div className="my-3.5 mx-auto w-[99%] flex flex-row justify-between items-center">
          <Link href="signup">
            <button className="border px-3.5 py-1.5 rounded font-semibold bg-transparent hover:bg-[#8d67e6] hover:text-white">Sign Up</button>
          </Link>
          <button className="border px-2.5 py-1.5 rounded bg-primary text-white w-[38%] lg:w-[20%]">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;
