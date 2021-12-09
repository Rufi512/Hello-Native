import AsyncStorage from '@react-native-async-storage/async-storage';

export const savedContact = async (contact) =>{
	const storage = await AsyncStorage.getItem('contacts')
	try {
	if(storage){
		let contacts = []
		contacts = JSON.parse(storage)
		contacts.push(contact)
		const jsonValue = JSON.stringify(contacts)
		await AsyncStorage.setItem('contacts', jsonValue)
	}else{
		let contacts = []
		contacts.push(contact)
		const jsonValue = JSON.stringify(contacts)
		await AsyncStorage.setItem('contacts', jsonValue)
	}

	return true
	 
    } catch (e) {
          console.log(e)
          return false
	}
        
}

export const listContacts = async () =>{
	const storage = await AsyncStorage.getItem('contacts')
	if (storage == null) return false
	return storage
}

export const editContact = async (index,data) =>{
	const storage = await AsyncStorage.getItem('contacts')
	const contacts = JSON.parse(storage)
	contacts[index] = data
	const newData = JSON.stringify(contacts)
	await AsyncStorage.setItem('contacts', newData)
	return true
}

export const showContact = async (index) =>{
	const storage = await AsyncStorage.getItem('contacts')
	if(storage == null) return false
	const contact = JSON.parse(storage).filter((contact, i)=> i == index)
	return contact
}

export const eraseContact = async (index) =>{
	const storage = await AsyncStorage.getItem('contacts')
	const data = JSON.parse(storage)
	const dataFilter = data.filter((contact,i)=> i !== index)
	const newData = JSON.stringify(dataFilter)
	await AsyncStorage.setItem('contacts',newData)
	return true

}