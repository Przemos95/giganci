import React from 'react';

import ArticleStyles from '../Styles/ArticleStyles';
import {Link} from 'react-router-dom';

const Article = (props) => {
    return (
        <Link to={props.url} style={ArticleStyles.container} className='article' onClick={props.onArticleClick}>
            <img src={props.imgSrc} alt='zdj' style={ArticleStyles.image}></img>
            <div style={ArticleStyles.header}>{props.title}</div>
            <div style={ArticleStyles.line} />
            <div style={ArticleStyles.description}>{props.description}</div>
        </Link>
    );
};

export default Article;