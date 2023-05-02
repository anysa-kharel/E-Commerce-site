import styled from "styled-components"

export const Button=styled.button`
height:5rem;
width:10rem;
background-color: var(--maingreen);
transition: all 0.2s;
border:none;
color:#fff;
font-family:"Poppins";

&:hover{
    background-color: var(--mainbg);
    color:#000;
}

`