/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconyinpinbofangqiXiazaiwanchengIcon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M566.30303 868.848485H93.090909a31.030303 31.030303 0 0 0 0 62.060606h498.65697a246.690909 246.690909 0 0 1-25.444849-62.060606zM806.787879 992.969697a186.181818 186.181818 0 1 1 186.181818-186.181818 186.181818 186.181818 0 0 1-186.181818 186.181818z m-46.545455-203.403636a23.272727 23.272727 0 1 0-31.030303 34.598787l51.665455 46.545455a23.272727 23.272727 0 0 0 32.426666-1.861818l87.97091-93.090909a23.272727 23.272727 0 1 0-33.823031-31.030303l-72.300606 76.644848zM829.750303 341.333333a36.460606 36.460606 0 0 1 26.530909 63.922425l-357.934545 356.848484a46.545455 46.545455 0 0 1-65.784243 0l-357.934545-356.848484A36.460606 36.460606 0 0 1 101.158788 341.333333H248.242424V108.606061a46.545455 46.545455 0 0 1 46.545455-46.545455h341.333333a46.545455 46.545455 0 0 1 46.545455 46.545455v232.727272zM651.636364 403.393939a31.030303 31.030303 0 0 1-31.030303-31.030303V124.121212H310.30303v248.242424a31.030303 31.030303 0 0 1-31.030303 31.030303h-118.690909L465.454545 707.335758 770.172121 403.393939z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconyinpinbofangqiXiazaiwanchengIcon.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconyinpinbofangqiXiazaiwanchengIcon) : IconyinpinbofangqiXiazaiwanchengIcon;
