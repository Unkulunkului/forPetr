function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) {
      return "HTTPS localhost:443";
   }
   return "DIRECT";
}
