import { Text, TextInput, View, TouchableOpacity, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  largeText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
  },
  smallText: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: 8,
  },
  formGroup: {
    marginTop: 20,
    width: "100%",
  },
  placeholderText: {
    fontSize: 12,
    color: "#6B6B6B",
    marginBottom: 6,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    padding: 12,
    borderRadius: 8,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  forgotPasswordText: {
    color: "#4A90E2",
    marginTop: 8,
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#6B6B6B",
  },
  socialMediaButtonGroup: {
    width: "100%",
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  socialMediaButtonText: {
    marginLeft: 6,
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  subText: {
    color: "#6B6B6B",
  },
  subTextJoin: {
    color: "#4A90E2",
  },
});
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navigation Section */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("../assets/images/logo.png")} />
        </View>

        {/* Title Section */}
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        {/* Form Section */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.inputField}
              placeholder="Enter your email"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput
                style={{ flex: 1 }}
                secureTextEntry
                placeholder="Enter your password"
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Media Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("../assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("../assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text style={styles.subTextJoin}> Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
