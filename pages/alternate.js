import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable
} from "react-native";

import dynamic from "next/dynamic";
import { useRouter } from "next/router"

// import BarcodeScannerComponent from "react-webcam-barcode-scanner";

const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false,
});

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default function Alternate() {
  const [data, setData] = React.useState("Not Found");
  const router = useRouter();
  const [qrStatus, setQRStatus] = React.useState("");
  const handleScan = (data) => {
    if (data) {
      setQRStatus(data);
    }
  };
  const handleError = (err) => {
    setQRStatus(err);
    console.error(err);
    Alert.alert(err);
  };

  return (
    <View style={styles.container}>
      {/* <BarcodeScannerComponent
        width={screenWidth}
        height={screenHeight}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      /> */}
      <View>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%", margin: "0 auto" }}
          showViewFinder={true}
        />
      </View>
      <Pressable onPress={()=>router.back()} style={{ position: "absolute" }}>
        <Text style={styles.link}>
          Go Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: "red",
    fontWeight: "bold",
  },
});
