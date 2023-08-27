import * as Yup from "yup";

export const registrationValidationSchema = Yup.object().shape({
  name: Yup.string().required("Необхідно вказати логін"),
  email: Yup.string()
    .email("Недійсна електронна пошта")
    .required("Необхідно вказати електронну пошту"),
  password: Yup.string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Необхідно вказати пароль"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Недійсна електронна пошта")
    .required("Необхідно вказати електронну пошту"),
  password: Yup.string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Необхідно вказати пароль"),
});
