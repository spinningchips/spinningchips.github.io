var newButton;

function loadiframe(i){
  document.getElementById('gameviewer').width = 1000;
  document.getElementById('gameviewer').height = 600;
  document.getElementById('gameviewer').src = gamelist[i].embed;
  document.getElementById('description').textContent = gamelist[i].description;
  document.getElementById('gameviewer').src = document.getElementById('gameviewer').src;
}

function makebuttons(){
  for (let i = 0; i < gamelist.length; i++) {
    newButton = document.createElement('button');
    //newButton.textContent = gamelist[i].title+i;
    newButton.id = "gb"+i;
    document.body.appendChild(newButton);
    document.getElementById("gb"+i).setAttribute( "onClick", "loadiframe("+i+");" );
    document.getElementById("gb"+i).style.width = '192px';
    document.getElementById("gb"+i).style.height = '192px';
    document.getElementById("gb"+i).style.background = 'url('+gamelist[i].image+') 100% 100%';
  }
}
