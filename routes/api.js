const router = require ("express").Router();
const Log = require ("../models/log.js");


//POSTING NEW LOG
router.post ("/api/log", (req,res)=>{
Log.create({}).then((logSchema)=>{
    res.json(logSchema);
}).catch((err)=>{res.json(err);
});
});

//FINDING A LOG BY ID

//DELETING A LOG
router.delete("api/log",({body},res)=>{
    Log.findByIdAndDelete(body.id).then(()=>{
        res.json(true);
    }).catch((err)=>{res.json(err)})
});
module.exports=router;