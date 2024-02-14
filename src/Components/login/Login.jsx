import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import style from "./Login.module.scss";

function Login() {
  const isAuth = false;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "example@mail.ru",
      password: "12345",
    },
    mode: "onChange",
  });

  if (isAuth) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <Paper className={style.root}>
      <Typography variant="h5" className={style.title}>
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit()}>
        <TextField
          className={style.input}
          label="E-mail"
          fullWidth
          error={false}
          helperText={""}
          {...register("email", { required: "Укажите почту" })}
        />
        <TextField
          className={style.input}
          label="Password"
          fullWidth
          error={false}
          helperText={""}
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
