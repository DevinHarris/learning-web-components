(function(window) {
  
  function elByClass(elClass) {
    return document.getElementsByClassName(elClass);
  }
  
  var nums = elByClass('num'),
      del = document.getElementById('del'),
      clear = document.getElementById('clear'),
      display = document.getElementById('display'),
      equals = document.getElementById('equals'),
      exp;
  
  for (var i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function(e) {
      display.value += this.value;
    });
  }
  
  equals.addEventListener('click', function() {
    exp = display.value;
    display.value = eval(exp);
  });
  
  clear.addEventListener('click', function() {
    display.value = '';
  });
  
  del.addEventListener('click', function() {
    var displayStr = display.value.slice(0, -1);
    
    display.value = displayStr;
    
  });
  
})(window);