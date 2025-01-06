import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^\S+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
  
    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
  
    // Validate Username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Username cannot contain spaces";
    }
  
    // Validate Password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, with one uppercase letter, one lowercase letter, one digit, and one special character";
    }
  
    // Validate Confirm Password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleRegister = () => {
    if (validateForm()) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>

      <input
        style={{
          ...styles.input,
          borderColor: errors.email ? "red" : "#ccc",
        }}
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      {errors.email && <p style={styles.errorText}>{errors.email}</p>}

      <input
        style={{
          ...styles.input,
          borderColor: errors.name ? "red" : "#ccc",
        }}
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <p style={styles.errorText}>{errors.name}</p>}

      <input
        style={{
          ...styles.input,
          borderColor: errors.username ? "red" : "#ccc",
        }}
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
      />
      {errors.username && (
        <p style={styles.errorText}>{errors.username}</p>
      )}

      <input
        type="password"
        style={{
          ...styles.input,
          borderColor: errors.password ? "red" : "#ccc",
        }}
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      {errors.password && <p style={styles.errorText}>{errors.password}</p>}

      <input
        type="password"
        style={{
          ...styles.input,
          borderColor: errors.confirmPassword ? "red" : "#ccc",
        }}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
      {errors.confirmPassword && (
        <p style={styles.errorText}>{errors.confirmPassword}</p>
      )}

      <button style={styles.button} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    maxWidth: 300,
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  button: {
    padding: 10,
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
};

export default Register;
