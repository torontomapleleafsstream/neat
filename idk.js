function pls() {
    document.getElementById["player"].src = "html";
}

function toggleChat() {
    if (document.getElementById("chat").style.display == 'inline-block'){
    document.getElementById("chat").style.display = "none";
    document.getElementById("player").style.display = "block";
    document.getElementById("toggle").innerHTML = "Show Chat";
    document.getElementById("toggle").href = "show:the:chat";
    }    
    else {
    document.getElementById("chat").style.display = "inline-block";
    document.getElementById("player").style.display = "inline";
    document.getElementById("toggle").innerHTML = "Hide Chat";
    document.getElementById("toggle").href = "hide:the:chat";
}
}

function getXmlObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP")
    } else {}
}

function refreshHeader(){
    var r = getXmlObject();
    var url = "header.php?" + Math.random();
    var active = '0';
    if (r.readyState == 4 || r.readyState == 0) {

        r.open("GET", url, true);

        r.onreadystatechange = function () {
            if (r.readyState == 4) {
                if (r.responseText && r.status == 200) {
                    if (r.responseText != window.previous && r.responseText != 'no') {
                        document.getElementById("topstuff").innerHTML = r.responseText;
                        window.previous = r.responseText;
                    }
                }
            }
        };

        r.send(null);
    }
}

function cssChanger(){
    var x = getXmlObject();
    x.open('GET', 'csstype.txt?' + Math.random());
    x.onreadystatechange = function () {
      if (x.readyState == 4) {
        var d = parseInt(x.responseText);
          if (d == 1 && document.getElementById("col").getAttribute("href") == "iggles.css"){ 
        } else if (d == 0 && document.getElementById("col").getAttribute("href") == "neat.css")  {
        } else if (d == 2 && document.getElementById("col").getAttribute("href") == "neatdm.css")  {
        } else if (d == 3 && document.getElementById("col").getAttribute("href") == "christmas.css")  {
        } else if (d == 4 && document.getElementById("col").getAttribute("href") == "igglesdm.css")  {
        } else  if (d == 1) {
            document.getElementById('col').setAttribute('href', "iggles.css");
            document.title = "HOW BOUT THEM BIRDS";
            document.getElementById('jawn').src = "eaglechat.php?id=acmemed";
        } else if (d == 0)  {
             document.getElementById('col').setAttribute('href', "neat.css"); 
             document.title = "dank memes";
             document.getElementById('jawn').src = "chat?id=acmemed";
         
        } else if (d == 2)  {
             document.getElementById('col').setAttribute('href', "neatdm.css"); 
             document.title = "unexpected darkmode";
             document.getElementById('jawn').src = "darkchat?id=acmemed";
        } else if (d == 3)  {
             document.getElementById('col').setAttribute('href', "christmas.css"); 
             document.title = "Merry Christmas!";
             document.getElementById('jawn').src = "christmaschat?id=acmemed";
        } else if (d == 4)  {
             document.getElementById('col').setAttribute('href', "igglesdm.css"); 
             document.title = "GO BIRDS!";
             document.getElementById('jawn').src = "eaglechat?id=acmemed&darkmode=1";
          }
      }
    }
    x.send(null);
	}


function refreshShit(){
	refreshHeader();
	cssChanger();
}

//css swapper + title changer



function chatPopout(){
var chatbox = document.getElementById("jawn").src;
window.open(chatbox, 'newwindow', 'width=380, height=830');
}


function useParentCSS(){
    var x = getXmlObject();
    x.open('GET', 'csstype.txt?' + Math.random());
    x.onreadystatechange = function () {
      if (x.readyState == 4) {
        var d = parseInt(x.responseText);
               if (d == 1) {
            document.getElementById('col').setAttribute('href', "iggles.css");
        } else if (d == 0)  {
             document.getElementById('col').setAttribute('href', "neat.css"); 
         
        } else if (d == 2)  {
             document.getElementById('col').setAttribute('href', "neatdm.css"); 
          }
      }
    }
    x.send(null);
}

//i might use this eventually, idk

/* (function() {

	function createCookie(name,value,days)
	{
		if (days)
		{
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name)
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++)
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name)
	{
		createCookie(name,"",-1);
	}


	var phpjs = {

		array_filter: function( arr, func )
		{
			var retObj = {}; 
			for ( var k in arr )
			{
				if ( func( arr[ k ] ) )
				{
					retObj[ k ] = arr[ k ];
				}
			}
			return retObj;
		},
		filemtime: function( file )
		{
			var headers = this.get_headers( file, 1 );
			return ( headers && headers[ 'Last-Modified' ] && Date.parse( headers[ 'Last-Modified' ] ) / 1000 ) || false;
	    },
	    get_headers: function( url, format )
	    {
			var req = window.ActiveXObject ? new ActiveXObject( 'Microsoft.XMLHTTP' ) : new XMLHttpRequest();
			if ( !req )
			{
				throw new Error('XMLHttpRequest not supported.');
			}

			var tmp, headers, pair, i, j = 0;

			try
			{
				req.open( 'HEAD', url, false );
				req.send( null ); 
				if ( req.readyState < 3 )
				{
					return false;
				}
				tmp = req.getAllResponseHeaders();
				tmp = tmp.split( '\n' );
				tmp = this.array_filter( tmp, function( value )
				{
					return value.toString().substring( 1 ) !== '';
				});
				headers = format ? {} : [];
	
				for ( i in tmp )
				{
					if ( format )
					{
						pair = tmp[ i ].toString().split( ':' );
						headers[ pair.splice( 0, 1 ) ] = pair.join( ':' ).substring( 1 );
					}
					else
					{
						headers[ j++ ] = tmp[ i ];
					}
				}
	
				return headers;
			}
			catch ( err )
			{
				return false;
			}
		}
	};

	var cssRefresh = function( links ) {

		this.reloadFile = function( links )
		{
			for ( var a = 0, l = links.length; a < l; a++ )
			{
				var link = links[ a ],
					newTime = phpjs.filemtime( this.getRandom( link.href ) );

				//	has been checked before
				if ( link.last )
				{
					//	has been changed
					if ( link.last != newTime )
					{
						//	reload
						link.elem.setAttribute( 'href', this.getRandom( link.href ) );
					}
				}

				//	set last time checked
				link.last = newTime;
			}
			setTimeout( function()
			{
				this.reloadFile( links );
			}, 60000 );
		};

		this.getRandom = function( f )
		{
			return f + "?" +  Math.random();
		};


		this.reloadFile( links );
	};

	var getLinks = function()
	{
		var files = document.getElementsByTagName( 'link' ),
			links = [];

		for ( var a = 0, l = files.length; a < l; a++ )
		{			
			var elem = files[ a ],
				rel = elem.rel;

			if ( typeof rel != 'string' || rel.length == 0 || rel == 'stylesheet' )
			{
				links.push({
					'elem' : elem,
					'href' : elem.getAttribute( 'href' ).split( '?' )[ 0 ],
					'last' : false
				});
			}
		}
		return links;
	};

	var links = getLinks(),
		wp = false;

	for ( var a = 0, l = links.length; a < l; a++ )
	{
		if ( links[ a ].href.indexOf( 'wp-content/' ) > -1 )
		{
			wp = true;
			break;
		}
	}		

	if ( wp )
	{
		var wpra = readCookie('wprefresh-asked');
		if ( wpra )
		{
			cssRefresh( links );
		}
		else
		{
			if ( confirm( 'Is this a WordPress site? Try WP Refresh!' ) )
			{
				createCookie( 'wprefresh-asked', 'yes', 7 );
				window.open( 'http://wprefresh.frebsite.nl', 'wpr' );
			}
			else
			{
				createCookie( 'wprefresh-asked', 'yes', 1 );
				cssRefresh( links );
			}
		}
	}
	else
	{
		cssRefresh( links );
	}

})();

*/
