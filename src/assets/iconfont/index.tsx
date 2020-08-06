/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconhuojian1 from './Iconhuojian1';
import Iconhuojian2 from './Iconhuojian2';
import IconrocketEasyiCopy from './IconrocketEasyiCopy';
import Iconhuojian from './Iconhuojian';
import Iconzuo from './Iconzuo';
import Icontuichu from './Icontuichu';
import Icontuichudenglu from './Icontuichudenglu';
import Iconmenu from './Iconmenu';
import Iconmenu1 from './Iconmenu1';
import Iconmenu2 from './Iconmenu2';
import Iconmenu3 from './Iconmenu3';
import Iconmimabukejian from './Iconmimabukejian';
import Iconmimakejian from './Iconmimakejian';
import Iconzhengque from './Iconzhengque';
import Iconxingmingyonghumingnicheng from './Iconxingmingyonghumingnicheng';
import Iconmima from './Iconmima';
import Iconhuanyingni from './Iconhuanyingni';
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

export type IconNames = 'iconhuojian1' | 'iconhuojian2' | 'iconrocket__easyi-copy' | 'iconhuojian' | 'iconzuo' | 'icontuichu' | 'icontuichudenglu' | 'iconmenu' | 'iconmenu1' | 'iconmenu2' | 'iconmenu3' | 'iconmimabukejian' | 'iconmimakejian' | 'iconzhengque' | 'iconxingmingyonghumingnicheng' | 'iconmima' | 'iconhuanyingni' | 'iconzongyi' | 'icondongman' | 'iconhuiyuan' | 'icontinggeshiqu' | 'iconhuiyuan1' | 'iconhuiyuan2' | 'iconhuiyuan3' | 'iconerjiyinletingge' | 'iconhuiyuan7' | 'iconhuiyuan4' | 'iconbofang1' | 'iconshanchu' | 'iconshangyishou' | 'iconxiayishou' | 'iconzantingtingzhi' | 'iconbofang' | 'iconarrow-down' | 'iconshijian' | 'iconjia' | 'iconjian' | 'iconmeiyoushuju' | 'iconshengyin' | 'iconicon-test' | 'iconshengyin1' | 'iconxihuan-' | 'iconxihuantianchong' | 'iconziyuan' | 'icongengduo' | 'iconfaxian' | 'iconiconfontxingxing' | 'iconzhanghao' | 'iconren' | 'iconshoucang' | 'iconyemian' | 'iconyemian1' | 'iconindex' | 'iconindex1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconhuojian1':
      return <Iconhuojian1 key="1" {...rest} />;
    case 'iconhuojian2':
      return <Iconhuojian2 key="2" {...rest} />;
    case 'iconrocket__easyi-copy':
      return <IconrocketEasyiCopy key="3" {...rest} />;
    case 'iconhuojian':
      return <Iconhuojian key="4" {...rest} />;
    case 'iconzuo':
      return <Iconzuo key="5" {...rest} />;
    case 'icontuichu':
      return <Icontuichu key="6" {...rest} />;
    case 'icontuichudenglu':
      return <Icontuichudenglu key="7" {...rest} />;
    case 'iconmenu':
      return <Iconmenu key="8" {...rest} />;
    case 'iconmenu1':
      return <Iconmenu1 key="9" {...rest} />;
    case 'iconmenu2':
      return <Iconmenu2 key="10" {...rest} />;
    case 'iconmenu3':
      return <Iconmenu3 key="11" {...rest} />;
    case 'iconmimabukejian':
      return <Iconmimabukejian key="12" {...rest} />;
    case 'iconmimakejian':
      return <Iconmimakejian key="13" {...rest} />;
    case 'iconzhengque':
      return <Iconzhengque key="14" {...rest} />;
    case 'iconxingmingyonghumingnicheng':
      return <Iconxingmingyonghumingnicheng key="15" {...rest} />;
    case 'iconmima':
      return <Iconmima key="16" {...rest} />;
    case 'iconhuanyingni':
      return <Iconhuanyingni key="17" {...rest} />;
    case 'iconzongyi':
      return <Iconzongyi key="18" {...rest} />;
    case 'icondongman':
      return <Icondongman key="19" {...rest} />;
    case 'iconhuiyuan':
      return <Iconhuiyuan key="20" {...rest} />;
    case 'icontinggeshiqu':
      return <Icontinggeshiqu key="21" {...rest} />;
    case 'iconhuiyuan1':
      return <Iconhuiyuan1 key="22" {...rest} />;
    case 'iconhuiyuan2':
      return <Iconhuiyuan2 key="23" {...rest} />;
    case 'iconhuiyuan3':
      return <Iconhuiyuan3 key="24" {...rest} />;
    case 'iconerjiyinletingge':
      return <Iconerjiyinletingge key="25" {...rest} />;
    case 'iconhuiyuan7':
      return <Iconhuiyuan7 key="26" {...rest} />;
    case 'iconhuiyuan4':
      return <Iconhuiyuan4 key="27" {...rest} />;
    case 'iconbofang1':
      return <Iconbofang1 key="28" {...rest} />;
    case 'iconshanchu':
      return <Iconshanchu key="29" {...rest} />;
    case 'iconshangyishou':
      return <Iconshangyishou key="30" {...rest} />;
    case 'iconxiayishou':
      return <Iconxiayishou key="31" {...rest} />;
    case 'iconzantingtingzhi':
      return <Iconzantingtingzhi key="32" {...rest} />;
    case 'iconbofang':
      return <Iconbofang key="33" {...rest} />;
    case 'iconarrow-down':
      return <IconarrowDown key="34" {...rest} />;
    case 'iconshijian':
      return <Iconshijian key="35" {...rest} />;
    case 'iconjia':
      return <Iconjia key="36" {...rest} />;
    case 'iconjian':
      return <Iconjian key="37" {...rest} />;
    case 'iconmeiyoushuju':
      return <Iconmeiyoushuju key="38" {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin key="39" {...rest} />;
    case 'iconicon-test':
      return <IconiconTest key="40" {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 key="41" {...rest} />;
    case 'iconxihuan-':
      return <Iconxihuan key="42" {...rest} />;
    case 'iconxihuantianchong':
      return <Iconxihuantianchong key="43" {...rest} />;
    case 'iconziyuan':
      return <Iconziyuan key="44" {...rest} />;
    case 'icongengduo':
      return <Icongengduo key="45" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="46" {...rest} />;
    case 'iconiconfontxingxing':
      return <Iconiconfontxingxing key="47" {...rest} />;
    case 'iconzhanghao':
      return <Iconzhanghao key="48" {...rest} />;
    case 'iconren':
      return <Iconren key="49" {...rest} />;
    case 'iconshoucang':
      return <Iconshoucang key="50" {...rest} />;
    case 'iconyemian':
      return <Iconyemian key="51" {...rest} />;
    case 'iconyemian1':
      return <Iconyemian1 key="52" {...rest} />;
    case 'iconindex':
      return <Iconindex key="53" {...rest} />;
    case 'iconindex1':
      return <Iconindex1 key="54" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
