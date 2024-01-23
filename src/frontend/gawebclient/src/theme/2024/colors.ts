const paletteDef = {
    colors: {
        primary: '#3f51b5',
        secondary: '#f50057',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#4caf50',
        grey: '#9e9e9e',
        greyLight: '#e0e0e0',
        greyDark: '#616161',
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
    },
    backgrounds: {
        default: '#ffffff',
        paper: '#ffffff',
    },
    borders: {
        default: '#e0e0e0',
    },
    shadows: {
        default: '0 2px 4px 0 rgba(0, 0, 0, 0.14)',
    },
};

const colorsDef = {
    primary: paletteDef.colors.primary,
    secondary: paletteDef.colors.secondary,
    error: paletteDef.colors.error,
    warning: paletteDef.colors.warning,
    info: paletteDef.colors.info,
    success: paletteDef.colors.success,
    grey: paletteDef.colors.grey,
    greyLight: paletteDef.colors.greyLight,
    greyDark: paletteDef.colors.greyDark,
    white: paletteDef.colors.white,
    black: paletteDef.colors.black,
    transparent: paletteDef.colors.transparent,
};

export type Colors = typeof colorsDef;
export type Palette = typeof paletteDef;