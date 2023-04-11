import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import Passwordless, { 
    createCode, resendCode, consumeCode 
} from 'supertokens-web-js/recipe/passwordless'

SuperTokens.init({
    appInfo: {
        apiDomain: "https://api.chopmoni.org",
        apiBasePath: "/api/v1",
        appName: "Chopmoni",
    },
    recipeList: [
        Session.init(),
        Passwordless.init(),
    ],
});

export async function sendOTP(phoneNumber) {
    try {
        let response = await createCode({
            phoneNumber
        });
        console.log(response);
        return response;
        /**
         * For phone number, use this:
            
            let response = await createCode({
                phoneNumber: "+1234567890"
            });
         
        */

        // OTP sent successfully.
        window.alert("Please check your email for an OTP");
    } catch (err) {
        if (err.isSuperTokensGeneralError === true) {
            // this may be a custom error message sent from the API by you,
            // or if the input email / phone number is not valid.
            window.alert(err.message);
        } else {
            window.alert("Oops! Something went wrong.");
        }
    }
}

export async function resendOTP() {
    try {
        let response = await resendCode();

        if (response.status === "RESTART_FLOW_ERROR") {
            // this can happen if the user has already successfully logged in into
            // another device whilst also trying to login to this one.
            window.alert("Login failed. Please try again");
            window.location.assign("/")
        } else {
            // OTP resent successfully.
            window.alert("Please check your email for the OTP");
        }
    } catch (err) {
        if (err.isSuperTokensGeneralError === true) {
            // this may be a custom error message sent from the API by you.
            window.alert(err.message);
        } else {
            window.alert("Oops! Something went wrong.");
        }
    }
}

export async function handleOTPInput(otp) {
    try {
        let response = await consumeCode({
            userInputCode: otp
        });

        if (response.status === "OK") {
            if (response.createdNewUser) {
                return { newUser: true }
            } else {
                return { newUser: false }
            }
        } else if (response.status === "INCORRECT_USER_INPUT_CODE_ERROR") {
            // the user entered an invalid OTP
            // window.alert("Wrong OTP! Please try again. Number of attempts left: " + (response.maximumCodeInputAttempts - response.failedCodeInputAttemptCount));
            throw Error("Wrong OTP! Please try again. Number of attempts left: " + (response.maximumCodeInputAttempts - response.failedCodeInputAttemptCount))
        } else if (response.status === "EXPIRED_USER_INPUT_CODE_ERROR") {
            // it can come here if the entered OTP was correct, but has expired because
            // it was generated too long ago.
            // window.alert("Old OTP entered. Please regenerate a new one and try again");
            throw Error("Old OTP entered. Please regenerate a new one and try again");
        } else {
            // this can happen if the user tried an incorrect OTP too many times.
            // window.alert("Login failed. Please try again");
            window.location.assign("/")
        }
    } catch (err) {
        if (err.isSuperTokensGeneralError === true) {
            // this may be a custom error message sent from the API by you.
            throw Error(err.message);
        } else {
            throw Error("Oops! Something went wrong.");
        }
    }
}

export async function doesSessionExist() {
   return Session.doesSessionExist()
}

export async function logout() {
    await Session.signOut(); 
    window.location.href = "/";
}