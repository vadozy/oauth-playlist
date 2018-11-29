//middleware
module.exports = (req, res, next) => {
  console.log('--- --- --- --- --- --- --- --- --- --- --- ---');
  console.log("req.user -> ", req.user);
  //console.log("req.session.passport -> ", req.session.passport);
  console.log("req.session -> ", req.session);
  console.log("req.cookies -> ", req.cookies);
  console.log('--- --- --- --- --- --- --- --- --- --- --- ---');
  next();
};
