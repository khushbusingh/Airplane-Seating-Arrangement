var input = [];
input.push([4,4]);
//input.push([3,4]);
//input.push([3,2]);
input.push([4,4]);
var no_of_passanger = 30;
var mapobj = {
	'W' : [[],[],[],[]],
	'A' : [[],[],[],[]],
	'S' : [[],[],[],[]]
};
var first = 0;
var last = input.length;
var count = 1;
for(var i =0 ;i<input.length;i++){
	var row = input[i][0];
	var col = input[i][1];
	for(var m =0 ;m<row;m++){
		for(var n=0 ; n<col;n++){
			if(n == 0){
				if(i == first){
					mapobj['W'][m].push([i,m,n]);
				}
				else{
					mapobj['A'][m].push([i,m,n]);
				}
			}
			else if(n == col-1){
				if(i == last-1){
					mapobj['W'][m].push([i,m,n]);
				}
				else{
					mapobj['A'][m].push([i,m,n]);
				}
			}
			else{
				
					mapobj['S'][m].push([i,m,n]);
			}

		}
	}

}
var arr1 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//var arr2 = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//var arr3 = [[0,0],[0,0],[0,0]];
var arr4 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//console.log(arr1[0]);
var FinalArrangement = [arr1,arr4];
var Aisle = mapobj['A'];

for(var i=0;i<Aisle.length;i++){
	for(m=0;m<Aisle[i].length;m++){
			FinalArrangement[Aisle[i][m][0]][Aisle[i][m][1]][Aisle[i][m][2]] = count;
			count++;
	}
}
//console.log(FinalArrangement);
var Window = mapobj['W'];

//console.log(Window);

for(var i=0;i<Window.length;i++){
	for(m=0;m<Window[i].length;m++){
			FinalArrangement[Window[i][m][0]][Window[i][m][1]][Window[i][m][2]] = count;
			count++;
	}
}
var Middle = mapobj['S'];
for(var i=0;i<Middle.length;i++){
	for(m=0;m<Middle[i].length;m++){
		if(count<=no_of_passanger){
			FinalArrangement[Middle[i][m][0]][Middle[i][m][1]][Middle[i][m][2]] = count;
			count++;
		}
		else{
			break;
		}
	}
}

console.log(FinalArrangement);