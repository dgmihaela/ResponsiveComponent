$(document).ready(function() {

  // Grab the template script
  var theTemplateScript = $("#green-box").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {
    'green-box': [ 
      { title: 'Alternativ', name: 'Kredit', number: '274', text: 'Erneuerbare Energien – Standard-Photovoltaik – Kredit'},
      { title: 'Alternativ', name: 'Kredit', number: '274', text: 'Erneuerbare Energien – Speicher'},
      { title: 'Kombinierbar', name: 'Kredit', number: '274', text: 'Energieeffizientes Sanieren – Ergänzungskredit'},
      { title: 'Kombinierbar', name: 'Kredit', number: '274', text: 'Altersgerecht Umbauen'}
      
    ]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);
  // Add the compiled html to the page
  $('.Cross-Selling-Teaser .container').append(theCompiledHtml);
});
