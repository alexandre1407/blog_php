function verifForm()
{
   if (document.getElementById('mdp').value=='' || document.getElementById('email').value=='')
   {
   alert("tous les elements ne sont pas remplis");
   return false;
   } else {
   
   return true;
   }

   }
   
  function verifinsc() 
  {
  
  if (document.getElementById('nom').value=='' || document.getElementById('prenom').value=='' || document.getElementById('email').value=='' || document.getElementById('mdp').value=='')
   {
   alert("tous les elements ne sont pas remplis");
   return false;
   } else {
   
   return true;
   }

   }