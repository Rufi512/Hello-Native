import React,{useState} from 'react'

import {View,ScrollView,StyleSheet,Image,Pressable} from 'react-native'
import CustomText from '../components/CustomText'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ArrowDropdownIcon from '../assets/icons/ArrowDropdownIcon'
import ArrowLeftCircle from '../assets/icons/ArrowLeftCircle'

const Transfer = () =>{
	const [amount,setAmount] = useState("")
	const keyboardTouch = (key) =>{
		if(!key) return setAmount(amount.slice(0,amount.length - 1))
		if(amount.length == 9) return
		setAmount(amount + key)
	}
	return(
		<ScrollView style={{backgroundColor:'#ffffff'}}>
		
			<View style={styles.containerUser}>
				<Image style={styles.avatar} source={require('../assets/images/default.jpg')}/>
				<View style={styles.infoUser}>
					<CustomText style={{color:'#273240',fontWeight:'500', fontFamily:'Poppins-Medium',fontSize:13}}>Samantha</CustomText>
					<CustomText style={{color:'#2C3A4B',fontSize:12}}>Bank - 0987 3422 8756</CustomText>
				</View>
				<Pressable style={styles.dropdown} onPress={()=>{console.log('press')}}>
					<ArrowDropdownIcon/>
				</Pressable>
			</View>

			<View style={styles.paid}>

				<CustomText style={[styles.textAmount,{height:70,fontSize: amount ?  50 : 22}]}>
					{amount ? amount : 'Enter the amount to pay'}
				</CustomText>

				<View style={styles.keyboard}>
					<Pressable onPress={()=>{keyboardTouch('1')}} style={styles.key}><CustomText style={styles.keyText}>1</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('2')}} style={styles.key}><CustomText style={styles.keyText}>2</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('3')}} style={styles.key}><CustomText style={styles.keyText}>3</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('4')}} style={styles.key}><CustomText style={styles.keyText}>4</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('5')}} style={styles.key}><CustomText style={styles.keyText}>5</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('6')}} style={styles.key}><CustomText style={styles.keyText}>6</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('7')}} style={styles.key}><CustomText style={styles.keyText}>7</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('8')}} style={styles.key}><CustomText style={styles.keyText}>8</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('9')}} style={styles.key}><CustomText style={styles.keyText}>9</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('.')}} style={styles.key}><CustomText style={styles.keyText}>.</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch('0')}} style={styles.key}><CustomText style={styles.keyText}>0</CustomText></Pressable>

					<Pressable onPress={()=>{keyboardTouch(false)}} style={styles.key}><CustomText style={styles.keyText}><ArrowLeftCircle/></CustomText></Pressable>
				</View>

			</View>
		</ScrollView>
		)
}

const styles = StyleSheet.create({

	containerUser:{
		flex:1,
		backgroundColor:'#F1F1F9',
		borderRadius:20,
		flexDirection:'row',
		alignItems:'center',
		padding:28,
		marginTop:58,
		marginLeft:'auto',
		marginRight:'auto'
	},

	infoUser:{
		marginLeft:16,
		flex:3,
		minWidth:135
	},

	dropdown:{
		width:24,
		alignItems:'center',
		marginLeft:34
	},
	textAmount:{
		marginBottom:52,
		marginLeft:'auto',
		marginRight:'auto',
		fontWeight:'400', 
		fontSize:50, 
		textAlign:'center',
		color:'#525298'
	},
	paid:{
		marginTop:45,
		alignItems:'center'
	},

	keyboard:{
		flexDirection:'row',
		flexWrap: 'wrap',
  		justifyContent: 'space-between'
	},

	key:{
		flexGrow:1,
		flexShrink:1,
		flexBasis:"30%",
		padding:21,  
  		marginBottom: '2%',
  		position: 'relative',
		alignItems:'center',
		justifyContent:'center'
	},

	keyText:{
		color:'#9494AD',
		fontSize:25,
		
	},
	avatar:{
		width:40,
		height:40,
		borderRadius:100
	}
})

export default Transfer