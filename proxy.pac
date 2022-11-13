function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) { 
      return "PROXY localhost:8000";
   }
   return "DIRECT";
}
