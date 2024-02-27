import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/auth";
import { useState } from "react";

import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";

import style from "./Login.module.scss";

function Login() {
  const [data, setData] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "ryusuke_1@mail.ru",
      password: "123456",
    },
    mode: "onChange",
  });

  const onSubmit = async values => {
    const data = await dispatch(fetchUserData(values));

    if (!data.payload) {
      alert("Не удалось авторизоваться");
    }

    if ("token" in data.payload) {
      localStorage.setItem("token", data.payload.token);
      setData(data);
    }
  };

  if (data) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <Paper className={style.root}>
      <Typography variant="h5" className={style.title}>
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={style.input}
          label="E-mail"
          fullWidth
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажите почту" })}
        />
        <TextField
          className={style.input}
          label="Password"
          fullWidth
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Укажите пароль" })}
        />
        <Button
          className={style.button}
          type="submit"
          size="large"
          variant="contained"
        >
          Войти
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
