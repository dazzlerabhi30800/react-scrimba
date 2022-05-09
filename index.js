// ReactDOM.render(<b>Hello we are writing this in react</b>, document.getElementById('root'));

// createRoot(<p>Hello we are again writing this in react!</p>)

// ReactDOM.render(
//     <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>

// ,document.querySelector('#root'))

// function Navbar() {
//     return (
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Navbar</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Dropdown
//                             </a>
//                             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li><a class="dropdown-item" href="#">Action</a></li>
//                                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                                 <li><hr class="dropdown-divider" /></li>
//                                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link disabled">Disabled</a>
//                         </li>
//                     </ul>
//                     <form class="d-flex">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button class="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// };
// function MainContent() { //     return ( //         <h1 class="m-3">This is the main content!</h1> //     )
// }

// ReactDOM.render(
//     <div>
//     <Navbar />
//     {/* <MainContent /> */}
//     </div>
// , document.querySelector('#root'));

// const root = document.querySelector('#root');
// const heading = document.createElement("h1");
// heading.textContent = "This is the heading created in vanilla JS";
// // heading.classList.add('header');
// heading.className = 'header m-3';
// root.append(heading);

// const element = <h1 className="m-3">This is JSX</h1>
// console.log(element);

// const navbar = (
//     <nav className="p-3">
//         <h1>Logo</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(
//    navbar
//    ,
//     document.querySelector('#root'));
// import React from 'react';
// import ReactDOM from 'react-dom';

// const root = document.querySelector('#root');

// const navbar =  (

//     <nav>
//     <h1 className="logo">Navbar Logo</h1>
//     <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact</li>
//     </ul>
//     </nav>
// )

// const containerBox = (

//     <div className="container">
//         <h2 className="heading">
//             This is the first heading in this JSX.
//         </h2>
//         <p>
//             This is the paragraph i am using
//         </p>
//     </div>

// )

// // root.append(JSON.stringify(navbar));
// ReactDOM.render(
//     <div>
//         {navbar}
//         {containerBox}
//     </div>,
//     document.querySelector('#root')
// )

// import React from 'react'
// import ReactDom from 'react-dom'

function Joke(props) {
    console.log(props.comments[0].author);
  return (
    <div className="m-4">
      {props.script && <h5>{props.script}</h5>}
      {/* <h5 style={{display : props.script ? "block" : "none"}}>{props.script}</h5> */}
      <p>{props.punchline}</p>
      <span>Upvotes 👍 {props.upvotes} </span>
      <span>Downvotes 👎 {props.downvotes} </span>
      {props.isPun && <h2>👌</h2>}
      <p>{props.comments[0].author}</p>
      <hr />
    </div>
  );
}

// console.log(comments[0].comment);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Joke
      isPun={true}
      upvotes={5}
      downvotes={6}
      script="I got my daughter a fridge for her birthday!"
      punchline="I can't wait to see her face light up when she opens it."
      comments = {[{author: "Ruskin Bond", body: "", title: ""}]}
    />
    <Joke
      isPun={false}
      upvotes={7}
      downvotes={3}
      script="How did the hacker escape the police?"
      punchline="He just ransomware"
      comments = {[{author: "Ruskin Bond", body: "", title: ""}]}
    />
    <Joke
      isPun={false}
      upvotes={10}
      downvotes={2}
      script="Why don't pirates travel on mountain roads?"
      punchline="Scurvy"
      comments = {[{author: "Ruskin Bond", body: "", title: ""}]}
    />
    <Joke
      isPun={true}
      upvotes={14}
      downvotes={4}
      script="Why do bees stay in the hives in the winter?"
      punchline="Swarm"
      comments = {[{author: "Ruskin Bond", body: "", title: ""}]}
    />
    <Joke
      isPun={true}
      upvotes={3}
      downvotes={20}
      script="What's the best thing about the switzerland?"
      punchline="I don't know, but the flag is a big plus!"
      comments = {[{author: "Ruskin Bond", body: "", title: ""}]}
    />
  </div>
);
