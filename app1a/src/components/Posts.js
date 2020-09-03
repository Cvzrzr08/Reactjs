import React, { Component } from 'react';

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        //peticion a servidor metodo fetch
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json(); //convirtiendo a json 
        console.log(data);
        
        //actualizando estado, ya teniendo los datos
        this.setState({
            posts: data
        });
    }
    
    render() {
        return (
            
            <div>
                <h1>Public</h1>
                {
                    this.state.posts.map(post1 => {
                        //diferenciando post por medio de id
                        return <div key={post1.id}> 
                            <h1>{post1.title}</h1>
                            <p>{post1.body}</p>
                        </div>
                })
                
                }

            
            </div>
        );
    }
}
