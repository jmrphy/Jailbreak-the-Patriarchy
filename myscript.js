var searchFor = /WLBZ|WCSH|WMAZ\-TV|WLTX|KTHV\-TV|WGRZ\-TV|WTLV|WJXX|WFMY\-TV|WZZM\-TV|KSDK|KXTV|WKYC\-TV|KUSA\-TV|KARE|WTSP|KPNX|WUSA|WXIA\-TV|WBIR\-TV|ShopLocal|Reviewed\.com|Metromix|HighSchoolSports|CareerBuilder|Captivate\sNetwork|Cars\.com|USA\sToday|Des\sMoines\sRegister|Asbury\sPark\sPress|Democrat\sand\sChronicle|The\sTennesean|Cincinnati\sEnquirer|The\sCourier\sJournal|Indianapolis\sStar|Detroit\sFree\sPress|Arizona\sRepublic\sof\sPhoenix|Sony\sBMG|RTL\sTelevision|RTL\sGroup|Penguin\sRandom\sHouse|Random\sHouse|Penguin|Pearson\sTelevision|Modern\sLibrary|Lexington\sBroadcast\sServices|Harvill\sSecker|FremantleMedia|Direct\sGroup|Crackerjack\sProductions|Club\sRTL|Cinégroup|BMG\sRights\sManagement|Arvato|All\sAmerican\sTelevision|Modern\sBoating|Inside\sOut|Country\sStyle|mX|The\sSunday\sTelegraph|The\sDaily\sTelegraph|The\sCanberra\sTimes|The\sAustralian|etten\sFinancial\sNews|Dow\sJones|The\sCorning\sLeader|Bronx\sTimes\sReporter|TimesLedger|The\sBrooklyn\sPaper|Far\sEastern\sEconomic\sReview|Financial\sNews|Inspirio|Barron's|Marketwatch|Zondervan\sPublishing|Zondervan|WSJ|HarperCollins|New\sYork\sPost|Wall\sStreet\sJournal\s|The\sSun|The\sTimes|Sunday\sTimes|Foxtel|Myspace|Authonomy|Photobucket|Alpha|Australian\sFootball\sWeekly|Australian\sGolf\sDigest/gi;

var map = {
    'Arizona Republic of Phoenix' : 'Gannett',
    'Detroit Free Press' : 'Gannett',
    'Indianapolis Star' : 'Gannett',
    'The Courier-Journal' : 'Gannett',
    'Cincinnati Enquirer' : 'Gannett',
    'The Tennessean' : 'Gannett',
    'Democrat and Chronicle' : 'Gannett',
    'Asbury Park Press' : 'Gannett',
    'Des Moines Register' : 'Gannett',
    'USA Today' : 'Gannett',
    'Cars.com' : 'Gannett',
    'Captivate Network' : 'Gannett',
    'CareerBuilder' : 'Gannett',
    'HighSchoolSports.net' : 'Gannett',
    'Metromix' : 'Gannett',
    'Reviewed.com' : 'Gannett',
    'ShopLocal' : 'Gannett',
    'WBIR-TV' : 'Gannett',
    'WXIA-TV' : 'Gannett',
    'WUSA' : 'Gannett',
    'KPNX' : 'Gannett',
    'WTSP' : 'Gannett',
    'KARE' : 'Gannett',
    'KUSA-TV' : 'Gannett',
    'WKYC-TV' : 'Gannett',
    'KXTV' : 'Gannett',
    'KSDK' : 'Gannett',
    'WZZM-TV' : 'Gannett',
    'WFMY-TV' : 'Gannett',
    'WJXX' : 'Gannett',
    'WTLV' : 'Gannett',
    'WGRZ-TV' : 'Gannett',
    'KTHV-TV' : 'Gannett',
    'WLTX' : 'Gannett',
    'WMAZ-TV' : 'Gannett',
    'WCSH' : 'Gannett',
    'WLBZ' : 'Gannett',
    'All American Television' : 'Bertelsmann',
    'Arvato' : 'Bertelsmann',
    'BMG Rights Management' : 'Bertelsmann',
    'Cinégroup' : 'Bertelsmann',
    'Club RTL' : 'Bertelsmann',
    'Crackerjack Productions' : 'Bertelsmann',
    'Direct Group' : 'Bertelsmann',
    'FremantleMedia' : 'Bertelsmann',
    'Harvill Secker' : 'Bertelsmann',
    'Lexington Broadcast Services' : 'Bertelsmann',
    'Modern Library' : 'Bertelsmann',
    'Pearson Television' : 'Bertelsmann',
    'Penguin' : 'Bertelsmann',
    'Random House' : 'Bertelsmann',
    'Penguin Random House' : 'Bertelsmann',
    'RTL Group' : 'Bertelsmann',
    'RTL Television' : 'Bertelsmann',
    'Sony BMG' : 'Bertelsmann',
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