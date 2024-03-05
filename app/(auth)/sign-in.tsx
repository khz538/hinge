import Spacer from "@/components/spacer";
import Type from "@/components/type";
import VideoBackground from "@/components/video-background";
import { colors } from "@/constants/colors";
import { HingeLogo } from "@/constants/icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { A } from '@expo/html-elements';
import { links } from "@/constants/links";
import Btn from "@/components/btn";

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

    return (
        <VideoBackground source={require('@/assets/videos/background.mp4')}>
            <SafeAreaView style={styles.content}>
                <Spacer size={130} />
                <View style={styles.branding}>
                    <HingeLogo fill={colors.white} width={140} height={70} />
                    <Spacer size={10} />
                    <Type
                        variant="titleBold"
                        color="white"
                        textAlign="center"
                    >
                        Designed to be deleted.
                    </Type>
                </View>
                <Type variant="caption" color="white">
                    By tapping "Sign in" / "Create account", you agree to our
                    <A href={links.terms}>
                        <Type variant="captionBold" color="white" textDecorationLine="underline">Terms of Service</Type>.
                    </A>
                    Learn how we process your data in our
                    <A href={links.privacy}>
                        <Type variant="captionBold" color="white" textDecorationLine="underline">Privacy Policy</Type> and
                    </A>
                    <A href={links.policy}>
                        <Type variant="captionBold" color="white" textDecorationLine="underline">Cookie Policy</Type>.
                    </A>
                </Type>
                {!isSigningIn && <Btn backgroundColor="primaryDark">
                    <Type variant="bodyBold" color="white">
                        Create Account
                    </Type>
                </Btn>}
                <Spacer size={10} />
                <Btn backgroundColor="transparent" onPress={handleSignIn}>
                    <Type variant="bodyBold" color="white">
                        Sign In
                    </Type>
                </Btn>
            </SafeAreaView>
        </VideoBackground>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({});
