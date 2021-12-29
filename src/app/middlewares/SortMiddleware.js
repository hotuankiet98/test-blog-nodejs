function sortMiddleware(req, res, next) {
    //khi su dung res.locals no chi nam trong 1 request.Thuong dung de hien thi thong tin dang nhap
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled=true
        // res.locals._sort.type=req.query.type
        // res.locals._sort.column=req.query.column
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
}
module.exports = sortMiddleware;
