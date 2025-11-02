import { Text, TextInput, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  navGroup: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  largeText: { fontSize: 32, fontWeight: "700", color: "#000" },
  smallText: { fontSize: 14, color: "#666", marginBottom: 20 },
  formGroup: { width: "100%", marginTop: 10 },
  placeholderText: { fontSize: 12, color: "#666", marginBottom: 6 },
  inputField: { borderWidth: 1, borderColor: "#e0e0e0", padding: 10, borderRadius: 8 },
  passwordGroup: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#e0e0e0", padding: 10, borderRadius: 8 },
  forgotPasswordText: { alignSelf: "flex-end", color: "#1e90ff", marginTop: 10 },
  button: { backgroundColor: "#000", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "700" },
  dividerGroup: { flexDirection: "row", alignItems: "center", marginVertical: 20 },
  divider: { flex: 1, height: 1, backgroundColor: "#e0e0e0" },
  dividerText: { marginHorizontal: 10, color: "#666" },
  socialMediaButtonGroup: { width: "100%" },
  socialMediaButton: { borderWidth: 1, borderColor: "#e0e0e0", padding: 12, borderRadius: 8, marginBottom: 10 },
  socialMediaButtonText: { marginLeft: 8 },
  subTextGroup: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
  subText: { color: "#666" },
  subTextJoin: { color: "#1e90ff" },
});

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navigation Section */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
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
              <Image source={require("@/assets/images/google.png")} />
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
              <Image source={require("@/assets/images/facebook.png")} />
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
