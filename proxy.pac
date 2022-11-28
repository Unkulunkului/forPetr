function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) {
      console.log("1111");
      return "PROXY 127.0.0.1:53";
   }
   console.log("22222");
   return "DIRECT";
}
