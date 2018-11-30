isikjamaksSubmit = () => {
  event.preventDefault();
  $("#isik-ja-maks").hide();
  $("#loading-please-wait").removeClass('hidden');
  return true;
};