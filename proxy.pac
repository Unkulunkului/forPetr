function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) { 
      return "HTTPS 0.0.0.0:443";
   }
   return "DIRECT";
}
