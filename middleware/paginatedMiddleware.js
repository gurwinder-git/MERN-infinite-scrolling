function paginatedResults(model){
    return async (req, res, next) => {

        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
    
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
    
        let results = {}
        
        if(endIndex < await model.countDocuments().exec()){
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if(startIndex > 0){
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try{
            results.results = await model.find().skip(startIndex).limit(limit).exec();
            res.paginetedResults = results;
            next();
            }
        catch(err){
            res.paginetedResults = err.message;
            next();
        }
    }
}

export default paginatedResults;