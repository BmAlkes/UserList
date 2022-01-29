import style from "styled-components";

export const Container = style.div`
border:3px solid #FFF;
background:#6633cc;
color:#FFF;
max-width:600px;
margin:0 auto;
margin-top:4rem;

form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:1rem;
    
    label{
        font-size:1.3rem;
        padding:0.5rem;
        color:#fff;
    
    }
    input{
        width:60%;
        margin:5px 0;
        margin: 0px auto;
        padding:1rem;
    }
    }
    
    
    button{
        background-color:#fff;
        color: rgba(102, 51, 204, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 0.5rem;
        font-size: 1rem;
        border-radius:10px;
        margin:30px;
        width:120px;
    }

    h2{
        text-align:center;
        font-size:2rem;
        font-weight:bold;
        letter-spacing: 0.2rem;
        margin:10px;
    }
}


`;
