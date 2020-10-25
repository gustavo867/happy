export const SWITCH_THEME = "SWITCH_THEME";

export const switchTheme = (theme: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SWITCH_THEME,
      theme: theme,
    });
  };
};
