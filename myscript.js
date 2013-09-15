var searchFor = /Modern\sBoating|Inside\sOut|Country\sStyle|mX|The\sSunday\sTelegraph|The\sDaily\sTelegraph|The\sCanberra\sTimes|The\sAustralian|etten\sFinancial\sNews|Dow\sJones|The\sCorning\sLeader|Bronx\sTimes\sReporter|TimesLedger|The\sBrooklyn\sPaper|Far\sEastern\sEconomic\sReview|Financial\sNews|Inspirio|Barron's|Marketwatch|Zondervan\sPublishing|Zondervan|WSJ|HarperCollins|New\sYork\sPost|Wall\sStreet\sJournal\s|The\sSun|The\sTimes|Sunday\sTimes|Foxtel|Myspace|Authonomy|Photobucket|Alpha|Australian\sFootball\sWeekly|Australian\sGolf\sDigest/gi;

var map = {
    'The Sun' : 'News Corp',
    'The Times' : 'News Corp',
    'Sunday Times' : 'News Corp', 
    'HarperCollins' : 'News Corp',
    'New York Post' : 'News Corp',
    'Wall Street Journal' : 'News Corp',
    'WSJ' : 'News Corp',
    'Foxtel' : 'News Corp',
    'Myspace' : 'News Corp',
    'Authonomy' : 'News Corp',
    'Photobucket' : 'News Corp',
    'Zondervan' : 'News Corp',
    'Zondervan Publishing' : 'News Corp',
    'Inspirio' : 'News Corp',
    'Barron\'s' : 'News Corp',
    'Marketwatch' : 'News Corp',
    'Far Eastern Economic Review' : 'News Corp',
    'Financial News' : 'News Corp',
    'The Brooklyn Paper' : 'News Corp',
    'TimesLedger' : 'News Corp',
    'Bronx Times Reporter' : 'News Corp',
    'The Corning Leader' : 'News Corp',
    'Dow Jones' : 'News Corp',
    'Betten Financial News' : 'News Corp',
    'The Australian' : 'News Corp',
    'The Canberra Times' : 'News Corp',
    'The Daily Telegraph' : 'News Corp',
    'The Sunday Telegraph' : 'News Corp',
    'mX' : 'News Corp',
    'Country Style' : 'News Corp',
    'Inside Out' : 'News Corp',
    'Modern Boating' : 'News Corp',
    };

function mediaswap(text){
    text = text.replace(searchFor, function(match) {
        var replacement;
        replacement = map[match];
        return replacement ? replacement : match;
    });

    return (text);
}


function jailbreak(node){
    var treeWalker = document.createTreeWalker(  
        node,  
        NodeFilter.SHOW_TEXT,  
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },  
        false  
    ); 
    while(treeWalker.nextNode()) {
       treeWalker.currentNode.textContent = mediaswap(treeWalker.currentNode.textContent);
       treeWalker.currentNode.textContent = treeWalker.currentNode.textContent;
    }
}


chrome.extension.sendRequest({checkPaused: "hello"}, function(response) {
    if (response.maybePaused!="yes") {
    jailbreak(document.body);

    document.body.addEventListener('DOMNodeInserted', function(event) {
        jailbreak(event.target);
    });
}
});