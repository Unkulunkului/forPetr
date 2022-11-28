function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) {
      console.log("1111");
      return "PROXY targpatrol.local:443";
   }
   return "DIRECT";
}
