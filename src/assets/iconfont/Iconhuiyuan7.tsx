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

const Iconhuiyuan7: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M60.235294 361.411765l744.809412 425.622588A30.117647 30.117647 0 0 1 790.136471 843.294118H173.658353a60.235294 60.235294 0 0 1-59.783529-52.766118L60.235294 361.411765z"
        fill={getIconColor(color, 0, '#F5C164')}
      />
      <Path
        d="M963.764706 361.411765l-53.63953 429.116235A60.235294 60.235294 0 0 1 850.341647 843.294118H233.893647a30.117647 30.117647 0 0 1-14.968471-56.259765L963.764706 361.411765z"
        fill={getIconColor(color, 1, '#F5C164')}
      />
      <Path
        d="M512 240.941176l331.053176 509.289412A60.235294 60.235294 0 0 1 792.545882 843.294118H231.454118a60.235294 60.235294 0 0 1-50.507294-93.06353L512 240.941176z"
        fill={getIconColor(color, 2, '#FFE09E')}
      />
      <Path
        d="M512 240.941176l331.053176 509.289412A60.235294 60.235294 0 0 1 792.545882 843.294118H512V240.941176z"
        fill={getIconColor(color, 3, '#F9CF7E')}
      />
      <Path
        d="M512 210.823529m-60.235294 0a60.235294 60.235294 0 1 0 120.470588 0 60.235294 60.235294 0 1 0-120.470588 0Z"
        fill={getIconColor(color, 4, '#f9ac06')}
      />
      <Path
        d="M963.764706 331.294118m-60.235294 0a60.235294 60.235294 0 1 0 120.470588 0 60.235294 60.235294 0 1 0-120.470588 0Z"
        fill={getIconColor(color, 5, '#f9ac06')}
      />
      <Path
        d="M60.235294 331.294118m-60.235294 0a60.235294 60.235294 0 1 0 120.470588 0 60.235294 60.235294 0 1 0-120.470588 0Z"
        fill={getIconColor(color, 6, '#f9ac06')}
      />
    </Svg>
  );
};

Iconhuiyuan7.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconhuiyuan7) : Iconhuiyuan7;
