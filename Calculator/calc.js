

var view = {
	
	prev_msg: 0,
	op: [],
	dot_counter: 0,
	 
	calc_disp: function(msg){
	

    var messageArea = document.getElementById("viewAns");	/*get data from display text*/
	
	/*get the keys pressed*/
	if (Number(msg) >= 0){
		console.log('msg:', msg);
		if ((Number(messageArea.value) > 0) & (Number(msg) != NaN)){
			messageArea.value = messageArea.value + msg;
		}
		else {
			messageArea.value = msg;
		}
	}
	else if (msg == '.') {
		this.dot_counter = this.dot_counter + 1;
		if (this.dot_counter == 1) {
			messageArea.value = messageArea.value + msg;
		}
	}
	else {
		
		switch (msg) {
		case 'AC':
				messageArea.value = "0"; 
				this.prev_msg = 0;
				this.op = [];
				this.dot_counter = 0;
				break;
		case 'CE':
				msg = [];
				messageArea.value = this.prev_msg;
				break;
					
		case '+': /*falling through*/
		case '-':
		case 'x':
		case '\u00f7':
				this.op =  msg;
				this.dot_counter = 0;
				this.prev_msg = messageArea.value;
				messageArea.value = msg;
				break;	
				
		case '=':
			
				if (this.op.length != 0) {
					console.log(this.op);
					switch (this.op) {
						case '+':
							this.prev_msg = Number(this.prev_msg) + Number(messageArea.value);
						    break;
						case '-':
							this.prev_msg = Number(this.prev_msg) - Number(messageArea.value);
							break;
						case 'x':
							this.prev_msg = Number(this.prev_msg) * Number(messageArea.value);
							break;
						case '\u00f7':
							this.prev_msg = Number(this.prev_msg) / Number(messageArea.value);
							break;
					}
					this.op = [];
				}
		
				messageArea.value = this.prev_msg; 
				break;
				
		default:
				
				
			    break;

				
			
		}		
	}
	
	  
	}
	

		
};

	
function onClickButton(buttonid){
		var buttonval = document.getElementById(buttonid).value;
		view.calc_disp(buttonval);
}


