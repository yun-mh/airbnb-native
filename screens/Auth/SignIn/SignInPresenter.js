import React from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import DismissKeyboard from "../../../components/DismissKeyboard";
import Input from "../../../components/Auth/Input";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              stateFn={setEmail}
            />
            <Input
              value={password}
              isPassword={true}
              placeholder="Password"
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={"Sign In"} accent={true} onPress={handleSubmit} />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
