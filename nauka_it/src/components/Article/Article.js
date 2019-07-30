import React from 'react';

import {onGetArticle} from '../../actions/index';
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
        let imgSrc = this.state.article.imgUrl;
        return (
            <div style={ArticleStyles.container}>
                <h2 style={{marginBottom: '15px'}}>{this.state.article.title}</h2>
                <div style={ArticleStyles.line} />
                <div style={ArticleStyles.shortcut}>
                    {this.state.article.imgUrl ? <img src={require(`../../assets/images/${imgSrc}`)} alt='zdj' style={ArticleStyles.image}></img> : null}
                    {this.state.article.shortcut}
                </div>
                <div style={{clear: 'both'}} />
                <div style={ArticleStyles.description} dangerouslySetInnerHTML={{__html: this.state.article.html}} />
            </div>
        );
    }
}

export default Article;