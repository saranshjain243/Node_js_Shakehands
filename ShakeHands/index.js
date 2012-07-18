var server = require("./server");
var router = require("./router");
var layout = require("./layout");
var home=require("./home");
var pnt=require("./peoplentweets");
var login=require("./login")

var databaseUrl = "mydb"; // "username:password@example.com/mydb"
var collections = ["users1","tweets1","followers","test1"]
var db = require("mongojs").connect(databaseUrl, collections);

//db.followers.remove({uemail: "@ta=uname%3D"});

/*db.followers.save({uemail: "sanju@gmail.com", femail : [ { "email":"sanjeevtagra@gmail.com" }, { "email":"smith@anna.com" }],nof:2}, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("follower added");
});*/
var handle = {}
handle["/home.html"] = home.home;
handle["/change"] = home.change;
handle["/people"] = pnt.people;
handle["/tweets"] = pnt.tweets;
handle["/profile"] = home.profile;
handle["/profile.html"] = home.profile;
handle["/upload_html"] = home.upload_html;
handle["/upload"] = home.upload;
handle["/uploadform"] = home.uploadform;
handle["/changeform"] = home.changeform;
handle["/login_html"] = login.start;
handle["/logout.html"] = login.logout;
handle["/start"] = login.start;
handle["/"] = login.start;
handle[""] = login.start;
handle["/delete1"] = pnt.delete1;
handle["/home"] = home.home;
handle["/Home"] = home.Home;
handle["/show"] = layout.show;
handle["/signup"]=login.signup;
handle["/signup.html"]=login.signup_html;
handle["/shakehands.png"]=layout.shakehands_png;
handle["/signup.jpg"]=layout.signup_jpg;
handle["/default.jpg"]=layout.default_jpg;
handle["/bg.jpg"]=layout.bg_jpg;
handle["/sh.jpg"]=layout.sh_jpg;
handle["/newHome.css"]=layout.newHome_css;
handle["/newlogin.css"]=layout.newlogin_css;
handle["/newSignup.css"]=layout.newSignup_css;
handle["/logo.png"]=layout.logo_png;
handle["/direct"]=home.direct;
handle["/search1"]=pnt.search1;
handle["/provideData"]=pnt.provideData;
handle["/provideData1"]=pnt.provideData1;
handle["/follow"]=pnt.follow;
handle["/unfollow"]=pnt.unfollow;
handle["/following.html"]=pnt.following;
handle["/jQuery.js"]=layout.jquery;
server.start(router.route, handle,db);
