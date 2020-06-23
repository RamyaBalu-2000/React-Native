import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
 
const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO : 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends Component {
 constructor(props){
   super(props);
   this.state={
     inputValue: "",
     resultValue: "0.0"
   };
 }

 buttonpressed = currency => {
   if(this.state.inputValue ==""){
     Alert.alert("enter some value");

   }
   let result = parseFloat(this.state.inputValue ) * currencyPerRupee[currency];
   this.setState({resultValue:result.toFixed(2)});
 };

  render(){
   return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview }>
        <View style={styles.resultcontainer}>
          <Text style={styles.resultvalue}>
            {this.state.resultValue}
          </Text>

        </View>
        <View style={styles.inputcontainer}>
          <TextInput
           style={styles.input}
           selectionColor="#FFF"
           placeholder="Enter the value"
           keyboardType="numeric"
           value={this.state.inputValue}
           onChangeText={
            inputValue => this.setState({
              inputValue}) 
           }
          
          
          />
        </View>
        <View style={styles.converterbuttoncontainer}>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("DOLLAR")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("EURO")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>euro</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("POUND")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>pound</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("RUBEL")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>rubel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("AUSDOLLAR")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>ausdollar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("CANDOLLAR")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>candollar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("YEN")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>yen</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("DINAR")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>dinar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() =>this.buttonpressed("BITCOIN")}
           style={styles.converterbutton}>
              <Text style={styles.converterbuttontext}>bitcoin</Text>
          </TouchableOpacity>

          
        </View>
        
      </View>
    </SafeAreaView>
  </TouchableWithoutFeedback>  
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192A56"
    
    
  },
  screenview:{
    flex:1
  },
  resultcontainer:{
    height:70,
    backgroundColor:"#0A79DF",
    marginTop:30,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1"

  },
  resultvalue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputcontainer:{
    height:70,
    backgroundColor:"#0A79DF",
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1"

  },
  input:{
    color:"#FFF",
    fontSize:30
  },
  converterbuttoncontainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    borderColor:"#c1c1c1",
    marginTop:20,
    borderWidth:2
  },
  converterbutton:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"33.3%",//height 100 divided by 3 in each row 
    backgroundColor:"#0A79DF",
    borderColor:"#c1c1c1",
    borderWidth:2

  },
  converterbuttontext:{
    color:"#FFF",
    fontSize:30,
    fontWeight:"bold"

  }

});
