import styled from "styled-components";

export const MainHead = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    background-color: black;
    margin-left: 0px;
    color: white;
    font-size: 3vh;
    display: flex;
    flex-wrap:wrap;
    align-items: center;

    .Logo{
        margin-left:5vw;
        font-size:4vh;
    }
    .logo1{
        color:gray;
    }
    .buttons{
        margin-left:40vw;
        display: flex;
        gap:3vw;
    }
    .LogOut{
        padding:10px;
        display:flex;
        margin-left:4vw;
        align-items:center;
    }
    .LogOut svg{
        font-size:4vh;
        padding-top:1vw;
    }
    .LogOut span{
        margin-top:5vw;
        font-size:3vh;
    }
    .LogOut a:hover{
        text-decoration:none;
        color:grey;
        translate: 0 -5px;
        transition:0.1s;
    }
`


