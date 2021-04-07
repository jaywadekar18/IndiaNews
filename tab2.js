import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Header';
import Card from './Card'
export default function Tab2() {
    let [newsdata, setnews] = useState();

    useEffect(() => {
        async function getdata() {
            try {
                let news = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8837c9d3243e40eba56238d1ac2b7914');
                let data = await news.json();
                let articles = await data.articles;
                console.log(articles);
                setnews(articles);
               
            }
            catch (err) {
                throw err;
            }

        }
        getdata();
    }, [])
    return (
        <View style={{ backgroundColor: 'white' }}>
            <Header />
          
            {
                !newsdata ? (<Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Loading....</Text>) : (<FlatList
                    data={newsdata}
                    keyExtractor={(d) => (Math.random().toString())}
                    renderItem={({ item }) => (<Card imgsrc={item.urlToImage} weburl={item.url}>
                        <Text style={{ marginRight: 20, paddingRight: 30, fontSize: 16 }}>{item.title}</Text>
                    </Card>)}
                />)}
        </View>
    );

}
const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        paddingVertical: 40,
        alignSelf: 'center'
    }
});

