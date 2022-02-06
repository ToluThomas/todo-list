import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./redux/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
