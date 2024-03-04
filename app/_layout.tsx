import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { fonts } from '../constants/fonts';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
    const [fontsLoaded, fontError] = useFonts(fonts);

    useEffect(() => {
        if (fontsLoaded || fontError) {
            // Hide the spash screen after the fonts have loaded or an error has occurred and the UI is ready
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // Prevent rendering until the font has loaded or an error has occurred
    if (!(fontsLoaded || fontError)) return null;

    return (
        <Slot />
    )
}

export default AppLayout;
