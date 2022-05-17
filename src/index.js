import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css';
function BookList(){
    return (
        <section className='booklist'> 
            <Book/> 
            <Book/> 
            <Book/> 
            <Book/> 
            <Book/> 
        </section>
    );
}

const Book = () =>{
    return <article className='book'>
        <Image></Image>
        <Title></Title>
        <Author></Author>
    </article>
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL127_SR127,127_.jpg" alt=""/>
const Title = () => <h1>Verity</h1>
const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}} >Colleen Hoover</h4>


ReactDOM.render(<BookList/>,document.getElementById('root'));
 