import {IRoute} from "../types/Types";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import AuthorsPage from "../pages/AuthorsPage";
import AboutPage from "../pages/AboutPage";

export const routes: IRoute[] = [
  {
    path: '/about',
    component: AboutPage,
    exact: true,
    protected: false
  },
  {
    path: '/books',
    component: BooksPage,
    exact: true,
    protected: false
  },
  {
    path: '/authors',
    component: AuthorsPage,
    exact: true,
    protected: false
  },
  {
    path: '/',
    component: HomePage,
    exact: false,
    protected: false
  },
  {
    path: '*',
    component: HomePage,
    exact: false,
    protected: false
  }
]
