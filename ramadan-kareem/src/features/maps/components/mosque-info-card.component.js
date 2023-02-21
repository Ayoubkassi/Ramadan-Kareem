import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const MosqueInfoCard = ({ mosque = {} }) => {
  const {
    name = "Jamaa Sunah",
    icon,
    photos = [
      "https://exploreparis.com/7788/great-mosque-of-paris-virtual-conference.jpg",
    ],
    address = "Hay Nahda 1 Groupe Al Ahd B03",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = mosque;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});