
from flask import Flask,jsonify,request,url_for
from flask_pymongo import PyMongo
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Datathon"
mongo = PyMongo(app)
@app.route("/hi")
def hello():
    return jsonify({"data": a})

@app.route("/data")
def index():
    return '''
<form method="POST" action="/create" enctype="multipart/form-data">

</form> 

'''
a=[2,3,4,47]
@app.route('/create',methods=['POST'])
def create():
   mongo.db.users.insert_one({'data':a})
   
   
   return 'Done'

if __name__=='__main__':
    app.run(debug=True)
    
    