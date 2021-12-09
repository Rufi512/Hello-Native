import React from 'react';

import {StyleSheet, Text, TextProps} from 'react-native';

const CustomText = (props) => {
	return(
			<Text {...props} style={[styles.text, props.style]}>{props.children}</Text>
		)
}

//Font Family default if not exists in props.style
const styles = StyleSheet.create({
	text:{
		fontFamily:'Poppins-Regular'
	}
})

export default CustomText