import React, { useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, Text } from "react-native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  margin-top: 70px;
  margin-bottom: 50px;
  flex: 1;
  padding-horizontal: 15px;
`;

const ListContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

export default ({ rooms }) => {
  return (
    <Container>
      <Title>Favorites ({rooms.length})</Title>
      <ListContainer>
        <FlatList
          style={{ width: "100%", marginTop: 30 }}
          data={rooms}
          renderItem={({ item }) => (
            <RoomCard
              id={item.id}
              key={item.id}
              name={item.name}
              price={item.price}
              photos={item.photos}
              isFav={item.is_fav}
              isSuperHost={item.user.superhost}
              roomObj={item}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => <Text>No data in here.</Text>}
        />
      </ListContainer>
    </Container>
  );
};
