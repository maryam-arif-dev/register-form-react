import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*\d).+$/, "Password must include at least 1 number"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
