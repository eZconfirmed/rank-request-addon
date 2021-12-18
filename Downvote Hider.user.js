// ==UserScript==
// @name         Downvote Hider
// @namespace    https://scoresaber.com/ranking/requests
// @version      0.1
// @description  try to take over the world!
// @author       eZconfirmed
// @match        https://scoresaber.com/ranking/requests
// @icon         https://scoresaber.com/images/logo.svg
// @grant        none
// ==/UserScript==

function wait(func) {
    setTimeout(func, 500);
}


function tableChangeJ(number) {
  var tableLen = document.getElementsByTagName("tbody")[number].rows.length;
  for (var i = 0; i < tableLen; i++)
  {
  var a = document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i];
      if (a == undefined)
      {
      }
      else if (parseInt(a.getElementsByClassName("rt_downvotes")[0].innerHTML) > 0)
      {
          a.setAttribute("id", "hideElement");
      }
      else if (parseInt(a.getElementsByClassName("qat_downvotes")[0].innerHTML) > 0)
      {
          a.setAttribute("id", "hideElement");
      }

  }
   var newTableLen = document.getElementsByTagName("tbody")[number].rows.length;
  for (var j = 0; j < newTableLen; j++)
  {
          var b = document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[j];
      if (Math.ceil(3-(parseInt(b.getElementsByClassName("rt_upvotes")[0].innerHTML) / (parseInt(b.getElementsByClassName("diffs_created_at")[0].getElementsByTagName("b")[0].innerHTML)))) <= 0)
      {
          b.getElementsByClassName("song-info")[0].innerHTML = b.getElementsByClassName("song-info")[0].innerHTML + "<p><b>No votes required! Ready for qualification!</b></p>";
      }
      else
      {
         b.getElementsByClassName("song-info")[0].innerHTML = b.getElementsByClassName("song-info")[0].innerHTML + "<p>" + Math.ceil(3-(parseInt(b.getElementsByClassName("rt_upvotes")[0].innerHTML) / (parseInt(b.getElementsByClassName("diffs_created_at")[0].getElementsByTagName("b")[0].innerHTML)))) + " RT member(s) required</p>";
      }
  }
}

function toggle(number) {
    var tableLen = document.getElementsByTagName("tbody")[number].rows.length;
    for (var i = 0; i < tableLen; i++)
    {
        if (parseInt(document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].getElementsByClassName("rt_downvotes")[0].innerHTML) > 0)
      {
          document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].setAttribute("id", "hideElement");
      }
      else if (parseInt(document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].getElementsByClassName("qat_downvotes")[0].innerHTML) > 0)
      {
          document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].setAttribute("id", "hideElement");
      }


        if(document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].style.display == "none" && document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].id == "hideElement")
        {
            document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].style.display = "";
        }
       else if (document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].style.display == "" && document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].id == "hideElement")
        {
            document.getElementsByTagName("tbody")[number].getElementsByClassName("table-item")[i].style.display = "none";
        }
    }
}

function buttonIdToggle() {
    if (document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id == "downvotesShown")
    {
        document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id = "downvotesHidden";
        document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].getElementsByTagName("span")[0].innerHTML = "Show Downvoted Maps";
        toggle(0);
        toggle(1);
    }
    else
    {
        document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id = "downvotesShown";
        document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].getElementsByTagName("span")[0].innerHTML = "Hide Downvoted Maps";
        toggle(0);
        toggle(1);
    }
}



function addButton() {
    document.getElementsByClassName("section")[0].getElementsByTagName("button")[1].insertAdjacentElement("afterend", document.createElement("button"));
    document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].setAttribute("id", "downvotesShown");
    document.getElementById("downvotesShown").style.marginLeft = "4px";
    document.getElementById("downvotesShown").setAttribute("class", "button is-small svelte-15752pe");
    document.getElementById("downvotesShown").appendChild(document.createElement("span")).appendChild(document.createTextNode("Hide Downvoted Maps"));
}

wait(addButton);

function addEvent() {
document.getElementById("downvotesShown").addEventListener("click", buttonIdToggle);
}

wait(addEvent);

function call0() {
    tableChangeJ(0);
}
wait(call0);

function call1() {
    tableChangeJ(1);
}

function tableChange3() {
document.getElementsByClassName("button is-small")[0].onclick = function() {wait(call1())};
}

function bigListCheck() {
    if (document.getElementsByTagName("tbody")[1] == undefined)
    {}
    else {
    var tableLen = document.getElementsByTagName("tbody")[1].rows.length;
    for (var i = 0; i < tableLen; i++)
    {
        if (parseInt(document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].getElementsByClassName("rt_downvotes")[0].innerHTML) > 0)
      {
          document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].setAttribute("id", "hideElement");
          console.log(i + document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i]);
      }
      else if (parseInt(document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].getElementsByClassName("qat_downvotes")[0].innerHTML) > 0)
      {
          document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].setAttribute("id", "hideElement");
          console.log(i + document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i]);
      }


        if((document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id == "downvotesHidden" || document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id == "false") && document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].id == "hideElement")
        {
            console.log(document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id + " hidden");
            document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].style.display = "none";
        }
       else if ((document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id == "downvotesHidden" || document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id == "false") && document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].id == "hideElement")
        {
            console.log(document.getElementsByClassName("section")[0].getElementsByTagName("button")[2].id + " shown");
            document.getElementsByTagName("tbody")[1].getElementsByClassName("table-item")[i].style.display = "";
        }
    }
    }
}

function addEvent2() {
document.getElementsByClassName("button is-small")[0].addEventListener("click", bigListCheck);
}

wait(addEvent2);

//wait(tableChange3);