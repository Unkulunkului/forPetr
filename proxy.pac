function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) {
      return "PROXY targpatrol.local:443";
   }
   if (shExpMatch(host, "targpatrol.local")) {
      return "PROXY targpatrol.local:443";
   }
   return "DIRECT";
}
