import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Button, TextField, Typography } from "@mui/material";
import style from "./Register.module.scss";
import { useRef, useState } from "react";

function Register() {
  const ref = useRef();
  const isAuth = false;
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      UserName: "UserName",
      email: "example@mail.ru",
      password: "12345",
    },
    mode: "onChange",
  });

  function handleChangeFile(e) {
    setImageUrl("https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg");
  }

  function onClickRemoveImage() {
    setImageUrl("");
  }

  if (isAuth) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <Paper className={style.root}>
      <Typography variant="h5" className={style.title}>
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit()}>
        <div className={style.avatar}>
          {imageUrl ? (
            <>
              <img className={style.image} src={imageUrl} alt="Uploaded" />
              <Button
                variant="contained"
                color="error"
                onClick={onClickRemoveImage}
                className={style.buttonImgLoad}
              >
                Удалить
              </Button>
            </>
          ) : (
            <>
              {" "}
              <Avatar sx={{ width: 100, height: 100 }} />
              <Button
                variant="outlined"
                size="large"
                onClick={() => ref.current.click()}
                className={style.buttonImgLoad}
              >
                Загрузить аватар
              </Button>
              <input ref={ref} type="file" onChange={handleChangeFile} hidden />
            </>
          )}
        </div>
        <TextField
          className={style.input}
          label="Username"
          fullWidth
          error={false}
          helperText={""}
        />
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
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
}

export default Register;
