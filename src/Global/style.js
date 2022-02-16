import {Dimensions} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}


// ref : https://www.sitepoint.com/javascript-generate-lighter-darker-color/
export function LightenDarkenColor(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

const CColor = {
  whiteFFF: '#FFFFFF',
  black021: '#001021',
  gray0F9: '#F2F0F9',
  gray0F2: '#EEF0F2',
  blue4FF: '#6E44FF',
  blueCFF: '#7F5CFF',
  red343: '#F93943',
  greenD6C: '#53DD6C',
  yelow663:'#F5E663'

  // bgColor: '#ededed',
  // lightGray: '#E5E5E5',
  // pieBackGround: '#ededed',
  // usd: '#89AAE6',
  // eur: '#0586C7',
  // gbp: '#60C7FB',
};
const CCFont = {
  light: 'SofiaProLight',
  medium: 'SofiaProMedium',
  bold: 'SofiaProBold',
  regular: 'SofiaProRegular',
};

export {CCFont, CColor};