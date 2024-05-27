import { toast } from "react-toastify";

export const validateRegisterForm = (formData) => {
  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.address.trim() ||
    !formData.username.trim() ||
    !formData.phoneNumber.trim() ||
    !formData.password.trim() ||
    !formData.confirmPassword ||
    !formData.gender ||
    !formData.birthDate ||
    !formData.disabilityType
  ) {
    toast.error("Please fill in all fields.", { theme: "colored" });
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    toast.error("Please enter a valid email.", { theme: "colored" });
    return false;
  }
  if (formData.password.length < 6) {
    toast.error("Password must be at least 6 characters long.", {
      theme: "colored",
    });
    return false;
  }
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match.", { theme: "colored" });
    return false;
  }
  return true;
};

export const validateLoginForm = (formData) => {
  if (!formData.identifier.trim()) {
    toast.error("Username or Email or Phone Number is required.", {
      theme: "colored",
    });
    return false;
  }
  if (!formData.password.trim()) {
    toast.error("Password is required.", { theme: "colored" });
    return false;
  } else if (formData.password.length < 6) {
    toast.error("Password must be at least 6 characters long.", {
      theme: "colored",
    });
    return false;
  }
  return true;
};
