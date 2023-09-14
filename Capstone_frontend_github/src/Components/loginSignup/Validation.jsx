
export default function Validation(values){
    let errors = {}
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email format";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } 
    // else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+/.test(values.password)) {
    //     errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    // }
    
    return errors;
}