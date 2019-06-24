import React, { Component } from 'react'

class Form extends Component {
    state= {
        category: 'general',

    }

    categoryChange = e =>{
            
            this.setState({
                category: e.target.value
            }, () =>{
                this.props.readNews(this.state.category)
            });
            
        }

    render() {
        
        return (
            <div className="searcher row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Noticias por categoría</h2>
                        <div className="input-field col s12 m8 offset-m2">
                            <select
                                onChange={this.categoryChange}>
                                <option value="general">General</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="science">Ciencia</option>
                                <option value="sport">Deporte</option>
                                <option value="health">Vida</option>
                                <option value="technology">Tech</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;