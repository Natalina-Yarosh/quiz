	const data_array = [
	  ["Что из перечисленного ниже не является логическим оператором?","||","&&","--","!",3],
	  ["Чтобы удалить последний элемент из массива необходимо использовать ...","push","pop","shift","unshift",2],
	  ["Функция, которая вызывает сама себя называется ...","Рекурсия","Стрелочная функция","Function Expression","Function Declaration",1],
	  ["Выберите значение, которое приводит к true.","0","NaN","1","null",3],
	  ["Что такое Hoisting?","Метод массива","Однопоточный язык","Механизм 'поднятия'","Провайдер",3],
	  ["Объект, который предоставляет метод next() и возвращает следующий элемент последовательности называется ...","Итератор","Генератор","Промис","Декоратор",1],
	];

	 data_array.sort(function(){ 
		return 0.5 - Math.random()
	})
	
	let plus = 0,
		cur_answer = 0,
		count_answer = data_array.length;
		
	function blockStyle(elem){
		document.getElementById(elem).style.display='block';
	}
	
	function blockStyleElements(){
		blockStyle('option1');
		blockStyle('option2');
		blockStyle('option3');
		blockStyle('option4');
		blockStyle('question');
	}
	
	function noneStyle(elem){
		document.getElementById(elem).style.display='none';
	}
	
	function noneStylesElements(){
		noneStyle('option1');
		noneStyle('option2');
		noneStyle('option3');
		noneStyle('option4');
		noneStyle('question');
	}
	
	function writeQuestion(elem,num){		
		document.getElementById(elem).innerHTML=data_array[cur_answer][num];
	}
	
	function writeQuestions(){		
		writeQuestion('option1',1);
		writeQuestion('option2',2);
		writeQuestion('option3',3);
		writeQuestion('option4',4);
		writeQuestion('question',0);
	}
		
	function check(num){

		if(num === 0){ 
			
			blockStyleElements();
			
			writeQuestions();
			
			noneStyle('start');			
			
		}else{

			( num ===  data_array[cur_answer][5]) ? plus++ : plus			
				
			cur_answer++;
			
			if(cur_answer < count_answer){	
			
				writeQuestions();
				
			}else{			
				
				noneStylesElements();
				
				document.getElementById('end').style.display='inline';
				
				const percent =  Math.round(plus/count_answer*100);			
				let res;
				(percent>80)? res = 'Хорошо!' : res = 'Иди учи!'				
				
				document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
			}
		}
	}
	
	document.write("<a id='end' class='title_footer' href=''>Начать сначала</a>")