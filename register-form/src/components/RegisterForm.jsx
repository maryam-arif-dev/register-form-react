import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations/registerSchema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  // simple submit handler that will be called by react-hook-form
  const onSubmit = (data) => {
    console.log("form data", data);
    alert("Registration successful!");
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            {...register("fullName")}
          />
          <p className="error">{errors.fullName?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>
        <div className="form-group">
          <label className="terms-label">
            <input type="checkbox" id="terms" {...register("terms")} />I accept
            the terms and conditions
          </label>
          <p className="error">{errors.terms?.message}</p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
