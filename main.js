var autoWoot = function(){
	$("#woot").click();
	API.on(API.ADVANCE,function(){
		$("#woot").click();
		plugSimple.logging.info("Running AutoWoot",true);
	});
}
API.chatLog("SimpleWoot Loaded and AutoWooting");
autoWoot();