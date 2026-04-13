'use client';

//Question 8: Add Subscribe functionality so users can attempt to authenticate from the React client. After a subscribe attempt the page will display a "Success" or "Failure" Message

import React, { useState } from "react";

export default function Subscribe() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState<Record<string, string>>({});

    if (!username.trim()) new Error("Username is required");
    if (!password.trim()) new Error("Password is required");
    if (password !== confirmPassword) new Error("Passwords do not match");

    setError({ username: "Username is required", password: "Password is required", confirmPassword: "Passwords do not match" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        
    
}