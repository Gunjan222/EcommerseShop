import {
  View,
  Text,
  Image,
  // Button,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {ProductsContext} from '../API/Context';
import {Colors, SHADOWS, SIZES} from '../constants/styles';
import Input from '../components/Input';

const dummydata = [
  {
    id: 1,
    category: "men's clothing",
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/5257/5257945.png',
  },
  {
    id: 2,
    category: "women's clothing",
    imgUrl:
      'https://cdn0.iconfinder.com/data/icons/fashion-and-clothes-glyphs-vol-2-1/80/heel__sandal__footwear__fashion__girls-512.png',
  },
  {
    id: 3,
    category: 'electronics',
    imgUrl: 'https://static.thenounproject.com/png/51020-200.png',
  },
  {
    id: 4,
    category: 'jewelery',
    imgUrl:
      'https://www.shareicon.net/download/2016/01/26/709405_commerce_512x512.png',
  },
];

const ShopScreen = () => {
  let {products} = useContext(ProductsContext);
  let [data, setData] = useState();
  let [id, setId] = useState();
  const [view, setView] = useState('products');

  const [category, setCategory] = useState();

  const HeaderCmp = () => {
    return (
      <View style={styles.container}>
        <Input />
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/1024px-VisualEditor_-_Icon_-_Menu.svg.png',
            }}
            style={{width: 35, height: 35, tintColor: Colors.black}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({item}) => {
    title = item.category.split(' ');
    console.log('category name ', title[0]);
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          paddingHorizontal: 10,
          alignItems: 'center',
          marginHorizontal: 10,
        }}
        onPress={() => setCategory(`${item.category}`)}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor:
              category === item.category ? Colors.yellow : Colors.gray,
            borderRadius: 50,
            justifyContent: 'center',
            marginVertical: 5,
          }}>
          <Image
            source={{uri: item.imgUrl}}
            style={{width: 28, height: 28, alignSelf: 'center'}}
          />
        </View>
        <Text>{title[0]}</Text>
      </TouchableOpacity>
    );
  };

  const Categories = () => {
    return (
      <View style={{padding: 24}}>
        <Text style={{fontSize: SIZES.medium, fontWeight: '700'}}>
          Categories
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummydata}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const renderProducts = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setData(item);
          console.log('data on press ', data);
          setId(item.id);
          console.log('id on set product ', id);
          setView('detail');
        }}>
        {category === item.category ? (
          <View
            style={{
              width: 140,
              borderRadius: 10,
              margin: 15,
              padding: 10,
            }}>
            <Image
              source={{uri: `${item.image}`}}
              resizeMode="contain"
              style={{width: '100%', height: 150, alignSelf: 'center'}}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: SIZES.medium,
                fontWeight: '600',
                color: Colors.yellow,
              }}>
              $ {item.price}
            </Text>
            <Text
              style={{
                fontSize: SIZES.font,
                fontWeight: '600',
                color: Colors.green,
              }}>
              rate: {item.rating.rate}
            </Text>
            <Text>{item.title}</Text>
          </View>
        ) : (
          <View style={{width: 0, height: 0}}></View>
        )}
        {!category && (
          <View
            style={{
              width: 140,
              borderRadius: 10,
              margin: 15,
              padding: 10,
            }}>
            <Image
              source={{uri: `${item.image}`}}
              resizeMode="contain"
              style={{width: '100%', height: 150, alignSelf: 'center'}}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: SIZES.medium,
                fontWeight: '600',
                color: Colors.yellow,
              }}>
              $ {item.price}
            </Text>
            <Text
              style={{
                fontSize: SIZES.font,
                fontWeight: '600',
                color: Colors.green,
              }}>
              rate: {item.rating.rate}
            </Text>
            <Text>{item.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      {view === 'products' ? (
        <TouchableWithoutFeedback onPress={() => setCategory('')}>
          <View style={{flex: 1}}>
            <HeaderCmp />
            <Categories />
            <Text
              style={{
                fontSize: SIZES.medium,
                color: Colors.black,
                fontWeight: '700',
                marginHorizontal: 24,
              }}>
              Best Selling
            </Text>

            <View
              style={{
                alignItems: 'center',
                marginTop: 15,
                paddingBottom: 30,
              }}>
              {products && (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={products}
                  renderItem={renderProducts}
                  keyExtractor={item => item.id.toString()}
                  numColumns={2}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={{flex: 1, marginBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
              }}
              onPress={() => setView('products')}>
              <Image
                source={{uri: 'https://img.icons8.com/ios/500/back--v1.png'}}
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontWeight: '700',
                color: Colors.black,
              }}>
              Gipsy<Text style={{color: Colors.yellow}}>Bee</Text>
            </Text>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
              }}
              onPress={() => setView('products')}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/1024px-VisualEditor_-_Icon_-_Menu.svg.png',
                }}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: Colors.black,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={{uri: `${data.image}`}}
            style={{
              width: '100%',
              height: '40%',
              marginVetical: 10,
              borderColor: Colors.gray,
              borderWidth: 1,
            }}
            resizeMode="contain"
          />
          <ScrollView>
            <Text
              style={{
                width: '100%',
                color: Colors.black,
                fontSize: SIZES.large,
                fontWeight: '700',
                backgroundColor: Colors.yellow,
                padding: 10,
              }}>
              {data.title}
            </Text>
            <Text
              style={{
                marginHorizontal: 20,

                color: Colors.graydark,
                fontSize: SIZES.font,
                fontWeight: '500',
                margin: 5,
              }}>
              {data.category}
            </Text>
            <Text
              style={{
                marginHorizontal: 20,

                color: Colors.yellow,
                fontSize: SIZES.medium,
                fontWeight: '700',
                margin: 5,
              }}>
              ${data.price}
            </Text>
            <View>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: Colors.black,
                  fontSize: SIZES.font,
                  fontWeight: '500',
                  margin: 5,
                }}>
                {data.description.split('/')[0]}
              </Text>
              <Text
                style={{
                  marginHorizontal: 20,
                  color: Colors.black,
                  fontSize: SIZES.small,
                  fontWeight: '700',
                  margin: 5,
                }}>
                {data.description.split('/ ')[1]}
              </Text>
            </View>
            <Text
              style={{
                marginHorizontal: 20,

                fontSize: SIZES.small,
                fontWeight: '400',
                margin: 5,
              }}>
              rated:{' '}
              <Text style={{color: Colors.green, fontWeight: '700'}}>
                {data.rating.rate}
              </Text>{' '}
              count:{' '}
              <Text style={{color: Colors.green, fontWeight: '700'}}>
                {data.rating.count}
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                alignSelf: 'center',
                paddingVertical: 10,
                width: '60%',
                alignItems: 'center',
                borderRadius: 4,
                backgroundColor: Colors.black,
                ...SHADOWS.dark,
              }}>
              <Text style={{color: Colors.white, fontSize: SIZES.medium}}>
                +Add To Cart
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
