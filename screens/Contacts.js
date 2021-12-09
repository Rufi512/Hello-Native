import React,{useState,useEffect} from 'react';
import {Platform,FlatList, TextInput, View, Text, Image, SafeAreaView,ScrollView, Pressable, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from '../assets/icons/SearchIcon'
import DeleteIcon from '../assets/icons/DeleteIcon'
import EditIcon from '../assets/icons/EditIcon'
import {listContacts, eraseContact} from '../components/API.js'
const Contacts = (props) =>{

const [contacts,setContacts] = useState([])
const [search,setSearch] = useState("")
const [activeSearch,setActiveSearch] = useState(false)
const [results, setResults] = useState([])
const [focus,setFocus] = useState(false)

const request = async () =>{
		const list = await listContacts()
		if (list) setContacts(JSON.parse(list))
	}

useEffect(()=>{
	// If return to it's screen refresh
	 const willFocusSubscription = props.navigation.addListener('focus', () => {
        request()
    });
	  return willFocusSubscription
	},[])

const deleteContact = async (index) =>{
		const res = await eraseContact(index)
		if (res) request()
	}


const Item = (contact,index) =>{
	return(
		<View style={styles.item}>
			<Image style={styles.avatar} source={require('../assets/images/default.jpg')}/>
			<View style={styles.info}>
				<Text style={{color:'#0d174e', fontWeight:'bold'}}>{contact.firstname} {contact.lastname}</Text>
				<Text style={{color:'#161616'}}>Bank: {contact.bank}</Text>
			</View>
			<Pressable style={{marginRight:15}} onPress={()=>{props.navigation.navigate('Register',{index})}}>
					<EditIcon style={{fill:'#000000'}}/>
				</Pressable>
		  <Pressable onPress={()=>{deleteContact(index)}}><DeleteIcon style={{fill:'#e91843'}}/></Pressable>
		</View>
		)
}

const showSearch = () => {
    setResults([]);
    if (contacts.length > 0 && search !== ""){
      setActiveSearch(true)
      const searchNormalize = search.trim().replace(/\s+/g, '').toLowerCase();
      console.log(searchNormalize)
      for (const item of contacts) {
        const nameNormalize = item.firstname.toLowerCase() + item.lastname.toLowerCase();
        if (
          nameNormalize.includes(searchNormalize) === true
        ) {
          setResults((olds) => [...olds, item]);
        }
      }
    }
  };

	return(
		<SafeAreaView style={{flex:1}}>
			<View style={[styles.searchBar,{borderColor: focus ? '#6a6aa9' : '#E7E7F6'}]}>
				<TextInput placeholder="Search" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChangeText={(text) => {setSearch(text), text == '' ? setActiveSearch(false) : ''}} value={search || ''} placeholderTextColor={'#2C3A4B'} style={{color:'#000000', flex:3}}/> 

				<Pressable style={{marginLeft:10}} onPress={()=>{showSearch()}}>
					<SearchIcon />
				</Pressable>
			</View>

			<View style={styles.containerLabels}>
				<Text style={{
						color:'#3b364a',
						fontWeight:'bold', 	
					}}>{search != ""  && activeSearch == true ? `Contacts founds (${results.length})` : `All Contacts Registered (${contacts.length})`}</Text>
				<Pressable onPress={() => props.navigation.navigate('Register')}style={styles.button}>
					<MaterialIcons name={'person-add'} color={'#ffffff'} size={22} />
					<Text style={{color:'#ffffff',fontWeight:'bold'}}>Add</Text>
				</Pressable>
			</View>

		{
			//Show contacts if search bar is used
			search != ""  && activeSearch == true  ? <FlatList style={{flexGrow: 1}} data={results}  renderItem={({item}) => Item(item)} keyExtractor={(item,index) => index}/> : <FlatList style={{flexGrow: 1}} data={contacts}  renderItem={({item,index}) => Item(item,index)} keyExtractor={(item,index)=> index}/>
		}
		
		</SafeAreaView>
		)
}

const styles = StyleSheet.create({
	item:{
		marginBottom:10,
		marginLeft:10,
		marginRight:10,
		padding:10,
		flexDirection:'row',
		alignItems:'center',
		borderBottomWidth:1,
		borderColor:'#e0e0e0',
	},

	avatar:{
		width:40,
		height:40,
		borderRadius:100,
		marginRight:5
	},

	info:{
		flexDirection:'column',
		flex:3
	},

	containerLabels:{
		flexDirection:'row', 
		justifyContent:'space-between',
		alignItems:'center', 
		marginTop:15,
		marginBottom:15,
		marginLeft:20,
		marginRight:20
	},

	button:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		width:55,
		backgroundColor:'#3999e5',
		width:64,
		padding:5,
		borderRadius:5
	},

	searchBar:{
		marginTop:30,
		marginLeft:30,
		marginRight:30,
		paddingTop:18,
		paddingBottom:18,
		paddingLeft:20,
		paddingRight:20,
		flexDirection:'row',
		alignItems:'center',
		borderWidth:1,
		borderRadius:15
	}
})

export default Contacts