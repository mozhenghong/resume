var APP_ID = '1mFx6bR1WmKyqytEzlteM6JP-gzGzoHsz';
var APP_KEY = 'dklArh1ePpexXwN6pI7kCwMB';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var query = new AV.Query('messages');
query.find()
  .then(
    function (messages) {
        let array = messages.map(item=>item.attributes)
        array.forEach(item => {
            let li = document.createElement('li')
            let ol=document.querySelector('#messageList')
            ol.appendChild(li)
            li.innerHTML = item.name +':'+ item.text
        });
    })
$(function(){
    var $form = $('#postMessageForm')
    .on('submit',(e)=>{
        e.preventDefault()
        var $name = $('input[name=name]').val()
        var $text = $('input[name=message]').val()
        var Messages = AV.Object.extend('messages');
        var messages = new Messages();
        messages.save({
        'name': $name,
        'text': $text
            }).then(function(object) {
                console.log(object.attributes)
               let li = document.createElement('li')
               let ol=document.querySelector('#messageList')
               ol.appendChild(li)
               li.innerHTML = object.attributes.name +':'+object.attributes.text
               $('input[name=name]').val('')
               $('input[name=message]').val('')
        })
    })   
})
