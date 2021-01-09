
const { Item } = require('../models/item');
let data={

}
function addItem(label) {
    
    return Item.findOne({
        label
    })
        .then(labelname => {
            if (labelname) {
                return {
                    statusCode: 400,
                    message: "Task already exists"
                }
            }
            const newItem = new Item({
                label
            });
            newItem.save();
            return {
                statusCode: 200,
                message: "Task added successfully"
            }

        })

}

function getItem() {
    
    return Item.find({}).select("label")
        .then(items => {
            return {
                statusCode: 200,
                items: items
            }
        })
}

function deleteTask(ide){
    return Item.deleteOne({
        _id:ide
    })
    .then(task=>{
        return{
            statusCode:200,
            message:"Task deleted successfully"
        }
    })
}


module.exports = {
    addItem,
    getItem,
    deleteTask
}