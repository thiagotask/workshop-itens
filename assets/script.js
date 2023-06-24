//CHAMA A API JSON
fetch("assets/itens.json")
.then(function(responseData){
   return responseData.json();
})
//POPULA OS DADOS 
.then(function(products){
   let placeholder = document.querySelector("#ws-data");
   let outData = "";
   for(let product of products){
      outData += `
         <tr class="item tier-${product.tier}">
            <td class="image"><img src='${product.image}'></td>
            <td class="item">${product.item}</td>
            <td class="tier">${product.tier}</td>
            <td class="marketable">${product.marketable}</td>
            
         </tr>
      `;
   }

   //<td class="steam"><a class="marketable-${product.marketable}" href='${product.steam}' target="_blank">View</a></td>
 
   placeholder.innerHTML = outData;

});

//CHAMA A API JSON SETS
fetch("https://opensheet.elk.sh/1lTFKGrabO51NaqlnB-K-Uvgv-4fGfkw8CaVMMoRMBeM/sets")
.then(function(responseSets){
   return responseSets.json();
})
.then(function(sets){
   let placeholder = document.querySelector("#ws-data-sets");
   let outSets = "";
   for(let set of sets){
      outSets += `
         <tr class="item tier-${set.tier}">
            <td class="image"><img src='${set.image}'></td>
            <td class="item">${set.item}</td>
            <td class="tier">${set.tier}</td>
            <td class="marketable">${set.marketable}</td>
            
         </tr>
      `;
   }

   //<td class="steam"><a class="marketable-${product.marketable}" href='${product.steam}' target="_blank">View</a></td>
 
   placeholder.innerHTML = outSets;

});

//CHAMA A API JSON ITENS
fetch("https://opensheet.elk.sh/1lTFKGrabO51NaqlnB-K-Uvgv-4fGfkw8CaVMMoRMBeM/itens")
.then(function(responseItens){
   return responseItens.json();
})
.then(function(itens){
   let placeholder = document.querySelector("#ws-data-itens");
   let outItens = "";
   for(let item of itens){
      outItens += `
         <tr class="clickable item tier-${item.tier}">
            <td class="image"><img src='${item.image}'></td>
            <td class="item">${item.item}</td>
            <td class="tier">${item.tier}</td>
            <td class="marketable">${item.marketable}</td>            
         </tr>
      `;
   }

   //<td class="steam"><a class="marketable-${product.marketable}" href='${product.steam}' target="_blank">View</a></td>
 
   placeholder.innerHTML = outItens;

});

//CHAMA A API JSON EMOTES
fetch("https://opensheet.elk.sh/1lTFKGrabO51NaqlnB-K-Uvgv-4fGfkw8CaVMMoRMBeM/emotes")
.then(function(responseEmotes){
   return responseEmotes.json();
})
.then(function(emotes){
   let placeholder = document.querySelector("#ws-data-emotes");
   let outEmotes = "";
   for(let emote of emotes){
      outEmotes += `
         <tr class="item tier-${emote.tier}">
            <td class="image"><img src='${emote.image}'></td>
            <td class="item">${emote.item}</td>
            <td class="tier">${emote.tier}</td>
            <td class="marketable">${emote.marketable}</td>            
         </tr>
      `;
   }

   //<td class="steam"><a class="marketable-${product.marketable}" href='${product.steam}' target="_blank">View</a></td>
 
   placeholder.innerHTML = outEmotes;

});

//CHAMA A API JSON VEHICLES
fetch("https://opensheet.elk.sh/1lTFKGrabO51NaqlnB-K-Uvgv-4fGfkw8CaVMMoRMBeM/vehicles")
.then(function(responseVehicles){
   return responseVehicles.json();
})
.then(function(vehicles){
   let placeholder = document.querySelector("#ws-data-vehicles");
   let outVehicles = "";
   for(let vehicle of vehicles){
      outVehicles += `
         <tr class="clickable item tier-${vehicle.tier}">
            <td class="image"><img src='${vehicle.image}'></td>
            <td class="item">${vehicle.item}</td>
            <td class="tier">${vehicle.tier}</td>
            <td class="marketable">${vehicle.marketable}</td>            
         </tr>
      `;
   }

   //<td class="steam"><a class="marketable-${product.marketable}" href='${product.steam}' target="_blank">View</a></td>
 
   placeholder.innerHTML = outVehicles;

});

//CHAMA A API JSON EXTRAS
fetch("https://opensheet.elk.sh/1lTFKGrabO51NaqlnB-K-Uvgv-4fGfkw8CaVMMoRMBeM/extras")
.then(function(responseExtras){
   return responseExtras.json();
})
.then(function(extras){
   let placeholder = document.querySelector("#ws-data-extras");
   let outExtras = "";
   for(let extra of extras){
      outExtras += `
         <tr class="item tier-${extra.tier}">
            <td class="image"><img src='${extra.image}'></td>
            <td class="item">${extra.item}</td>
            <td class="tier">${extra.tier}</td>
            <td class="marketable">${extra.marketable}</td>            
         </tr>
      `;
   }

   //<td class="steam"><a class="marketable-${product.marketable}" href='${product.steam}' target="_blank">View</a></td>
 
   placeholder.innerHTML = outExtras;

});

//PESQUISA OS TERMOS NA TABELA
function filterTable(event) {   
   var filter = event.target.value.toUpperCase();
   var rows = document.querySelector("#ws-table tbody").rows;

   for (var i = 0; i < rows.length; i++) {      
      var sCol = rows[i].cells[1].textContent.toUpperCase();
      var tCol = rows[i].cells[2].textContent.toUpperCase();
      var qCol = rows[i].cells[3].textContent.toUpperCase();
      
      if (sCol.indexOf(filter) > -1 || tCol.indexOf(filter) > -1 || qCol.indexOf(filter) > -1)  {
         rows[i].style.display = "";
      } else {
         rows[i].style.display = "none";
      }
   }
}
document.querySelector('#ws-search').addEventListener('keyup', filterTable, false);
   
//CHECKBOX PARA OCULTAR LINHAS NÃO CORRESPONDETES
function filter_type(box) {   
   var cbs = document.getElementsByTagName('input');
   var all_checked_types = [];
   
   for(var i=0; i < cbs.length; i++) {
      if(cbs[i].type == "checkbox") {
         if(cbs[i].name.match(/^filter/)) {
            if(cbs[i].checked) {
               all_checked_types.push(cbs[i].value);
            }
         }
      }
   }

   if (all_checked_types.length > 0) {

      $('#ws-table tr').each(function (i, row) {
         var $tds = $(this).find('td')
         if ($tds.length) {
            var type = $tds[2].innerText;
            console.log(type)
            
            if(!(type && all_checked_types.indexOf(type) >= 0)) {
               $(this).hide();
            } else {
               $(this).show();
            }
         }  
      });
   } else {
      $('#ws-table tr').each(function (i, row) {
         var $tds = $(this).find('td'),
         type = $tds.eq(2).text();
         $(this).show();
      });
   }

   return true;

}