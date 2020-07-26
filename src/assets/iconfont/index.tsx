/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconzongyi from './Iconzongyi';
import Icondongman from './Icondongman';
import Iconhuiyuan from './Iconhuiyuan';
import Icontinggeshiqu from './Icontinggeshiqu';
import Iconhuiyuan1 from './Iconhuiyuan1';
import Iconhuiyuan2 from './Iconhuiyuan2';
import Iconhuiyuan3 from './Iconhuiyuan3';
import Iconerjiyinletingge from './Iconerjiyinletingge';
import Iconhuiyuan7 from './Iconhuiyuan7';
import Iconhuiyuan4 from './Iconhuiyuan4';
import Iconbofang1 from './Iconbofang1';
import Iconshanchu from './Iconshanchu';
import Iconshangyishou from './Iconshangyishou';
import Iconxiayishou from './Iconxiayishou';
import Iconzantingtingzhi from './Iconzantingtingzhi';
import Iconbofang from './Iconbofang';
import IconarrowDown from './IconarrowDown';
import Iconshijian from './Iconshijian';
import Iconjia from './Iconjia';
import Iconjian from './Iconjian';
import Iconmeiyoushuju from './Iconmeiyoushuju';
import Iconshengyin from './Iconshengyin';
import IconiconTest from './IconiconTest';
import Iconshengyin1 from './Iconshengyin1';
import Iconxihuan from './Iconxihuan';
import Iconxihuantianchong from './Iconxihuantianchong';
import Iconziyuan from './Iconziyuan';
import Icongengduo from './Icongengduo';
import Iconfaxian from './Iconfaxian';
import Iconiconfontxingxing from './Iconiconfontxingxing';
import Iconzhanghao from './Iconzhanghao';
import Iconren from './Iconren';
import Iconshoucang from './Iconshoucang';
import Iconyemian from './Iconyemian';
import Iconyemian1 from './Iconyemian1';
import Iconindex from './Iconindex';
import Iconindex1 from './Iconindex1';

export type IconNames = 'iconzongyi' | 'icondongman' | 'iconhuiyuan' | 'icontinggeshiqu' | 'iconhuiyuan1' | 'iconhuiyuan2' | 'iconhuiyuan3' | 'iconerjiyinletingge' | 'iconhuiyuan7' | 'iconhuiyuan4' | 'iconbofang1' | 'iconshanchu' | 'iconshangyishou' | 'iconxiayishou' | 'iconzantingtingzhi' | 'iconbofang' | 'iconarrow-down' | 'iconshijian' | 'iconjia' | 'iconjian' | 'iconmeiyoushuju' | 'iconshengyin' | 'iconicon-test' | 'iconshengyin1' | 'iconxihuan-' | 'iconxihuantianchong' | 'iconziyuan' | 'icongengduo' | 'iconfaxian' | 'iconiconfontxingxing' | 'iconzhanghao' | 'iconren' | 'iconshoucang' | 'iconyemian' | 'iconyemian1' | 'iconindex' | 'iconindex1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconzongyi':
      return <Iconzongyi key="1" {...rest} />;
    case 'icondongman':
      return <Icondongman key="2" {...rest} />;
    case 'iconhuiyuan':
      return <Iconhuiyuan key="3" {...rest} />;
    case 'icontinggeshiqu':
      return <Icontinggeshiqu key="4" {...rest} />;
    case 'iconhuiyuan1':
      return <Iconhuiyuan1 key="5" {...rest} />;
    case 'iconhuiyuan2':
      return <Iconhuiyuan2 key="6" {...rest} />;
    case 'iconhuiyuan3':
      return <Iconhuiyuan3 key="7" {...rest} />;
    case 'iconerjiyinletingge':
      return <Iconerjiyinletingge key="8" {...rest} />;
    case 'iconhuiyuan7':
      return <Iconhuiyuan7 key="9" {...rest} />;
    case 'iconhuiyuan4':
      return <Iconhuiyuan4 key="10" {...rest} />;
    case 'iconbofang1':
      return <Iconbofang1 key="11" {...rest} />;
    case 'iconshanchu':
      return <Iconshanchu key="12" {...rest} />;
    case 'iconshangyishou':
      return <Iconshangyishou key="13" {...rest} />;
    case 'iconxiayishou':
      return <Iconxiayishou key="14" {...rest} />;
    case 'iconzantingtingzhi':
      return <Iconzantingtingzhi key="15" {...rest} />;
    case 'iconbofang':
      return <Iconbofang key="16" {...rest} />;
    case 'iconarrow-down':
      return <IconarrowDown key="17" {...rest} />;
    case 'iconshijian':
      return <Iconshijian key="18" {...rest} />;
    case 'iconjia':
      return <Iconjia key="19" {...rest} />;
    case 'iconjian':
      return <Iconjian key="20" {...rest} />;
    case 'iconmeiyoushuju':
      return <Iconmeiyoushuju key="21" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="22" {...rest} />;
    case 'iconicon-test':
      return <IconiconTest key="23" {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 key="24" {...rest} />;
    case 'iconxihuan-':
      return <Iconxihuan key="25" {...rest} />;
    case 'iconxihuantianchong':
      return <Iconxihuantianchong key="26" {...rest} />;
    case 'iconziyuan':
      return <Iconziyuan key="27" {...rest} />;
    case 'icongengduo':
      return <Icongengduo key="28" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="29" {...rest} />;
    case 'iconiconfontxingxing':
      return <Iconiconfontxingxing key="30" {...rest} />;
    case 'iconzhanghao':
      return <Iconzhanghao key="31" {...rest} />;
    case 'iconren':
      return <Iconren key="32" {...rest} />;
    case 'iconshoucang':
      return <Iconshoucang key="33" {...rest} />;
    case 'iconyemian':
      return <Iconyemian key="34" {...rest} />;
    case 'iconyemian1':
      return <Iconyemian1 key="35" {...rest} />;
    case 'iconindex':
      return <Iconindex key="36" {...rest} />;
    case 'iconindex1':
      return <Iconindex1 key="37" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
