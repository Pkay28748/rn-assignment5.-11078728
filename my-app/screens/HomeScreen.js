// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const transactions = [
  { id: '1', title: 'Apple Store',description:'Entertainment', amount: '- $5.99' ,icon:require('../assets/apple.png')},
  { id: '2', title: 'Spotify',description:'Music', amount: '- $12.99',icon:require('../assets/spotify.png') },
  { id: '3', title: 'Money Transfer', description:'Transaction',amount: '$300', icon:require('../assets/statitics.png') },
  { id: '3', title: 'Grocery',description:'Home', amount: '- $88', icon:require('../assets/grocery.png') }
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",gap:20,}}>
          <Image source={require('../assets/profile.png')}/>

          <View>
              <Text style={{fontSize:20}}>Welcome back</Text>
              <Text style={styles.header}>Prince Kay</Text>
          </View>
          
        </View>

        <View  style={styles.homeImage}>
            <Image source={require('../assets/search.png')}/>
        </View>

      </View>
      
      <View style={styles.cardStyle}>
        <Image  style={{ resizeMode:'stretch', width:450,height:250, justifyContent:'center',}} source={require('../assets/Card.png')}/>
      </View>

      <View style={{flexDirection:'row',gap:85,justifyContent:"center",marginTop:10,marginBottom:10,}}>

      <View  style={styles.homeImage}>
          <Image source={require('../assets/send.png')}/>
      </View>
      

      <View  style={styles.homeImage}>
        <Image source={require('../assets/recieve.png')}/>
      </View>

      <View  style={styles.homeImage}>
        <Image source={require('../assets/loan.png')}/>
      </View>

      <View  style={styles.homeImage}>
        <Image source={require('../assets/topUp.png')}/>
      </View>

      </View>

    <View style={styles.textStyle}>
      <Text>Send</Text>
      <Text>Receive</Text>
      <Text>Loan</Text>
      <Text>TopUp</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.balance}>Transactions</Text>
        <Text style={styles.balance1}>See All</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content style={{flexDirection:'row',justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",gap:20,}}>
                  <View style={{height:50,width:50,borderRadius:20,backgroundColor:'lightgray',padding:15,}}>

                  <Image source={item.icon} />
                  </View>

                  <View>
                    <Title>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </View>
              </View>
      
              <Paragraph style={{fontSize:16,}}>{item.amount}</Paragraph>

            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:20,
  },
  balance1:{
    justifyContent:'center',
    color:"blue",
    marginBottom: 20,
    marginTop:30,
    fontSize:20,
  },
  card: {
    marginBottom: 10,
  },
  homeImage:{
    height:50,
    width:50,
    borderRadius:20,
    justifyContent:'center',
    backgroundColor:"lightgrey",
    padding:15,
  },
  cardStyle:{
    justifyContent:'center',
    padding:20,
  },
  textStyle:{
    flexDirection:'row',
    justifyContent:'center',
    gap:95,
  }
});

export default HomeScreen;
