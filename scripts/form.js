isikjamaksSubmit = () => {
  event.preventDefault();
  $("#isik-ja-maks").hide();
  $("#kotakt-form").hide();
  $("#loading-please-wait").removeClass('hidden');
  return true;
};