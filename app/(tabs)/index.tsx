import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const App = () => {

 const[Quote, setQuote] = useState();
 const[Author, setAuthor] = useState();
 // const[ImageAuthor, setImageAuthor] = useState();

  const randomQuote = () => {
    fetch("https://zenquotes.io/api/random").then(res => res.json()).then(result => {
      console.log(result[0].q);
      setQuote(result[0].q)
      setAuthor(result[0].a)
      // setImageAuthor(result[0].i)
    })
  }

  return (  
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4B0082",
      }}
    >
      <View
        style={{
          width: "90%",
          backgroundColor: "#FFf",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "600",
            marginBottom: 20,
            color: "#333",
          }}
        >
          Quote of the Day
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: "400",
            textAlign: "center",
            marginBottom: 10,
            paddingHorizontal: 20,
          }}
        >
          {Quote}
        </Text>

        <Text
          style={{
            textAlign: "right",
            fontWeight: "300",
            fontStyle: "italic",
            fontSize: 16,
            color: "#000",
          }}
        >
          --- {Author}
        </Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: '#4B0082',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}
        >
          <Text style = {{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
            New Quote
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;