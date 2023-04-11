import React from "react";
import Navigator from "./components/Navigator";
import { LoginProvider } from "./context/LoginContext";

export default function App() {
	return (
		<LoginProvider>
			<Navigator />
		</LoginProvider>
	);
}