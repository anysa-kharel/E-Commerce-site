import styled from "styled-components"

export const Button=styled.button`
height:5rem;
width: auto;
background-color: var(--maingreen);
transition: all 0.2s;
border:none;
color:#fff;
font-family:"Poppins";
padding: 0 2rem;

&:hover{
    background-color: var(--mainbg);
    color:#000;
    border: 1px solid var(--maingreen);
}

`