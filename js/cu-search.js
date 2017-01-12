$(document).ready(function(){
  $("form.cu-search-form").submit(function(){
   // Let's find the input to check
   var $input = $(this).find("input[name=q]");
   // Get the site url to search
   var $site = $(this).find("input[name=site_url]");
   var q = encodeURIComponent($input.val() + ' site:' + $site.val());
   // Replace query with new query
   $input.val('gsearch/all/' + q);
  });
});