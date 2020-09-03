import {
  grayColor,
  container,
  title,
  primaryColor,
  infoColor,
  dangerColor,
  whiteColor,
} from '../../../material-kit-pro-react';

import imagesStyles from '../../imagesStyles';

const typographyStyle = {
  section: {
    padding: '70px 0',
  },
  container,
  space50: {
    height: '50px',
    display: 'block',
  },
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  title2: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '72px',
    lineHeight: '88px',
    letterSpacing: '-0.02em',
    color: grayColor[0],
  },
  title4: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '34px',
    lineHeight: '41px',
    letterSpacing: '-0.02em',
    marginTop: 60,
    marginBottom: 0,
    color: grayColor[0],
  },
  title5: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
    margin: 0,
    color: grayColor[0],
  },
  title6: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '30px',
    letterSpacing: '-0.02em',
  },
  subtitle2: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '22px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.01em',
  },
  subtitle3: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.01em',
  },

  body1: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '-0.01em',
    color: grayColor[2],
  },
  body2: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '-0.01em',
    color: grayColor[2],
  },
  bodyBig: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '30px',
    letterSpacing: '-0.02em',
    margin: 0,
    color: grayColor[1],
  },
  overline: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.01em',
  },
  primaryColor: {
    color: primaryColor[0],
  },
  dangerColor: {
    color: dangerColor[0],
  },
  dark90: {
    color: grayColor[0],
  },
  dark70: {
    color: grayColor[1],
  },
  dark50: {
    color: grayColor[2],
  },
  dark30: {
    color: grayColor[3],
  },
  dark10: {
    color: grayColor[4],
  },
  darkHalf: {
    color: grayColor[5],
  },
  bold: {
    fontWeight: 'bold',
  },
  infoColor: {
    color: infoColor[0],
  },
  whiteColor: {
    color: whiteColor,
  },
  noMargin: {
    margin: 0,
  },

  typo: {
    marginBottom: '40px',
    position: 'relative',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    },
  },
  underline: {
    textDecoration: 'underline',
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: grayColor[21],
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px',
  },
  marginLeft: {
    marginLeft: 'auto !important',
  },
  margin0: {
    margin: '0px',
  },
  marginVxs: {
    margin: '4px 0px !important',
  },
  marginXs: {
    margin: '4px !important',
  },
  marginVsm: {
    margin: '8px 0px !important',
  },
  marginHsm: {
    margin: '0px 8px !important',
  },
  marginVmd: {
    margin: '16px 0px !important',
  },
  marginHmd: {
    margin: '0px 16px',
  },
  marginVlg: {
    margin: '24px 0px',
  },
  marginVxl: {
    margin: '32px 0px',
  },
  noPadding: {
    padding: '0px',
  },
  paddingVxs: {
    padding: '4px 0px',
  },
  paddingVmd: {
    padding: '16px 0px',
  },
  paddingVlg: {
    padding: '24px 0px',
  },
  paddinLmd: {
    paddingLeft: 16,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  center: {
    textAlign: 'center',
  },
  block: {
    display: 'block',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  ...imagesStyles,
};

export default typographyStyle;
