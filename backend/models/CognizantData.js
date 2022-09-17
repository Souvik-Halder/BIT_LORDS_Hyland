const mongoose=require('mongoose')
const {Schema}=mongoose

const CognizantSchema=new Schema({
Date:{
  type:String,
  require:true
},

Open:{
    type:String,
    require:true
},
High:{
    type:String,
    require:true
},
Low:{
    type:String,
    require:true
},

Close:{
    type:String,
    require:true
},
Adj_Close:{
    type:String,
    require:true
},
Volume:{
    type:String,
    require:true
}

})

const CognizantData=mongoose.model('cognizantdata',CognizantSchema);
CognizantData.createIndexes();
module.exports=CognizantData;