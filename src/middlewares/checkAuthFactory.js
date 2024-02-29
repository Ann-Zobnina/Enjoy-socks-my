export default function checkAuthFactory(isAllowed) {
  return (req, res, next) => {
    if (isAllowed === res.locals?.user?.id) return next();
    return res.redirect('/');
  };
}
