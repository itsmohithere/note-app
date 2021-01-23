import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../modules/login/Login";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
