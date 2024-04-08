//Name
var nameGroup=app.activeDocument.layerSets.getByName('Name');
var nameLayer=nameGroup.layers[0];

//Designation
// var RoleGroup=app.activeDocument.layerSets.getByName('Role');
// var RoleLayer=RoleGroup.layers[0];

// //RegNo
// var TeamGroup=app.activeDocument.layerSets.getByName('Team');
// var TeamLayer=TeamGroup.layers[0];


function savePDF(folder,name){
    var doc=app.activeDocument;
    var file= new File(doc.path+'/'+folder+'/'+name+'.jpeg');

    var opts= new JPEGSaveOptions();
    // var opts= new PDFSaveOptions();
    doc.saveAs(file,opts,true);
}

function savePDF(name){
    var doc=app.activeDocument;
    var file= new File(doc.path+'/'+name+'.jpeg');

    var opts= new JPEGSaveOptions();
    // var opts= new PDFSaveOptions();
    doc.saveAs(file,opts,true);
}

var studentNames=["K Tharun Reddy","Chetan Chandra A","Akash R Prabhu","Dharshini T R","Naga Sai Kumar","K Neethika Reddy","Vinay Kumar S","V Koushik Reddy","Swamy Mohan P","Sai Amareswar","Chandana S","Chetan Chandra A","Chaitanya C","Subiksha G K","P Satya gopal","Sarang S Nair","Sandra prasanth","Megavarshini M","Akash R Prabhu","Chandana S","Balanishanth.K","Karthikeyan Thangavelu","Vidhush.S","Abishek Roy B J","Shri Pranav S","Sykam Sumanjali","Charishma T","Sarah Michelle","Matam Preethi","Shruti Bala","Varnika Ramkumar","Maheshvar","Karthikeyan P","Guru Prasad K S","Logeswaran","Manish S","Adithya","Abishek","M Praveen kumar","T Subhash Gupta","Ala Datta Sai Kumar","Ganapathi Gundapaneni","Sai Sujan Kandukuri","Golla Thanuja","Veda Yasaswani Suseela","M Churnika","Nitheesh M","Nalla Sai Charith","Aswadh krishna","Prabisha K E","Poornima hariharan","S Sneha","Cheerla Dharani","Dharshini T R","Mrudula Menon","Aswathi S","Sneha J","Preetham S","Naga Sai Kumar","Aswadh Krishna","Poornima Hariharan","Prabisha Kaitheri","Cheerla Dharani","S Sneha","K Neethika Reddy","V V Badri Prasad","M Harika","Vinay Kumar S","Satyesh T","Shasank P","Jayan M","Swaroop B","M Churnika","V Koushik Reddy","T Sai Harshit","Gokul Krishna L","S Manideep","K Bharath Suhas","Nikhilesh Movva","Swamy Mohan P","Durga Rao G","M Dushyanth Reddy","Abhinav B","Sunku Rohit","Golla Thanuja","Veda Yasaswani","Sai Amareswar","D Yeshwanth","Chirranjeavi M","Aparna A","S Akash","M.Harini","Gourinandana.S","A Poornima","Krishnendhu V","Fathimath Sahla K A","Aarabhi Ajith","Tarun Subramanian","Nandana Nair","S Ayshuvarya Meena","Sujith sukumaran","Samitha. J","Aswedhar G Dhanesh","Jishin Shaji K","Hemanth sai Vardhan B","Sai chandan","K Sri Ram Siddartha","Abhishek shyam","Chandana S","R. Gowthamee Chandra","V. Lakshmi Pravallika","Kona Deepak"];


function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

for(i in studentNames){
    //alert(studentNames[i]);
    nameLayer.textItem.contents=strip(studentNames[i]);
    //RoleLayer.textItem.contents=strip(role[i]);
    
    savePDF(strip(studentNames[i])); // Type the desired output file name here.
};

// for(i in studentNames){
//     //alert(studentNames[i]);
//     nameLayer.textItem.contents=strip(studentNames[i]);
//     RoleLayer.textItem.contents=strip(role[i]);
//     TeamLayer.textItem.contents=strip(team[i]);
//     savePDF(strip(team[i]),strip(team[i])+'_'+strip(role[i])+'_'+strip(studentNames[i])); // Type the desired output file name here.
// };


