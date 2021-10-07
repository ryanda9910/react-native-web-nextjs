import React, { useState, useEffect } from "react";
import {
  View,
  Picker,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import OtpInput from "react-otp-input";

import axios from "axios";
import ModalPage from "../components/modal";
import ProgressBarPage from "../components/progressbar";

const autocomplete = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [Otp, setOtp] = useState("");
  const [data, setData] = useState("");

  const handleChange = (otp) => setOtp(otp);

  const getData = async () => {
    await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Select Item" value="" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <OtpInput
          isInputNum
          value={Otp}
          inputStyle={{ width: 20, borderRadius: 5, borderColor: "red" }}
          containerStyle={{marginBlock:10}}
          onChange={handleChange}
          numInputs={6}
          separator={<span>-</span>}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "tomato",
            },
            { marginVertical: 10,borderRadius:10 },
          ]}
          onPress={() => alert(Otp)}
        >
          <Text style={{ fontWeight: "bold", color: "white", padding: 10 }}>
            Get OTP
          </Text>
        </Pressable>
        <ModalPage textContentModal={data.value} onFetch={getData} />
        <ProgressBarPage />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  modal: {
    width: 120,
    height: 40,
  },
});

export default autocomplete;
