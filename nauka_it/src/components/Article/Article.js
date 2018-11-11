import React from 'react';

import {onGetArticle} from '../../store/Article';
import {ArticleStyles} from './ArticleStyles';

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            article: {}
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({id: id});

        onGetArticle(id).then(response => {
            this.setState({article: response.data});
        });
    }

    render() {
        return (
            <div style={ArticleStyles.container}>
                <h2 style={{marginBottom: '15px'}}>{this.state.article.title}</h2>
                <div style={ArticleStyles.line} />
                <div style={ArticleStyles.shortcut}>
                    {this.state.article.shortcut}
                </div>
                <div style={ArticleStyles.description} dangerouslySetInnerHTML={{__html: this.state.article.html}} />
            </div>
        );
    }
}

export default Article;