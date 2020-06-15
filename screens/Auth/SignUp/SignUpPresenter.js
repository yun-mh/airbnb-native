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

export default ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={firstName}
              placeholder="First Name"
              autoCapitalize="words"
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="words"
              stateFn={setLastName}
            />
            <Input
              keyboardType={"email-address"}
              value={email}
              placeholder="Email"
              ke
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              isPassword={true}
              placeholder="Password"
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn
            loading={loading}
            text={"Sign Up"}
            accent={true}
            onPress={handleSubmit}
          />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
