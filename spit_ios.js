
Interceptor.attach(ObjC.classes.NSMutableURLRequest['- setHTTPBody:'].implementation, {
    onEnter(args) {
	    var body_nsdata = ObjC.Object(args[2]); 

	    var body_nsstring = ObjC.classes.NSString.alloc().initWithData_encoding_(body_nsdata, 4);
	    if (body_nsstring != null) {
	    	console.log(`Out: ${body_nsstring}`)	
	    }
    }
});


Interceptor.attach(ObjC.classes.NSURLRequest['- initWithURL:cachePolicy:timeoutInterval:'].implementation, {
    onEnter(args) {
	    var url = ObjC.Object(args[2]).toString(); 

	    if (url != 'nil') {
	    	console.log("\n\n")
	    	console.log(url)
	    }

    }
});


Interceptor.attach(ObjC.classes.NSMutableURLRequest['- setValue:forHTTPHeaderField:'].implementation, {
    onEnter(args) {
	    var headerValue = ObjC.Object(args[2]).toString(); 
	    var headerName = ObjC.Object(args[3]).toString(); 

	    if (headerName != 'nil') {
	    	console.log(`${headerName}: ${headerValue}`)
	    }

    }
});

//Usage: frida -U -f com.oculus.twilight -l spit_ios.js --no-pause