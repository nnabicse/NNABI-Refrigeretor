import React from 'react';
import contextImage from '../../images/popdrillVsContext.png'
import semanticImage from '../../images/sementic.jpeg'
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1 className='blogs-Header'>Popular Blogs</h1>
            <div>
                <h2>What is Context API?</h2>
                <p className='blog-text'>The Context API is a component structure provided by the React framework. Which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.  Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. In situations where we have these types of data, we can use the Context API and we don’t necessarily have to use extra modules.
                    <div className='context-image-container'>
                        <img className='context-image' src={contextImage} alt="" />
                    </div>
                    So If we have a parent component with child components inside it and each child component has further child components, then to pass data from the parent component to the innermost child component we have to pass it through all the parent components of the innermost child component. This is known asprop drilling. This means even if any component is not using that prop, it has to receive that prop to pass it down to the child component. So to avoid this long chain of passing props through each level, we can use context API provided by React. So using Context API, the innermost child can directly access the prop data sent from the parent component just like the connect method of react-redux library.</p>
            </div>
            <div>
                <h2>What is Semantic Tag?</h2>
                <p>Semantic HTML elements are those that clearly describe their meaning in a developer and browser. These elements clearly define its content.
                    <div className='context-image-container'>
                        <img className='context-image' src={semanticImage} alt="" />
                    </div>
                    The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. The pages made with semantic elements are much easier to read. It has greater accessibility. It offers a better user experience.</p>
            </div>
            <div>
                <h2>Diffrence Between Inline, Block and Inline-Block Elements?</h2>
                <p className='blog-text'>Every HTML element is a block in the shape of a rectangle or a square and owns a display property. Unless explicitly specified, all of them have either inline, inline-block with the exception of table and its associated elements.</p>
                <p className='blog-text'> <span className='fw-bold fs-5'>Inline: </span>Inline elements get placed literally in a single line together side by side with different inline or inline-block elements. They will start on a new line only if the same line doesn't have enough space for any more inline elements. There is one caveat when we use inline elements. We cannot apply specific height or width and margin-top or margin-bottom properties. Therefore, without any paddings or side margins, inline elements will be only big as their contents inside.</p>
                <p className='blog-text'> <span className='fw-bold fs-5'>Block: </span> A block-level element is an HTML element that begins a new line on a web page and extends the full width of the available horizontal space of its parent element. It creates large blocks of content like paragraphs or page divisions. In fact, most HTML elements are block-level elements.</p>
                <p className='blog-text'><span className='fw-bold fs-5'>Inline-Block: </span>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. They does not add a line-break after the element, so the element can sit next to other elements. It is used to display an element as an inline-level block container.</p>
            </div>
        </div>
    );
};

export default Blogs;