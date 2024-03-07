import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type CustomerSignupState from "../states/customerSignupState";
import CustomerRepository from "../../data/repositories/customerRepository";
import Customer from "../../data/models/customer";



export default class CustomerSignupViewModel extends AsyncViewModel<CustomerSignupState>{

    private repository = new CustomerRepository();

    async signup(){
        await this.asyncCall(
            async () => {
                await this.state.form.validate(true);
                const customer = new Customer(
                    null,
                    this.state.form.phoneNumber.getValue()!,
                    `${this.state.form.firstName.getValue()!} ${this.state.form.lastName.getValue()!}`,
                    this.state.form.email.getValue()!
                );
                await this.repository.signup(customer, this.state.form.password.getValue()!);
            }
        );
    }

}