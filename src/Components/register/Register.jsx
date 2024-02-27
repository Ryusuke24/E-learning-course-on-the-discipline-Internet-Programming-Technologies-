import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/auth";

import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Button, TextField, Typography } from "@mui/material";

import style from "./Register.module.scss";

import { HOST_NAME } from "../../variables";

function Register() {
  const [data, setData] = useState(null);
  const ref = useRef();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "Test",
      email: "example@mail.ru",
      password: "12345",
    },
    mode: "onChange",
  });

  async function handleChangeFile(e) {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const res = await fetch(`${HOST_NAME}/uploads`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setImageUrl(`${HOST_NAME}/${data.url}`);
    } catch (error) {}
  }

  function onClickRemoveImage() {
    setImageUrl("");
  }

  const onSubmit = async values => {
    const fields = {
      ...values,
      imageUrl,
    };
    const data = await dispatch(fetchRegister(fields));

    if (!data.payload) {
      alert("Не удалось авторизоваться");
    }

    if ("token" in data.payload) {
      localStorage.setItem("token", data.payload.token);
      setData(data);
    }
  };

  if (data) return <Navigate to={`/login`} />;

  return (
    <Paper className={style.root}>
      <Typography variant="h5" className={style.title}>
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          error={Boolean(errors.username?.message)}
          helperText={errors.username?.message}
          {...register("username", { required: "Укажите имя пользователя" })}
        />
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
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
}

export default Register;
