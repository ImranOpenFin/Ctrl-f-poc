document.addEventListener('DOMContentLoaded', function() {
    //OpenFin is ready
	fin.desktop.main(function() {
		fin.desktop.System.getVersion(function (version) {
	    	$("#doc-link").html("<a target='_blank' href='https://developer.openfin.co/jsdocs/"+version+"'>"+version+" Documentation</a>");
	    	$("#OpenFinVersion").html(version);
    	});
	});

});	

function notification() {
	var notification = new fin.desktop.Notification({
	    url: "pages/notification.html",
	    message:"Initial Notification Message",
	    onClick: function () {
	        console.log("clicked");
	    },
	    onClose: function () {
	        console.log("closed");
	    },
	    onDismiss: function () {
	        console.log("dismissed");
	    },
	    onError: function (reason) {
	        console.log("error: " + reason);
	    },
	    onMessage: function (message) {
	        alert("Notification Message: "+message);
	    },
	    onShow: function () {
	        console.log("shown");
	        //notification.sendMessage("Some message");
	    }
	});

	return notification;

}


function childWindow(url) {
    var win = new fin.desktop.Window({
        name: "childWindow"+Math.random()*1000,
        url: url,
        defaultWidth: 320,
        defaultHeight: 320,
        defaultTop: 10,
        defaultLeft: 300,
        autoShow:true,
        state: "normal"
    }, function () {
        return win;
    }, function (error) {
        console.log("Error creating window:", error);
    });
}