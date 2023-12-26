import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Card, Title, Paragraph, useTheme } from 'react-native-paper';

const Menu = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image source={require('../images/rolldice_menu_background.png')} style={styles.backgroundImage} />
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.text}>Eğlenceli rekabetin tek adresi!</Title>
          <Paragraph style={styles.texttwo}>CEYAF Company</Paragraph>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Features')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        <Text style={styles.buttonText}>Spora Başla</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  card: {
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 100,
    },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  texttwo: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#004aad',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Menu;
