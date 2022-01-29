import style from "styled-components";

export const Container = style.div`
// box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
 position:relative;
padding:2rem;
border:2px solid #000;
margin:5px auto;
margin-bottom:20px;
background:#fff;
color:#000;
max-width:800px;

}
.profile{
    display:flex
}
     
.details{
    display:flex;
    flex-direction:column;
    padding:1rem;
}

img{
    width:150px;
    padding:5px;
    border-radius: 15px;
}

.location{
padding: 1rem;
}

.btn{
    background:#6633cc;
    color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.7rem;
    font-size: 1rem;
    border-radius:10px;
    margin:5px;
}
`;
