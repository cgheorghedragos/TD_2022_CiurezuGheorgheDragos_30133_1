var app = new Vue({
    el: '#hamming-encoder', data: {
        dataBits: [], status: '', numberOfDataBits: 4, controlerBits: []
    },
    created: function () {
        this.initDataBits(4);
    },
    methods: {
        initDataBits: function () {
            this.dataBits = [];
            for (var i = 0; i < this.numberOfDataBits; i++) {
                var bit = {data: null};
                this.dataBits.push(bit);
            }
        },
        send: function () {
            if (this.validate(this.dataBits) === true) {
                var encodedMessage = this.encode(this.dataBits);

                return axios.put("http://localhost:3000/message", {bits: encodedMessage}).then(
                    response => (this.status = response.data));
            } else {
                this.status = 'Input is not valid. Please use 0 or 1 as data bit values';
            }
        },
        encode: function (bits) {
            var control_bits_length = this.get2Npower(bits.length);
            var c_bits = new Array(control_bits_length).fill(0);
             var myDataBits=this.createHammingVector(bits,c_bits);
             
            for(var indexControl = 0; indexControl< c_bits.length ;indexControl++){
                
                var partialParitySum = 0;
                var controlPower = Math.pow(2,indexControl)
                
                for(indexBits = controlPower-1; indexBits< myDataBits.length; indexBits += 2*controlPower){
                      for(var currentIndex = indexBits; (currentIndex<indexBits+controlPower) && currentIndex<myDataBits.length; currentIndex++){
                          
                          partialParitySum += this.parity(myDataBits[currentIndex]) ;
                      }
                }
                
                myDataBits[controlPower-1] = this.parity(partialParitySum);
                c_bits[indexControl] = myDataBits[controlPower-1];
            }
            

            console.log("Parity control bits are: "+c_bits);
            console.log("Complete data bits are: "+myDataBits);

            return myDataBits;
            
            // var c4 = this.parity(parseInt(bits[1].data) + parseInt(bits[2].data) + parseInt(bits[3].data));
            // var c2 = this.parity(parseInt(bits[0].data) +
            //     parseInt(bits[2].data) + parseInt(bits[3].data));
            // var c1 = this.parity(parseInt(bits[0].data) + parseInt(bits[1].data) + parseInt(bits[3].data));
            // console.log("Control bits: " + c1 + "," + c2 + "," + c4);
            // console.log(bits.length);

            //console.log(bits.data.length)
            // return [c1, c2, parseInt(bits[0].data), c4,
            //     parseInt(bits[1].data), parseInt(bits[2].data
            //     ), parseInt(bits[3].data)];
        },
        parity: function (number) {
            return number % 2;
        },
        validate: function (bits) {
            for (var i = 0; i < bits.length; i++) {
                if (this.validateBit(bits[i].data) === false)
                    return false;
            }
            return true;
        },
        validateBit: function (character) {
            if (character === null) return false;
        },
        get2Npower: function(number){
            var increment = 0
            while(Math.pow(2, increment++) <= number);
            return increment-1;
        },
        createHammingVector: function(bits,c){
            var completeData = new Array(bits.length+c.length).fill(0);
            var indexControl = 0;
            var indexBits = 0;
            for(var index=0 ; index<completeData.length; index++){
                if(Math.pow(2,indexControl) == (index+1)){
                    completeData[index] = c[indexControl++];
                    
                }else{
                    completeData[index] = parseInt(bits[indexBits++].data);
                }
            }

            return completeData;
        }
    }
});
