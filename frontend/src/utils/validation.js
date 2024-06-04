import { toast } from "react-toastify";

export const validateRegisterForm = (formData) => {
  const errors = [];
  if (!formData.name.trim()) {
    errors.push("Name is required.");
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!formData.email.trim() || !emailPattern.test(formData.email)) {
    errors.push("Valid email is required.");
  }

  if (!formData.username.trim()) {
    errors.push("Username is required.");
  }

  if (!formData.phoneNumber.trim()) {
    errors.push("Phone number is required.");
  } else if (!/^01[0-9]{9}$/.test(formData.phoneNumber)) {
    errors.push(
      "Phone number is invalid. It should start with 01 and be 11 digits long."
    );
  }

  if (!formData.password || formData.password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  if (formData.password !== formData.confirmPassword) {
    errors.push("Passwords do not match.");
  }

  if (!formData.disabilityType) {
    errors.push("Select the type of disability.");
  }

  if (!formData.gender) {
    errors.push("Gender is required.");
  }

  if (!formData.birthDate) {
    errors.push("Birth date is required.");
  }

  errors.forEach((error) => toast.error(error));

  return errors.length === 0;
};

export const validateLoginForm = (formData) => {
  const errors = [];

  if (!formData.identifier.trim()) {
    errors.push("Username or Email or Phone Number is required.");
  }
  if (!formData.password.trim()) {
    errors.push("Password is required.");
  } else if (formData.password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  errors.forEach((error) => toast.error(error));

  return errors.length === 0;
};

export const validateUpdateForm = (formData) => {
  const errors = [];

  if (!formData.name.trim()) {
    errors.push("Name is required.");
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!formData.email.trim() || !emailPattern.test(formData.email)) {
    errors.push("Valid email is required.");
  }

  if (!formData.address.trim()) {
    errors.push("Address is required.");
  }

  if (!formData.username.trim()) {
    errors.push("Username is required.");
  }

  if (!formData.phoneNumber.trim()) {
    errors.push("Phone number is required.");
  } else if (!/^01[0-9]{9}$/.test(formData.phoneNumber)) {
    errors.push(
      "Phone number is invalid. It should start with 01 and be 11 digits long."
    );
  }

  if (!formData.gender) {
    errors.push("Gender is required.");
  }

  if (!formData.birthDate) {
    errors.push("Birth date is required.");
  }

  // Validate profile image if it exists
  if (
    formData.image instanceof File &&
    !["image/jpg", "image/jpeg", "image/png"].includes(formData.image.type)
  ) {
    errors.push("Profile image must be a jpg, jpeg or png file.");
  }

  errors.forEach((error) => toast.error(error));

  return errors.length === 0;
};

export const validateContactForm = (formData) => {
  let errors = [];

  if (!formData.firstName.trim()) {
    errors.push("First name is required.");
  }
  if (!formData.lastName.trim()) {
    errors.push("Last name is required.");
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!formData.email.trim() || !emailPattern.test(formData.email)) {
    errors.push("Valid email is required.");
  }
  if (!formData.message.trim()) {
    errors.push("Your message is required.");
  }

  errors.forEach((error) => toast.error(error));

  return errors.length === 0;
};
