import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#304C82' },
    info: { main: '#007BFF' },
    danger: { main: '#DC3545' },
    success: { main: '#28A745' },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '-0.02em',
        color: '#171717',
        position: 'relative !important',
        marginBottom: 0,
      },
      asterisk: {
        color: '#DC3545',
        '&$error': {
          color: '#DC3545',
        },
      },

    },
    MuiFormHelperText: {
      root: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '-0.01em',
        color: '#727272',
      },

    },
    MuiInputBase: {
      input: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '26px',
        letterSpacing: '-0.01em',
        color: '#727272',
      },
    },

  },
});

export default theme;
