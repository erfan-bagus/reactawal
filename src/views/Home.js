function Home(params) {
    console.log(params.style)
    return(
        <div>
            <h1 style={params.style}>Program React 1</h1>
        </div>
    );
}

// import React from "react";

// class Home extends React.Component {
//     render() {
//         return <div>
//             <h1>Program React 1</h1>
//         </div>;
//     }
// }

export default Home;