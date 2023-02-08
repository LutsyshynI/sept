import {Route, Routes} from "react-router-dom"
import {AboutPage, HomePage, NotFoundPage, PostDetPage, PostsPage, UsersPage} from "./pages";

import './App.css';

import {MainLayaut} from "./loyauts/MainLayaut/MainLayaut";


function App() {
    return (
        <div>
            <Routes>
                < Route path={'/'} element={<MainLayaut/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetPage/>}/>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
