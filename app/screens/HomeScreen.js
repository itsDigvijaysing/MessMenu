import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Constants from 'expo-constants';
import colors from '../config/colors';
import ItemSeparator from '../components/ItemSeparator';
import ListItemSwipeAction from '../components/ListItemSwipeAction';

const mess = [
    {
        id:1,
        title: 'Om sai',
        description: 'ambegaon bk',
        image: require('../assets/india-food-commercial.jpg')
    },
    {
        id:2,
        title: 'ShivaShri',
        description: 'ambegaon bk',
        image: require('../assets/indian-food-commercial.jpg')
    },
]

function HomeScreen(props) {
    
    const [messmessages, setmessmessages] = useState(mess);
    // const setCount = array[1]; //setState 

    const handleDelete = (messinfo) => {
        //Delete this message from array
        setmessmessages(messmessages.filter((m) => m.id !==messinfo.id));
      }

    return (
        <Screen>
            <FlatList
                data={mess}
                keyExtractor ={mess => mess.id.toString()}
                renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message Selected', item)}
                        renderRightActions={() => 
                            <ListItemSwipeAction onPress={() => handleDelete(item)} />} 
                    /> }
                ItemSeparatorComponent={ItemSeparator}
            />
        </Screen>
    );
}

export default HomeScreen;