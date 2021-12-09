import React from 'react'
import {View,ScrollView,Text,Image, StyleSheet, Pressable} from 'react-native'
import CustomText from '../components/CustomText'
import AccountIcon from '../assets/icons/AccountIcon'
import DocIcon from '../assets/icons/DocIcon'
import ArrowLeftCircle from '../assets/icons/ArrowLeftCircle'
const Bill = (props) =>{
	return(
		<ScrollView>
		<View style={styles.containerBill}>
			<CustomText style={{color:'#2C2C63', fontSize:50, textAlign:'center'}}>233.150</CustomText>
			<Pressable style={styles.detailButton}>
				<Text style={{color:'#082431',fontSize:13,opacity:0.5}}>Details</Text>
				<ArrowLeftCircle style={{ transform: [{ rotate: '270deg' }]}}/>
			</Pressable>
		</View>

		<View style={styles.containerInfo}>
			<CustomText style={{color:'#082431', fontSize:18,marginBottom:8}}>Account Info</CustomText>

			<View style={styles.info}>
				<AccountIcon style={styles.icon}/>
				<View style={{borderBottomWidth:0.5, borderColor:'#E7E7F6',marginLeft:16,flex:2,paddingBottom:30}}>
					<CustomText style={styles.label}>Name</CustomText>
					<CustomText style={{fontSize:14,color:'#2C2C63',marginTop:2}}>Samantha William</CustomText>
				</View>
			</View>

			<View style={styles.info}>
				<DocIcon style={styles.icon}/>
				<View style={{borderBottomWidth:0.5, borderColor:'#E7E7F6',marginLeft:16,flex:2,paddingBottom:30}}>
					<CustomText style={styles.label}>Customer ID</CustomText>
					<CustomText style={{fontSize:14,color:'#2C2C63',marginTop:2}}>0098 7485 1298</CustomText>
				</View>
			</View>

			<View style={styles.info}>
				<DocIcon style={styles.icon}/>
				<View style={{marginLeft:16,flex:2}}>
					<CustomText style={styles.label}>Month</CustomText>
					<CustomText style={{fontSize:14,color:'#2C2C63',marginTop:2}}>September 2020</CustomText>
				</View>
			</View>

			<Pressable onPress={()=>{props.navigation.navigate('Home Index')}} style={styles.button}><CustomText style={{color:'#FFFFFF', fontSize:15,letterSpacing:2, fontFamily:'Poppins-Medium', fontWeight:'600'}}>Go back xd</CustomText></Pressable>
		</View>
		</ScrollView>
		)
}

const styles = StyleSheet.create({
	containerBill:{
		flexDirection:'column',
		marginTop:73,
		justifyContent:'center'
	},
	detailButton:{
		flexDirection:'row',
		marginTop:23,
		marginLeft:'auto',
		marginRight:'auto',
		width:72,
		alignItems:'center',
		justifyContent:'space-between'
	},

	containerInfo:{
		marginTop:72,
		backgroundColor:'white',
		padding:42,
		paddingLeft:32,
		paddingRight:32,
		borderTopLeftRadius:38,
		borderTopRightRadius:38
	},
	info:{
		flexDirection:'row',
		alignItems:'flex-start',
		marginTop:32
	},
	icon:{
		maxWidth:40,
		flex:1

	},
	label:{
		fontSize:12, 
		color:'#082431',
		opacity:0.5
	},
	button:{
		width:'100%',
		borderRadius:36,
		backgroundColor:'#525298',
		margin:'auto',
		marginTop:67,
		height:64,
		alignItems:'center',
		justifyContent:'center'

	}
})

export default Bill