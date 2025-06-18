export const validateFormData = (formData) => {
    const { name, email, password } = formData;

    if (!email || !password) {
        return { isValid: false, message: 'Email and password are required.' };
    }

    if (name && name.length < 3) {
        return { isValid: false, message: 'Name must be at least 3 characters long.' };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { isValid: false, message: 'Invalid email format.' };
    }

    const passwordPattern = /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if (!passwordPattern.test(password)) {
        return { isValid: false, message: 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.' };
    }

    return { isValid: true, message: '' };
}