import {Text, View, StyleSheet, Image, FlatList, Dimensions, NativeEventEmitter} from 'react-native'

const {width} = Dimensions.get('window')

export default function ListHorizontal({data}){

    return(
        <FlatList
            data={data}
            // keyExtractor={item => String(item)}
            horizontal 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToOffsets={[...Array(data.length)].map(
                (x, i)=> i * (width*0.91-20) + (i-1) * 40)}
            snapToAlignment='start'
            scrollEventThrottle={26}
            renderItem={({item }) => <View>
                <Image
                source={item.image}
                style={{
                    height: width / 3.0,
                    width: width * 0.91 -10,
                    marginHorizontal: 5,
                    borderRadius: 15,
                    marginTop: 25,
                    resizeMode: 'cover',
                    
                }}
                />
            </View>}
               
            
        />
    )
}