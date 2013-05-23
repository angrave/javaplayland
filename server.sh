ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => 8080, :DocumentRoot => 'web'); trap('INT') { s.shutdown }; s.start"
