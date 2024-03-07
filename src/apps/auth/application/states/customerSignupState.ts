import { AsyncState } from "@/common/state/baseState";
import SignupForm from "../forms/signupForm";
import type Customer from "../../data/models/customer";



export default class CustomerSignupState extends AsyncState{

    form = new SignupForm();
    customer?: Customer;

}