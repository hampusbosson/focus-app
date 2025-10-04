import { Tabs } from "expo-router"

const _layout = () => {
    return (
        <Tabs screenOptions={{ tabBarStyle: { display: "none" } }} > 
            <Tabs.Screen name="index" options={{ headerShown: false, }} />
        </Tabs>
    )
}

export default _layout