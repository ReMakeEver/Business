var lin = "Linear";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xL = "FillX,VLeft";var xC = "FillX,VCenter";var xR = "FillX,VRight";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FillY,Horizontal";var yV = "FillY,Vertical";var yL = "FillY,VLeft";var yC = "FillY,VCenter";var yR = "FillY,VRight";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyL = "FillXY,VLeft";var xyC = "FillXY,VCenter";var xyR = "FillXY,VRight";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Vertical,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var h = "Hide";var s = "Show";
var t = true;var f = false;var n = null;
var FL = "SlideFromLeft";var TL = "SlideToLeft";var FR = "SlideFromRight";var TR = "SlideToRight";
var black = "#000000";var blue = "#0000FF";var lime = "#00FF00";var aqua = "#00FFFF";var red = "#FF0000";var orange = "#FFAA00";var tan = "#FFBB00";var sun = "#FFCC00";var gray = "#EEEEEE";var white = "#FFFFFF";
var root = "/storage/emulated/0/NoteMe/";
var name = "";var state = "";var named = "";
function OnStart(){
 lay = app.CreateLayout(lin, xy);
  fileName = app.CreateText("", 1,.1);
  layForScroll = app.CreateLayout(lin, x);
   scroller = app.CreateScroller(1,.7);
    editLay = app.CreateLayout(lin, x);
     edit = app.CreateTextEdit("", 1);
  menu = app.CreateLayout(lin, xH);
   filesTxt = app.CreateText(">", .2,.2, "Left");
    filesLay = app.CreateLayout(lin,  yVC);
     fileScroll = app.CreateScroller(.5,1, "Center");
      fileLay = app.CreateLayout(lin, yVC);
       file1 = app.CreateText("", .5,.05);
       file2 = app.CreateText("", .5,.05);
       file3 = app.CreateText("", .5,.05);
       file4 = app.CreateText("", .5,.05);
       file5 = app.CreateText("", .5,.05);
       file6 = app.CreateText("", .5,.05);
       file7 = app.CreateText("", .5,.05);
       file8 = app.CreateText("", .5,.05);
       file9 = app.CreateText("", .5,.05);
       file10 = app.CreateText("", .5,.05);
       file11 = app.CreateText("", .5,.05);
       file12 = app.CreateText("", .5,.05);
       file13 = app.CreateText("", .5,.05);
       file14 = app.CreateText("", .5,.05);
       file15 = app.CreateText("", .5,.05);
       file16 = app.CreateText("", .5,.05);
       file17 = app.CreateText("", .5,.05);
       file18 = app.CreateText("", .5,.05);
       file19 = app.CreateText("", .5,.05);
       file20 = app.CreateText("", .5,.05);
       file21 = app.CreateText("", .5,.05);
       file22 = app.CreateText("", .5,.05);
       file23 = app.CreateText("", .5,.05);
       file24 = app.CreateText("", .5,.05);
       file25 = app.CreateText("", .5,.05);
       file26 = app.CreateText("", .5,.05);
       file27 = app.CreateText("", .5,.05);
       file28 = app.CreateText("", .5,.05);
       file29 = app.CreateText("", .5,.05);
       file30 = app.CreateText("", .5,.05);
   saveTxt = app.CreateText("save", .6,.3,  "Right");
    saveLay = app.CreateLayout(lin, xyVC);
     editTxt = app.CreateTextEdit("file name here", 1);
     createTxt = app.CreateText("Create File");
  
 app.AddLayout(lay);
  lay.AddChild(fileName);
  lay.AddChild(layForScroll);
   layForScroll.AddChild(scroller);
    scroller.AddChild(editLay);
     editLay.AddChild(edit);
  lay.AddChild(menu);
   menu.AddChild(filesTxt);
   menu.AddChild(saveTxt);
 app.AddLayout(filesLay);
  filesLay.AddChild(fileScroll);
   fileScroll.AddChild(fileLay);
    fileLay.AddChild(file1);
    fileLay.AddChild(file2);
    fileLay.AddChild(file3);
    fileLay.AddChild(file4);
    fileLay.AddChild(file5);
    fileLay.AddChild(file6);
    fileLay.AddChild(file7);
    fileLay.AddChild(file8);
    fileLay.AddChild(file9);
    fileLay.AddChild(file10);
    fileLay.AddChild(file11);
    fileLay.AddChild(file12);
    fileLay.AddChild(file13);
    fileLay.AddChild(file14);
    fileLay.AddChild(file15);
    fileLay.AddChild(file16);
    fileLay.AddChild(file17);
    fileLay.AddChild(file18);
    fileLay.AddChild(file19);
    fileLay.AddChild(file20);
    fileLay.AddChild(file21);
    fileLay.AddChild(file22);
    fileLay.AddChild(file23);
    fileLay.AddChild(file24);
    fileLay.AddChild(file25);
    fileLay.AddChild(file26);
    fileLay.AddChild(file27);
    fileLay.AddChild(file28);
    fileLay.AddChild(file29);
    fileLay.AddChild(file30);
 app.AddLayout(saveLay);
  saveLay.AddChild(editTxt);
  saveLay.AddChild(createTxt);
     
 lay.SetBackColor(orange);
  fileName.SetTextSize(32);
  fileName.SetTextColor(white);
  fileName.SetTouchable(t);fileName.SetOnTouch(saveShow);
  edit.SetBackColor(orange);
  edit.SetTextColor(black);
  edit.SetSize(1,.7);
  menu.SetBackColor(tan);
  menu.SetSize(1,.2);
   filesTxt.SetTextSize(72);
   filesTxt.SetTextColor(white);
   filesTxt.SetTouchable(t);filesTxt.SetOnTouch(showFile);
    filesLay.SetVisibility(h);
    filesLay.SetBackColor(sun);
    filesLay.SetSize(.5,1);
   saveTxt.SetTextSize(32);
   saveTxt.SetTextColor(white);
   saveTxt.SetTouchable(t);saveTxt.SetOnTouchDown(saveFile);
    saveLay.SetVisibility(h);
    saveLay.SetBackColor(sun);
     editTxt.SetOnTouch(empty);
     createTxt.SetTextSize(32);
     createTxt.SetTextColor(white);
     createTxt.SetTouchable(t);createTxt.SetOnTouch(saveStart);
  
 app.SetOnKey(goBack);
 
 exist = app.FolderExists(root);
 if(exist==false){
  app.MakeFolder(root);
 }
 fileNamed = file1.GetText();
 fileTitles();
 app.SetOrientation("portrait");
}
function vib(){
 app.Vibrate("0,100,0,200,0,300,0,400");
}
function showFile(){
 filesLay.Animate(FL);
}
function saveFile(){
 txt = edit.GetText();
 if(fileNamed.substring().match(/[.]/g)){
  app.WriteFile(root+fileNamed, txt);
 }else{
  saveShow();
 }
}
function saveShow(){
 saveLay.Animate(FR);
 state = "Shown";
}
function saveStart(){
 txt = edit.GetText();
 filesLay.Animate(TL);
 if(state=="Shown"){
  saveLay.Animate(TR);
 }
 thisName = editTxt.GetText();
 if(thisName.match(/[.]/g)){
  app.WriteFile(root+thisName, txt);
  named = thisName;
 }else{
  app.WriteFile(root+thisName+".txt", txt);
  named = thisName+".txt";
 }
 open = app.ReadFile(root+named);
 fileName.SetText(named);
 fileNamed = named;
 edit.SetText(open);
}
function empty(){
 editTxt.SetText("");
}
function goBack(){
 keyState = app.IsKeyboardShown();
 if(keyState=="show"){
  app.HideKeyboard();
 }
}
function fileTitles(){
 filesList = app.ListFolder(root);
 file1.SetText(filesList[0]);file2.SetText(filesList[1]);file3.SetText(filesList[2]);file4.SetText(filesList[3]);file5.SetText(filesList[4]);file6.SetText(filesList[5]);file7.SetText(filesList[6]);file8.SetText(filesList[7]);file9.SetText(filesList[8]);file10.SetText(filesList[9]);file11.SetText(filesList[10]);file12.SetText(filesList[11]);file13.SetText(filesList[12]);file14.SetText(filesList[13]);file15.SetText(filesList[14]);file16.SetText(filesList[15]);file17.SetText(filesList[16]);file18.SetText(filesList[17]);file19.SetText(filesList[18]);file20.SetText(filesList[19]);file21.SetText(filesList[20]);file22.SetText(filesList[21]);file23.SetText(filesList[22]);file24.SetText(filesList[23]);file25.SetText(filesList[24]);file26.SetText(filesList[25]);file27.SetText(filesList[26]);file28.SetText(filesList[27]);file29.SetText(filesList[28]);file30.SetText(filesList[29]);
 setFile1();setFile2();setFile3();setFile4();setFile5();setFile6();setFile7();setFile8();setFile9();setFile10();setFile11();setFile12();setFile13();setFile14();setFile15();setFile16();setFile17();setFile18();setFile19();setFile20();setFile21();setFile22();setFile23();setFile24();setFile25();setFile26();setFile27();setFile28();setFile29();setFile30();
}
 function setFile1(){
  f1 = file1.GetText();
  if(f1.substring().match(/undefined/g)){
   file1.SetTextColor(sun);
  }else{
   file1.SetTextColor(white);
   file1.SetTouchable(t);file1.SetOnTouch(openF1);
  }
 }
  function openF1(){
   f1 = file1.GetText();
   open = app.ReadFile(root+f1);
   edit.SetText(open);
   fileName.SetText(f1);fileNamed = f1;
   filesLay.Animate(TL);
  }
 function setFile2(){
  f2 = file2.GetText();
  if(f2.substring().match(/undefined/g)){
   file2.SetTextColor(sun);
  }else{
   file2.SetTextColor(white);
   file2.SetTouchable(t);file2.SetOnTouch(openF2);
  }
 }
  function openF2(){
   f2 = files2.GetText();
   open = app.ReadFile(root+f2);
   edit.SetText(open);
   fileName.SetText(f2);fileNamed = f2;
   filesLay.Animate(TL);
  }
 function setFile3(){
  f3 = file3.GetText();
  if(f3.substring().match(/undefined/g)){
   file3.SetTextColor(sun);
  }else{
   file3.SetTextColor(white);
   file3.SetTouchable(t);file3.SetOnTouch(openF3);
  }
 }
  function openF3(){
   f3 = file3.GetText();
   open = app.ReadFile(root+f3);
   edit.SetText(open);
   fileName.SetText(f3);fileNamed = f3;
   filesLay.Animate(TL);
  }
 function setFile4(){
  f4 = file4.GetText();
  if(f4.substring().match(/undefined/g)){
   file4.SetTextColor(sun);
  }else{
   file4.SetTextColor(white);
   file4.SetTouchable(t);file4.SetOnTouch(openF4);
  }
 }
 function openF4(){
   f4 = file4.GetText();
   open = app.ReadFile(root+f4);
   edit.SetText(open);
   fileName.SetText(f4);fileNamed = f4;
   filesLay.Animate(TL);
  }
 function setFile5(){
  f5 = file5.GetText();
  if(f5.substring().match(/undefined/g)){
   file5.SetTextColor(sun);
  }else{
   file5.SetTextColor(white);
   file5.SetTouchable(t);file5.SetOnTouch(openF5);
  }
 }
  function openF5(){
   f5 = file5.GetText();
   open = app.ReadFile(root+f5);
   edit.SetText(open);
   fileName.SetText(f5);fileNamed = f5;
   filesLay.Animate(TL);
  }
 function setFile6(){
  f6 = file6.GetText();
  if(f6.substring().match(/undefined/g)){
   file6.SetTextColor(sun);
  }else{
   file6.SetTextColor(white);
   file6.SetTouchable(t);file6.SetOnTouch(openF6);
  }
 }
  function openF6(){
   f6 = file6.GetText();
   open = app.ReadFile(root+f6);
   edit.SetText(open);
   fileName.SetText(f6);fileNamed = f6;
   filesLay.Animate(f6);
  }
 function setFile7(){
  f7 = file7.GetText();
  if(f7.substring().match(/undefined/g)){
   file7.SetTextColor(sun);
  }else{
   file7.SetTextColor(white);
   file7.SetTouchable(t);file7.SetOnTouch(openF7);
  }
 }
  function openF7(){
   f7 = file7.GetText();
   open = app.ReadFile(root+f7);
   edit.SetText(open);
   fileName.SetText(f7);fileNamed = f7;
   filesLay.Animate(TL);
  }
 function setFile8(){
  f8 = file8.GetText();
  if(f8.substring().match(/undefined/g)){
   file8.SetTextColor(sun);
  }else{
   file8.SetTextColor(white);
   file8.SetTouchable(t);file8.SetOnTouch(openF8);
  }
 }
  function openF8(){
   f8 = file8.GetText();
   open = app.ReadFile(root+f8);
   edit.SetText(open);
   fileName.SetText(f8);fileNamed = f8;
   filesLay.Animate(TL);
  }
 function setFile9(){
  f9 = file9.GetText();
  if(f9.substring().match(/undefined/g)){
   file9.SetTextColor(sun);
  }else{
   file9.SetTextColor(white);
   file9.SetTouchable(t);file9.SetOnTouch(openF9);
  }
 }
  function openF9(){
   f9 = file9.GetText();
   open = app.ReadFile(root+f9);
   edit.SetText(open);
   fileName.SetText(f9);fileNamed = f9;
   filesLay.Animate(TL);
  }
 function setFile10(){
  f10 = file10.GetText();
  if(f10.substring().match(/undefined/g)){
   file10.SetTextColor(sun);
  }else{
   file10.SetTextColor(white);
   file10.SetTouchable(t);file10.SetOnTouch(openF10)
  }
 }
  function openFile10(){
   f10 = file10.GetText();
   open = app.ReadFile(root+f10);
   edit.SetText(open);
   fileName.SetText(f10);fileNamed = f10;
   filesLay.Animate(TL);
  }
 function setFile11(){
  f11 = file11.GetText();
  if(f11.substring().match(/undefined/g)){
   file11.SetTextColor(sun);
  }else{
   file11.SetTextColor(white);
   file11.SetTouchable(t);file11.SetOnTouch(openF11);
  }
 }
  function openF11(){
   f11 = file11.GetText();
   open = app.ReadFile(root+f12);
   edit.SetText(open);
   fileName.SetText(f11);fileNamed = f11;
   filesLay.Animate(TL);
  }
 function setFile12(){
  f12 = file12.GetText();
  if(f12.substring().match(/undefined/g)){
   file12.SetTextColor(sun);
  }else{
   file12.SetTextColor(white);
   file12.SetTouchable(t);file12.SetOnTouch(openF12);
  }
 }
  function openF12(){
   f12 = file12.GetText();
   open = app.ReadFile(root+f12);
   edit.SetText(open);
   fileName.SetText(f12);fileNamed = f12;
   filesLay.Animate(TL);
  }
 function setFile13(){
  f13 = file13.GetText();
  if(f13.substring().match(/undefined/g)){
   file13.SetTextColor(sun);
  }else{
   file13.SetTextColor(white);
   file13.SetTouchable(t);file13.SetOnTouch(openF13);
  }
 }
  function openF13(){
   f13 = file13.GetText();
   open = app.ReadFile(root+f13);
   edit.SetText(open);
   fileName.SetText(f13);fileNamed = f13;
   filesLay.Animate(TL);
  }
 function setFile14(){
  f14 = file14.GetText();
  if(f14.substring().match(/undefined/g)){
   file14.SetTextColor(sun);
  }else{
   file14.SetTextColor(white);
   file14.SetTouchable(t);file14.SetOnTouch(openF14);
  }
 }
  function openF14(){
   f14 = file14.GetText();
   open = app.ReadFile(root+f14);
   edit.SetText(open);
   fileName.SetText(f14);fileNamed = f14;
   filesLay.Animate(TL);
  }
 function setFile15(){
  f15 = file15.GetText();
  if(f15.substring().match(/undefined/g)){
   file15.SetTextColor(sun);
  }else{
   file15.SetTextColor(white);
   file15.SetTouchable(t);file15.SetOnTouch(openF15);
  }
 }
  function openF15(){
   f15 = file15.SetText();
   open = app.ReadFile(root+f15);
   edit.SetText(open);
   fileName.SetText(f15);fileNamed = f15;
   filesLay.Animate(TL);
  }
 function setFile16(){
  f16 = file16.GetText();
  if(f16.substring().match(/undefined/g)){
   file16.SetTextColor(sun);
  }else{
   file16.SetTextColor(sun);
   file16.SetTouchable(t);file16.SetOnTouch(openF16);
  }
 }
  function openF16(){
   f16 = file16.GetText();
   open = app.ReadFile(root+f16);
   edit.SetText(open);
   fileName.SetText(f16);fileNamed = f16;
   filesLay.Animate(TL);
  }
 function setFile17(){
  f17 = file17.GetText();
  if(f17.substring().match(/undefined/g)){
   file17.SetTextColor(sun);
  }else{
   file17.SetTextColor(orange);
   file17.SetTouchable(t);file17.SetOnTouch(openF17);
  }
 }
  function openF17(){
   f17 = file17.GetText();
   open = app.ReadFile(root+f17);
   edit.SetText(open);
   fileName.SetText(f17);fileNamed = f17;
   filesLay.Animate(TL);
  }
 function setFile18(){
  f18 = file18.GetText();
  if(f18.substring().match(/undefined/g)){
   file18.SetTextColor(sun);
  }else{
   file18.SetTextColor(orange);
   file18.SetTouchable(t);file18.SetOnTouch(openF18);
  }
 }
  function openF18(){
   f18 = file18.GetText();
   open = app.ReadFile(root+f18);
   edit.SetText(open);
   fileName.SetText(f18);fileNamed = f18;
   filesLay.Animate(TL);
  }
 function setFile19(){
  f19 = file19.GetText();
  if(f19.substring().match(/undefined/g)){
   file19.SetTextColor(sun);
  }else{
   file19.SetTextColor(orange);
   file19.SetTouchable(t);file19.SetOnTouch(openF19);
  }
 }
  function openF19(){
   f19 = file19.GetText();
   open = app.ReadFile(root+f19);
   edit.SetText(open);
   fileName.SetText(f19);fileNamed = f19;
   filesLay.Animate(TL);
  }
 function setFile20(){
  f20 = file20.GetText();
  if(f20.substring().match(/undefined/g)){
   file20.SetTextColor(sun);
  }else{
   file20.SetTextColor(orange);
   file20.SetTouchable(t);file20.SetOnTouch(openF20);
  }
 }
  function openF20(){
   f20 = file20.GetText();
   open = app.ReadFile(root+f20);
   edit.SetText(open);
   fileName.SetText(f20);fileNamed = f20;
   filesLay.Animate(TL);
  }
 function setFile21(){
  f21 = file21.GetText();
  if(f21.substring().match(/undefined/g)){
   file21.SetTextColor(sun);
  }else{
   file21.SetTextColor(orange);
   file21.SetTouchable(t);file21.SetOnTouch(openF21);
  }
 }
  function openF21(){
   f21 = file21.GetText();
   open = app.ReadFile(root+f21);
   edit.SetText(root+f21);
   fileName.SetText(f21);fileNamed = f21;
   filesLay.Animate(TL);
  }
 function setFile22(){
  f22 = file22.GetText();
  if(f22.substring().match(/undefined/g)){
   file22.SetTextColor(sun);
  }else{
   file22.SetTextColor(orange);
   file22.SetTouchable(t);file22.SetOnTouch(openF22);
  }
 }
  function openF22(){
   f22 = file22.GetText();
   open = app.ReadFile(root+f22);
   edit.SetText(open);
   fileName.SetText(f22);fileNamed = f22;
   filesLay.Animate(TL);
  }
 function setFile23(){
  f23 = file23.GetText();
  if(f23.substring().match(/undefined/g)){
   file23.SetTextColor(sun);
  }else{
   file23.SetTextColor(orange);
   file23.SetTouchable(t);file23.SetOnTouch(openF23);
  }
 }
  function openF23(){
   f23 = file23.GetText();
   open = app.ReadFile(root+f23);
   edit.SetText(open);
   fileName.SetText(f23);fileNamed = f23;
   filesLay.Animate(TL);
  }
 function setFile24(){
  f24 = file24.GetText();
  if(f24.substring().match(/undefined/g)){
   file24.SetTextColor(sun);
  }else{
   file24.SetTextColor(white);
   file24.SetTouchable(t);file24.SetOnTouch(openF24);
  }
 }
  function openF24(){
   f24 = file24.GetText();
   open = app.ReadFile(root+f24);
   edit.SetText(open);
   fileName.SetText(f24);fileNamed = f24;
   filesLay.Animate(TL);
  }
 function setFile25(){
  f25 = file25.GetText();
  if(f25.substring().match(/undefined/g)){
   file25.SetTextColor(sun);
  }else{
   file25.SetTextColor(white);
   file25.SetTouchable(t);file25.SetOnTouch(openF25);
  }
 }
  function openF25(){
   f25 = file25.GetText();
   open = app.ReadFile(root+f25);
   edit.SetText(open);
   fileName.SetText(f25);fileNamed = f25;
   filesLay.Animate(TL);
  }
 function setFile26(){
  f26 = file26.GetText();
  if(f26.substring().match(/undefined/g)){
   file26.SetTextColor(sun);
  }else{
   file26.SetTextColor(white);
   file26.SetTouchable(t);file26.SetOnTouch(openF26);
  }
 }
  function openF26(){
   f26 = file26.GetText();
   open = app.ReadFile(root+f26);
   edit.SetText(open);
   fileName.SetText(f26);fileNamed = f26;
   filesLay.Animate(TL);
  }
 function setFile27(){
  f27 = file27.GetText();
  if(f27.substring().match(/undefined/g)){
   file27.SetTextColor(sun);
  }else{
   file27.SetTextColor(white);
   file27.SetTouchable(t);file27.SetOnTouch(openF27);
  }
 }
  function openF27(){
   f27 = file27.GetText();
   open = app.ReadFile(root+f27);
   edit.SetText(open);
   fileName.SetText(f27);fileNamed = f27;
   filesLay.Animate(TL);
  }
 function setFile28(){
  f28 = file28.GetText();
  if(f28.substring().match(/undefined/g)){
   file28.SetTextColor(sun);
  }else{
   file28.SetTextColor(white);
   file28.SetTouchable(t);file28.SetOnTouch(openF28);
  }
 }
  function openF28(){
   f28 = file28.GetText();
   open = app.ReadFile(root+f28);
   edit.SetText(open);
   fileName.SetText(f28);fileNamed = f28;
   filesLay.Animate(TL);
  }
 function setFile29(){
  f29 = file29.GetText();
  if(f29.substring().match(/undefined/g)){
   file29.SetTextColor(sun);
  }else{
   file29.SetTextColor(white);
   file29.SetTouchable(t);file29.SetOnTouch(openF29);
  }
 }
  function openF29(){
   f29 = file29.GetText();
   open = app.ReadFile(root+f29);
   edit.SetText(open);
   fileName.SetText(f29);fileNamed = f29;
   filesLay.Animate(TL);
  }
 function setFile30(){
  f30 = file30.GetText();
  if(f30.substring().match(/undefined/g)){
   file30.SetTextColor(sun);
  }else{
   file30.SetTextColor(white);
   file30.SetTouchable(t);file30.SetOnTouch(openF30);
  }
 }
  function openF30(){
   f30 = file30.GetText();
   open = app.ReadFile(root+f30);
   edit.SetText(open);
   fileName.SetText(f30);fileNamed = f30;
   filesLay.Animate(TL);
  }