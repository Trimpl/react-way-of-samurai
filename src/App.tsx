import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);


<<<<<<< HEAD:src/App.tsx
class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured");
    }
=======

class App extends Component {
>>>>>>> parent of 2cedb1d... 99 - about everything:src/App.js
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
<<<<<<< HEAD:src/App.tsx
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>

                        <Route path='/dialogs'
                               render={() => <SuspendedDialogs /> }/>

                        <Route path='/profile/:userId?'
                               render={() => <SuspendedProfile /> }/>

                        <Route path='/users'
                               render={() => <UsersContainer pageTitle={"Самураи"}/>}/>

                        <Route path='/login'
                               render={() => <LoginPage/>}/>

                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>

                </div>
            </div>
=======
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs'
                                   render={withSuspense(DialogsContainer)}/>

                            <Route path='/profile/:userId?'
                                   render={withSuspense(ProfileContainer)} />

                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>

                            <Route path='/login'
                                   render={() => <LoginPage/>}/>
                        </div>
                    </div>
>>>>>>> parent of 2cedb1d... 99 - about everything:src/App.js
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

<<<<<<< HEAD:src/App.tsx
const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
=======
const SamuraiJSApp = (props) => {
   return <HashRouter >
>>>>>>> parent of 2cedb1d... 99 - about everything:src/App.js
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
