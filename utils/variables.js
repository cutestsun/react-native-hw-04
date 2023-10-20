export const colors = {
  //main
  mainTextColor: "#212121",
  mainAccentColor: "#FF6C00",
  //input
  inputPlaceholderColor: "#BDBDBD",
  inputBgColor: "#F6F6F6",
  inputBorderColor: "#E8E8E8",
  //icon
  mainIconColor: "rgba(33, 33, 33, 0.8)",
  secondaryIconColor: "#BDBDBD",
  //disabled
  disabledTextColor: "#BDBDBD",
  disabledBgColor: "#F6F6F6",

  secondaryAccentColor: "#1B4371",
};

export const authInputTheme = {
  roundness: 8,
  colors: {
    primary: colors.mainAccentColor,
    background: colors.inputBgColor,
  },
};

export const createPostInputTheme = {
  colors: {
    primary: colors.mainAccentColor,
    background: "#fff",
  },
};

export const commentTheme = {
  roundness: 50,
  colors: {
    primary: colors.mainAccentColor,
    background: colors.inputBgColor,
  },
};
