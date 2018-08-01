Array.prototype.delayedForEach = function(callback, timeout, thisArg) {
    var i = 0,
      l = this.length,
      self = this,
      caller = function() {
        callback.call(thisArg || self, self[i], i, self);
        (++i < l) && setTimeout(caller, timeout);
      };
    caller();
  };
  
  function delayImage(image) {
    var element = document.createElement('img');
    element.setAttribute('src', image);
    document.getElementById('images').appendChild(element);
  
  }
  
  function imageShow() {
    const imageList = ['https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
      'https://media.giphy.com/media/l1J3pT7PfLgSRMnFC/giphy.gif',
      'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
      'https://media.giphy.com/media/joV1k1sNOT5xC/giphy.gif',
      'https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif',
      'https://media.giphy.com/media/26BRq84rhISRcFVUQ/giphy.gif',
      'https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif',
      'https://media.giphy.com/media/qXexawbjsqK88/giphy.gif',
      'https://media.giphy.com/media/9GIihh8E25Gfnsd0im/giphy.gif',
      'https://media.giphy.com/media/5xtDarDQqitychRz27K/giphy.gif'
    ];
    imageList.delayedForEach(delayImage, 2000);
  
  }
  window.onload = imageShow
  