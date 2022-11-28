function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) {
      console.log("1111");
      return "PROXY targpatrol.cc:443";
   }
   console.log("22222");
   return "DIRECT";
}
