import { useState } from "react";
import Vibeflow_icon from '../assets/images/Vibeflow_icon1.png';
import Vibeflow from '../assets/images/Vibeflow.png';
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import { makeUnauthenticatiatedPOSTRequest} from "../utils/serverHelpers";
import {useCookies} from "react-cookie";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
        const data = {email, password};
        const response = await makeUnauthenticatiatedPOSTRequest(
            "/auth/login",
            data
        );
        if(response && !response.err){
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30)
            setCookie("token", token, {path:"/", expires: date});
            alert("Success");
            navigate("/home");
        }else{
            alert("Failure");
        }
    };
    return(
        <div className="bg-app-black w-full h-full flex flex-col items-center overflow-auto">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <div>
                    <div className="px-3"><img src={Vibeflow_icon} alt="vibeflow icon" width={90}/></div>
                    <img src={Vibeflow} alt="vibeflow" width={125}/>
                </div>
            </div>
        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
            {/* I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
            <div className="text-white font-bold mb-4 text-lg"> To continue, log in to Spotify.</div>
            <TextInput 
                label="Email address or username" 
                placeholder="Email address or username"
                className="my-6"
                value={email}
                setValue={setEmail}
            />
            <PasswordInput 
                label="Password" 
                placeholder="Password"
                value={password}
                setValue={setPassword}
            />
            <div className="w-full flex items-center justify-end my-8">
                <button className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 p-3 px-10 rounded-full" 
                    onClick={(e) => {
                        e.preventDefault();
                        login();
                    }}
                >
                    LOG IN
                </button>
            </div>
            <div className=" w-full border border-solid border-gray-300"></div>
            <div className="text-white my-6 font-semibold text-lg">
                Don't have an account?
            </div>
            <div className="border border-gray-500  text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
            </div>

        </div>
    </div>
    );
};
 
export default LoginComponent;