const contactInfoWidth = 'calc(361 * 100% / 1520)';

const THEME_BASE = {
  // Colors
  colorPrimary: '#f0c13b',
  colorSecondary: '#241e35',
  colorDark: '#1c1825',
  colorBlack: '#000',
  colorWhite: '#fff',
  colorSuccess: '#68d391',
  colorError: '#ff0000',
  colorBackground: '#1d172b',
  colorText: '#fff',
  colorBgFooterDetail: '#151515',
  colorInputDark: '#191524',
  colorTextAlert: '#1a1826',
  colorPartnerCard: '#191524',

  colorPlaceholder: 'rgba(26, 24, 38, 25%)',
  colorPlaceholderLight: 'rgba(255, 255, 255, 25%)',
  colorBgAlert: 'rgba(255, 255, 255, 50%)',
  colorBgPostCard: 'rgba(36, 30, 53, 50%)',
  colorTextPostCardUsername: 'rgba(255, 255, 255, 70%);',
  colorTextAboutUs: 'rgba(255, 255, 255, 70%);',
  colorBgMemberCard:
    'linear-gradient(90deg, transparent 50%, #1d1d1d 0, #1d1d1d),linear-gradient(90deg,hsla(0, 0%, 100%, 10%),hsla(0, 0%, 100%, 20%),hsla(0, 0%, 100%, 50%),hsla(0, 0%, 100%, 50%),hsla(0, 0%, 100%, 50%),hsla(0, 0%, 100%, 20%),hsla(0, 0%, 100%, 10%))',

  // Fonts
  fontFamilyPrimary: 'Lato, sans-serif',
  fontFamilySecondary: 'Roboto, sans-serif',

  fontSizeTiny: '10px',
  fontSizeXs: '12px',
  fontSizeSm: '14px',
  fontSizeBase: '16px',
  fontSizeMd: '18px',
  fontSizeLg: '20px',
  fontSizeXl: '24px',
  fontSize2Xl: '28px',
  fontSize3Xl: '30px',
  fontSize4Xl: '32px',
  fontSize5Xl: '36px',
  fontSize6Xl: '40px',
  fontSize7Xl: '45px',
  fontSize8Xl: '48px',

  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Line height
  lineHeightTiny: '12px',
  lineHeightXs: '22px',
  lineHeightSm: '24px',
  lineHeightBase: '25px',
  lineHeightMd: '28px',
  lineHeightLg: '30px',
  lineHeightXl: '32px',
  lineHeight2Xl: '34px',
  lineHeight3Xl: '38px',
  lineHeight4Xl: '40px',
  lineHeight5Xl: '48px',
  lineHeight6Xl: '50px',
  lineHeight7Xl: '54px',
  lineHeight8Xl: '58px',

  // Z-indexes
  zIndexHide: -1,
  zIndexAuto: 'auto',
  zIndexBase: 0,
  zIndexDropdown: 1000,
  zIndexOverlay: 1100,
  zIndexModal: 1200,
  zIndexTooltip: 1300,
  zIndexHeader: 1400,

  // Border radius
  borderRadiusNone: '0',
  borderRadiusSm: '5px',
  borderRadiusBase: '10px',
  borderRadiusMd: '12px',
  borderRadiusLg: '30px',
  borderRadiusXl: '50px',
  borderRadiusRound: '50%',
  borderRadiusTiny: '8px',
  borderRadiusNormal: '20px',

  // Sizes
  sizeFull: '100%',

  // Breakpoints
  breakpointSm: '576px',
  breakpointMd: '768px',
  breakpointLg: '992px',
  breakpointXl: '1200px',
  breakpoint2xl: '1400px',
  breakpoint3xl: '1920px',

  // Container
  containerPaddingSm: '15px',
  containerPaddingMd: '30px',
  containerPaddingLg: '70px',
  containerWidthSm: '540px',
  containerWidthMd: '768px',
  containerWidthLg: '960px',
  containerWidthXl: '1140px',
  containerWidth2Xl: '1320px',
  containerWidth3Xl: '1660px',

  // Min height
  heroBgHeightDesktop: 'calc(920/1920 * 100vw)',
  heroBgHeightTablet: 'calc(419/768 * 100vw)',
  heroBgHeightMobile: 'calc(330/375 * 100vw)',
  heroBgHeightSmDesktop: 'calc(768/1920 * 100vw)',
  heroBgHeightMdDesktop: 'calc(1200/1920 * 100vw)',

  // Width
  btnWidthSm: '164px',
  btnWidthMd: '192px',
  btnWidthLg: '243px',
  contactInfoWidth: contactInfoWidth,
  contactFormWidth: `calc(100% - ${contactInfoWidth})`,

  // Drop Shadow
  referralCardDropShadow:
    'drop-shadow(0px 4.695px 117.388px rgba(227, 179, 34, 25%))',
  memberCardDropShadow: 'drop-shadow(0 3px 30px rgba(231, 167, 69, 20%))',

  // Opacity
  opacitySm: '0.25',
  opacityMd: '0.5',
  opacityBase: '0.75',
};

export default THEME_BASE;
