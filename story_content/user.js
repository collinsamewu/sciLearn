function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5c8vep8jo3n":
        Script1();
        break;
      case "6DcGehBRBDZ":
        Script2();
        break;
  }
}

function Script1()
{
  document.activeElement.blur();
}

function Script2()
{
  var player=GetPlayer();

var someText = player.GetVar("TextEntry");

someText = someText.replace(/(\r\n|\n|\r)/gm, "");

player.SetVar("TextEntry", someText);
}

