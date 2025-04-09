import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Login({ navigation }) {
  const onButtonPress = () => {
    console.log("Button Pressed!");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/ErieLogo.png")} />
      <View style={styles.signinForm}>
        <Text style={styles.header}>Royals App</Text>

        <Text style={styles.formLabel}>Username</Text>
        <TextInput style={styles.formInput} placeholder="100101@eriesd.org" />
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onButtonPress}
          activeOpacity={0.3}
        >
          <Text style={styles.button_text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 200,
  },
  header: {
    fontSize: 50,
    color: "#f9b41c",
    marginBottom: 20,
    textAlign: "center",
  },
  signinForm: {
    flex: 1,
    width: "80%",

    borderRadius: 10,
    padding: 20,

    position: "relative",
    top: -75,
  },
  formLabel: {
    fontSize: 20,
    color: "#f9b41c",
    marginBottom: 10,
  },
  formInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#542965",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  button_text: {
    fontSize: 15,
    color: "#fff",
  },
  logo: {
    flex: 0.5,
    width: "99%",

    resizeMode: "contain",
    marginBottom: 20,
  },
});
