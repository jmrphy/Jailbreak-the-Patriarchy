var searchFor = /Foxtel|Myspace/gi;

var map = {
    Foxtel : 'News Corp',
    Myspace : 'News Corp',
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