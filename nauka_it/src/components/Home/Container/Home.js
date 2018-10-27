import React from 'react';
import _ from 'lodash';

import Article from '../Presentational/Article';
import {onGetAllArticles} from '../../../store/Article';

class Home extends React.Component {   
    constructor() {
        super();
        this.state = {
            articles: []
        };
        this.getArticles();

        this.getArticles = this.getArticles.bind(this);
    }

    getArticles = () => {
        onGetAllArticles()
            .then(response => {
                let articles = response.data.slice();
                this.setState({articles: articles});
            });
        
    };

    render() {
        let articleBody = (
            this.state.articles.map((row, index) => (
                <Article 
                    key={_.uniqueId('article_')}
                    title={row.title}
                    description={row.description}
                    imgSrc={row.imgUrl}
                    url={'/article/' + row.id} />
            ))
        );
        return(
            <div>
                {articleBody}
                <div style={{clear: 'both'}} />
            </div>
        );
    }
}

export default Home;