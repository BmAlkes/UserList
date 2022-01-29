import style from "styled-components";

export const Container = style.div`

position:absolute;
top:0;
left: 100% - 60%
display: flex;
align-items:center;
z-index:9999;
width:600px;
height:600px;
margin: 30px;
margin-left: 120px;

@media (max-width: 768px){
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:420px;
    margin: 0 auto;
    
}




form{
    background-color:rgba(102, 51, 204, 0.9);
    display:flex;
    flex-direction:column;
justify-content:center;
align-items:center;


label{
    font-size:1.3rem;
    padding:0.5rem;
    color:#fff;

}
input{
    width:60%;
    margin:5px 0;
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
`;
