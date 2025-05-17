import validator from  'validator';

export const registerValidation = (data)=>{

    const errors = [];

    const {userRole, email, password} = data;

    if(!userRole || (userRole !== 'admin' && userRole !== 'user')){
        errors.push("User role is required and must be either 'admin' or 'user'.");
    }

     //User email validation
     if (!email || validator.isEmpty(email)) {
        errors.push("Email is required");
    }
    if (!validator.isEmail(email)) {
        errors.push("Email is not valid one");
    }
    if (email.length > 100) {
        errors.push("Email is too long");
    }

    // Password validation
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password || validator.isEmpty(password)) {
        errors.push("Password is required");
    }
    if (!passwordRegex.test(password)) {
        errors.push("Password is not strong");
    }

    if(errors.length > 0){
        return {
            success: false,
            errors: errors
        };
    }

    return {
        success: true,
        errors: null
    };

}

export const loginValidation = (data)=>{

    const errors = [];

    const {userRole, userName, password} = data;

    if(!userRole || (userRole !== 'admin' && userRole !== 'user')){
        errors.push("User role is required and must be either 'admin' or 'user'.");
    }

     //User email validation
     if (!userName || validator.isEmpty(userName)) {
        errors.push("Username is required");
    }
    // if (!validator.isEmail(email)) {
    //     errors.push("Email is not valid one");
    // }
    // if (email.length > 100) {
    //     errors.push("Email is too long");
    // }

    // Password validation
    // const passwordRegex =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    // if (!password || validator.isEmpty(password)) {
    //     errors.push("Password is required");
    // }
    // if (!passwordRegex.test(password)) {
    //     errors.push("Password is not strong");
    // }

    if(!password || validator.isEmpty(password)){
        errors.push("Password is required");
    }

    if(errors.length > 0){
        return {
            success: false,
            errors: errors
        };
    }

    return {
        success: true,
        errors: null
    };

}