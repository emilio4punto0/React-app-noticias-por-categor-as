import React from 'react';

const New = ({news}) => { 
   
    const { urlToImage, url, title, description, source} = news;
    
    const image = (urlToImage) ? 
    <div className="card-image">
        <img src={urlToImage} alt={title}/>
        <span className="card-title">{source.name}</span>
    </div>
    :null;

    return(
    <div className=" col s12 m6 l4">
        <div className="card large">
            {image}
            <div className="card-content">
                <h3>{title}</h3>
                <p className="">{description}</p>
            </div>
            <div className="card-action">
                <a href={url} className="waves-effect waves-light btn">
                    Ver Noticia Completa
                </a>
            </div>
        </div>
    </div>
)
}

export default New;