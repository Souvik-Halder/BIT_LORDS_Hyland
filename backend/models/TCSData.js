const mongoose=require('mongoose')
const {Schema}=mongoose

const TCSDataSchema=new Schema({
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

const TCSData=mongoose.model('projecttcss',TCSDataSchema);
TCSData.createIndexes();
module.exports=TCSData;