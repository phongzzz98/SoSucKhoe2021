// import { accessTokenSelector } from "../features/Authentication/reducers/LoginReducer"
import { Route, Redirect, RouteProps } from "react-router-dom"
import { RouteComponentProps, StaticContext } from "react-router";
import { getAccessToken } from "../utils/localStorage";

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any, StaticContext, unknown>> | React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const accessToken = getAccessToken()
    return (
        <Route {...rest} render={(props) => (
            accessToken
                ? <Component {...props} />
                : <Redirect to='/login' />)}
        />
    )
}
export default PrivateRoute