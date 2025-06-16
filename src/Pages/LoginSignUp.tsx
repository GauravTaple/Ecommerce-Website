import { useForm } from "react-hook-form";
import "./CSS/LoginSignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/Hooks/global-hooks";
import { setLoginResponse } from "../Redux/Slices/loginSlice";

interface TLogin {
    name: string;
    email: string;
    password: string;
    agree: string;
}
//----------------------------------------------------------------------
export const LoginSignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<TLogin>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (payload: TLogin) => {
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            sessionStorage.setItem("token", JSON.stringify(response.data));
            dispatch(setLoginResponse(response.data));
            alert("Login Success");
            navigate('/shop');
        } catch (error) {
            console.log(error, "error------");
            alert("Bad Credentials")
        }
    }

    return (
        <div className='loginsignup'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="loginsignup-container">
                    <h1>Login</h1>
                    <div className="loginsignup-fields">
                        <input
                            type="text"
                            placeholder='Your Name'
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="error">{(errors.name.message as string)}</p>}
                        <input
                            type="email"
                            placeholder='Email Address'
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="error">{errors.email.message as string}</p>}
                        <input
                            type="password"
                            placeholder='Password'
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className="error">{errors.password.message as string}</p>}
                    </div>
                    <button >Login</button>
                    <p className="loginsignup-login">Create an account? <span style={{ cursor: 'pointer' }}>sign-up here</span></p>
                    <div className="loginsignup-agree">
                        <input
                            type="checkbox"
                            {...register("agree", { required: true })}
                            style={{ cursor: 'pointer', transform: 'scale(1.3)' }}
                        />
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div>
                    {errors.agree && <p className="error" style={{ marginTop: 2 }}>You must agree before continuing.</p>}
                </div>
            </form>
        </div>
    )
}
