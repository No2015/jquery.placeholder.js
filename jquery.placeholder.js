$('[placeholder]').each(function(){
	var $this = $(this);
	var placeholder = $this.prop('placeholder');
	var left = parseInt($this.css('paddingLeft')) + parseInt($this.css('borderLeftWidth'));
	var height = $this.outerHeight();
	var width = $this.outerWidth();
	var fontSize = $this.css('fontSize');
	var vAlign = $this.css('verticalAlign');
	var tAlign = $this.css('textAlign');
	var lHeight = $this.css('lineHeight');
	var bgColor = $this.css('backgroundColor');
	var $wrap = $('<div style="position:relative;overflow:hidden;vertical-align:'+vAlign+';display:inline-block;"></div>');
	$this.wrap($wrap);
	$this.before('<span style="left:0;top:0;position:absolute;z-index:-1;line-height:'+lHeight+';vertical-align:'+vAlign+';font-size:'+fontSize+';width:100%;height:100%;padding-left:'+left+'px;color:#c3c3c3;">'+placeholder+'</span>');
	$this.css({
		'backgroundColor':'transparent'
	});
	$this.prop('placeholder','');
	$this.on('change oninput propertychange keydown keyup blur',function(){
		if(this.value != ''){
			$(this).css({
				'backgroundColor':bgColor
			});
		}else{
			$(this).css({
				'backgroundColor':'transparent'
			});
		}
	});
});