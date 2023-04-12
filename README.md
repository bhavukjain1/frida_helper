# frida_helper

Spits out HTTP/HTTPS requests on any iOS application without bypassing SSL pinning.

## Usage
frida -U -f com.oculus.twilight -l spit_ios.js --no-pause
