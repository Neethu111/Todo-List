const mongoose=require('mongoose');

const Item=mongoose.model('Item',{
    
    label:String
    
});

module.exports={
    Item
}