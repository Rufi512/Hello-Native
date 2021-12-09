import React from 'react'
import {View,Text, SafeAreaView, ScrollView, StyleSheet, FlatList, Pressable} from 'react-native'
import CustomText from '../components/CustomText.js'
import { SvgXml } from 'react-native-svg';
import PayIcon from '../assets/icons/PayIcon'
import SavedIcon from '../assets/icons/SavedIcon'
import BillIcon from '../assets/icons/BillIcon'
import MoreIcon from '../assets/icons/MoreIcon'
import CartIcon from '../assets/icons/CartIcon'
import EntertainmentIcon from '../assets/icons/EntertainmentIcon'
import EquipmentsIcon from '../assets/icons/EquipmentsIcon'
import OfficeIcon from '../assets/icons/OfficeIcon'

const Home = (props) =>{

const fakeData = [
		{
			name:'Grocery',
			date:'Nov 17',
			price:'326.800',
			reason:'Minimarket Anugrah',
			type:'market'
		},
		{
			name:'Entertainment',
			date:'Nov 04',
			price:'326.800',
			reason:'Football Game',
			type:'entertainment'
		},
		{
			name:'Equipments',
			date:'Oct 27',
			price:'326.800',
			reason:'DSLR Camera',
			type:'equipments'
		},
		{
			name:'Office Items',
			date:'Oct 24',
			price:'326.800',
			reason:'Stationary',
			type:'office'
		},
	]

const Item = (data, i) =>{
	return(
			<View style={styles.item} key={i}>

			    	{data.type == 'market' ? <CartIcon style={styles.icon}/> : data.type == 'entertainment' ? <EntertainmentIcon style={styles.icon}/> : data.type == 'equipments' ? <EquipmentsIcon style={styles.icon}/> : data.type == 'office' ? <OfficeIcon style={styles.icon}/> : <CartIcon style={styles.icon}/> }

			    	<View style={styles.infoContainer}>
			    		<View style={styles.itemInfo}>
			    				<CustomText style={{color:'#273240', fontWeight:'500', fontFamily:'Poppins-Medium'}}>{data.name}</CustomText>
			    				<CustomText style={{color:'#273240', fontWeight:'500', fontFamily:'Poppins-Medium'}}>{data.price}</CustomText>
			    		</View>
			    		<View style={[styles.itemInfo, {marginTop:4}]}><CustomText style={{color:'#2C3A4B', opacity:0.5}}>{data.date}</CustomText><CustomText style={{color:'#2C3A4B', opacity:0.5}}>{data.reason}</CustomText>
			    		</View>
			    	</View>
			 </View>
		)
}
	return(
		<ScrollView>
						
			<View style={{justifyContent: 'center', alignItems:'center', marginTop:90}}>
				<CustomText style={{color:'#082431', opacity:0.5}}>Your Balance</CustomText>
				<CustomText style={{marginTop:16,color:'#2C2C63',fontSize:36}}>Rp 8.250.000</CustomText>
			</View>

			<View style={styles.containerActions}>

					<Pressable onPress={()=>{props.navigation.navigate('Send Money')}} style={styles.buttonAction}>
						<PayIcon/>
						<CustomText style={{color:'#818197'}}>Transfer</CustomText>
					</Pressable>

					<Pressable style={styles.buttonAction}>
						<SavedIcon/>
						<CustomText style={{color:'#818197'}}>Top-up</CustomText>
					</Pressable>

					<Pressable onPress={()=>{props.navigation.navigate('Bill')}} style={styles.buttonAction}>
						<BillIcon/>
						<CustomText style={{color:'#818197'}}>Bill</CustomText>
					</Pressable>

					<Pressable style={styles.buttonAction}>
						<MoreIcon/>
						<CustomText style={{color:'#818197'}}>More</CustomText>
					</Pressable>

			</View>

			<View style={styles.containerTrans}>
				<CustomText style={{color:'#082431',opacity:0.5, marginTop:42, marginLeft:28}}>Transactions</CustomText>
					{
						fakeData.map((el,i)=>{
							return (Item(el,i))
						})
					}
			</View>
		</ScrollView>

		)
}


const styles = StyleSheet.create({
		containerActions:{
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center',
			marginTop:48,
			marginLeft:28,
			marginRight:28
		},

		item:{
			flexDirection:'row',
			alignItems:'center',
			flex:1,
			marginTop:32,
			marginLeft:28,
			marginRight:28
		},

		infoContainer:{
			flexDirection:'column',
			flex:4,
			marginLeft:15
		},

		icon:{
			flex:1,
			maxWidth:40
		},

		itemInfo:{
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'space-between'
		},

		buttonAction:{
			flexDirection:'column',
			justifyContent:'space-between',
			alignItems:'center',
			height:76
		},

		containerTrans:{
			marginTop:48,
			borderTopLeftRadius:38,
			borderTopRightRadius:38,
			backgroundColor:'#fff',
			paddingBottom:20
		}
	});

export default Home