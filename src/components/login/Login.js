import {Field, reduxForm} from "redux-form";
import {Input} from "../formControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import c from "./Login.module.css";



const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='login' name={'email'} component={Input} validate={[requiredField]}/></div>
            <div><Field placeholder='password' name={"password"} component={Input} validate={[requiredField]} type="password"/></div>
            <div><Field type='checkbox' name={"rememberMe"} component={"input"}/> Запомнить меня</div>
            <div>
                <button>Login</button>
            </div>
            {props.error &&
                <div className={c.error}>{props.error}</div>}
        </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) =>{
    const onSubmit = (formData)=>{
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Redirect to='/profile' />
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


let mapStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunk})(Login);