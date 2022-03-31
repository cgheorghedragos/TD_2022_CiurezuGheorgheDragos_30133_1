function decode(bits,length) {
  var myLength = length;
  var c_len = 0;
  var sum = 0;
  var errorPosition = 0;

  parity = function (number) {
    return number % 2;
  };
 

  while(Math.pow(2,c_len)<=length){
      c_len= c_len+1;
  };

  var z =  new Array(c_len).fill(0);

  for(var c_index = 0 ; c_index <c_len ;c_index++){
    sum = 0;
    var startingPoint = Math.pow(2,c_index);

    for(var cur_index = startingPoint - 1 ; cur_index < myLength ; cur_index+=2*startingPoint){
      for(var inc = cur_index; inc <myLength && inc <cur_index+startingPoint  ; inc++){
        sum += bits[inc];
      }
    }
    z[c_index]= parity(sum);
  }
 
  for(var index = 0 ; index < c_len ; index++){
    var currPower = Math.pow(2,index);
    errorPosition = errorPosition + currPower*z[index];
  }

  var errorDetected = false;

  if (errorPosition != 0) errorDetected = true;
  if (errorDetected) {
    bits[errorPosition - 1] = parity(bits[errorPosition - 1] + 1);
  }
  return {
    errorCorrected: errorDetected,
    errorPosition: errorPosition - 1,
    bits: bits,
  };
}

exports.decode = decode;
