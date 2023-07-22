let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
var mongoUrl ='mongodb+srv://prathama-code:MWYhE8Vnwi4TKUHI@cluster0.p7sc7i8.mongodb.net/?retryWrites=true&w=majority' ;
let client = new MongoClient(mongoUrl);

async function dbConnect() {
    await client.connect();
}
let db = client.db('zomapp');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor){
            output.push(data);
        }
        cursor.closed ;
    }catch{
        output.push({"Error":"Error in getData"})
    }
    return output;
}

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data)
    }
    catch(err){
        output = {"response":"Error in postData"}
    }
    return output
}

async function updateOrder(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    } catch(err){
        output = {"response":"Error in update data"}
    }
    return output
}

async function deleteOrder(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    } catch(err){
        output = {"response":"Error in delete data"}
    }
    return output
}


module.exports = {
    dbConnect,
    getData,
    postData,
    updateOrder,
    deleteOrder 
}