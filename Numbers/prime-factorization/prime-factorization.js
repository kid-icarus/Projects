$(document).ready(function(){  
  $('#submit').click(function(event){
    event.preventDefault();
    var num = $('#number').val();
    if ($.isNumeric(num)) {
      factor(num); 
    }
  });
});

function factor(num) {
  var i;
  var factors = [];
  for(i = 2; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(factors);
  print_factors(factors);
}

function print_factors(factors) {
  var i,
      answer = '';
  for (i = 0; i < factors.length; i++) {
    if (i === factors.length - 1) {
      answer += factors[i];
    }
    else {
      answer += factors[i] + ", ";
    }
  }
  $('#answer').html(answer);
}
