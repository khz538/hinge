import VideoBackground from "@/components/video-background";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SignInScreen = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleSignIn = () => {
        setIsSigningIn(prev => !prev);
    };

    const handleSignInWithPhoneNumber = () => {
        router.push("./phone-number"); // Updated argument type
    };

    const handleSignInWithFacebook = () => {
        return
    }

    const handleSignInWithApple = () => {
        return
    }

    return <VideoBackground></VideoBackground>
}

export default SignInScreen;

const styles = StyleSheet.create({});
