import React,{useState,useEffect} from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import {savedContact,showContact,editContact} from '../components/API.js'
const Register = (props) => {
const [contact, setContact] = useState({avatar:'../assets/images/default.jpg'});
const [edit,onEdit] = useState(false)

useEffect(()=>{
  const request = async (index) =>{
    const data = await showContact(index)
    setContact(data[0])
  }
  // Set the name in the header depending on the router params
  if(props.route.params !== undefined){
    onEdit(true)
    request(props.route.params.index)
    props.navigation.setOptions({ title: 'Edit Contact' })
    return
  }


},[props])

  const formatNumberBank = (text,limit) =>{
  	if(text.length >= 12) return

        let str = text.trim().replace(/[^0-9]/g, "").toUpperCase().split("");
      
        let len = str.length;
 
        for (let i = len; i > 0; i = i - limit) {
            if (i != len) {
 
                // Concatenate the string with "-"
                str[i - 1] = str[i - 1] + "-";
            }
        }
        //  Join the array to make it a string
  	setContact({...contact, bank:str.join("")})
  		   
  }

  const sendData = async () =>{
    let send = null
      if(contact.firstname && contact.lastname && contact.bank && contact.bank.length == 11){
        if(edit && props.route.params){
          send =  await editContact(props.route.params.index,contact)
        }else{
          send =  await savedContact(contact)
        }

        if(send){
          setContact({avatar:'../assets/images/default.jpg'})
          props.navigation.navigate('Contacts List')
        }
      }
  }
  return (
  	<SafeAreaView>
      
  	  <View style={styles.inputContainer}>
  	    <Text style={styles.label}>Firstname*</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => text.length <= 20 ? setContact({...contact, firstname:text}) : ''}
            value={contact.firstname || ""}
            placeholder="Place FirstName"
          />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Lastname*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => text.length <= 20 ? setContact({...contact, lastname:text}): ''}
          value={contact.lastname || ""}
          placeholder="Place Lastname"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bank Number*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => formatNumberBank(text,3)}
          value={contact.bank || ""}
          placeholder="Place Bank Number (000-000-000)"
          keyboardType="numeric"
        />
      </View>

      <Pressable onPress={()=>{sendData()}} style={styles.button}>
      	<Text style={styles.text}>{edit ? 'Edit Contact' : 'Save Contact'}</Text>
      </Pressable>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
  	marginTop:10,
  	marginBottom:10,
  	marginRight:20,
  	marginLeft:20
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },

  button: {
  	margin:20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  label:{
  	color:'#2b42c1',
  	fontSize:15,
  	fontWeight:'600',
    marginBottom:10
  }
});

export default Register