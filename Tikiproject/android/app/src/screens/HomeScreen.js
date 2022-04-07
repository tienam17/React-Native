import React from 'react';
import { StyleSheet, View,Text,StatusBar, ScrollView} from 'react-native';

import HeaderCompoments from '../../../../android/app/src/Compoments/HeaderCompoments'

const HomeScreen = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          {/* icons */}
          <Text style={styles.inputText}> Bạn muốn tìm gì hôm nay ?</Text>
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
            {/* icons */}
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
           <HeaderCompoments/> 
           <HeaderCompoments/>
           <HeaderCompoments/>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    paddingTop:50,
    paddingBottom:4,
    backgroundColor:'#1e88e5',
  },
  inputContainer:{
    backgroundColor:'#fff',
    flexDirection:'row',
    flex:1,
    marginLeft:10,
    alignItems:'center',
    paddingHorizontal:12,
    paddingVertical:9,
    borderRadius:2,
  },
  inputText:{
    color :'black',
    fontSize:15,
    marginLeft:8,
    fontWeight:'500',
  },
  cartContainer:{
    paddingHorizontal:20,
    alignItem:'center',
    justifyContent:'center',
  },
  //
  bodyContainer:{
    backgroundColor:'#fff',
  },
  
});

export default HomeScreen;
