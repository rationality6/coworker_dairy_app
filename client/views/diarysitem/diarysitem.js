Template.Diarysitem.events({
  'click button[id=remove]': function () {
    Diarys.remove({_id: this._id});
  }
});