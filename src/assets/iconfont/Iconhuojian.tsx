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

const Iconhuojian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.363975 512.604224m-508.819876 0a508.819876 508.819876 0 1 0 1017.639752 0 508.819876 508.819876 0 1 0-1017.639752 0Z"
        fill={getIconColor(color, 0, '#F8E71C')}
      />
      <Path
        d="M511.363975 512.604224m-355.442484 0a355.442484 355.442484 0 1 0 710.884969 0 355.442484 355.442484 0 1 0-710.884969 0Z"
        fill={getIconColor(color, 1, '#2283F6')}
      />
      <Path
        d="M742.628969 595.389217m-18.209391 0a18.209391 18.209391 0 1 0 36.418782 0 18.209391 18.209391 0 1 0-36.418782 0Z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M274.998062 839.68c-21.24959 21.24959-135.41605 58.469764-135.41605 58.469764s37.213814-114.16646 58.463404-135.41605a54.411925 54.411925 0 1 1 76.952646 76.946286z"
        fill={getIconColor(color, 3, '#FE3D50')}
      />
      <Path
        d="M272.466683 801.073292c-9.890186 9.896547-78.708075 42.893516-78.708074 42.893515s33.003329-68.817888 42.893515-78.708074a25.326509 25.326509 0 0 1 35.814559 35.820919z"
        fill={getIconColor(color, 4, '#F8E71C')}
      />
      <Path
        d="M321.345193 810.950758c-10.844224 10.837863-36.304298-6.042236-62.413118-32.151056-26.11518-26.11518-42.99528-51.581615-32.151056-62.419478 10.837863-10.837863 58.787776-16.447602 84.902956 9.667577 26.10882 26.10882 20.505441 74.058733 9.661218 84.902957z"
        fill={getIconColor(color, 5, '#534741')}
      />
      <Path
        d="M168.260373 704.015901c-16.053267-15.315478 40.133168-115.381267 65.637764-107.920696 25.504596 7.460571 69.504795 37.245615 51.613416 46.798708-17.897739 9.553093-101.191553 76.424745-117.25118 61.121988zM333.722236 869.465043c15.309118 16.053267 115.374907-40.133168 107.907975-65.637763-7.460571-25.504596-37.245615-69.504795-46.798708-51.613417-9.546733 17.897739-76.424745 101.191553-61.115627 117.25118z"
        fill={getIconColor(color, 6, '#FE3D50')}
      />
      <Path
        d="M593.455702 272.504845c-79.770236 47.078559-165.264696 112.875329-232.530683 180.134956-151.870012 151.876373-135.269764 235.634484-73.371826 297.532423 61.904298 61.897938 145.66241 78.504547 297.532422-73.371826 67.265988-67.265988 133.056398-152.760447 180.141317-232.530684L593.455702 272.511205z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <Path
        d="M669.168099 368.557317c30.300224 30.300224 62.871056 55.614012 96.058833 75.718758 59.213913-100.33928 88.808149-191.608845 54.316521-226.094112-34.478907-34.485267-125.748472-4.897391-226.087751 54.316521 20.098385 33.187776 45.412174 65.764969 75.712397 96.058833z"
        fill={getIconColor(color, 8, '#FE3D50')}
      />
      <Path
        d="M602.63354 611.188075c-147.277913 147.793093-246.968447 112.90713-306.831105 52.510211-16.244075-16.384-29.212621-34.364422-36.622311-54.793541-17.999503 58.196273-4.464894 100.434683 30.262062 135.473292 59.862658 60.390559 147.227031 76.590112 294.110609-71.597317 65.052621-65.631404 128.686907-149.046062 174.219925-226.876422 52.72646-90.143801 87.485217-179.104596 65.637764-217.902112 10.812422 74.688398-79.852919 241.765764-220.776944 383.185889z"
        fill={getIconColor(color, 9, '#2283F6')}
      />
      <Path
        d="M507.287056 530.44472m-82.632348 0a82.632348 82.632348 0 1 0 165.264696 0 82.632348 82.632348 0 1 0-165.264696 0Z"
        fill={getIconColor(color, 10, '#2283F6')}
      />
      <Path
        d="M507.287056 530.44472m-62.896497 0a62.896497 62.896497 0 1 0 125.792994 0 62.896497 62.896497 0 1 0-125.792994 0Z"
        fill={getIconColor(color, 11, '#534741')}
      />
      <Path
        d="M551.757913 549.474584c-24.56328 24.56328-64.384795 24.56328-88.948074 0a62.559404 62.559404 0 0 1-17.096348-31.75036 62.813814 62.813814 0 0 0 17.096348 57.191354c24.56328 24.56328 64.384795 24.56328 88.948074 0a62.807453 62.807453 0 0 0 17.096348-57.191354 62.553043 62.553043 0 0 1-17.096348 31.75036z"
        fill={getIconColor(color, 12, '#534741')}
      />
      <Path
        d="M480.287801 491.322832a26.999255 14.895702 0 1 0 53.99851 0 26.999255 14.895702 0 1 0-53.99851 0Z"
        fill={getIconColor(color, 13, '#FFFFFF')}
      />
      <Path
        d="M578.394634 459.330783m-8.719901 0a8.719901 8.719901 0 1 0 17.439801 0 8.719901 8.719901 0 1 0-17.439801 0Z"
        fill={getIconColor(color, 14, '#2283F6')}
      />
      <Path
        d="M481.254559 433.304646m-8.719901 0a8.719901 8.719901 0 1 0 17.439802 0 8.719901 8.719901 0 1 0-17.439802 0Z"
        fill={getIconColor(color, 15, '#2283F6')}
      />
      <Path
        d="M410.140621 504.412224m-8.719901 0a8.719901 8.719901 0 1 0 17.439802 0 8.719901 8.719901 0 1 0-17.439802 0Z"
        fill={getIconColor(color, 16, '#2283F6')}
      />
      <Path
        d="M436.173118 601.558658m-8.719901 0a8.719901 8.719901 0 1 0 17.439802 0 8.719901 8.719901 0 1 0-17.439802 0Z"
        fill={getIconColor(color, 17, '#2283F6')}
      />
      <Path
        d="M533.313193 627.584795m-8.719901 0a8.719901 8.719901 0 1 0 17.439801 0 8.719901 8.719901 0 1 0-17.439801 0Z"
        fill={getIconColor(color, 18, '#2283F6')}
      />
      <Path
        d="M604.42713 556.470857m-8.7199 0a8.719901 8.719901 0 1 0 17.439801 0 8.719901 8.719901 0 1 0-17.439801 0Z"
        fill={getIconColor(color, 19, '#2283F6')}
      />
      <Path
        d="M332.908124 741.560447c-23.214907 23.214907-79.732075 58.310758-87.389813 50.653019-7.664099-7.664099 27.431752-64.174907 50.653018-87.389814 23.214907-23.221267 43.752149-22.343553 51.409888-14.679453 7.664099 7.657739 8.548174 28.194981-14.673093 51.416248z"
        fill={getIconColor(color, 20, '#FE3D50')}
      />
      <Path
        d="M782.533168 218.220124c7.040795 11.25764-54.971627 36.488745-99.283479 64.200348-44.305491 27.711602-78.663553 50.831106-88.08308 41.46882-23.392994-23.272149-0.801391-29.085416 43.504099-56.797019 44.311851-27.711602 136.821665-60.129789 143.86246-48.872149z"
        fill={getIconColor(color, 21, '#FFFFFF')}
      />
      <Path
        d="M367.660522 184.421764m-23.405715 0a23.405714 23.405714 0 1 0 46.811429 0 23.405714 23.405714 0 1 0-46.811429 0Z"
        fill={getIconColor(color, 22, '#FFFFFF')}
      />
      <Path
        d="M511.363975 223.632696m-13.07031 0a13.070311 13.070311 0 1 0 26.140621 0 13.070311 13.070311 0 1 0-26.140621 0Z"
        fill={getIconColor(color, 23, '#FFFFFF')}
      />
      <Path
        d="M227.550609 394.106435m-13.070311 0a13.070311 13.070311 0 1 0 26.140621 0 13.070311 13.070311 0 1 0-26.140621 0Z"
        fill={getIconColor(color, 24, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconhuojian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconhuojian) : Iconhuojian;
