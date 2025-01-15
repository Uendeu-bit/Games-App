import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  const article = {
    title: "Título do Artigo",
    content: "Este é o conteúdo do artigo que você verá ao clicar em 'Leia Mais'."
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>{article.title}</Text>
      <Button
        title="Leia Mais"
        onPress={() => navigation.navigate('Detail', { article })}
      />
    </View>
  );
};

export default Home;