import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./src/navigation/HomeNavigator";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./src/redux/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
