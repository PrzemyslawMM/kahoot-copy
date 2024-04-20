"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.main`
  font-family: Montserrat, sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 48px;

  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

const HomePage = (): React.JSX.Element => {
  return (
    <Container>
      <h1>Kahoot copy</h1>
      <ImageContainer>
        <Image alt="" src="next.svg" fill />
      </ImageContainer>
    </Container>
  );
};

export default HomePage;
