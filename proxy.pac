function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) { 
      return "PROXY localhost:5555";
   }
   return "DIRECT";
}
