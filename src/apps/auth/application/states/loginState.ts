import LoginForm from "../forms/loginForm"
import type AuthenticationStatus from "../../data/models/authenticationStatus";
import { AsyncState } from "@/common/state/baseState";


export default class LoginState extends AsyncState{

	public form: LoginForm = new LoginForm();
    public authenticationStatus?: AuthenticationStatus;

}