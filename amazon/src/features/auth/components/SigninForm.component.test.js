import { reducer, screen } from "../../../shared/utils/test-utils";
import { validateEmail } from "../../../shared/utils/validation/email";
import SigninFormComponent from "./SigninForm.component";

describe('Sign-in Form', () => {
 let signInButton = null;
    beforeEach(() => {
        reducer(<SigninFormComponent/>);
        signInButton =  screen.getByRole('button', { name : /sign-in/i });
    });
    test('The login button should be in the document', () => {
        expect(signInButton).toBeInTheDocument();
    });
    test('The login button should be initially be disabled', () => {
        expect(signInButton).toBeDisabled();
    });


});