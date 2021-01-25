import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <Field component={Input} validate={[required]} name='email'
                 placeholder='Введите е-майл' type="text"/>
        </div>
        <div>
          <Field component={Input} name='password' validate={[required]}
                 placeholder='Введите пароль' type="password"/>
        </div>
        <div>
          <Field component='input' name='rememberMe' type="checkbox"/>Запомнить
        </div>
        {error && <div className={style.error}>{error}</div>}
        {captchaUrl && <img src={captchaUrl}  alt='captcha'/>}
        {captchaUrl && <div>
          <Field component={Input} name='captcha' validate={[required]}
                 placeholder='Введите код с картинки' type="text"/>
        </div>}
        <div>
          <button>Войти</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if(props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1 className={style.login}>Login</h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);