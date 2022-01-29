import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    color: white;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: "Spectral", Georgia, sans-serif;
    font-family: var(--type-first);
    max-width: 1080px;
    width: 900px;
    margin: 0px auto;
    background: #6633cc;
    
}

h1,
h2,
h3,
h4 {
    margin: 0px;
}

ul,
li {
    list-style: none;
    padding: 0px;
    margin: 0px;
}
img {
    display: block;
    max-width: 100%;
}

a{
    text-decoration: none;
    color: #fff;
    cursor: pointer;
}

.header{
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px  rgba(256, 256, 256, 0.9);
    width: 80%;
    margin: 0 auto;
    top: 0px; 

}

.header button{
    background:#6633cc;
    color: #fff;
    border: 1px solid rgba(256, 256, 256, 0.9);
    padding: 1.2rem;
    font-size: 1rem;
    border-radius:10px;
    cursor: pointer;

}

`;
