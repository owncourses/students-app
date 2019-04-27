interface Config {
  server: {
    url: string;
  };
  brand: {
    headerText: string;
    footerText: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
}

const config: Config = {
  server: {
    url: process.env.SERVER_URL
  },
  brand: {
    headerText: process.env.BRAND_HEADER_TEXT,
    footerText: process.env.BRAND_FOOTER_TEXT,
    colors: {
      primary: process.env.BRAND_COLORS_PRIMARY,
      secondary: process.env.BRAND_COLORS_SECONDARY
    }
  }
};

export default config;
