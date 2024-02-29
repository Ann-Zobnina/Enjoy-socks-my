export default function checkAuthFactory(isAllowed) {
  return (req, res, next) => {
    console.log(res.locals?.user?.id);
    if (isAllowed === !!res.locals?.user?.id) return next();
    return res.redirect('/');
  };
}
