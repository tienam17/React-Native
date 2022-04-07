import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,   
} from 'react-native';

const {width} = Dimensions.get('window');

const images = require('../assets/images.jpg');
const vsmart = require('../assets/vsmart.jpg');

const ProductItem =({image,name,price}) => (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemName} number0fLines={2}>
        {name}
      </Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
);

const HeaderCompoments =() =>{
    return (
        <View style={styles.seactionContainer}>
        {/*  */}
        <Text style={styles.seactionTitle}>Điện thoại - Máy tính bảng </Text>
        {/*  */}
        <Image source={images} style={styles.imagesImage} />
        {/*  */}
        <ScrollView horizontal={true}>
          {[
            'Tất cả',
            'Điện thoại SmartPhone',
            'Máy tính bảng',
            'Điện thoại',
          ].map((e,index) =>(
            <View
              key={index.toString()}
              style={
                index===0
                ? styles.filterActiveButtonContainer
                : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index===0
                  ? styles.filterActiveText
                  : styles.filterInactiveText
                }>
                  {e}
              </Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.listItemContainer}>
            {/*  */}
            <View>
              <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            {/*  */}
            <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            </View>
            <View>
              <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            {/*  */}
            <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            </View>
            <View>
              <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            {/*  */}
            <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            </View>
            <View>
              <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            {/*  */}
            <ProductItem 
              name="Điện thoại Vsmart Bee(aaaaaa)"
              image={vsmart}
              price="699.000đ"
            />
            </View>

          </View>
        </ScrollView>
        {/*  */}
        <View style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText}> XEM THÊM SẢN PHẨM  </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  seactionContainer:{
    backgroundColor:'#fff',
    paddingHorizontal:12,
  },
  seactionTitle:{
    fontWeight:'700',
    fontSize:18,
    color:'#2f2f2f',
    marginVertical:12,
    marginLeft:12,
  },
  imagesImage:{
    width:390,
    height:120,
    borderRadius:4,
    marginLeft:12,
  },
  //
  filterActiveButtonContainer:{
    backgroundColor:'#242424',
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:4,
    marginRight:10,
  },
  filterInactiveButtonContainer:{
    backgroundColor:'#fff',
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:4,
    borderColor:'#5a5a5a',
    borderWidth:1,
    marginRight:10,
  },
  filterActiveText:{
    color:'#fff',
  },
  filterInactiveText:{
    color:'#5a5a5a',
  },
  listItemContainer:{
    flexDirection:'row',
    marginTop:10,
  },
  itemContainer:{
    width:100,
    marginRight:12,
    marginTop:10,
  },
  itemImage:{
    width:100,
    height:120,
  },
  itemName:{
    fontSize:14,
    color:'#484848',
    marginVertical:4,
  },
  itemPrice:{
    fontSize:16,
    fontWeight:'500',
    color:'#2a2a2a',
  },
  //
  seeMoreContainer:{
    marginTop:8,
    padding:12,
    borderTopWidth:0.6,
    borderTopColor:'#ededed',
    alignItems:'center',
  },
  seeMoreText:{
    color:'#0e45b4',
  },
});

export default HeaderCompoments;