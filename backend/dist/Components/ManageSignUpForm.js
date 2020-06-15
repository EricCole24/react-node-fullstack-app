"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const react_toastify_1 = require("react-toastify");
const history_1 = require("history");
const SignUpForm_1 = __importDefault(require("./SignUpForm"));
const ManageSignUp = (props) => {
    const [registrationInputData, setInputtext] = react_1.useState({
        email: "",
        username: "",
        password: "",
        cpassword: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
    });
    const history = history_1.createBrowserHistory({ forceRefresh: true });
    const handleChange = (event) => {
        let updatedRegistrationData = Object.assign(Object.assign({}, registrationInputData), { [event.target.name]: event.target.value });
        setInputtext(updatedRegistrationData);
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let emailError = "";
        let usernameError = "";
        let passwordError = "";
        let confirmPasswordError = "";
        const url = "http://localhost:5000/signupform";
        if (!registrationInputData.email) {
            emailError = "invalid email";
        }
        if (!registrationInputData.username) {
            usernameError = "invalid username";
        }
        if (!registrationInputData.password) {
            passwordError = "invalid password";
        }
        if (!registrationInputData.cpassword) {
            confirmPasswordError = "passwords must match";
        }
        if (registrationInputData.password.length > 0 &&
            registrationInputData.password.length < 5) {
            passwordError = "length of password must be 8 characters long";
        }
        if (registrationInputData.password !== registrationInputData.cpassword) {
            confirmPasswordError = "Password must match confirm password";
        }
        if (emailError || usernameError || passwordError || confirmPasswordError) {
            setInputtext({
                email: "",
                username: "",
                password: "",
                cpassword: "",
                emailError: emailError,
                usernameError: usernameError,
                passwordError: passwordError,
                confirmPasswordError: confirmPasswordError,
            });
        }
        else {
            try {
                console.log("boooy ");
                let response = yield axios_1.default({
                    method: "post",
                    url: url,
                    data: JSON.stringify(registrationInputData),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }).then((response) => {
                    if (response.statusText === "OK") {
                        console.log(" ooooooo ", " " + response.data);
                        react_toastify_1.toast.success(response.data);
                        clearState();
                        setTimeout(() => {
                            return history.push("/");
                        }, 3000);
                    }
                }, (error) => {
                    console.log("ogogogog ", error);
                    emailError = "email already exist";
                    if (error) {
                        console.log("dbk ", emailError);
                        return setInputtext({
                            email: "",
                            username: "",
                            password: "",
                            cpassword: "",
                            emailError: emailError,
                            usernameError: "",
                            passwordError: "",
                            confirmPasswordError: "",
                        });
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    });
    const clearState = () => {
        //clears the input field
        return setInputtext({
            email: "",
            username: "",
            password: "",
            cpassword: "",
            emailError: "",
            usernameError: "",
            passwordError: "",
            confirmPasswordError: "",
        });
    };
    return (<>
      <SignUpForm_1.default inputText={registrationInputData} onChange={handleChange} onSubmit={handleSubmit}/>
    </>);
};
exports.default = ManageSignUp;
