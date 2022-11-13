import React from 'react';
import'./Quosion.css'

const Question = () => {
    return (
        <div className='quesion'>
            <h2>What is React and how its work?</h2>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.</p>

            <h2>What is the difference between prop and state in react?</h2>
            <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>

            <h2>Why useEffect use in React?</h2>
            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>


        </div>
    );
};

export default Question;