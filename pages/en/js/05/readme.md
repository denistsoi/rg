---
prev: /en/
next: false
sidebar: auto
---

# Classes + Prototypes in Javascript

###

``` js
class Carousel {
  // where we want to save things to class
  constructor(props) {
    super(props);
  }

  // methods
  goTo(image) {
    //goTo image
  }
}
```

``` js
function Carousel (props) {
  this.props = props;
}

// append methods
Carousel.prototype.goTo = function(image) {
  // goTo image
}
```

### Async Javascript (single-thread) 

``` js
function downloadData(source, callback) {
  return callback()
}

function handleData (error, data) {
  if (error) { 
    console.error('there was a problem with', error);
  } else { 
    console.log('download finished', data) 
  }
  return data;
}

downloadData('http://www.bbc.com/news/world-asia-43818751', handleData);
```


### form submission

``` js
var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}
```