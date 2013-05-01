var Joystick = require('./joystick');
var js = new Joystick(0);                                          
js.on('button', function (event) {
  if (event.init) return;
  console.log(event);
  if (event.value) {
    if (event.number === 7) {
      client.takeoff();
    }
    else if (event.number === 6) {
      client.land();
    }
    else if (event.number === 5) {
      client.animateLeds("fire", 5, 2);
    }
    else if (event.number === 4) {
      client.animateLeds("doubleMissile", 5, 2);
    }
  }
});                                      
js.on('axis', function (event) {
  if (event.init) return;
  console.log(event);
  if (event.number === 0) {
    if (event.value > 0) {
   //   client.counterClockwise(0);
      client.clockwise(event.value / 0x7fff);
    }
    else {
   //   client.clockwise(0);
      client.counterClockwise(event.value / -0x7fff);
    }
  }
  else if (event.number === 4) {
    if (event.value < 0) {
      client.front(event.value / -0x7fff);
    }
    else {
      client.back(event.value / 0x7fff);
    }
  }
  else if (event.number === 3) {
    if (event.value > 0) {
      client.right(event.value / 0x7fff);
    }
    else {
      client.left(event.value / -0x7fff);
    }
  }
  else if (event.number === 1) {
    if (event.value < 0) {
      client.up(event.value / -0x7fff);
    }
    else {
      client.down(event.value / 0x7fff);
    }
  }
  else if (event.number === 7) {
    if (event.value < 0) {
      client.animate("flipAhead", 15);
    }
    else if (event.value > 0) {
      client.animate("flipBehind", 15);
    }
  }
  else if (event.number === 6) {
    if (event.value < 0) {
      client.animate("flipLeft", 15);
    }
    else if (event.value > 0) {
      client.animate("flipRight", 15);
    }
  }
});                                        

var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.createRepl();
/*

var server = require('http').createServer(function (req, res) {
  require('fs').readFile("index.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type":"text/html"
    });
    res.end(data);
  });
});

require("dronestream").listen(server); 
server.listen(5000);
console.log(server.address());
*/
