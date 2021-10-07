import { StyleSheet, Text, View, Pressable,Image} from "react-native";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App(props) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={"/src/images/rnw.png"} style={{width:30,height:30}} />
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
        SCAN QR
      </Text>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'tomato'
            },
          ]}
          onPress={() => router.push("/autocomplete")}
        >
          <Text style={{ color: "white", padding: 10, fontWeight: "bold" }}>
            Components Test
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});
