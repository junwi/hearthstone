simulator.startColiseum = function() {
	simulator.emptyCardList();
	console.log(simulator.coliseum.nowstep);
	if (simulator.coliseum.nowstep > 29) {
		return alert('竞技场组牌完成!');
	}
	/*
	   var nowsel = this.coliseum.result[this.coliseum.nowstep];

	   for (var i in nowsel) {
	   if (typeof(nowsel[i]['id']) != "undefined") {
	   this.genCard(nowsel[i]['id']);
	   }

	   }
	   $178DB.initadd();
	 */
	if (!simulator.applyFilter.change) {
		$('body').append('<div id="temp_list"></div>');
		$('#temp_list').css('position', 'absolute');
		function clearFilter() {
			$('#temp_list').html('');
		}
		function doFilter() {
			clearFilter();
			$('#temp_list').append('<ul id="card_list"></ul>');
			if ($('#textfilter').val() != '') {
				$.each(simulator.info, function(k, v) {
					
				}
			}
		}
		document.getElementById('textfilter').onkeyup = null;
		$('#textfilter').next().click(function() {simulator.cardFilter($('#textfilter').val())});
		simulator.applyFilter.change = 1;
		simulator.applyFilter = function() {
			$.each(simulator.info, function(k, v) {
				if (  (  v['Cost']==simulator.filter['cost'] || simulator.filter['cost']==null ||
						(v['Cost'] >=7) && simulator.filter['cost'] >=7 ) &&  // cost
					(v['name_cn'].indexOf(simulator.filter['text']) >= 0 ||
					 v['description_cn'].indexOf(simulator.filter['text']) >= 0 ||
					 simulator.detail[k]['race'].indexOf(simulator.filter['text']) >= 0 ||
					 simulator.filter['text'] == null) && //text
					(v['Rarity'] == simulator.filter['rarity'] || simulator.filter['rarity'] == null ) &&
					(v['CardType'] == simulator.filter['type'] || simulator.filter['type'] == null ) &&
					( (v['Class'] == simulator.cl && simulator.filter['gear']==1) || (!v['Class'] && simulator.filter['gear']==2) || simulator.filter['gear'] == null ) && 1) {
				//console.log(3);
				if ($("#linkcard_"+k) && $("#linkcard_"+k).length) {
					$("#linkcard_"+k).show();
				} else {
					simulator.genCard(k);
				}
				//$("#linkcard_"+k).show();
				}
				else {
				//console.log(4);
				//$("#linkcard_"+k).hide();
				}
			});
			$('#textfilter').val('');
		};
	}
	simulator.coliseum.nowstep ++;
};
