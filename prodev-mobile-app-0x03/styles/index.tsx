import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  largeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  smallText: {
    color: "#7E7B7B",
    marginTop: 10,
  },
  formGroup: {
    marginTop: 30,
  },
  placeholderText: {
    color: "#7E7B7B",
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 8,
    padding: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 8,
    padding: 10,
  },
  forgotPasswordText: {
    color: "#7E7B7B",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0F62FE",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E6EA",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#7E7B7B",
  },
  socialMediaButtonGroup: {
    gap: 10,
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  socialMediaButtonText: {
    color: "#000",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: "auto",
    marginBottom: 20,
  },
  subText: {
    color: "#7E7B7B",
  },
  subTextJoin: {
    color: "#0F62FE",
    fontWeight: "bold",
  },
});