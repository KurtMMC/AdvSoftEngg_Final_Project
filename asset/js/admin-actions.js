(function(){
  function runReset() {
    var endpoint = window.ADMIN_RESET_ENDPOINT || '/api/reset-database';
    // Attempt a backend reset endpoint if available; fall back to clearing local data
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ confirm: true })
    }).then(function(res){
      if(!res.ok) throw new Error('HTTP '+res.status);
      return res.json().catch(function(){ return {}; });
    }).then(function(){
      try { localStorage.clear(); sessionStorage.clear(); } catch(e) {}
      alert('Database reset requested. Local demo data cleared.');
      location.reload();
    }).catch(function(){
      // No backend? Clear local/demo data so the template visibly resets.
      try { localStorage.clear(); sessionStorage.clear(); } catch(e) {}
      alert('No backend endpoint found. Cleared local data in this demo.');
      location.reload();
    });
  }

  function wireResetButton(){
    var btn = document.getElementById('btnResetDatabase');
    if(!btn) return;
    btn.addEventListener('click', function(ev){
      ev.preventDefault();
      var ok = window.confirm('This will reset the database and cannot be undone. Continue?');
      if(ok) runReset();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', wireResetButton);
  } else {
    wireResetButton();
  }
})();
