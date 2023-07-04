import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import {Helmet} from 'react-helmet-async';
import React from "react";

function NotFoundScreen () : JSX.Element {

    return (
        <div className="page page--gray">
            <Helmet>
                <title>Страница не найдена</title>
            </Helmet>
            <div className="onlineshop-app__blueline" />
            <div className="page--not_found" style={{textAlign: 'center', paddingTop: 50}}>
                <h1>404. Page not found</h1>
                <Link to={AppRoute.Main}>Вернуться на главную</Link>
            </div>
        </div>
    );
};

export default NotFoundScreen;