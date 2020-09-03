import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  whiteColor,
  grayColor,
} from '../../material-kit-pro-react';

const badgeStyle = {
  badge: {
    marginRight: '3px',
    borderRadius: '8px',
    padding: '5px 12px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1',
    color: whiteColor,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    display: 'inline-block',
  },
  primary: {
    color: primaryColor[0],
    backgroundColor: primaryColor[1],
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,

  },
  danger: {
    backgroundColor: dangerColor[1],
    color: dangerColor[0],
  },
  success: {
    backgroundColor: successColor[1],
    color: successColor[0],
  },
  info: {
    backgroundColor: infoColor[0],
  },
  rose: {
    backgroundColor: roseColor[0],
  },
  gray: {
    backgroundColor: grayColor[7],
  },
};

export default badgeStyle;
