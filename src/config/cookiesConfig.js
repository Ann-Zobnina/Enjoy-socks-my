import jwtConfig from './jwtConfig';

const cookiesConfig = {
  refresh: {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
  },
  access: {
    httpOnly: true,
    maxAge: jwtConfig.access.expiresIn,
  },
  shoppingCart: {
    maxAge: 24 * 60 * 60 * 1000,
  },
};

export default cookiesConfig;
