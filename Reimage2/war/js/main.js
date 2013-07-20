function float2moeda(num) {

   x = 0;

   if(num<0) {
      num = Math.abs(num);
      x = 1;
   }
   if(isNaN(num)) num = "0";
      cents = Math.floor((num*100+0.5)%100);

   num = Math.floor((num*100+0.5)/100).toString();

   if(cents < 10) cents = "0" + cents;
      for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
         num = num.substring(0,num.length-(4*i+3))+'.'
               +num.substring(num.length-(4*i+3));
   ret = num + ',' + cents;
   if (x == 1) ret = ' - ' + ret;return ret;

}


function ValidaEmail(email)
{
	  if ((email.length != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 1)))
	  {
		return false;
	  }else{
		return true;
	  }
}

function mainMenu(){
	$("#mainMenu").css({"height": $(document).height()}); 
}


$(document).ready(function(){
	
	if ($("#telefone").length) {
		$("#telefone").mask("(99) 9999-9999");
	}
	
	if ($("#cpf").length) {
		$("#cpf").mask("999.999.999-99"); 
	}
	
	if ($("#cnpj").length) {
		$("#cnpj").mask("99.999.999/9999-99");
	}
	
	//mostra form newsletter
	$("#mainMenu .assine p a.open-form").click(function(e){
		
		e.preventDefault();
		var container = $(this).parents().eq(1);
		container.find(".submenu").show();
		
		//fecha clicando fora
		$(document).click(function(e) { 
			if($(e.target).parents().index(container) == -1) {
				container.find(".submenu").hide();
			}
		});
		
	});
	
	$("#btn_cadastrar").click(function(e){
		e.preventDefault();
		
		var nome    = $('#nome').val();
		var email   = $('#email').val();

		if ($('input[name=lojista]:checked').length){
			var lojista = '1';	
		}else{
			var lojista = '0';
		}

		
		if (nome == "" || email == "" || nome == "Nome:" || email == "Email:"){
			return false;
		}
		
		$.post('finalizar_news.php',{"nome": nome, "email": email, "lojista": lojista}, function(data){ 
			if (data == 'OK'){
				$('#submenutexto').css('height','105px');
				$('#submenutexto').text('Seu cadastro foi realizado com sucesso!');
			}
		});
	});
	
	//submete o formulário
	$(".form-default .btn.submit").click(function(e){
		e.preventDefault();
		$(this).parent().submit();
	});
	
	
	$(".modal .btn.fechar").live("click", function(e){
		e.preventDefault();
		$(this).parents().eq(1).hide();
	});
			
	$(".add-produtos a.close").click(function(e){
		e.preventDefault();
		$(this).parent().hide();		
	});
		
	$(".containerColection .parts input[type='checkbox'], .addp input[type='checkbox']").click(function(){
		$(this).parents().eq(1).find(".add-produtos").show();
	});
	
	//sobre este look
	$(".slide-colecao .supersizedNavigation .about a").click(function(e){
		
		e.preventDefault();
		
		var object = $(this).parents().eq(1).find(".thumbs"); 
		
		object.each(function(){
			$(this).clearQueue();
		});
		
		object.each(function(){
			$(this).slideToggle();
		});
		
	}); 
	
	$(".slide-colecao .supersizedNavigation .thumbs .left, .slide-colecao .supersizedNavigation .thumbs .right").live("mouseenter mouseleave", function(e){
		$(this).each(function(){
			if (e.type == "mouseenter") { 
				$(this).find(".front").hide();
				$(this).find(".back").show();
			} else if (e.type == "mouseleave") {
				$(this).find(".back").hide();
				$(this).find(".front").show();
			}
		});
	});

});